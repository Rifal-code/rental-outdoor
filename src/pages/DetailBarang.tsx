import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { katalogItems, formatPrice, getWhatsAppLink } from "@/data/katalogData";
// import Breadcrumb from "@/components/Breadcrumb";
import Breadcrumb from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  MessageCircle,
  Phone,
  ChevronLeft,
  ChevronRight,
  CheckCircle,
} from "lucide-react";

const DetailBarang = () => {
  const { id } = useParams();
  const [currentImage, setCurrentImage] = useState(0);
  const item = katalogItems.find((i) => i.id === parseInt(id));
  const images = Array.isArray(item.image) ? item.image : [item.image];

  if (!item) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">
            Barang tidak ditemukan
          </h1>
          <Button asChild>
            <Link to="/katalog">Kembali ke Katalog</Link>
          </Button>
        </div>
      </div>
    );
  }

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % item.image.length);
  };

  const prevImage = () => {
    setCurrentImage(
      (prev) => (prev - 1 + item.image.length) % item.image.length
    );
  };

  return (
    <div className="min-h-screen pt-20 bg-background">
      {/* Header */}
      <div className="bg-muted/50 py-6">
        <div className="container mx-auto px-4">
          <Breadcrumb
            items={[
              { label: "Katalog", path: "/katalog" },
              { label: item.name },
            ]}
          />
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Gallery */}
          <div className="space-y-4">
            <div className="relative aspect-[4/3] bg-muted rounded-2xl overflow-hidden">
              <img
                src={images[currentImage]}
                alt={item.name}
                className="w-full h-full object-cover"
              />
              {images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-3 top-1/2 -translate-y-1/2 p-2 bg-card/80 backdrop-blur-sm rounded-full hover:bg-card transition-colors"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-card/80 backdrop-blur-sm rounded-full hover:bg-card transition-colors"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </>
              )}
              {/* <div className="absolute top-3 right-3">
                <Badge
                  variant={item.status === "tersedia" ? "default" : "secondary"}
                  className={`${
                    item.status === "tersedia"
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {item.status === "tersedia" ? "Tersedia" : "Disewa"}
                </Badge>
              </div> */}
            </div>

            {/* Thumbnails */}
            {images.length > 1 && (
              <div className="flex gap-2">
                {images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                      currentImage === index
                        ? "border-primary"
                        : "border-transparent hover:border-border"
                    }`}
                  >
                    <img
                      src={img}
                      alt={`${item.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Details */}
          <div className="space-y-6">
            <div>
              <p className="text-sm text-primary font-medium capitalize mb-2">
                {item.category.replace("-", " ")}
              </p>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                {item.name}
              </h1>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold text-primary">
                  {formatPrice(item.price)}
                </span>
                <span className="text-muted-foreground">/ hari</span>
              </div>
            </div>

            <div className="p-4 bg-muted/50 rounded-xl">
              <h3 className="font-semibold text-foreground mb-3">Deskripsi</h3>
              <p className="text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>

            <div className="p-4 bg-muted/50 rounded-xl">
              <h3 className="font-semibold text-foreground mb-3">
                Spesifikasi
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {Object.entries(item.spesifikasi).map(([key, value]) => (
                  <div key={key} className="flex flex-col">
                    <span className="text-xs text-muted-foreground capitalize">
                      {key}
                    </span>
                    <span className="font-medium text-foreground">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 bg-accent/50 rounded-xl">
              <h3 className="font-semibold text-foreground mb-3">
                Syarat Sewa
              </h3>
              <ul className="space-y-2">
                {[
                  "KTP/SIM asli sebagai jaminan",
                  "Pembayaran di muka saat pengambilan",
                  "Pengembalian sesuai waktu yang disepakati",
                  "Barang dikembalikan dalam kondisi bersih",
                ].map((syarat, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                    {syarat}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Button
                asChild
                size="lg"
                className="flex-1 gap-2"
                // disabled={item.status !== "tersedia"}
              >
                <a
                  href={getWhatsAppLink(item)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="h-5 w-5" />
                  Sewa Sekarang
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="gap-2">
                <a
                  href="https://wa.me/6281234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Phone className="h-5 w-5" />
                  Tanya Admin
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailBarang;
