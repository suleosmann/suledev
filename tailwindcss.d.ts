// tailwindcss.d.ts
import 'tailwindcss/tailwind-config'

declare module 'tailwindcss/tailwind-config' {
  interface Theme {
    extend: {
      colors: {
        'custom-blue': string;
      }
    }
  }
}
