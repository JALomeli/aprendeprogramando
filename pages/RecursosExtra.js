
import Header from "../components/Header";
import Footer from "../components/Footer";
import ListaModulosExtra from "@/components/ListaModulosExtra";

export default function Home() {
  return (
    <main className="relative">
      <div className="fixed inset-0">
        <div className="absolute inset-0 bg-black opacity-95"></div>
        <img
          src="/Image/FondoInicio.svg"
          alt="Imagen de fondo"
          className="absolute inset-0 object-cover w-full h-full opacity-10"
        />
      </div>

      <div className="relative z-10">
        <Header />
        <ListaModulosExtra />
        <Footer />
      </div>
    </main>
  );
}
