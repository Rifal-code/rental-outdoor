import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useParams } from "react-router-dom";
import {
  Sparkles,
  Shield,
  Clock,
  Truck,
  ChevronRight,
  Star,
  ArrowRight,
  Phone,
} from "lucide-react";
import heroCamping from "@/assets/hero-camping.jpg";
import {
  katalogItems,
  paketData,
  testimoniData,
  formatPrice,
} from "@/data/katalogData";

const Home = () => {
  useEffect(() => {
    document.title = "CampGear - Sewa Peralatan Camping Lengkap & Terjangkau";
  }, []);

  const featuredItems = katalogItems.slice(0, 4);

  // Ambil gambar pertama dari item yang ada di featuredItems
  const firstImage = (item: any) =>
    Array.isArray(item.image) ? item.image[0] : item.image;

  const features = [
    {
      icon: Sparkles,
      title: "Peralatan Bersih",
      description:
        "Semua peralatan dibersihkan dan diperiksa sebelum disewakan.",
    },
    {
      icon: Shield,
      title: "Harga Terjangkau",
      description:
        "Harga kompetitif dengan kualitas premium untuk semua budget.",
    },
    {
      icon: Clock,
      title: "Proses Cepat",
      description: "Booking mudah, proses cepat, siap dalam waktu 1 jam.",
    },
    {
      icon: Truck,
      title: "Delivery Service",
      description: "Layanan antar jemput ke lokasi camping atau alamat Anda.",
    },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroCamping}
            alt="Camping di alam terbuka"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent" />
        </div>

        {/* Content */}
        <div className="container-main relative z-10 pt-20">
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-2 bg-accent/90 text-accent-foreground rounded-full text-sm font-medium mb-6 animate-fade-up">
              🏕️ #1 Rental Camping Equipment
            </span>
            <h1
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 animate-fade-up"
              style={{ animationDelay: "0.1s" }}
            >
              Sewa Peralatan Camping{" "}
              <span className="text-accent">Lengkap & Terjangkau</span>
            </h1>
            <p
              className="text-lg md:text-xl text-primary-foreground/90 mb-8 leading-relaxed animate-fade-up"
              style={{ animationDelay: "0.2s" }}
            >
              Wujudkan petualangan outdoor impianmu tanpa perlu beli peralatan
              mahal. Peralatan berkualitas, bersih, dan siap pakai untuk
              pengalaman camping terbaik.
            </p>
            <div
              className="flex flex-col sm:flex-row gap-4 animate-fade-up"
              style={{ animationDelay: "0.3s" }}
            >
              <Button asChild size="lg" variant="cream" className="gap-2">
                <Link to="/katalog">
                  Lihat Katalog
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-cream/30 text-cream hover:bg-cream/10 hover:border-cream/50 gap-2"
              >
                <Link to="/kontak">
                  <Phone className="h-5 w-5" />
                  Hubungi Kami
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <div className="w-8 h-12 border-2 border-primary-foreground/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-primary-foreground/50 rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-background">
        <div className="container-main">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-accent font-medium">Kenapa Memilih Kami</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">
              Keunggulan Layanan Kami
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-6 bg-card rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-border"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <feature.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section-padding bg-muted/50">
        <div className="container-main">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <span className="text-accent font-medium">
                Peralatan Unggulan
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">
                Paling Banyak Disewa
              </h2>
            </div>
            <Link
              to="/katalog"
              className="btn-outline self-start md:self-auto flex items-center gap-2"
            >
              Lihat Semua Katalog
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredItems.map((item) => (
              <div
                key={item.id}
                className="group bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={firstImage(item)}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                    {item.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-primary font-bold">
                      {formatPrice(item.price)}
                      <span className="text-sm font-normal text-muted-foreground">
                        /hari
                      </span>
                    </span>
                    <Button asChild size="sm" variant="outline">
                      <Link to={`/katalog/${item.id}`}>Detail</Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="section-padding bg-background">
        <div className="container-main">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-accent font-medium">Paket Hemat</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">
              Pilih Paket Sesuai Kebutuhan
            </h2>
            <p className="text-muted-foreground mt-4">
              Lebih hemat dengan paket bundling. Semua kebutuhan camping dalam
              satu paket praktis.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {paketData.map((paket) => (
              <div
                key={paket.id}
                className={`relative rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 ${
                  paket.popular
                    ? "bg-primary text-primary-foreground shadow-xl scale-105"
                    : "bg-card border border-border"
                }`}
              >
                {paket.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1.5 bg-accent text-accent-foreground text-sm font-medium rounded-full">
                      Paling Populer
                    </span>
                  </div>
                )}

                <h3
                  className={`font-display text-2xl font-bold mb-2 ${
                    paket.popular ? "" : "text-foreground"
                  }`}
                >
                  {paket.name}
                </h3>
                <p
                  className={`text-sm mb-6 ${
                    paket.popular
                      ? "text-primary-foreground/80"
                      : "text-muted-foreground"
                  }`}
                >
                  {paket.description}
                </p>

                <div className="mb-6">
                  <span className="font-display text-4xl font-bold">
                    {formatPrice(paket.price)}
                  </span>
                  <span
                    className={`text-sm ${
                      paket.popular
                        ? "text-primary-foreground/80"
                        : "text-muted-foreground"
                    }`}
                  >
                    {paket.priceNote}
                  </span>
                </div>

                <ul className="space-y-3 mb-8">
                  {paket.items.slice(0, 5).map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <ChevronRight
                        className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                          paket.popular ? "text-accent" : "text-primary"
                        }`}
                      />
                      <span className={paket.popular ? "" : "text-foreground"}>
                        {item}
                      </span>
                    </li>
                  ))}
                  {paket.items.length > 5 && (
                    <li
                      className={`text-sm ${
                        paket.popular
                          ? "text-primary-foreground/80"
                          : "text-muted-foreground"
                      }`}
                    >
                      + {paket.items.length - 5} item lainnya
                    </li>
                  )}
                </ul>

                <Link
                  to="/paket"
                  className={`block w-full text-center py-3 rounded-lg font-medium transition-all duration-300 ${
                    paket.popular
                      ? "bg-accent text-accent-foreground hover:bg-tan"
                      : "bg-primary text-primary-foreground hover:bg-forest-light"
                  }`}
                >
                  Lihat Detail
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-muted/50">
        <div className="container-main">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-accent font-medium">Testimoni</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">
              Apa Kata Mereka?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimoniData.map((testimoni) => (
              <div
                key={testimoni.id}
                className="bg-card p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimoni.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-foreground text-sm mb-4 leading-relaxed">
                  "{testimoni.comment}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                    {testimoni.avatar}
                  </div>
                  <div>
                    <p className="font-medium text-foreground text-sm">
                      {testimoni.name}
                    </p>
                    <p className="text-muted-foreground text-xs">
                      {testimoni.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-hero">
        <div className="container-main">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Siap Untuk Petualangan?
            </h2>
            <p className="text-primary-foreground/90 text-lg mb-8">
              Booking sekarang dan dapatkan pengalaman camping terbaik dengan
              peralatan berkualitas dari CampGear.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="cream" className="gap-2">
                <Link to="/katalog">
                  Lihat Katalog
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-cream/30 text-cream hover:bg-cream/10 hover:border-cream/50 gap-2"
              >
                <Link to="/cara-sewa">Cara sewa</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
