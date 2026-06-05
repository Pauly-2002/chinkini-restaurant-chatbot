import axios from "axios";

const sendChatToAI = async (message) => {
  console.log("MANUAL FETCH CALL");

  const res = await fetch("http://localhost:5000/api/chat", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ message }),
  });

  const data = await res.json();

  console.log("RESPONSE:", data);

  return data;
};

export default sendChatToAI;
