function formatAnswers(answers) {
  if (!answers || typeof answers !== "object") return "-";

  return Object.entries(answers)
    .map(([key, value]) => {
      const readableValue = Array.isArray(value) ? value.join(", ") : value;
      return `${key}: ${readableValue || "-"}`;
    })
    .join("\n");
}

export default async function handler(request, response) {
  if (request.method !== "POST") {
    return response.status(405).json({ message: "Method not allowed" });
  }

  try {
    const { formName, name, phone, city, answers } = request.body || {};

    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!token || !chatId) {
      return response.status(500).json({
        message: "Telegram environment variables are missing",
      });
    }

    const submittedAt = new Date().toLocaleString("en-US", {
      dateStyle: "medium",
      timeStyle: "short",
      timeZone: "America/New_York",
    });

    const message = [
      "🔥 New lead from TV Mount Company",
      "",
      `Form: ${formName || "Website form"}`,
      `Submitted: ${submittedAt}`,
      "",
      `Name: ${name || "-"}`,
      `Phone: ${phone || "-"}`,
      `City: ${city || "-"}`,
      "",
      "Quiz answers:",
      formatAnswers(answers),
    ].join("\n");

    const telegramResponse = await fetch(
      `https://api.telegram.org/bot${token}/sendMessage`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
        }),
      },
    );

    if (!telegramResponse.ok) {
      console.error("Telegram request failed", await telegramResponse.text());

      return response.status(500).json({
        message: "Telegram request failed",
      });
    }

    return response.status(200).json({
      message: "Lead sent successfully",
    });
  } catch (error) {
    console.error("Lead submit error:", error);

    return response.status(500).json({
      message: "Server error",
    });
  }
}
