import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const sendWhatsappMessage= async()=>{
    try{
       await axios.post(`https://graph.facebook.com/v22.0/${process.env.WHATSAPP_PHONE_NUMBER_ID}/messages`,{
        messaging_product:"whatsapp",
        to: process.env.WHATSAPP_PHONE_NUMBER_ID,
        type:Text,
        text:{
            body:message
        },
    }, {
        headers:{
            Authorization:`Bearer ${process.env.WHATSAPP_TOKEN}`,
            "Content-Type": "application/json",
        },
    });

    console.log(
      "✅ WhatsApp notification sent"
    );

    }catch(error){
        console.log(
      "WhatsApp Error:",
      error.response?.data || error.message
    );
    }
}

export default sendWhatsappMessage;