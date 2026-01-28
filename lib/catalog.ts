export type SingleProduct = {
  id: string;
  title: string;
  priceUsd: number;
  stripePriceId: string; // set in Stripe Dashboard (e.g., price_123)
  coverImage: string;    // path in /public
  fileKey: string;       // filename inside /private_downloads (e.g., kp-single-1.mp3)
  description?: string;
};

export type MerchProduct = {
  id: string;
  title: string;
  priceUsd: number;
  stripePriceId: string;
  image: string;         // path in /public
  description?: string;
  options?: string[];    // sizes/colors
};

export const singles: SingleProduct[] = [
  {
    id: "kp-single-1",
    title: "Where Da Party At",
    priceUsd: 1.29,
    stripePriceId: "price_REPLACE_ME",
    coverImage: "/images/kp-silhouette.png",
    fileKey: "kp-where-da-party-at.mp3",
    description:
      "After purchase, you’ll receive a secure download link. (Admin: drop the MP3/WAV into /private_downloads and update title + Stripe priceId.)",
  },
];

export const merch: MerchProduct[] = [
  {
    id: "kp-tee-1",
    title: "KP Logo Tee",
    priceUsd: 29.99,
    stripePriceId: "price_REPLACE_ME",
    image: "/images/kp-silhouette.png",
    description: "Classic tee with KP branding. (Admin: swap image + set Stripe priceId.)",
    options: ["S", "M", "L", "XL", "2XL"],
  },
  {
    id: "kp-hat-1",
    title: "KP Hat",
    priceUsd: 24.99,
    stripePriceId: "price_REPLACE_ME",
    image: "/images/kp-silhouette.png",
    description: "Cap/hat with KP branding. (Admin: swap image + set Stripe priceId.)",
    options: ["One Size"],
  },
];
