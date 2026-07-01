export const cases = [
  { label: "Kolecto", slug: "kolecto", domain: "FinTech · SaaS B2B", period: "2025 – present" },
  { label: "Thiga", slug: "thiga", domain: "PM Consulting", period: "2024 – present" },
  { label: "Thiga Academy", slug: "thiga-academy", domain: "PM Training", period: "Jan. 2025 – present" },
  { label: "Electra", slug: "electra", domain: "GreenTech", period: "Jan. – May 2025" },
  { label: "Ledger SWAP", slug: "ledger-swap", domain: "Crypto", period: "2024" },
  { label: "Pyxo", slug: "pyxo", domain: "FoodTech", period: "2021 – 2023" },
  { label: "Calldesk", slug: "calldesk", domain: "Conversational AI", period: "2019 – 2021" },
] as const;

export type CaseSlug = typeof cases[number]["slug"];
