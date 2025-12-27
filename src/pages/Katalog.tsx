import { useEffect, useState } from "react";
import { Search, Filter } from "lucide-react";
import { katalogItems, categories, KatalogItem } from "@/data/katalogData";
import CardItem from "@/components/CardItem";

const Katalog = () => {
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredItems, setFilteredItems] = useState<KatalogItem[]>(katalogItems);

  useEffect(() => {
    document.title = "Katalog Peralatan - CampGear";
  }, []);

  useEffect(() => {
    let items = katalogItems;

    // Filter by category
    if (selectedCategory !== "Semua") {
      items = items.filter((item) => item.category === selectedCategory);
    }

    // Filter by search query
    if (searchQuery) {
      items = items.filter(
        (item) =>
          item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredItems(items);
  }, [selectedCategory, searchQuery]);

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-hero py-16 md:py-24">
        <div className="container-main">
          <div className="text-center max-w-2xl mx-auto">
            <h1 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground mb-4">
              Katalog Peralatan
            </h1>
            <p className="text-primary-foreground/90 text-lg">
              Temukan peralatan camping berkualitas untuk petualanganmu. Semua peralatan bersih, terawat, dan siap pakai.
            </p>
          </div>
        </div>
      </section>

      {/* Filter & Search */}
      <section className="py-8 bg-background sticky top-16 md:top-20 z-30 border-b border-border">
        <div className="container-main">
          <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Cari peralatan..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground placeholder:text-muted-foreground"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0">
              <Filter className="w-5 h-5 text-muted-foreground flex-shrink-0" />
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                    selectedCategory === category
                      ? "bg-primary text-primary-foreground"
                      : "bg-card text-foreground hover:bg-muted border border-border"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-padding bg-muted/30">
        <div className="container-main">
          {/* Results Count */}
          <div className="mb-8">
            <p className="text-muted-foreground">
              Menampilkan <span className="font-semibold text-foreground">{filteredItems.length}</span> peralatan
              {selectedCategory !== "Semua" && (
                <> dalam kategori <span className="font-semibold text-foreground">{selectedCategory}</span></>
              )}
            </p>
          </div>

          {/* Grid */}
          {filteredItems.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredItems.map((item) => (
                <CardItem key={item.id} item={item} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-muted flex items-center justify-center">
                <Search className="w-10 h-10 text-muted-foreground" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                Tidak Ada Hasil
              </h3>
              <p className="text-muted-foreground">
                Coba ubah kata kunci pencarian atau pilih kategori lain.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Info Section */}
      <section className="py-12 bg-card border-t border-border">
        <div className="container-main">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                Peralatan Berkualitas
              </h3>
              <p className="text-muted-foreground text-sm">
                Semua peralatan dari brand terpercaya dan terawat dengan baik.
              </p>
            </div>
            <div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                Harga Transparan
              </h3>
              <p className="text-muted-foreground text-sm">
                Harga sudah termasuk pembersihan. Tanpa biaya tersembunyi.
              </p>
            </div>
            <div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                Booking Mudah
              </h3>
              <p className="text-muted-foreground text-sm">
                Hubungi via WhatsApp untuk booking cepat dan konfirmasi instan.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Katalog;
