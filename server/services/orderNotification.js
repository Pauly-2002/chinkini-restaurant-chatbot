const sendOrderNotification = async (order) => {
  console.log(`
    🚨 NEW ORDER RECEIVED
    Order ID: ${order._id}

    Items: ${order.items.map((item) => `${item.qty}*${item.name}`).join("\n")}
    Total: #${order.totalAmount}
    Status: ${order.status}`);
};

export default sendOrderNotification;
