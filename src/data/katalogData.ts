import tentDome from "@/assets/tent-dome.jpg";
import sleepingBag from "@/assets/sleeping-bag.jpg";
import cookingSet from "@/assets/cooking-set.jpg";
import campingLight from "@/assets/camping-light.jpg";
import backpack from "@/assets/backpack.jpg";
import sleepingPad from "@/assets/sleeping-pad.jpg";
import campingStove from "@/assets/camping-stove.jpg";
import trekkingPoles from "@/assets/trekking-poles.jpg";

export type Spesifikasi = {
  [key: string]: string | number; // bebas selama key string dan value text/angka
};

export type KatalogItem = {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string | string[];
  spesifikasi?: Spesifikasi;
};

export const categories = [
  "Semua",
  "Tenda",
  "Sleeping Gear",
  "Peralatan Masak",
  "Lighting",
  "Outdoor Tambahan",
];

export const whatsappNumber = "6281234567890";

export const formatPrice = (price: number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(price);
};

export const getWhatsAppLink = (item) => {
  const message = encodeURIComponent(
    `Halo admin, saya mau sewa:\n\nNama Barang: ${
      item.nama
    }\nHarga: ${formatPrice(item.harga)} / hari\n\nTerima kasih`
  );
  return `https://wa.me/${whatsappNumber}?text=${message}`;
};

export const katalogItems: KatalogItem[] = [
  // Tenda
  {
    id: 1,
    name: "Tenda Dome 2 Orang",
    description:
      "Tenda kapasitas 2 orang, waterproof, mudah dipasang. Cocok untuk hiking ringan.",
    price: 50000,
    category: "Tenda",
    spesifikasi: {
      kapasitas: "4 Orang",
      berat: "3.5 kg",
      dimensi: "240 x 210 x 130 cm",
      bahan: "Polyester 190T Waterproof",
      kondisi: "95% Bagus",
    },
    image: [tentDome, campingLight, backpack],
  },
  {
    id: 2,
    name: "Tenda Dome 4 Orang",
    description:
      "Tenda keluarga kapasitas 4 orang, double layer, anti air dan tahan angin.",
    price: 75000,
    category: "Tenda",
    spesifikasi: {
      kapasitas: "4 Orang",
      berat: "3.5 kg",
      dimensi: "240 x 210 x 130 cm",
      bahan: "Polyester 190T Waterproof",
      kondisi: "95% Bagus",
    },
    image: tentDome,
  },
  {
    id: 3,
    name: "Tenda Dome 6 Orang",
    description:
      "Tenda besar untuk grup, kapasitas 6 orang dengan ruang vestibule.",
    price: 100000,
    category: "Tenda",
    spesifikasi: {
      kapasitas: "4 Orang",
      berat: "3.5 kg",
      dimensi: "240 x 210 x 130 cm",
      bahan: "Polyester 190T Waterproof",
      kondisi: "95% Bagus",
    },
    image: tentDome,
  },
  // Sleeping Gear
  {
    id: 4,
    name: "Sleeping Bag Standard",
    description:
      "Sleeping bag nyaman untuk suhu 10-20°C, bahan lembut dan ringan.",
    price: 25000,
    category: "Sleeping Gear",
    spesifikasi: {
      kapasitas: "4 Orang",
      berat: "3.5 kg",
      dimensi: "240 x 210 x 130 cm",
      bahan: "Polyester 190T Waterproof",
      kondisi: "95% Bagus",
    },
    image: sleepingBag,
  },
  {
    id: 5,
    name: "Sleeping Bag Extreme",
    description: "Sleeping bag untuk suhu ekstrem hingga 0°C, insulasi tebal.",
    price: 40000,
    category: "Sleeping Gear",
    spesifikasi: {
      kapasitas: "4 Orang",
      berat: "3.5 kg",
      dimensi: "240 x 210 x 130 cm",
      bahan: "Polyester 190T Waterproof",
      kondisi: "95% Bagus",
    },
    image: sleepingBag,
  },
  {
    id: 6,
    name: "Matras / Sleeping Pad",
    description: "Matras busa tebal untuk kenyamanan tidur di outdoor.",
    price: 15000,
    category: "Sleeping Gear",
    spesifikasi: {
      kapasitas: "4 Orang",
      berat: "3.5 kg",
      dimensi: "240 x 210 x 130 cm",
      bahan: "Polyester 190T Waterproof",
      kondisi: "95% Bagus",
    },
    image: sleepingPad,
  },
  {
    id: 7,
    name: "Bantal Tiup Camping",
    description: "Bantal tiup ringkas dan nyaman untuk camping.",
    price: 10000,
    category: "Sleeping Gear",
    spesifikasi: {
      kapasitas: "4 Orang",
      berat: "3.5 kg",
      dimensi: "240 x 210 x 130 cm",
      bahan: "Polyester 190T Waterproof",
      kondisi: "95% Bagus",
    },
    image: sleepingPad,
  },
  // Peralatan Masak
  {
    id: 8,
    name: "Cooking Set Lengkap",
    description:
      "Set masak camping lengkap: panci, wajan, sendok, garpu untuk 4 orang.",
    price: 35000,
    category: "Peralatan Masak",
    spesifikasi: {
      kapasitas: "4 Orang",
      berat: "3.5 kg",
      dimensi: "240 x 210 x 130 cm",
      bahan: "Polyester 190T Waterproof",
      kondisi: "95% Bagus",
    },
    image: cookingSet,
  },
  {
    id: 9,
    name: "Kompor Portable",
    description: "Kompor gas portable dengan pengapian otomatis, hemat gas.",
    price: 25000,
    category: "Peralatan Masak",
    spesifikasi: {
      kapasitas: "4 Orang",
      berat: "3.5 kg",
      dimensi: "240 x 210 x 130 cm",
      bahan: "Polyester 190T Waterproof",
      kondisi: "95% Bagus",
    },
    image: campingStove,
  },
  {
    id: 10,
    name: "Nesting Set 2 Orang",
    description: "Set masak compact untuk 2 orang, aluminium ringan.",
    price: 20000,
    category: "Peralatan Masak",
    spesifikasi: {
      kapasitas: "4 Orang",
      berat: "3.5 kg",
      dimensi: "240 x 210 x 130 cm",
      bahan: "Polyester 190T Waterproof",
      kondisi: "95% Bagus",
    },
    image: cookingSet,
  },
  {
    id: 11,
    name: "Termos Air Panas 1L",
    description:
      "Termos stainless steel kapasitas 1 liter, tahan panas 24 jam.",
    price: 15000,
    category: "Peralatan Masak",
    spesifikasi: {
      kapasitas: "4 Orang",
      berat: "3.5 kg",
      dimensi: "240 x 210 x 130 cm",
      bahan: "Polyester 190T Waterproof",
      kondisi: "95% Bagus",
    },
    image: cookingSet,
  },
  // Lighting
  {
    id: 12,
    name: "Headlamp LED",
    description: "Headlamp LED terang 300 lumens, 3 mode cahaya, tahan air.",
    price: 15000,
    category: "Lighting",
    spesifikasi: {
      kapasitas: "4 Orang",
      berat: "3.5 kg",
      dimensi: "240 x 210 x 130 cm",
      bahan: "Polyester 190T Waterproof",
      kondisi: "95% Bagus",
    },
    image: campingLight,
  },
  {
    id: 13,
    name: "Lentera Camping",
    description: "Lentera LED rechargeable, cahaya hangat, bisa digantung.",
    price: 20000,
    category: "Lighting",
    spesifikasi: {
      kapasitas: "4 Orang",
      berat: "3.5 kg",
      dimensi: "240 x 210 x 130 cm",
      bahan: "Polyester 190T Waterproof",
      kondisi: "95% Bagus",
    },
    image: campingLight,
  },
  {
    id: 14,
    name: "Senter Tactical",
    description: "Senter LED powerful 500 lumens dengan zoom dan strobe mode.",
    price: 15000,
    category: "Lighting",
    spesifikasi: {
      kapasitas: "4 Orang",
      berat: "3.5 kg",
      dimensi: "240 x 210 x 130 cm",
      bahan: "Polyester 190T Waterproof",
      kondisi: "95% Bagus",
    },
    image: campingLight,
  },
  // Outdoor Tambahan
  {
    id: 15,
    name: "Carrier 50L",
    description:
      "Tas carrier hiking 50 liter dengan frame, nyaman untuk perjalanan jauh.",
    price: 45000,
    category: "Outdoor Tambahan",
    spesifikasi: {
      kapasitas: "4 Orang",
      berat: "3.5 kg",
      dimensi: "240 x 210 x 130 cm",
      bahan: "Polyester 190T Waterproof",
      kondisi: "95% Bagus",
    },
    image: backpack,
  },
  {
    id: 16,
    name: "Carrier 60L",
    description:
      "Tas carrier besar 60 liter, banyak kompartemen, waterproof cover.",
    price: 55000,
    category: "Outdoor Tambahan",
    spesifikasi: {
      kapasitas: "4 Orang",
      berat: "3.5 kg",
      dimensi: "240 x 210 x 130 cm",
      bahan: "Polyester 190T Waterproof",
      kondisi: "95% Bagus",
    },
    image: backpack,
  },
  {
    id: 17,
    name: "Trekking Pole (sepasang)",
    description:
      "Tongkat hiking aluminium adjustable, anti shock, grip nyaman.",
    price: 20000,
    category: "Outdoor Tambahan",
    spesifikasi: {
      kapasitas: "4 Orang",
      berat: "3.5 kg",
      dimensi: "240 x 210 x 130 cm",
      bahan: "Polyester 190T Waterproof",
      kondisi: "95% Bagus",
    },
    image: trekkingPoles,
  },
  {
    id: 18,
    name: "Hammock Parasut",
    description:
      "Hammock parasut ringan dan kuat, termasuk tali dan carabiner.",
    price: 25000,
    category: "Outdoor Tambahan",
    spesifikasi: {
      kapasitas: "4 Orang",
      berat: "3.5 kg",
      dimensi: "240 x 210 x 130 cm",
      bahan: "Polyester 190T Waterproof",
      kondisi: "95% Bagus",
    },
    image: backpack,
  },
  {
    id: 19,
    name: "Flysheet 3x4m",
    description:
      "Flysheet waterproof ukuran 3x4 meter untuk perlindungan tambahan.",
    price: 20000,
    category: "Outdoor Tambahan",
    spesifikasi: {
      kapasitas: "4 Orang",
      berat: "3.5 kg",
      dimensi: "240 x 210 x 130 cm",
      bahan: "Polyester 190T Waterproof",
      kondisi: "95% Bagus",
    },
    image: tentDome,
  },
  {
    id: 20,
    name: "Kursi Lipat Camping",
    description:
      "Kursi lipat ringan dan portable dengan sandaran, kapasitas 120kg.",
    price: 15000,
    category: "Outdoor Tambahan",
    spesifikasi: {
      kapasitas: "4 Orang",
      berat: "3.5 kg",
      dimensi: "240 x 210 x 130 cm",
      bahan: "Polyester 190T Waterproof",
      kondisi: "95% Bagus",
    },
    image: backpack,
  },

  // {
  //   id: 1,
  //   name: "Tenda Dome 4 Orang",
  //   category: "tenda",
  //   price: 50000,
  //   // status: "tersedia",
  //   description:
  //     "Tenda dome berkualitas tinggi untuk 4 orang dengan bahan waterproof dan ventilasi yang baik. Cocok untuk camping keluarga atau bersama teman.",
  //   spesifikasi: {
  //     kapasitas: "4 Orang",
  //     berat: "3.5 kg",
  //     dimensi: "240 x 210 x 130 cm",
  //     bahan: "Polyester 190T Waterproof",
  //     kondisi: "95% Bagus",
  //   },
  //   images: [
  //     "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=800",
  //     "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?w=800",
  //   ],
  // },
];

export const paketData = [
  {
    id: 1,
    name: "Solo Hiking",
    description: "Paket lengkap untuk petualangan solo. Ringan dan praktis.",
    price: 100000,
    priceNote: "/ hari",
    items: [
      "Tenda Dome 2 Orang",
      "Sleeping Bag Standard",
      "Matras / Sleeping Pad",
      "Carrier 50L",
      "Headlamp LED",
      "Nesting Set 2 Orang",
      "Kompor Portable",
    ],
    popular: false,
    color: "sage",
  },
  {
    id: 2,
    name: "Camping Couple",
    description: "Paket romantis untuk berdua. Lengkap dan nyaman.",
    price: 175000,
    priceNote: "/ hari",
    items: [
      "Tenda Dome 2 Orang",
      "Sleeping Bag Standard (2x)",
      "Matras / Sleeping Pad (2x)",
      "Bantal Tiup (2x)",
      "Cooking Set Lengkap",
      "Kompor Portable",
      "Lentera Camping",
      "Headlamp LED (2x)",
    ],
    popular: true,
    color: "accent",
  },
  {
    id: 3,
    name: "Family Camping",
    description: "Paket keluarga untuk 4-5 orang. Seru dan berkesan.",
    price: 300000,
    priceNote: "/ hari",
    items: [
      "Tenda Dome 6 Orang",
      "Sleeping Bag Standard (4x)",
      "Matras / Sleeping Pad (4x)",
      "Bantal Tiup (4x)",
      "Cooking Set Lengkap",
      "Kompor Portable",
      "Lentera Camping (2x)",
      "Headlamp LED (2x)",
      "Kursi Lipat Camping (4x)",
      "Flysheet 3x4m",
    ],
    popular: false,
    color: "forest",
  },
];

export const testimoniData = [
  {
    id: 1,
    name: "Andi Prasetyo",
    location: "Jakarta",
    rating: 5,
    comment:
      "Peralatan sangat bersih dan lengkap! Proses penyewaan cepat, staff ramah. Pasti balik lagi untuk trip berikutnya.",
    avatar: "A",
  },
  {
    id: 2,
    name: "Sari Wulandari",
    location: "Bandung",
    rating: 5,
    comment:
      "Pertama kali camping dan semua berjalan lancar berkat peralatan berkualitas dari sini. Recommended banget!",
    avatar: "S",
  },
  {
    id: 3,
    name: "Budi Santoso",
    location: "Surabaya",
    rating: 5,
    comment:
      "Harga terjangkau, kualitas premium. Tenda dan sleeping bag sangat nyaman. Delivery tepat waktu!",
    avatar: "B",
  },
  {
    id: 4,
    name: "Maya Putri",
    location: "Yogyakarta",
    rating: 5,
    comment:
      "Paket Family Camping sangat worth it! Anak-anak senang sekali. Pasti sewa lagi untuk liburan selanjutnya.",
    avatar: "M",
  },
];
