import { Link } from "react-router-dom";
import Breadcrumb from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";
import {
  Search,
  MousePointerClick,
  MessageCircle,
  Package,
  RotateCcw,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import Header from "@/components/Header";

const steps = [
  {
    icon: Search,
    title: "Pilih Alat",
    desc: "Jelajahi katalog dan pilih alat camping yang Anda butuhkan.",
  },
  {
    icon: MousePointerClick,
    title: "Klik Sewa",
    desc: 'Klik tombol "Sewa Sekarang" pada halaman detail barang.',
  },
  {
    icon: MessageCircle,
    title: "Chat WhatsApp",
    desc: "Anda akan diarahkan ke WhatsApp untuk konfirmasi pemesanan.",
  },
  {
    icon: Package,
    title: "Ambil Barang",
    desc: "Datang ke lokasi kami untuk mengambil barang dan bayar.",
  },
  {
    icon: RotateCcw,
    title: "Kembalikan",
    desc: "Kembalikan barang sesuai waktu yang telah disepakati.",
  },
];

const quickFaqs = [
  {
    q: "Apakah ada minimal sewa?",
    a: "Ya, minimal sewa adalah 1 hari (24 jam).",
  },
  {
    q: "Bagaimana sistem pembayaran?",
    a: "Pembayaran dilakukan di muka saat pengambilan barang (tunai atau transfer).",
  },
  {
    q: "Apa yang diperlukan untuk sewa?",
    a: "KTP/SIM asli sebagai jaminan yang akan dikembalikan saat pengembalian barang.",
  },
  {
    q: "Apakah bisa delivery?",
    a: "Ya, kami menyediakan layanan delivery dengan biaya tambahan sesuai jarak.",
  },
];

const CaraSewa = () => {
  return (
    <div className="min-h-screen pt-20 bg-background">
      {/* Header */}
      <Header
        title="Cara sewa"
        subtitle=" Panduan lengkap untuk menyewa alat camping di CampRent"
      />

      {/* Steps */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              5 Langkah Mudah
            </h2>
            <p className="text-muted-foreground">
              Proses sewa yang simpel dan cepat, bisa selesai dalam hitungan
              menit!
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block" />

              {steps.map((step, index) => (
                <div
                  key={index}
                  className="relative flex items-start gap-6 mb-8 last:mb-0"
                >
                  {/* Step number */}
                  <div className="relative z-10 w-16 h-16 bg-primary rounded-2xl flex items-center justify-center shrink-0 shadow-lg">
                    <step.icon className="h-7 w-7 text-primary-foreground" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 bg-card p-6 rounded-2xl border border-border/50 hover-lift">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-sm font-medium text-primary">
                        Langkah {index + 1}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="gap-2">
              <Link to="/katalog">
                Mulai Sewa Sekarang
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Quick FAQ */}
      <section className="py-12 md:py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Pertanyaan Umum
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {quickFaqs.map((faq, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-2xl border border-border/50"
              >
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">
                      {faq.q}
                    </h3>
                    <p className="text-sm text-muted-foreground">{faq.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* <div className="text-center mt-8">
            <Link
              className="btn-outline inline-flex items-center gap-2 w-auto px-4 py-2 self-start md:self-auto"
              to="/faq"
            >
              Lihat Semua FAQ
            </Link>
          </div> */}
        </div>
      </section>

      {/* Info Cards */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-card border border-border p-6 rounded-2xl">
              <h3 className="font-semibold text-lg mb-2 text-foreground">
                Jam Operasional
              </h3>
              <p className="text-muted-foreground">
                Senin - Minggu
                <br />
                08:00 - 21:00 WIB
              </p>
            </div>

            <div className="bg-card border border-border p-6 rounded-2xl">
              <h3 className="font-semibold text-lg mb-2 text-foreground">
                Lokasi Pengambilan
              </h3>
              <p className="text-muted-foreground">
                Jl. Gunung Rinjani No. 123
                <br />
                Bandung, Jawa Barat
              </p>
            </div>

            <div className="bg-card border border-border p-6 rounded-2xl">
              <h3 className="font-semibold text-lg mb-2 text-foreground">
                Hubungi Kami
              </h3>
              <p className="text-muted-foreground">
                WhatsApp: +62 812-3456-7890
                <br />
                Email: info@camprent.id
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaraSewa;
