import Order from "../models/order.js";
import Menu from "../models/menu.js";

const createOrder = async (items) => {
  let orderItems = [];
  let totalAmount = 0;

  for (const item of items) {
    // Find Menu Item

    const menuItem = await Menu.findOne({
      name: new RegExp(item.name, "i"),
    });

    if (!menuItem) {
      continue;
    }

    // Create SnapShot

    const orderItem = {
      menuId: menuItem.id,
      name: menuItem.name,
      qty: item.qty,
      price: menuItem.price,
    };

    orderItems.push(orderItem);

    totalAmount += menuItem.price * item.qty;

    const order = await Order.create({
        items:orderItems,
        totalAmount,
    })

    return order;
  }
};

export default createOrder;