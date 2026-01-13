
import React, { useState, useEffect } from 'react';
import { 
  ChevronRight, Code2, ExternalLink, HeartPulse, Scale, Sparkles, 
  MessageCircle, Instagram, Mail, Menu, X 
} from 'lucide-react';
import { DemoSite, Step } from '../types';

interface PortfolioHomeProps {
  demos: DemoSite[];
  steps: Step[];
  onViewDemo: (id: string) => void;
}

export const PortfolioHome: React.FC<PortfolioHomeProps> = ({ demos, steps, onViewDemo }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) { 
      element.scrollIntoView({ behavior: 'smooth', block: 'start' }); 
      setIsMobileMenuOpen(false);
    }
  };

  const renderThumbnail = (demo: DemoSite) => {
    if (demo.id === 'lawfirm') {
      return (
        <div className="relative w-full h-full bg-slate-900 flex items-center justify-center overflow-hidden">
          <img src={demo.image} alt={demo.name} className="absolute inset-0 w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/60"></div>
          <div className="relative z-10 text-center px-4">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Scale className="text-[#d4af37]" size={20} />
              <div className="text-left leading-none">
                <span className="block text-white font-serif tracking-widest text-[10px] font-bold">DEJOSS</span>
                <span className="block text-[#d4af37] text-[8px] tracking-[0.2em] uppercase">Advocacia</span>
              </div>
            </div>
            <h3 className="font-serif text-2xl text-white leading-tight drop-shadow-lg">Justiça com <br/><span className="text-[#d4af37] italic font-light">Excelência</span></h3>
          </div>
        </div>
      );
    }
    if (demo.id === 'clinic') {
      return (
         <div className="relative w-full h-full bg-gradient-to-br from-white to-teal-50 flex items-center overflow-hidden">
           <div className="w-1/2 h-full p-5 flex flex-col justify-center z-10">
              <div className="flex items-center gap-1.5 mb-2">
                 <div className="p-1 bg-teal-500 rounded text-white"><HeartPulse size={10} /></div>
                 <span className="font-bold text-slate-800 text-[10px]">Vita<span className="text-teal-500">Clinic</span></span>
              </div>
              <h3 className="font-bold text-slate-900 text-lg leading-[1.1] mb-2">Sua saúde merece <br/><span className="text-teal-500">atenção total.</span></h3>
           </div>
           <div className="absolute right-0 top-0 h-full w-[55%]">
             <div className="absolute inset-0 bg-gradient-to-r from-white via-white/20 to-transparent z-10"></div>
             <img src={demo.image} alt={demo.name} className="w-full h-full object-cover object-center" />
           </div>
         </div>
      );
    }
    if (demo.id === 'aesthetics') {
      return (
        <div className="relative w-full h-full bg-[#F9F8F6] flex items-center overflow-hidden">
           <div className="absolute top-[-20px] left-[-20px] w-20 h-20 bg-[#d4af37]/20 rounded-full blur-xl"></div>
           <div className="w-[55%] h-full p-6 flex flex-col justify-center z-10 pl-8">
              <div className="flex items-center gap-1 text-[#d4af37] mb-2">
                <Sparkles size={10} />
                <span className="text-[6px] uppercase tracking-[0.2em] font-bold">Estética</span>
              </div>
              <h3 className="font-serif text-2xl text-[#1a1a1a] leading-[0.9] mb-3">Beleza <br/><span className="italic text-gray-500 font-light">Atemporal</span></h3>
           </div>
           <div className="absolute right-0 top-0 h-full w-[45%]">
             <img src={demo.image} alt={demo.name} className="w-full h-full object-cover rounded-l-[40px] shadow-lg" />
           </div>
        </div>
      );
    }
    return <img src={demo.image} alt={demo.name} className="w-full h-full object-cover" />;
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      
      {/* --- FLOATING NAVBAR START --- */}
      {/* 
          Lógica da Navbar:
          1. isMobileMenuOpen: Expande, fica branco sólido, bordas arredondadas (card), sem blur.
          2. isScrolled: Compacto, blur, background semi-transparente.
          3. Default: Mais largo, blur leve.
      */}
      <nav 
        className={`fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]
          ${isMobileMenuOpen 
            ? 'top-4 w-[92%] max-w-[380px] bg-white shadow-2xl rounded-[32px] border border-slate-100' // Menu Aberto: Card Branco Sólido
            : isScrolled 
              ? 'top-4 w-[90%] max-w-5xl rounded-full bg-white/70 backdrop-blur-lg shadow-lg border border-white/40' // Scroll: Compacto Blur
              : 'top-6 w-[95%] max-w-6xl rounded-2xl bg-white/30 backdrop-blur-md shadow-sm border border-white/40' // Topo: Largo Blur
          }
        `}
      >
        <div className="flex flex-col w-full">
          {/* Header da Navbar (Logo + Botão Toggle) */}
          <div className="px-6 py-3 flex justify-between items-center relative w-full">
            {/* Logo */}
            <div 
              className="flex items-center gap-2 cursor-pointer group" 
              onClick={() => {
                 window.scrollTo({ top: 0, behavior: 'smooth' });
                 setIsMobileMenuOpen(false);
              }}
            >
              <div className={`p-2 rounded-xl transition-colors duration-300 ${isMobileMenuOpen ? 'bg-blue-600 text-white' : 'bg-blue-600 text-white shadow-md'}`}>
                <Code2 size={20} strokeWidth={2.5} />
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-900">
                Web<span className="text-blue-600">Crafter</span>
              </span>
            </div>

            {/* Desktop Menu (Só aparece em telas grandes e quando o menu mobile está FECHADO para evitar bugs visuais) */}
            <div className={`hidden md:flex items-center gap-1 ${isMobileMenuOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
              {[
                { label: 'Portfólio', id: 'portfolio' },
                { label: 'Processo', id: 'process' },
                { label: 'Contato', id: 'contact' }
              ].map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="px-4 py-2 text-sm font-semibold text-slate-700 hover:text-blue-600 hover:bg-white/50 rounded-full transition-all"
                >
                  {link.label}
                </button>
              ))}
              <div className="w-px h-6 bg-slate-300 mx-2"></div>
              <button 
                onClick={() => scrollToSection('contact')}
                className="px-6 py-2.5 rounded-full font-bold text-sm transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 bg-slate-900 text-white hover:bg-blue-600"
              >
                Orçamento
              </button>
            </div>

            {/* Mobile Toggle Button */}
            <button 
              className={`md:hidden p-2 rounded-full transition-all duration-300 ${isMobileMenuOpen ? 'bg-slate-100 text-slate-900 rotate-90' : 'text-slate-700 hover:bg-white/50'}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu Content (Expandable Section) */}
          {/* Animação: Altura máxima e opacidade */}
          <div className={`md:hidden overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${isMobileMenuOpen ? 'max-h-[400px] opacity-100 pb-6' : 'max-h-0 opacity-0'}`}>
            <div className="flex flex-col px-4 gap-2 pt-2">
              {[
                { label: 'Portfólio', id: 'portfolio', delay: 'delay-75' },
                { label: 'Processo', id: 'process', delay: 'delay-100' },
                { label: 'Contato', id: 'contact', delay: 'delay-150' }
              ].map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`text-left text-lg font-bold text-slate-800 py-4 px-6 rounded-2xl bg-slate-50 hover:bg-blue-50 hover:text-blue-600 transition-all duration-500 transform ${isMobileMenuOpen ? `translate-y-0 opacity-100 ${link.delay}` : 'translate-y-4 opacity-0'}`}
                >
                  <div className="flex justify-between items-center w-full">
                    {link.label}
                    <ChevronRight size={16} className="text-slate-400" />
                  </div>
                </button>
              ))}
              <div className={`mt-2 transition-all duration-500 delay-200 transform ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                 <button 
                  onClick={() => scrollToSection('contact')}
                  className="w-full bg-blue-600 text-white py-4 rounded-2xl font-bold shadow-lg shadow-blue-200 active:scale-95 transition-transform flex justify-center items-center gap-2"
                >
                  Solicitar Orçamento <Sparkles size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
      {/* --- FLOATING NAVBAR END --- */}

      <section className="relative overflow-hidden bg-white pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-slate-100 z-0"></div>
        <div className="max-w-7xl mx-auto px-6 py-24 md:py-32 relative z-10">
          <div className="max-w-3xl animate-fade-in mt-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-6">
              <Code2 size={16} /> <span>Desenvolvimento Web Especializado</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 mb-6 leading-[1.1]">
              Criação de Sites Profissionais para <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Empresas e Negócios</span>
            </h1>
            <p className="text-xl text-slate-600 mb-10 max-w-2xl leading-relaxed">
              Transforme visitantes em clientes com um site moderno, rápido e otimizado para celulares. Design exclusivo que valoriza sua marca.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button onClick={() => scrollToSection('portfolio')} className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg flex items-center justify-center gap-2">
                Ver Projetos <ChevronRight size={20} />
              </button>
              <button onClick={() => scrollToSection('contact')} className="bg-white border-2 border-slate-200 hover:border-blue-200 hover:bg-blue-50 text-slate-700 px-8 py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center">
                Solicitar Orçamento
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-24 px-6 max-w-7xl mx-auto scroll-mt-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Portfólio Selecionado</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">Veja exemplos reais de como podemos elevar a presença digital do seu negócio.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {demos.map((demo) => (
            <div key={demo.id} className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-slate-100 flex flex-col h-full hover:-translate-y-1">
              <div className="relative overflow-hidden h-56 cursor-pointer border-b border-slate-100" onClick={() => onViewDemo(demo.id)}>
                {renderThumbnail(demo)}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-20">
                  <button className="text-white font-semibold tracking-wide border border-white px-4 py-2 rounded-lg hover:bg-white hover:text-black transition-colors transform translate-y-2 group-hover:translate-y-0 duration-300">
                    Visualizar Site Completo
                  </button>
                </div>
              </div>
              <div className="p-8 flex flex-col flex-1">
                <div className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-2">{demo.category}</div>
                <h3 className="text-2xl font-bold mb-3 text-slate-900">{demo.name}</h3>
                <p className="text-slate-600 mb-6 flex-1 text-sm leading-relaxed">{demo.description}</p>
                <button onClick={() => onViewDemo(demo.id)} className="w-full py-3 rounded-lg bg-slate-900 text-white font-semibold hover:bg-blue-600 transition-colors flex items-center justify-center gap-2">
                  <ExternalLink size={18} /> Ver site
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="process" className="py-24 bg-slate-900 text-white relative overflow-hidden scroll-mt-20">
         <div className="max-w-7xl mx-auto px-6 relative z-10">
           <div className="text-center mb-20">
             <h2 className="text-3xl md:text-4xl font-bold mb-4">Como Funciona</h2>
             <p className="text-slate-400">Processo simplificado e transparente.</p>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
             {steps.map((step, index) => {
               const Icon = step.icon;
               return (
                 <div key={step.id} className="relative z-10 flex flex-col items-center text-center">
                   <div className="w-24 h-24 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center mb-6 shadow-xl shadow-blue-900/10 group hover:border-blue-500 transition-colors duration-300 relative">
                     <Icon className="w-10 h-10 text-blue-400 group-hover:text-blue-300 transition-colors" />
                     <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-blue-600 border-4 border-slate-900 flex items-center justify-center font-bold text-sm">{index + 1}</div>
                   </div>
                   <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                   <p className="text-slate-400 max-w-xs">{step.description}</p>
                 </div>
               );
             })}
           </div>
         </div>
      </section>

      <section id="contact" className="py-24 px-6 max-w-5xl mx-auto scroll-mt-20">
        <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-8 md:p-16 text-center text-white shadow-2xl relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Pronto para começar?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mt-10">
              <a href="https://wa.me/5521984125259" target="_blank" className="flex flex-col items-center justify-center p-6 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-xl border border-white/10 transition-all hover:scale-105 group">
                <MessageCircle className="w-8 h-8 mb-3 text-green-400" />
                <span className="font-bold text-lg">WhatsApp</span>
                <span className="text-xs text-blue-200 font-medium mt-1">Resposta imediata</span>
              </a>
              <a href="https://instagram.com/rd.webcrafter" target="_blank" className="flex flex-col items-center justify-center p-6 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-xl border border-white/10 transition-all hover:scale-105 group">
                <Instagram className="w-8 h-8 mb-3 text-pink-400" />
                <span className="font-bold text-lg">Instagram</span>
                <span className="text-xs text-blue-200 font-medium mt-1">Acompanhe nosso trabalho</span>
              </a>
              <a href="mailto:robertfdejoss.webcrafter@gmail.com" className="flex flex-col items-center justify-center p-6 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-xl border border-white/10 transition-all hover:scale-105 group">
                <Mail className="w-8 h-8 mb-3 text-yellow-400" />
                <span className="font-bold text-lg">E-mail</span>
                <span className="text-xs text-blue-200 font-medium mt-1">Orçamento personalizado</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-slate-50 py-12 text-center text-slate-400 text-sm border-t border-slate-200">
        <p>&copy; {new Date().getFullYear()} WebCrafter - Todos os direitos reservados.</p>
        <p className="mt-2 font-medium text-slate-500">Site feito por Robert Dejoss (Webcrafter)</p>
      </footer>
    </div>
  );
};
