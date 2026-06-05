export const verifyWebhook=(req, res)=>{
    const mode = req.query["hub.mode"];
    const token= req.query["hub.verify_token"];
    const challenge = req.query["hub.challenge"];

    if (
        mode && token === process.env.VERIFY_TOKEN
    ){
      return res.status(200).send(challenge);
    }
    res.sendStatus(403);
}

export const receiveWebhook = async (req, res) => {
  try {
    console.log(JSON.stringify(req.body, null, 2));

    // incoming whatsapp message

    res.sendStatus(200);
  } catch (error) {
    console.log(error);

    res.sendStatus(500);
  }
};