// Lead statuses for the buttons under every lead in Telegram.
// id goes into callback_data (max 64 bytes), label is what the team sees.
export const LEAD_STATUSES = [
  { id: "calling", label: "📞 Calling now" },
  { id: "not_qualified", label: "⛔ Not qualified" },
  { id: "no_answer", label: "📵 Couldn't reach" },
  { id: "not_picking_up", label: "📴 Not picking up" },
  { id: "qualified", label: "✅ Qualified" },
  { id: "call_scheduled", label: "📅 Call scheduled" },
  { id: "send_quote", label: "📄 Send quote" },
  { id: "sale", label: "💰 Sale" },
  { id: "rejected", label: "❌ Rejected" },
];

export const STATUS_PREFIX = "status:";

// 2 buttons per row, the last one on its own row — like the reference
export function leadStatusKeyboard() {
  const buttons = LEAD_STATUSES.map((status) => ({
    text: status.label,
    callback_data: `${STATUS_PREFIX}${status.id}`,
  }));

  const rows = [];
  for (let i = 0; i < buttons.length; i += 2) {
    rows.push(buttons.slice(i, i + 2));
  }

  return { inline_keyboard: rows };
}
