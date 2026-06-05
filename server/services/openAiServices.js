import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const generatedResponse = async (message) => {
  try {
    console.log("Sending message to OpenAI:", message);

    const response = await client.chat.completions.create({
      model: "gpt-4.1-mini",
      response_format: {
        type: "json_object",
      },

      messages: [
        {
          role: "system",
          content: `
You are an AI restaurant operating assistant.

Detect the user's intent.

Possible intents:
- ORDER
- RESERVATION
- COMPLAINT
- MENU_QUERY
- SUPPORT
- GENERAL

Return ONLY JSON.

ORDER example:
{
  "intent": "ORDER",
  "items": [
    {
      "name": "Burger",
      "qty": 2
    }
  ]
}

RESERVATION example:
{
  "intent": "RESERVATION",
  "peopleCount": 3,
  "time": "7pm"
}

COMPLAINT example:
{
  "intent": "COMPLAINT",
  "message": "My food arrived late"
}

MENU_QUERY example:
{
  "intent": "MENU_QUERY"
}

SUPPORT example:
{
  "intent": "SUPPORT"
}
  
        `,
        },

        {
          role: "user",
          content: message,
        },
      ],
    });

    console.log("OpenAI full response:", response);

    return response.choices[0].message.content;
  } catch (error) {
    console.log("OPENAI ERROR:", error);
    throw error;
  }
};

export default generatedResponse;
