import Order from "../models/order";

export const updateOrderStatus = async (req, res) => {
  try {
    const { orderId } = req.params;

    const { status } = req.body;

    const order = await Order.findByIdAndUpdate(
      orderId,
      { status },
      { new: true }
    );

    if (!order) {
      return res.status(404).json({
        success: false,
        message: "Order not found",
      });
    }

    res.json({
      success: true,
      message: `Order updated to ${status}`,
      order,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Status updated failed",
    });
  }
};
