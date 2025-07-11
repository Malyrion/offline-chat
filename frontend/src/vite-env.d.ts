/// <reference types="vite/client" />

declare module 'virtual:pwa-register' {
  // You can refine this type if needed
  export function registerSW(options?: { immediate?: boolean }): void;
}