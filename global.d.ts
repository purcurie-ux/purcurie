export {};

declare global {
  interface Window {
    Junip?: {
      init: () => void;
    };
  }
}