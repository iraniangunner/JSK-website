export const locales = ["en", "ar"] as const
export type Locale = (typeof locales)[number]
