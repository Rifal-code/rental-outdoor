import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Home from "@/pages/Home";
import Katalog from "@/pages/Katalog";
import Paket from "@/pages/Paket";
import TentangKami from "@/pages/TentangKami";
import Kontak from "@/pages/Kontak";
import NotFound from "@/pages/NotFound";
import DetailBarang from "./pages/DetailBarang";
import CaraSewa from "./pages/CaraSewa";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/katalog" element={<Katalog />} />
          <Route path="/katalog/:id" element={<DetailBarang />} />
          <Route path="/paket" element={<Paket />} />
          <Route path="/cara-sewa" element={<CaraSewa />} />
          <Route path="/tentang" element={<TentangKami />} />
          <Route path="/kontak" element={<Kontak />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
