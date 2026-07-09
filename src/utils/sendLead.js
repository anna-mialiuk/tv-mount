async function sendLead(data) {
  const response = await fetch("/api/send-lead", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Failed to send lead");
  }

  return response.json();
}

export default sendLead;
