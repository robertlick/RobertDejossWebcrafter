
import React, { useState, useEffect } from 'react';
import { HeartPulse, Phone, Clock, Calendar, ArrowRight, Menu, X, ShieldCheck, Microscope, Users2, Activity, MapPin, ChevronRight, Lock, Building2 } from 'lucide-react';

export const ClinicDemo: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Detectar scroll dentro do container do demo ou janela
    const container = document.getElementById('demo-scroll-container') || window;
    const handleScroll = () => {
      const offset = container instanceof Window ? container.scrollY : container.scrollTop;
      setIsScrolled(offset > 20);
    };
    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/5521984125259', '_blank');
  };

  const handlePortal = (e: React.MouseEvent) => {
    e.preventDefault();
    alert("Esta funcionalidade estaria integrada ao sistema de gestão da clínica.");
  };

  const specialties = [
    { name: 'Cardiologia', icon: Activity, desc: 'Cuidado avançado para o seu coração com tecnologia de ponta.' },
    { name: 'Pediatria', icon: Users2, desc: 'Atenção especializada e carinhosa para o crescimento dos pequenos.' },
    { name: 'Exames', icon: Microscope, desc: 'Diagnósticos precisos com laboratório próprio e resultados rápidos.' },
    { name: 'Check-up', icon: ShieldCheck, desc: 'Prevenção personalizada para manter sua saúde sempre em dia.' }
  ];

  return (
    <div className="font-sans bg-slate-50 text-slate-600 min-h-screen selection:bg-teal-500 selection:text-white relative pb-20">
      {/* Top Bar - Desaparece no mobile ou scroll */}
      <div className={`bg-slate-900 text-slate-300 text-xs transition-all duration-300 overflow-hidden ${isScrolled ? 'h-0 py-0' : 'py-2 px-6 h-auto'} hidden md:flex justify-between items-center`}>
        <div className="flex gap-6">
          <span className="flex items-center gap-2 hover:text-white transition cursor-pointer" onClick={handleWhatsApp}><Phone size={12} /> (11) 99999-9999</span>
          <span className="flex items-center gap-2 hover:text-white transition cursor-pointer"><Clock size={12} /> Seg-Sex: 07h às 20h</span>
        </div>
        <div className="flex gap-4">
          <a href="#" onClick={handlePortal} className="hover:text-white transition flex items-center gap-1"><Lock size={10} /> Portal do Paciente</a>
          <a href="#" onClick={handlePortal} className="hover:text-white transition">Resultados Online</a>
        </div>
      </div>

      {/* Navigation Sticky */}
      <nav 
        className={`sticky top-0 z-40 transition-all duration-300 border-b border-slate-100/50 
        ${isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-md py-0' 
          : 'bg-white py-2'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center relative">
          <div className="flex items-center gap-2 group cursor-pointer" onClick={() => scrollToSection('hero')}>
            <div className="w-10 h-10 bg-gradient-to-br from-teal-400 to-teal-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-teal-500/30 group-hover:scale-105 transition-transform duration-300">
              <HeartPulse size={24} />
            </div>
            <div className="leading-tight">
              <span className="block text-xl font-bold text-slate-800 tracking-tight">Vita<span className="text-teal-600">Clinic</span></span>
              <span className="block text-[10px] text-slate-400 uppercase tracking-widest font-semibold">Saúde Integrada</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 text-sm font-semibold text-slate-600">
            {[
              { label: 'Especialidades', id: 'specialties' },
              { label: 'Convênios', id: 'covenants' },
              { label: 'Unidades', id: 'units' },
              { label: 'Corpo Clínico', id: 'footer' }
            ].map((item) => (
              <button key={item.label} onClick={() => scrollToSection(item.id)} className="relative group py-2">
                <span className="group-hover:text-teal-600 transition-colors">{item.label}</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-500 transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <button onClick={handleWhatsApp} className="bg-slate-900 hover:bg-slate-800 text-white px-6 py-2.5 rounded-full font-bold transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center gap-2 text-sm active:scale-95">
              <Calendar size={16} /> Agendar Consulta
            </button>
          </div>

          {/* Mobile Toggle */}
          <button 
            className={`md:hidden p-2 rounded-lg transition-colors ${isMenuOpen ? 'text-teal-600 bg-teal-50' : 'text-slate-700 hover:bg-slate-100'}`} 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* Mobile Menu Dropdown (Animado) */}
          <div className={`absolute top-full left-0 w-full bg-white shadow-xl border-t border-slate-100 overflow-hidden transition-all duration-300 ease-in-out origin-top md:hidden ${isMenuOpen ? 'max-h-[400px] opacity-100 scale-y-100' : 'max-h-0 opacity-0 scale-y-95'}`}>
            <div className="flex flex-col p-6 gap-2">
              {[
                { label: 'Especialidades', id: 'specialties' },
                { label: 'Convênios', id: 'covenants' },
                { label: 'Unidades', id: 'units' },
                { label: 'Corpo Clínico', id: 'footer' }
              ].map((item, idx) => (
                <button 
                  key={item.label} 
                  onClick={() => scrollToSection(item.id)}
                  className="flex items-center justify-between text-lg font-semibold text-slate-700 py-3 px-4 rounded-xl hover:bg-slate-50 hover:text-teal-600 transition-colors w-full"
                  style={{ transitionDelay: `${idx * 50}ms` }}
                >
                  {item.label}
                  <ChevronRight size={16} className="text-slate-300" />
                </button>
              ))}
              <div className="h-px bg-slate-100 my-2"></div>
              <button onClick={handleWhatsApp} className="w-full bg-teal-600 text-white py-4 rounded-xl font-bold shadow-lg shadow-teal-100 flex items-center justify-center gap-2 active:scale-95 transition-transform">
                <Calendar size={20} /> Agendar Agora
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <header id="hero" className="relative py-16 lg:py-24 overflow-hidden px-6">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-teal-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 z-0"></div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <div className="animate-in slide-in-from-bottom-10 fade-in duration-700">
            <div className="inline-flex items-center gap-2 bg-white border border-teal-100 text-teal-700 px-4 py-1.5 rounded-full text-xs font-bold mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse"></span> Medicina de Excelência
            </div>
            <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 mb-6 leading-[1.1] tracking-tight">
              Sua saúde merece <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-600">atenção total.</span>
            </h1>
            <p className="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">
              Equipe multidisciplinar, diagnósticos precisos e atendimento humanizado para cuidar do que é mais importante: você e sua família.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <button onClick={handleWhatsApp} className="bg-teal-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-teal-700 transition-all shadow-lg flex items-center justify-center gap-2 group">
                Agendar Consulta <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button onClick={() => scrollToSection('specialties')} className="bg-white border-2 border-slate-200 text-slate-700 px-8 py-4 rounded-xl font-bold hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
                Conheça a Clínica
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-teal-500/10 rounded-[3rem] blur-2xl"></div>
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white">
              <img src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2068&auto=format&fit=crop" alt="Médica" className="w-full h-full object-cover max-h-[500px]" />
            </div>
          </div>
        </div>
      </header>

      {/* Specialties */}
      <section id="specialties" className="py-24 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">Especialidades</h2>
            <p className="text-slate-500 max-w-xl mx-auto">Oferecemos uma gama completa de serviços médicos integrados para sua conveniência.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {specialties.map((s, i) => (
              <div key={i} className="p-8 rounded-3xl bg-slate-50 hover:bg-white hover:shadow-2xl transition-all border border-transparent hover:border-teal-100 group cursor-pointer" onClick={handleWhatsApp}>
                <div className="w-14 h-14 bg-teal-100 rounded-2xl flex items-center justify-center text-teal-600 mb-6 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                  <s.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{s.name}</h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-6">{s.desc}</p>
                <span className="inline-flex items-center text-teal-600 font-bold text-xs uppercase tracking-widest gap-2">Saiba Mais <ArrowRight size={14} /></span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Convênios Section */}
      <section id="covenants" className="py-20 bg-slate-50 px-6 border-y border-slate-200">
        <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Convênios Aceitos</h2>
                <p className="text-slate-500">Trabalhamos com os principais planos de saúde para melhor atendê-lo.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {['Unimed', 'Bradesco Saúde', 'SulAmérica', 'Amil', 'Porto Seguro', 'NotreDame', 'Allianz', 'Omint', 'Care Plus', 'Golden Cross', 'Mediservice', 'Prevent Senior'].map((c) => (
                    <div key={c} className="bg-white p-4 h-24 rounded-xl shadow-sm border border-slate-100 flex items-center justify-center font-bold text-slate-400 hover:text-teal-600 hover:border-teal-200 transition-all hover:shadow-md cursor-default text-center text-sm">
                        {c}
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Unidades Section */}
      <section id="units" className="py-24 bg-white px-6">
         <div className="max-w-7xl mx-auto">
             <div className="text-center mb-16">
                 <h2 className="text-3xl font-bold text-slate-900 mb-4">Nossas Unidades</h2>
                 <p className="text-slate-500">Estrutura moderna e localização privilegiada.</p>
             </div>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                {/* Unit 1 */}
                <div className="rounded-3xl overflow-hidden shadow-lg border border-slate-100 hover:shadow-2xl transition-all duration-300 group">
                    <div className="h-64 bg-slate-200 relative overflow-hidden">
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10"></div>
                        <img src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Unidade Paulista" />
                        <div className="absolute bottom-4 left-4 z-20 bg-white px-4 py-1.5 rounded-full text-xs font-bold text-teal-700 shadow-lg">Unidade Paulista</div>
                    </div>
                    <div className="p-8">
                        <div className="flex items-start gap-4 mb-6">
                            <div className="w-10 h-10 rounded-full bg-teal-50 flex items-center justify-center text-teal-600 shrink-0">
                                <MapPin size={20} />
                            </div>
                            <div>
                                <h3 className="font-bold text-xl text-slate-900 mb-1">Av. Paulista, 1000</h3>
                                <p className="text-slate-500">Bela Vista - São Paulo</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-3 text-sm text-slate-600 border-t border-slate-100 pt-6">
                            <div className="flex items-center gap-3">
                                <Clock size={16} className="text-teal-500" /> <span>Seg - Sex: 07:00 às 22:00</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Building2 size={16} className="text-teal-500" /> <span>Estacionamento no local (Valet)</span>
                            </div>
                        </div>
                        <button onClick={() => window.open('https://maps.google.com', '_blank')} className="mt-8 w-full py-3 rounded-xl border border-slate-200 font-bold text-slate-700 hover:bg-slate-50 hover:text-teal-700 transition-colors">
                            Ver no Mapa
                        </button>
                    </div>
                </div>
                {/* Unit 2 */}
                <div className="rounded-3xl overflow-hidden shadow-lg border border-slate-100 hover:shadow-2xl transition-all duration-300 group">
                    <div className="h-64 bg-slate-200 relative overflow-hidden">
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10"></div>
                        <img src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=2073&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Unidade Jardins" />
                        <div className="absolute bottom-4 left-4 z-20 bg-white px-4 py-1.5 rounded-full text-xs font-bold text-teal-700 shadow-lg">Unidade Jardins</div>
                    </div>
                    <div className="p-8">
                         <div className="flex items-start gap-4 mb-6">
                            <div className="w-10 h-10 rounded-full bg-teal-50 flex items-center justify-center text-teal-600 shrink-0">
                                <MapPin size={20} />
                            </div>
                            <div>
                                <h3 className="font-bold text-xl text-slate-900 mb-1">Rua Oscar Freire, 500</h3>
                                <p className="text-slate-500">Jardins - São Paulo</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-3 text-sm text-slate-600 border-t border-slate-100 pt-6">
                            <div className="flex items-center gap-3">
                                <Clock size={16} className="text-teal-500" /> <span>Seg - Sáb: 08:00 às 20:00</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Building2 size={16} className="text-teal-500" /> <span>Próximo ao Metrô Oscar Freire</span>
                            </div>
                        </div>
                        <button onClick={() => window.open('https://maps.google.com', '_blank')} className="mt-8 w-full py-3 rounded-xl border border-slate-200 font-bold text-slate-700 hover:bg-slate-50 hover:text-teal-700 transition-colors">
                            Ver no Mapa
                        </button>
                    </div>
                </div>
             </div>
         </div>
      </section>

      {/* Footer */}
      <footer id="footer" className="bg-slate-900 text-white pt-20 pb-10 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-slate-800 pb-16 mb-10">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-teal-500 rounded-lg flex items-center justify-center text-white"><HeartPulse size={20} /></div>
              <span className="text-xl font-bold">Vita<span className="text-teal-500">Clinic</span></span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">Cuidando da sua saúde com excelência e dedicação desde 1998.</p>
          </div>
          <div>
            <h4 className="font-bold mb-6">Links Rápidos</h4>
            <ul className="flex flex-col gap-3 text-slate-400 text-sm">
              <li><button onClick={() => scrollToSection('hero')} className="hover:text-teal-400">Sobre Nós</button></li>
              <li><button onClick={() => scrollToSection('footer')} className="hover:text-teal-400">Corpo Clínico</button></li>
              <li><button onClick={() => scrollToSection('specialties')} className="hover:text-teal-400">Especialidades</button></li>
              <li><button onClick={handleWhatsApp} className="hover:text-teal-400">Trabalhe Conosco</button></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6">Contato</h4>
            <ul className="flex flex-col gap-3 text-slate-400 text-sm">
              <li className="flex items-center gap-2"><MapPin size={14} /> Av. Paulista, 1000 - SP</li>
              <li className="flex items-center gap-2 cursor-pointer hover:text-teal-400" onClick={handleWhatsApp}><Phone size={14} /> (11) 99999-9999</li>
              <li className="flex items-center gap-2"><Clock size={14} /> Seg - Sex: 07:00 - 20:00</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6">Newsletter</h4>
            <p className="text-slate-400 text-xs mb-4">Receba dicas de saúde e atualizações.</p>
            <div className="flex gap-2">
              <input type="email" placeholder="Seu e-mail" className="bg-slate-800 border-none rounded-lg px-4 py-2 text-sm w-full focus:ring-2 focus:ring-teal-500" />
              <button className="bg-teal-600 px-4 py-2 rounded-lg hover:bg-teal-700 transition" onClick={(e) => { e.currentTarget.innerHTML = "Enviado!"; }}><ArrowRight size={18} /></button>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto text-center text-slate-500 text-xs">
          &copy; {new Date().getFullYear()} VitaClinic. Todos os direitos reservados.
        </div>
      </footer>
    </div>
  );
};
