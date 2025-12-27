import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Target, Heart, Award, Users, ArrowRight, CheckCircle2, MapPin, Phone, Clock } from "lucide-react";

const TentangKami = () => {
  useEffect(() => {
    document.title = "Tentang Kami - CampGear";
  }, []);

  const values = [
    {
      icon: Target,
      title: "Misi Kami",
      description: "Membuat pengalaman camping berkualitas dapat diakses oleh semua orang tanpa perlu investasi peralatan yang mahal.",
    },
    {
      icon: Heart,
      title: "Passion",
      description: "Kami adalah pecinta alam yang ingin berbagi kebahagiaan berpetualang dengan menyediakan peralatan terbaik.",
    },
    {
      icon: Award,
      title: "Kualitas",
      description: "Semua peralatan kami pilih dengan cermat dari brand terpercaya dan dirawat dengan standar tinggi.",
    },
    {
      icon: Users,
      title: "Komunitas",
      description: "Bergabunglah dengan ribuan camper yang sudah mempercayakan petualangan mereka kepada CampGear.",
    },
  ];

  const workflow = [
    {
      step: 1,
      title: "Pilih Peralatan",
      description: "Browse katalog atau pilih paket sesuai kebutuhan camping Anda.",
    },
    {
      step: 2,
      title: "Hubungi Kami",
      description: "Konfirmasi ketersediaan dan booking via WhatsApp atau form kontak.",
    },
    {
      step: 3,
      title: "Pembayaran",
      description: "Lakukan pembayaran melalui transfer bank atau e-wallet.",
    },
    {
      step: 4,
      title: "Ambil / Delivery",
      description: "Ambil di lokasi kami atau gunakan layanan delivery ke alamat Anda.",
    },
    {
      step: 5,
      title: "Nikmati Petualangan",
      description: "Camping dengan peralatan berkualitas dan buat kenangan indah!",
    },
    {
      step: 6,
      title: "Pengembalian",
      description: "Kembalikan peralatan sesuai jadwal. Tidak perlu membersihkan, kami yang handle!",
    },
  ];

  const stats = [
    { value: "5000+", label: "Happy Campers" },
    { value: "200+", label: "Peralatan Tersedia" },
    { value: "50+", label: "Destinasi Camping" },
    { value: "4.9", label: "Rating Pelanggan" },
  ];

  const reasons = [
    "Peralatan selalu bersih dan diperiksa sebelum disewakan",
    "Harga kompetitif dengan kualitas premium",
    "Proses booking cepat dan mudah via WhatsApp",
    "Layanan delivery ke lokasi camping",
    "Tim support yang responsif dan helpful",
    "Garansi penggantian jika ada kerusakan sebelum pemakaian",
  ];

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-hero py-16 md:py-24">
        <div className="container-main">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground mb-4">
              Tentang CampGear
            </h1>
            <p className="text-primary-foreground/90 text-lg leading-relaxed">
              Berawal dari kecintaan kami terhadap alam dan petualangan outdoor, CampGear hadir untuk memudahkan siapa saja menikmati pengalaman camping tanpa perlu membeli peralatan mahal.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-card border-b border-border">
        <div className="container-main">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="font-display text-3xl md:text-4xl font-bold text-primary mb-1">
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding bg-background">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-accent font-medium">Cerita Kami</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
                Dari Hobi Menjadi Bisnis Dengan Hati
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  CampGear didirikan pada tahun 2020 oleh sekelompok pecinta alam yang frustasi dengan mahalnya harga peralatan camping berkualitas. Kami percaya bahwa pengalaman menikmati alam seharusnya bisa diakses oleh semua orang.
                </p>
                <p>
                  Berawal dari koleksi pribadi yang kami sewakan ke teman-teman, kini CampGear telah melayani ribuan camper dari berbagai kota. Setiap peralatan kami pilih dengan teliti dan rawat dengan standar tinggi.
                </p>
                <p>
                  Kami tidak hanya menyewakan peralatan, tapi juga berbagi tips, rekomendasi destinasi, dan membangun komunitas para pecinta camping di Indonesia.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {values.map((value, idx) => (
                <div key={idx} className="bg-card p-6 rounded-xl border border-border">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-muted/50">
        <div className="container-main">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-accent font-medium">Keunggulan</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">
              Mengapa Memilih CampGear?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {reasons.map((reason, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 bg-card p-4 rounded-lg border border-border"
              >
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-foreground text-sm">{reason}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section className="section-padding bg-background">
        <div className="container-main">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-accent font-medium">Cara Kerja</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">
              Langkah Mudah Penyewaan
            </h2>
            <p className="text-muted-foreground mt-4">
              Proses sewa yang simpel dan cepat, dari pilih peralatan sampai petualangan dimulai.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {workflow.map((item) => (
              <div
                key={item.step}
                className="relative bg-card p-6 rounded-xl border border-border group hover:shadow-md transition-all duration-300"
              >
                <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                  {item.step}
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2 mt-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Info */}
      <section className="section-padding bg-card border-t border-border">
        <div className="container-main">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <MapPin className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">Lokasi</h3>
              <p className="text-muted-foreground text-sm">
                Jl. Gunung Raya No. 123<br />
                Bandung, Jawa Barat 40123
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Phone className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">Kontak</h3>
              <p className="text-muted-foreground text-sm">
                +62 812-3456-7890<br />
                hello@campgear.id
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Clock className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">Jam Operasional</h3>
              <p className="text-muted-foreground text-sm">
                Senin - Sabtu: 08.00 - 20.00<br />
                Minggu: 09.00 - 17.00
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-hero">
        <div className="container-main">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
              Siap Memulai Petualangan?
            </h2>
            <p className="text-primary-foreground/90 mb-6">
              Jelajahi katalog kami atau hubungi untuk konsultasi gratis tentang kebutuhan camping Anda.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/katalog"
                className="btn-accent flex items-center justify-center gap-2"
              >
                Lihat Katalog
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/kontak"
                className="btn-outline border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary flex items-center justify-center gap-2"
              >
                Hubungi Kami
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default TentangKami;
