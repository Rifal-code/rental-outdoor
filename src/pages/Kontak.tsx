import { useEffect, useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  Instagram,
  Facebook,
} from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";
import Header from "@/components/Header";

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Nama wajib diisi")
    .max(100, "Nama terlalu panjang"),
  whatsapp: z
    .string()
    .trim()
    .min(10, "Nomor WA minimal 10 digit")
    .max(15, "Nomor WA maksimal 15 digit")
    .regex(/^[0-9+]+$/, "Nomor WA hanya boleh angka"),
  service: z.string().min(1, "Pilih layanan yang diinginkan"),
  message: z
    .string()
    .trim()
    .min(1, "Pesan wajib diisi")
    .max(1000, "Pesan terlalu panjang"),
});

const Kontak = () => {
  const [formData, setFormData] = useState({
    name: "",
    whatsapp: "",
    service: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    document.title = "Kontak - CampGear";
  }, []);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const validatedData = contactSchema.parse(formData);

      // Create WhatsApp message
      const waMessage = `Halo CampGear!%0A%0ANama: ${encodeURIComponent(
        validatedData.name
      )}%0ANo. WA: ${encodeURIComponent(
        validatedData.whatsapp
      )}%0ALayanan: ${encodeURIComponent(
        validatedData.service
      )}%0A%0APesan:%0A${encodeURIComponent(validatedData.message)}`;

      // Open WhatsApp
      window.open(`https://wa.me/6281901821027?text=${waMessage}`, "_blank");

      toast.success("Pesan terkirim! Kami akan segera menghubungi Anda.");
      setFormData({ name: "", whatsapp: "", service: "", message: "" });
      setErrors({});
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            newErrors[err.path[0].toString()] = err.message;
          }
        });
        setErrors(newErrors);
        toast.error("Mohon lengkapi form dengan benar");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "WhatsApp",
      value: "+62 812-3456-7890",
      link: "https://wa.me/6281234567890",
    },
    {
      icon: Mail,
      title: "Email",
      value: "hello@campgear.id",
      link: "mailto:hello@campgear.id",
    },
    {
      icon: MapPin,
      title: "Alamat",
      value: "Jl. Gunung Raya No. 123, Bandung, Jawa Barat 40123",
      link: "https://maps.google.com",
    },
    {
      icon: Clock,
      title: "Jam Operasional",
      value: "Senin - Sabtu: 08.00 - 20.00 | Minggu: 09.00 - 17.00",
      link: null,
    },
  ];

  const services = [
    "Sewa Tenda",
    "Sewa Sleeping Gear",
    "Sewa Peralatan Masak",
    "Paket Solo Hiking",
    "Paket Camping Couple",
    "Paket Family Camping",
    "Custom Paket",
    "Lainnya",
  ];

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <Header
        title="Hubungi kami"
        subtitle="Ada pertanyaan atau ingin booking? Tim kami siap membantu Anda merencanakan petualangan camping yang sempurna."
      />

      {/* Contact Section */}
      <section className="section-padding bg-background">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">
                Informasi Kontak
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Hubungi kami melalui WhatsApp untuk respon tercepat. Kami juga
                tersedia via email dan bisa dikunjungi langsung di lokasi kami.
              </p>

              <div className="space-y-6 mb-8">
                {contactInfo.map((info, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        {info.title}
                      </h3>
                      {info.link ? (
                        <a
                          href={info.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary transition-colors text-sm"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-muted-foreground text-sm">
                          {info.value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h3 className="font-semibold text-foreground mb-4">
                  Ikuti Kami
                </h3>
                <div className="flex gap-3">
                  <a
                    href="#"
                    className="w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a
                    href="https://wa.me/6281234567890"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
                    aria-label="WhatsApp"
                  >
                    <MessageCircle className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Quick CTA */}
              <div className="mt-8 p-6 bg-accent/10 rounded-xl border border-accent/20">
                <h3 className="font-semibold text-foreground mb-2">
                  Respon Cepat via WhatsApp
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Untuk pertanyaan dan booking cepat, langsung hubungi via
                  WhatsApp.
                </p>
                <a
                  href="https://wa.me/6281234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-accent inline-flex items-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  Chat WhatsApp
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-card p-8 rounded-2xl border border-border">
              <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                Kirim Pesan
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Nama Lengkap *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-background border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground placeholder:text-muted-foreground ${
                      errors.name ? "border-destructive" : "border-border"
                    }`}
                    placeholder="Masukkan nama lengkap"
                  />
                  {errors.name && (
                    <p className="text-destructive text-sm mt-1">
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* WhatsApp */}
                <div>
                  <label
                    htmlFor="whatsapp"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Nomor WhatsApp *
                  </label>
                  <input
                    type="tel"
                    id="whatsapp"
                    name="whatsapp"
                    value={formData.whatsapp}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-background border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground placeholder:text-muted-foreground ${
                      errors.whatsapp ? "border-destructive" : "border-border"
                    }`}
                    placeholder="Contoh: 081234567890"
                  />
                  {errors.whatsapp && (
                    <p className="text-destructive text-sm mt-1">
                      {errors.whatsapp}
                    </p>
                  )}
                </div>

                {/* Service */}
                <div>
                  <label
                    htmlFor="service"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Layanan yang Diinginkan *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-background border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground ${
                      errors.service ? "border-destructive" : "border-border"
                    }`}
                  >
                    <option value="">Pilih layanan...</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                  {errors.service && (
                    <p className="text-destructive text-sm mt-1">
                      {errors.service}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Pesan *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className={`w-full px-4 py-3 bg-background border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground placeholder:text-muted-foreground resize-none ${
                      errors.message ? "border-destructive" : "border-border"
                    }`}
                    placeholder="Tuliskan pertanyaan atau detail kebutuhan Anda..."
                  />
                  {errors.message && (
                    <p className="text-destructive text-sm mt-1">
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                      Mengirim...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Kirim Pesan
                    </>
                  )}
                </button>

                <p className="text-muted-foreground text-xs text-center">
                  Dengan mengirim pesan, Anda akan diarahkan ke WhatsApp untuk
                  melanjutkan percakapan.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      {/* Map */}
      <section className="py-0">
        <div className="container mx-auto px-4 pb-12">
          <div className="rounded-2xl overflow-hidden border border-border/50">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126748.5969091047!2d107.57311784999999!3d-6.9034443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e6398252477f%3A0x146a1f93d3e815b2!2sBandung%2C%20Kota%20Bandung%2C%20Jawa%20Barat!5e0!3m2!1sid!2sid!4v1703432157285!5m2!1sid!2sid"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokasi CampRent"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Kontak;
