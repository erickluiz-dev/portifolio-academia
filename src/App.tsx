import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import BackToTop from "./components/BackToTop";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Modalidades from "./pages/Modalidades";
import ModalidadeDetalhe from "./pages/ModalidadeDetalhe";
import Planos from "./pages/Planos";
import Professores from "./pages/Professores";
import ProfessorPerfil from "./pages/ProfessorPerfil";
import Horarios from "./pages/Horarios";
import IMC from "./pages/IMC";
import Contato from "./pages/Contato";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function Layout() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/modalidades" element={<Modalidades />} />
          <Route path="/modalidades/:slug" element={<ModalidadeDetalhe />} />
          <Route path="/planos" element={<Planos />} />
          <Route path="/professores" element={<Professores />} />
          <Route path="/professores/:slug" element={<ProfessorPerfil />} />
          <Route path="/horarios" element={<Horarios />} />
          <Route path="/imc" element={<IMC />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout />
    </BrowserRouter>
  );
}
