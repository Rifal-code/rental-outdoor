// src/components/Header.tsx
import { Link } from "react-router-dom";
import Breadcrumb from "./Breadcrumb";

interface HeaderProps {
  title?: string; // judul halaman
  subtitle?: string; // teks kecil opsional
}

export default function Header({ title, subtitle }: HeaderProps) {
  return (
    <div className="bg-muted/50 py-8 md:py-12">
      <div className="container mx-auto px-4">
        <Breadcrumb items={[{ label: title }]} />
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-2">
          {title}
        </h1>
        <p className="text-muted-foreground">{subtitle}</p>
      </div>
    </div>
  );
}
