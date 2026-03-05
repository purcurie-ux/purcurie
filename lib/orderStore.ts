export const confirmedTokens = new Map<string, number>();

export function markConfirmed(token: string) {
  confirmedTokens.set(token, Date.now());
  setTimeout(() => confirmedTokens.delete(token), 60 * 60 * 1000);
}