import generatedResponse from "../services/openAiServices.js";
import createOrder from "../services/orderCreation.js";
import getAvailableMenu from "../services/menu.js";
import sendOrderNotification from "../services/orderNotification.js";
import sendWhatsappMessage from "../services/whatsappService.js";

const chatBot = async (req, res) => {
  try {
    const { message } = req.body;
    console.log("🔥 CONTROLLER HIT");
    console.log("BODY:", req.body);
    if (!message) {
      return res.status(400).json({
        success: false,
        message: "message is required",
      });
    }

    const reply = await generatedResponse(message);

    // Create Order

    if (reply.intent === "ORDER") {
      const order = await createOrder(reply.items);

      await sendOrderNotification();

      const orderMessage = `
🚨 NEW ORDER

Order ID: ${order._id}

Items:
${order.items.map((item) => `${item.qty}x ${item.name}`).join("\n")}

💰 Total: ₦${order.totalAmount}

Status: ${order.status}
  `;

      // SEND TO RESTAURANT
      await sendWhatsAppMessage(orderMessage);

      return res.json({
        success: true,
        reply: `Your order has been created ✅! 
        🧾 Order ID: ${order._id}  
        💰Total: #${order.totalAmount}
        Your order is pending confirmation `,
        order,
      });
    }

    // Get Available Menu

    if (reply.intent === "MENU_QUERY") {
      const menus = await getAvailableMenu();

      const formattedMenu = menus
        .map((item) => `🍽 ${item.name} - ₦${item.price}`)
        .join("/n");

      return res.json({
        success: true,
        reply: `📖 Today's Menu:\n\n${formattedMenu}`,
        menus,
      });
    }

    // Complaint

    if (reply.intent === "COMPLAINT") {
      await createComplaint(aiResult.message);

      return res.json({
        success: true,
        reply:
          "Complaint ticket created 🎫.Customer support will contact you shortly 👨‍💻",
      });
    }

    //  Support

    console.log("AI Reply:", reply);
    return res.json({
      success: true,
      reply,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export default chatBot;
