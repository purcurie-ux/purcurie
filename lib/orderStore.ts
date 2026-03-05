export const confirmedTokens = new Map<string, number>();
export const recentOrders: number[] = [];

export function markConfirmed(token: string) {
  confirmedTokens.set(token, Date.now());
  recentOrders.push(Date.now());
  setTimeout(() => confirmedTokens.delete(token), 60 * 60 * 1000);
}