import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Check, MessageCircle, Users, User, Heart } from "lucide-react";
import { paketData } from "@/data/katalogData";

const Paket = () => {
  useEffect(() => {
    document.title = "Paket Sewa - CampGear";
  }, []);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(price);
  };

  const getIcon = (name: string) => {
    if (name.includes("Solo")) return User;
    if (name.includes("Couple")) return Heart;
    return Users;
  };

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-hero py-16 md:py-24">
        <div className="container-main">
          <div className="text-center max-w-2xl mx-auto">
            <h1 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground mb-4">
              Paket Sewa Hemat
            </h1>
            <p className="text-primary-foreground/90 text-lg">
              Pilih paket camping yang sesuai dengan kebutuhan dan jumlah peserta. Lebih praktis, lebih hemat!
            </p>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="section-padding bg-background">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {paketData.map((paket) => {
              const IconComponent = getIcon(paket.name);
              
              return (
                <div
                  key={paket.id}
                  className={`relative rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 ${
                    paket.popular
                      ? "ring-2 ring-accent shadow-xl"
                      : "border border-border shadow-sm"
                  }`}
                >
                  {paket.popular && (
                    <div className="absolute top-0 left-0 right-0 bg-accent text-accent-foreground text-center py-2 text-sm font-medium">
                      ⭐ Paling Populer
                    </div>
                  )}

                  <div className={`p-8 ${paket.popular ? "pt-14" : ""}`}>
                    {/* Icon */}
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${
                      paket.popular ? "bg-accent/20" : "bg-primary/10"
                    }`}>
                      <IconComponent className={`w-8 h-8 ${paket.popular ? "text-accent" : "text-primary"}`} />
                    </div>

                    {/* Title & Description */}
                    <h2 className="font-display text-2xl font-bold text-foreground mb-2">
                      {paket.name}
                    </h2>
                    <p className="text-muted-foreground mb-6">
                      {paket.description}
                    </p>

                    {/* Price */}
                    <div className="mb-8">
                      <span className="font-display text-4xl font-bold text-foreground">
                        {formatPrice(paket.price)}
                      </span>
                      <span className="text-muted-foreground text-lg">
                        {paket.priceNote}
                      </span>
                    </div>

                    {/* Items List */}
                    <div className="mb-8">
                      <h4 className="font-semibold text-foreground mb-4">Termasuk dalam paket:</h4>
                      <ul className="space-y-3">
                        {paket.items.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                              paket.popular ? "bg-accent/20" : "bg-primary/10"
                            }`}>
                              <Check className={`w-3 h-3 ${paket.popular ? "text-accent" : "text-primary"}`} />
                            </div>
                            <span className="text-foreground text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA Button */}
                    <a
                      href={`https://wa.me/6281234567890?text=Halo, saya ingin booking ${paket.name} dengan harga ${formatPrice(paket.price)}/hari`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center justify-center gap-2 w-full py-4 rounded-xl font-semibold transition-all duration-300 ${
                        paket.popular
                          ? "bg-accent text-accent-foreground hover:bg-tan"
                          : "bg-primary text-primary-foreground hover:bg-forest-light"
                      }`}
                    >
                      <MessageCircle className="w-5 h-5" />
                      Hubungi untuk Booking
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-muted/50">
        <div className="container-main">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              Pertanyaan Umum
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                q: "Apakah bisa custom paket?",
                a: "Tentu! Anda bisa menambah atau mengurangi item sesuai kebutuhan. Hubungi kami untuk request custom paket.",
              },
              {
                q: "Berapa lama minimal durasi sewa?",
                a: "Minimal durasi sewa adalah 1 hari. Untuk sewa lebih dari 3 hari, kami berikan diskon spesial.",
              },
              {
                q: "Apakah ada biaya tambahan?",
                a: "Tidak ada biaya tersembunyi. Harga sudah termasuk pembersihan peralatan sebelum dan sesudah pemakaian.",
              },
              {
                q: "Bagaimana jika peralatan rusak?",
                a: "Untuk kerusakan minor akibat pemakaian normal tidak dikenakan biaya. Kerusakan berat akan dikenakan biaya sesuai kebijakan.",
              },
            ].map((faq, idx) => (
              <div key={idx} className="bg-card rounded-xl p-6 border border-border">
                <h3 className="font-semibold text-foreground mb-2">{faq.q}</h3>
                <p className="text-muted-foreground text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="container-main">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
              Butuh Paket Custom?
            </h2>
            <p className="text-primary-foreground/90 mb-6">
              Hubungi kami untuk diskusi kebutuhan camping Anda. Kami siap membantu menyusun paket yang pas.
            </p>
            <Link
              to="/kontak"
              className="btn-accent inline-flex items-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              Hubungi Kami
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Paket;
