import { KatalogItem, formatPrice } from "@/data/katalogData";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

interface CardItemProps {
  item: KatalogItem;
}

const CardItem = ({ item }: CardItemProps) => {
  const firstImage = Array.isArray(item.image) ? item.image[0] : item.image;

  return (
    <div className="group bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={firstImage}
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3">
          <span className="px-3 py-1 bg-primary/90 text-primary-foreground text-xs font-medium rounded-full">
            {item.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-display text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
          {item.name}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {item.description}
        </p>
        <div className="flex items-center justify-between">
          <div>
            <span className="text-primary font-bold text-lg">
              {formatPrice(item.price)}
            </span>
            <span className="text-muted-foreground text-sm"> / hari</span>
          </div>
          {/* <a
            href={`https://wa.me/6281234567890?text=Halo, saya ingin menyewa ${item.name}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-accent text-accent-foreground text-sm font-medium rounded-lg hover:bg-tan transition-colors"
          >
            Detail
          </a> */}
          <Button asChild size="sm" variant="outline">
            <Link to={`/katalog/${item.id}`}>Detail</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
