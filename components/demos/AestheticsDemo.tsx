
import React, { useState, useEffect } from 'react';
import { Sparkles, Menu, X, ArrowRight, Instagram, Facebook, Phone, Clock, MapPin, CalendarCheck, Check } from 'lucide-react';

export const AestheticsDemo: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Listen to the scroll container in the viewer or window
    const container = document.getElementById('demo-scroll-container') || window;
    const handleScroll = () => {
      const offset = container instanceof Window ? container.scrollY : container.scrollTop;
      setScrolled(offset > 50);
    };
    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const handleWhatsapp = () => {
    window.open('https://wa.me/5521984125259', '_blank');
  };

  const treatments = [
    { title: 'Harmonização Facial', desc: 'Realce seus traços com naturalidade e equilíbrio.' },
    { title: 'Tratamentos a Laser', desc: 'Tecnologia de ponta para rejuvenescimento e textura.' },
    { title: 'Estética Corporal', desc: 'Protocolos exclusivos para contorno e firmeza.' },
    { title: 'Bioestimuladores', desc: 'Estímulo natural de colágeno para pele radiante.' }
  ];

  return (
    <div className="font-sans bg-[#111] text-[#F9F8F6] min-h-full relative flex flex-col selection:bg-gold-500 selection:text-white pb-20">
      
      {/* 
         LUXURY FLOATING NAVBAR 
         Alterado de fixed para sticky para respeitar o container do DemoViewer.
         Removido translate-x e usado mx-auto para centralizar.
      */}
      <nav 
        className={`sticky z-50 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] flex flex-col items-center overflow-hidden mx-auto
          ${isMobileMenuOpen 
            ? 'top-4 w-[92%] max-w-[360px] bg-[#1a1a1a] shadow-[0_20px_50px_rgba(0,0,0,0.5)] rounded-[32px] border border-white/10' // Menu Aberto
            : scrolled 
              ? 'top-4 w-[90%] max-w-5xl rounded-full bg-[#111]/80 backdrop-blur-xl shadow-2xl py-2 border border-white/10' // Scrolled
              : 'top-6 w-[95%] max-w-6xl rounded-full bg-white/5 backdrop-blur-sm py-4 border border-white/5' // Topo
          }
        `}
      >
        <div className="w-full px-6 flex justify-between items-center relative z-20">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection('hero')}>
             <div className="w-8 h-8 rounded-full bg-[#D4AF37] flex items-center justify-center text-[#111]">
               <Sparkles size={16} fill="currentColor" />
             </div>
             <span className="text-xl font-serif tracking-[0.15em] font-bold text-[#F9F8F6]">
               LUMIÈRE
             </span>
          </div>

          {/* Desktop Menu */}
          <div className={`hidden md:flex items-center gap-8 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}>
            {[
              { label: 'Início', id: 'hero' },
              { label: 'Tratamentos', id: 'treatments' },
              { label: 'A Clínica', id: 'clinic' },
              { label: 'Contato', id: 'contact' }
            ].map((item) => (
              <button 
                key={item.label} 
                onClick={() => scrollToSection(item.id)}
                className="text-[11px] uppercase tracking-[0.2em] font-bold text-[#F9F8F6]/80 hover:text-[#D4AF37] transition-colors relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-[#D4AF37] transition-all group-hover:w-full"></span>
              </button>
            ))}
            <button 
              onClick={handleWhatsapp}
              className="border border-[#D4AF37] text-[#D4AF37] px-6 py-2 rounded-full text-[10px] uppercase tracking-[0.25em] hover:bg-[#D4AF37] hover:text-[#111] transition-all duration-500"
            >
              Agendar
            </button>
          </div>

          {/* Mobile Toggle Button */}
          <button 
            className={`md:hidden text-[#F9F8F6] p-2 transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-90 text-[#D4AF37]' : ''}`} 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Content (Expands inside the pill) */}
        <div className={`md:hidden w-full flex flex-col items-center gap-6 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${isMobileMenuOpen ? 'max-h-[500px] opacity-100 py-8' : 'max-h-0 opacity-0 py-0'}`}>
          {[
              { label: 'Início', id: 'hero' },
              { label: 'Tratamentos', id: 'treatments' },
              { label: 'A Clínica', id: 'clinic' },
              { label: 'Contato', id: 'contact' }
          ].map((item, idx) => (
            <button 
              key={item.label} 
              onClick={() => scrollToSection(item.id)}
              className={`text-2xl font-serif italic text-[#F9F8F6] hover:text-[#D4AF37] transition-all duration-500 transform ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
              style={{ transitionDelay: `${100 + idx * 50}ms` }}
            >
              {item.label}
            </button>
          ))}
          
          <div className={`w-12 h-[1px] bg-white/10 my-2 transition-all duration-500 delay-300 ${isMobileMenuOpen ? 'w-12 opacity-100' : 'w-0 opacity-0'}`}></div>

          <button 
            onClick={handleWhatsapp}
            className={`flex items-center gap-2 bg-[#D4AF37] text-[#111] px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg shadow-[#D4AF37]/20 transition-all duration-500 delay-300 transform ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
          >
            <CalendarCheck size={14} /> Reserva Online
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-[90vh] flex items-center justify-center px-8 overflow-hidden bg-[#F9F8F6] rounded-[40px] md:rounded-[60px] shadow-2xl mt-[-80px] pt-32 mx-2 md:mx-4">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/silk.png')]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 w-full items-center relative z-10 py-10 lg:py-0">
          <div className="lg:col-span-5 flex flex-col items-start text-left order-2 lg:order-1">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-[1px] w-12 bg-[#D4AF37]"></div>
              <span className="text-[#D4AF37] text-[10px] uppercase tracking-[0.4em] font-extrabold">Estética Premium</span>
            </div>
            <h1 className="font-serif text-5xl md:text-8xl lg:text-9xl leading-[0.9] text-[#1a1a1a] mb-8">
              Beleza <br/>
              <span className="italic font-light text-[#8a8a8a]">Atemporal</span>
            </h1>
            <p className="text-[#555] text-sm tracking-wider leading-relaxed mb-10 max-w-sm">
              Onde a ciência encontra a arte. Procedimentos personalizados que respeitam a sua individualidade e realçam sua luz própria.
            </p>
            <div className="flex gap-4">
              <button 
                onClick={() => scrollToSection('treatments')}
                className="bg-[#1a1a1a] text-white px-10 py-5 text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-[#D4AF37] transition-all duration-500 shadow-2xl flex items-center gap-4 group"
              >
                Nossos Serviços <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </div>
          <div className="lg:col-span-7 relative flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative w-full max-w-[500px] lg:max-w-[600px] h-[400px] lg:h-[600px]">
              <div className="absolute inset-0 bg-[#D4AF37]/10 rounded-t-full -translate-x-4 translate-y-4"></div>
              <div className="relative w-full h-full overflow-hidden rounded-t-full border-[8px] md:border-[12px] border-white shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2070&auto=format&fit=crop" 
                  alt="Mulher" 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-[3s] ease-in-out" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Treatments Preview */}
      <section id="treatments" className="py-32 px-8 bg-[#111]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 border-l-2 border-[#D4AF37] pl-6">
            <h2 className="text-4xl font-serif text-white mb-2">Tratamentos Exclusivos</h2>
            <p className="text-gray-500 text-sm tracking-widest uppercase">Protocolos personalizados</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {treatments.map((t, i) => (
              <div key={i} className="group border-l border-white/10 pl-8 py-4 hover:border-[#D4AF37] transition-all cursor-pointer hover:bg-white/5 pr-4 rounded-r-lg" onClick={handleWhatsapp}>
                <span className="text-[#D4AF37] font-serif italic text-2xl mb-4 block">0{i + 1}</span>
                <h3 className="text-xl font-serif text-white mb-4 group-hover:text-[#D4AF37] transition-colors">{t.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed tracking-wider mb-4">{t.desc}</p>
                <span className="text-[10px] uppercase tracking-widest text-white/40 group-hover:text-[#D4AF37] flex items-center gap-2">Saiba Mais <ArrowRight size={10} /></span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* A Clínica Section (New) */}
      <section id="clinic" className="py-32 px-8 bg-[#F9F8F6] text-[#1a1a1a]">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                  <div className="h-[1px] w-12 bg-[#D4AF37] mb-6"></div>
                  <h2 className="font-serif text-5xl mb-6">O Espaço</h2>
                  <p className="text-gray-600 leading-relaxed mb-6 font-light">
                      Um refúgio de tranquilidade no coração da cidade. Nossa clínica foi projetada para proporcionar uma experiência sensorial completa, onde cada detalhe inspira bem-estar, sofisticação e relaxamento profundo.
                  </p>
                  <ul className="space-y-4 mt-8">
                      {['Tecnologia de última geração', 'Ambientes privativos e climatizados', 'Equipe multidisciplinar especializada', 'Aromaterapia ambiente'].map(item => (
                          <li key={item} className="flex items-center gap-3 font-serif italic text-[#111]">
                              <span className="flex items-center justify-center w-5 h-5 rounded-full bg-[#D4AF37]/20 text-[#D4AF37]"><Check size={10} /></span> {item}
                          </li>
                      ))}
                  </ul>
              </div>
              <div className="order-1 lg:order-2 grid grid-cols-2 gap-4">
                  <div className="mt-12 overflow-hidden rounded-2xl">
                     <img src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop" className="w-full h-64 object-cover hover:scale-105 transition-transform duration-700" alt="Interior da Clínica" />
                  </div>
                  <div className="overflow-hidden rounded-2xl">
                     <img src="https://images.unsplash.com/photo-1519494080410-f9aa76cb4283?q=80&w=2074&auto=format&fit=crop" className="w-full h-64 object-cover hover:scale-105 transition-transform duration-700" alt="Detalhes de Luxo" />
                  </div>
              </div>
          </div>
      </section>

      {/* Contact Section (New) */}
      <section id="contact" className="py-32 px-8 bg-[#111] relative overflow-hidden">
           {/* Background Elements */}
           <div className="absolute top-0 right-0 w-1/3 h-full bg-[#1a1a1a]/50 backdrop-blur-3xl -skew-x-12 translate-x-20 pointer-events-none"></div>
           <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#D4AF37]/5 rounded-full blur-[100px] pointer-events-none"></div>

           <div className="max-w-4xl mx-auto relative z-10 text-center">
               <span className="text-[#D4AF37] text-xs uppercase tracking-[0.3em] font-bold block mb-4">Contato</span>
               <h2 className="font-serif text-4xl md:text-5xl text-white mb-12">Agende sua avaliação</h2>
               
               <form className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12" onSubmit={(e) => { e.preventDefault(); alert("Mensagem enviada com sucesso!"); }}>
                   <div className="relative group">
                       <input type="text" placeholder="Nome Completo" className="w-full bg-white/5 border border-white/10 rounded-lg px-6 py-4 text-white focus:border-[#D4AF37] focus:outline-none transition-colors placeholder:text-gray-600" required />
                   </div>
                   <div className="relative group">
                       <input type="tel" placeholder="Telefone" className="w-full bg-white/5 border border-white/10 rounded-lg px-6 py-4 text-white focus:border-[#D4AF37] focus:outline-none transition-colors placeholder:text-gray-600" required />
                   </div>
                   <div className="relative group md:col-span-2">
                       <input type="email" placeholder="E-mail" className="w-full bg-white/5 border border-white/10 rounded-lg px-6 py-4 text-white focus:border-[#D4AF37] focus:outline-none transition-colors placeholder:text-gray-600" required />
                   </div>
                   <button className="md:col-span-2 bg-[#D4AF37] text-[#111] py-4 rounded-lg font-bold uppercase tracking-widest hover:bg-white transition-colors duration-300 shadow-lg shadow-[#D4AF37]/20">Enviar Solicitação</button>
               </form>
               
               <p className="text-gray-500 text-sm">Ou entre em contato via WhatsApp: <button onClick={handleWhatsapp} className="text-[#D4AF37] underline hover:text-white transition-colors ml-1 font-serif italic">(21) 98412-5259</button></p>
           </div>
      </section>

      {/* Footer Luxe */}
      <footer id="footer" className="py-24 px-8 border-t border-white/5 bg-[#111]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-20 items-center text-center">
          <div className="flex flex-col items-center gap-6">
            <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-bold">Localização</span>
            <p className="text-gray-400 text-sm italic">Alameda Gabriel Monteiro da Silva, 450 - SP</p>
          </div>
          <div className="flex flex-col items-center gap-4">
            <span className="text-4xl font-serif tracking-[0.3em] font-bold">LUMIÈRE</span>
            <div className="w-12 h-[1px] bg-[#D4AF37]"></div>
            <div className="flex gap-8 mt-4">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-[#D4AF37] transition-colors"><Instagram size={20} /></a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-[#D4AF37] transition-colors"><Facebook size={20} /></a>
              <button onClick={handleWhatsapp} className="text-gray-500 hover:text-[#D4AF37] transition-colors"><Phone size={20} /></button>
            </div>
          </div>
          <div className="flex flex-col items-center gap-6">
            <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-bold">Atendimento</span>
            <p className="text-gray-400 text-sm italic">+55 (21) 98412-5259</p>
          </div>
        </div>
        <div className="text-center text-[10px] text-gray-700 uppercase tracking-[0.5em] mt-24">
          &copy; {new Date().getFullYear()} Lumière Aesthetics. Todos os direitos reservados.
        </div>
      </footer>
    </div>
  );
};
