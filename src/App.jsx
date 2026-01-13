import { useState } from "react";

function App() {
  const [reply, setReply] = useState("No reply yet");

  const sendMessage = async () => {
    alert("Button clicked ✅");

    try {
      const res = await fetch("http://localhost:5000/api/reply", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ message: "test" })
      });

      const data = await res.json();
      setReply(data.reply);
    } catch (err) {
      alert("FETCH FAILED ❌");
      console.error(err);
    }
  };

  return (
    <div style={{ padding: 40 }}>
      <h1>SwiftReply Test</h1>
      <button onClick={sendMessage}>SEND TEST</button>
      <p>{reply}</p>
    </div>
  );
}

export default App;
