import Menu from "../models/menu.js";

const getAvailableMenu = async()=>{
    const menus = await Menu.find({
      isAvailable: true,
    });

    return menus;
}

export default getAvailableMenu;