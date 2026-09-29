// Time left until local midnight — the offer is "valid until the end of the day"
export function getTimeLeft() {
  const now = new Date();
  const endOfDay = new Date(now);
  endOfDay.setHours(24, 0, 0, 0);

  return Math.max(0, endOfDay - now);
}
