/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { 
  BarChart3, 
  TrendingUp, 
  ShieldCheck, 
  Globe2, 
  Users2, 
  Database, 
  ArrowUpRight,
  Target,
  Palette,
  Briefcase,
  Layers,
  Cpu
} from 'lucide-react';
import { Section } from './components/Section';
import { BentoCard } from './components/BentoCard';
import { MarketCurve, MinimalBarChart, RevenuePieChart } from './components/Charts';
import { Portrait } from './components/Portraits';
import { Image } from './components/Image';
import { SegmentedProgressBar } from './components/SegmentedProgressBar';
import { FOUNDERS, ADVISORS } from './constants';
import { cn } from './lib/utils';

export default function App() {
  const [activeSection, setActiveSection] = React.useState('overview');

  React.useEffect(() => {
    const handleScroll = () => {
      const sections = ['overview', 'market', 'forecasting', 'team', 'financials', 'strategy'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && scrollPosition >= element.offsetTop && scrollPosition < element.offsetTop + element.offsetHeight) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="paper-texture min-h-screen selection:bg-artvalo-accent/20">
      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full glass-nav shadow-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-12">
          <div className="flex items-center gap-3">
            <motion.div 
              initial={{ rotate: -45, scale: 0.8 }}
              animate={{ rotate: 0, scale: 1 }}
              className="flex items-center justify-center p-1 border border-artvalo-accent/20 rounded"
            >
              <div className="h-4 w-4 relative">
                <div className="absolute inset-0 border-[1px] border-artvalo-accent rounded-[1px]" />
                <div className="absolute inset-0 flex items-center justify-center text-[7px] font-serif font-bold text-artvalo-accent">AV</div>
              </div>
            </motion.div>
            <span className="font-serif text-lg font-bold tracking-widest text-artvalo-ink uppercase">ArtValo</span>
          </div>
          <div className="hidden gap-8 text-[10px] font-bold uppercase tracking-[0.25em] md:flex">
            {[
              { id: 'overview', label: 'Overview' },
              { id: 'market', label: 'Market' },
              { id: 'forecasting', label: 'Forecasting' },
              { id: 'team', label: 'Team' },
              { id: 'financials', label: 'Financials' },
              { id: 'strategy', label: 'Strategy' },
            ].map((item) => (
              <a 
                key={item.id}
                href={`#${item.id}`} 
                className={cn(
                  "relative transition-colors hover:text-artvalo-accent",
                  activeSection === item.id ? "text-artvalo-accent" : "text-artvalo-muted"
                )}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div 
                    layoutId="nav-underline"
                    className="absolute -bottom-1 left-0 right-0 h-[1.5px] bg-artvalo-accent" 
                  />
                )}
              </a>
            ))}
          </div>
          <div className="md:hidden">
             <div className="h-4 w-4 relative">
                <div className="absolute inset-0 border border-artvalo-ink/20" />
                <div className="absolute inset-0 flex items-center justify-center text-[8px] font-serif">AV</div>
             </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <Section className="min-h-screen flex items-center pt-32 pb-20 overflow-hidden" id="overview">
        <div className="absolute -left-20 top-20 av-watermark">ARTVALO</div>
        <div className="relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.2, 0.8, 0.2, 1] }}
            className="mb-12"
          >
            <span className="font-serif text-[10vw] md:text-[8vw] leading-none opacity-[0.04] absolute -top-12 left-0 font-bold select-none pointer-events-none">ARTVALO</span>
            <div className="font-serif text-xs tracking-[0.6em] text-artvalo-accent uppercase mb-8 font-bold animate-slow-reveal">
              The Intelligence Layer
            </div>
            <h1 className="font-serif text-6xl md:text-8xl lg:text-[10rem] leading-[0.85] text-artvalo-ink tracking-tight font-bold italic">
              ArtValo
            </h1>
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-8 items-stretch">
            <div className="flex-1">
              <BentoCard accentBorder className="h-full flex flex-col justify-center !p-10 md:!p-16">
                <div className="space-y-10">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                  >
                    <h2 className="font-serif text-4xl md:text-5xl text-artvalo-ink tracking-tight font-medium leading-tight">
                      AI Auction Forecasting <br />
                      <span className="italic text-artvalo-muted">& Guarantee Pricing</span>
                    </h2>
                  </motion.div>
                  
                  <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    className="max-w-xl text-lg text-artvalo-muted leading-relaxed font-light"
                  >
                    AI-powered data infrastructure for auction houses, guarantors, and financial stakeholders operating in the global art market.
                  </motion.p>
                </div>
              </BentoCard>
            </div>

            <div className="lg:w-1/3">
              <BentoCard className="h-full flex flex-col justify-between shadow-lg" watermark="AV">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-[10px] font-bold uppercase tracking-wider text-artvalo-muted">Market Opportunity</h3>
                  <span className="text-[9px] bg-artvalo-secondary/20 text-artvalo-secondary px-2 py-0.5 rounded uppercase font-bold tracking-widest">Global</span>
                </div>
                <div className="text-6xl font-serif text-artvalo-ink">$57.5B</div>
                <p className="text-[10px] text-artvalo-muted uppercase tracking-widest mt-1 font-semibold">Annual Transaction Volume</p>
                <div className="mt-12 h-24 flex items-end gap-1 px-4 relative">
                   <div className="absolute inset-x-0 top-0 h-[1px] bg-artvalo-ink/5" />
                   <div className="bg-artvalo-accent/30 w-full h-[35%] transition-all hover:h-[40%] cursor-help"></div>
                   <div className="bg-artvalo-accent/50 w-full h-[55%] transition-all hover:h-[60%] cursor-help"></div>
                   <div className="bg-artvalo-accent/70 w-full h-[80%] transition-all hover:h-[85%] cursor-help"></div>
                   <div className="bg-artvalo-accent w-full h-[100%] transition-all hover:h-[105%] cursor-help hover:bg-artvalo-accent/90"></div>
                </div>
              </BentoCard>
            </div>
          </div>
        </div>
      </Section>

      {/* Breathing Section — Quote */}
      <Section className="bg-artvalo-ink text-white py-32 overflow-hidden relative">
         <div className="av-watermark opacity-5 -right-20">INFRA</div>
         <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
            <Palette className="h-8 w-8 text-artvalo-accent mx-auto mb-4 opacity-50" />
            <p className="font-serif text-3xl md:text-5xl italic leading-tight text-white/90">
              "The $57.5B art market increasingly depends on guarantees and predictive pricing intelligence."
            </p>
            <div className="h-[1px] w-12 bg-artvalo-accent mx-auto" />
            <p className="text-[10px] uppercase tracking-[0.4em] text-white/40">Market Intelligence Strategy</p>
         </div>
      </Section>

      {/* Problem & Solution */}
      <Section title="Problem & Infrastructure Solution" id="market">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <BentoCard className="bg-artvalo-ink text-white border-none space-y-8">
            <div className="space-y-2">
              <span className="text-artvalo-accent text-[10px] font-medium uppercase tracking-[0.2em]">The Problem</span>
              <h3 className="text-3xl font-serif">A lack of forecasting infrastructure</h3>
            </div>
            <ul className="space-y-6">
              {[
                { icon: Layers, text: 'Fragmented pricing systems with inconsistent historical data' },
                { icon: Target, text: 'Intuition-driven guarantees leading to mispriced risk' },
                { icon: BarChart3, text: 'Limited access to quantitative forecasting tools' },
                { icon: TrendingUp, text: 'Millions committed before auctions begin without downside analysis' }
              ].map((item, i) => (
                <li key={i} className="flex gap-4 items-start group">
                  <item.icon className="h-5 w-5 text-artvalo-accent mt-1" />
                  <span className="text-white/70 text-sm leading-relaxed group-hover:text-white transition-colors">{item.text}</span>
                </li>
              ))}
            </ul>
          </BentoCard>

          <BentoCard className="space-y-8">
            <div className="space-y-2">
              <span className="text-artvalo-secondary text-[10px] font-medium uppercase tracking-[0.2em]">The Solution</span>
              <h3 className="text-3xl font-serif">ArtValo Integrated Analytics</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-4">
                <p className="text-[10px] uppercase tracking-widest text-artvalo-muted font-bold">Data Aggregation</p>
                <div className="space-y-2">
                  {['Historical auction records', 'Provenance data', 'Comparable sales', 'Artist market cycles', 'Exhibition history', 'Collector demand behavior'].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-artvalo-ink/80">
                      <div className="h-1 w-1 bg-artvalo-secondary rounded-full" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-4">
                <p className="text-[10px] uppercase tracking-widest text-artvalo-muted font-bold">Forecast Outputs</p>
                <div className="space-y-3">
                  {[
                    { label: 'Hammer Prices', desc: 'Probability distribution' },
                    { label: 'Guarantee Levels', desc: 'Optimal commitment' },
                    { label: 'Downside Exposure', desc: 'VaR analysis' },
                    { label: 'Upside-Sharing', desc: 'Profit participation modeling' }
                  ].map((item, i) => (
                    <div key={i} className="border-b border-artvalo-ink/5 pb-2">
                      <p className="text-xs font-bold text-artvalo-accent">{item.label}</p>
                      <p className="text-[10px] text-artvalo-muted italic">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </BentoCard>
        </div>
      </Section>

      {/* Case Study — Salvator Mundi */}
      <Section className="bg-artvalo-card/30" id="forecasting">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/3 space-y-8">
            <motion.div 
               whileHover={{ y: -5, scale: 1.01 }}
               className="p-1 border border-artvalo-ink/10 rounded-[2px] bg-white shadow-2xl transition-transform duration-700 w-[90%] mx-auto"
            >
              <div className="aspect-[3.5/5] relative overflow-hidden rounded-[1px] bg-artvalo-bg border border-artvalo-ink/5">
                 <Image 
                    src="/images/salvator-mundi.jpg" 
                    alt="Salvator Mundi" 
                    className="h-full w-full object-cover"
                 />
              </div>
            </motion.div>
            <div className="text-center space-y-3 px-6">
               <div className="font-serif italic text-2xl text-artvalo-ink">Salvator Mundi</div>
               <div className="text-[10px] uppercase tracking-[0.4em] text-artvalo-accent font-bold">Case Study: ID-450.3M</div>
               <div className="h-[0.5px] w-12 bg-artvalo-ink/10 mx-auto" />
               <p className="text-[10px] text-artvalo-muted uppercase tracking-widest leading-relaxed font-medium">Leonardo da Vinci, c. 1500.<br/>Sold for $450.3M at Christie's (2017)</p>
            </div>
          </div>
          <div className="lg:w-2/3 space-y-10 flex flex-col justify-center">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                 <div className="h-[1px] w-8 bg-artvalo-accent" />
                 <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-artvalo-accent">Predictive Benchmarking</span>
              </div>
              <h3 className="font-serif text-5xl md:text-6xl text-artvalo-ink tracking-tighter leading-tight italic">Exceeding the <br/><span className="not-italic">Guarantee</span></h3>
              <div className="space-y-4">
                <p className="text-xl text-artvalo-muted leading-relaxed font-light">
                  Leonardo da Vinci’s “Salvator Mundi” sold for $450.3M, exceeding its guarantee level by roughly <span className="text-artvalo-ink font-semibold">$350M</span> and generating approximately <span className="text-artvalo-ink font-semibold">$175M</span> in profit for the guarantor.
                </p>
                <p className="text-sm text-artvalo-muted/80 font-light leading-relaxed italic border-l border-artvalo-accent/30 pl-4">
                  ArtValo turns exceptional luck into <span className="text-artvalo-accent font-medium">structured</span> financial forecasting—turning guarantee pricing into a data-driven, <span className="text-artvalo-accent font-medium">repeatable</span> decision system.
                </p>
              </div>
            </div>
            
            <BentoCard className="bg-white border-none shadow-xl !p-10" watermark="MODEL">
              <div className="space-y-12">
                <div className="flex items-center justify-between pb-4 border-b border-artvalo-ink/5">
                  <span className="text-[10px] uppercase tracking-widest font-bold text-artvalo-muted">Financial Outcome Stack</span>
                  <div className="flex items-center gap-2">
                    <span className="text-[8px] uppercase font-bold tracking-widest text-artvalo-muted">Benchmark Analysis</span>
                    <BarChart3 className="h-3 w-3 text-artvalo-accent" />
                  </div>
                </div>

                <div className="space-y-10">
                  {/* The Value Stack Visual */}
                  <div className="relative">
                    <div className="flex justify-between items-end mb-4 px-1">
                      <div className="space-y-1">
                        <p className="text-[10px] uppercase font-bold text-artvalo-muted">Base Protection</p>
                        <p className="text-xl font-serif text-artvalo-secondary leading-none">$100.0M</p>
                      </div>
                      <div className="text-right space-y-1">
                        <p className="text-[10px] uppercase font-bold text-artvalo-accent">Realized Alpha</p>
                        <p className="text-xl font-serif text-artvalo-accent leading-none">+$350.3M</p>
                      </div>
                    </div>
                    
                    <div className="h-4 w-full bg-artvalo-ink/5 rounded-[2px] overflow-hidden flex relative">
                      {/* Grid markers */}
                      <div className="absolute inset-0 flex justify-between pointer-events-none px-[25%] opacity-10">
                        <div className="h-full w-[1px] bg-artvalo-ink" />
                        <div className="h-full w-[1px] bg-artvalo-ink" />
                      </div>
                      
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: '22.2%' }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="h-full bg-artvalo-secondary relative group"
                      >
                        <div className="absolute -top-8 left-0 text-[8px] font-bold text-artvalo-secondary opacity-0 group-hover:opacity-100 transition-opacity">GUARANTEE</div>
                      </motion.div>
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: '77.8%' }}
                        transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                        className="h-full bg-artvalo-accent relative group"
                      >
                        <div className="absolute -top-8 right-0 text-[8px] font-bold text-artvalo-accent opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-widest">Market Upside</div>
                        {/* Shimmer effect for the upside */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
                      </motion.div>
                    </div>

                    <div className="flex justify-between mt-3 px-1 text-[9px] uppercase tracking-widest font-bold opacity-40">
                      <span>0.0</span>
                      <span>Target Level</span>
                      <span>$450.3M Outcome</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-8 pt-4 border-t border-artvalo-ink/5">
                    <div className="group cursor-default">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-artvalo-secondary" />
                        <p className="text-[10px] uppercase text-artvalo-muted font-bold tracking-widest group-hover:text-artvalo-accent transition-colors">Guarantor Profit</p>
                      </div>
                      <p className="text-4xl font-serif text-artvalo-ink leading-none">$175.0M</p>
                      <p className="text-[9px] text-artvalo-muted mt-2 uppercase tracking-wide">Net Participation</p>
                    </div>
                    <div className="group cursor-default">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-artvalo-accent" />
                        <p className="text-[10px] uppercase text-artvalo-muted font-bold tracking-widest group-hover:text-artvalo-accent transition-colors">Outcome Alpha</p>
                      </div>
                      <p className="text-4xl font-serif text-artvalo-accent leading-none">350%</p>
                      <p className="text-[9px] text-artvalo-muted mt-2 uppercase tracking-wide">Above Forecast</p>
                    </div>
                  </div>
                </div>
              </div>
            </BentoCard>
          </div>
        </div>
      </Section>

      {/* Breathing Section — Financial Pulse */}
      <Section className="py-24 border-y border-artvalo-ink/5">
         <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center items-center">
            {[
              { label: 'Market Volume', val: '$57.5B' },
              { label: 'Active Guarantors', val: '140+' },
              { label: 'Forecast Accuracy', val: '92.4%' },
              { label: 'SaaS Expansion', val: '24%' },
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: i * 0.1 }}
                className="space-y-1"
              >
                <div className="text-[9px] uppercase tracking-[0.3em] text-artvalo-muted font-bold font-mono">{stat.label}</div>
                <div className="text-3xl font-serif text-artvalo-ink">{stat.val}</div>
              </motion.div>
            ))}
         </div>
      </Section>

      {/* Market, Business Model, Revenue */}
      <Section id="financials" title="Market Economics">

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Box 1: Market Size */}
          <BentoCard className="flex flex-col">
            <div className="space-y-4 mb-8">
              <h4 className="font-serif text-2xl uppercase tracking-tighter">Market Size</h4>
              <p className="text-xs text-artvalo-muted leading-relaxed">Growth of financialized auctions and third-party guarantees is driving demand for institutional data infrastructure.</p>
            </div>
            <div className="mt-auto">
              <MinimalBarChart data={[
                { name: '2021', value: 45 },
                { name: '2022', value: 52 },
                { name: '2023', value: 57.5 },
              ]} />
              <div className="mt-4 flex items-baseline gap-2">
                <span className="text-4xl font-serif text-artvalo-ink">$57.5B</span>
                <span className="text-[10px] uppercase tracking-widest text-artvalo-accent font-bold">Global Art Market</span>
              </div>
            </div>
          </BentoCard>

          {/* Box 2: Business Model */}
          <BentoCard className="bg-artvalo-ink text-white border-none lg:col-span-1">
             <div className="space-y-8">
                <div className="space-y-2">
                  <h4 className="font-serif text-2xl uppercase tracking-tighter text-artvalo-accent">Business Model</h4>
                  <p className="text-[10px] uppercase tracking-widest text-white/40">Tiered SaaS & API Infrastructure</p>
                </div>
                
                <div className="space-y-4">
                  {[
                    { name: 'Professional Platform', price: '$1,500/mo' },
                    { name: 'Institutional Analytics', price: '$6,000/mo' },
                    { name: 'Enterprise API', price: '$25,000/yr' }
                  ].map((tier, i) => (
                    <div key={i} className="flex justify-between items-center group cursor-default">
                      <span className="text-sm font-light text-white/80 group-hover:text-white transition-colors">{tier.name}</span>
                      <div className="h-[1px] flex-1 mx-4 bg-white/10 group-hover:bg-artvalo-accent transition-colors" />
                      <span className="text-xs font-serif italic text-artvalo-accent">{tier.price}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-8 border-t border-white/10">
                   <p className="text-[10px] uppercase tracking-widest text-white/40 mb-4 font-bold">Primary Clients</p>
                   <div className="grid grid-cols-2 gap-2">
                     {['Auction Houses', 'Private Guarantors', 'Galleries', 'Family Offices', 'Art Lenders'].map((client, i) => (
                       <div key={i} className="text-[10px] px-2 py-1 bg-white/5 border border-white/10 rounded flex items-center gap-2">
                         <div className="h-1 w-1 bg-artvalo-accent rounded-full" />
                         {client}
                       </div>
                     ))}
                   </div>
                </div>
             </div>
          </BentoCard>

          {/* Box 3: Revenue Forecast */}
          <BentoCard className="flex flex-col">
            <div className="space-y-4 mb-4">
              <h4 className="font-serif text-2xl uppercase tracking-tighter">Revenue Forecast</h4>
              <p className="text-xs text-artvalo-muted">1% market penetration potential targets institutional and B2B segments.</p>
            </div>
            <RevenuePieChart data={[
              { name: 'B2B SaaS', value: 70 },
              { name: 'Data Licensing', value: 20 },
              { name: 'Advisory', value: 10 }
            ]} />
            <div className="mt-6 flex flex-col items-center">
              <span className="text-4xl font-serif text-artvalo-ink">$2.3B</span>
              <span className="text-[10px] uppercase tracking-widest text-artvalo-accent font-bold">Revenue Opportunity</span>
            </div>
          </BentoCard>
        </div>
      </Section>

      {/* Team & Advisory Network */}
      <Section title="Founding Team & Advisory Network" id="team">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <BentoCard className="lg:col-span-3 !p-0 border-none bg-artvalo-ink text-artvalo-bg overflow-hidden shadow-2xl">
            <div className="p-8 md:p-10 space-y-10">
              <h5 className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-40">Founding Professional Team</h5>
              {/* Founders Section */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0">
                {FOUNDERS.map((founder, i) => (
                  <div key={i} className={cn(
                    "flex flex-col items-start px-0 md:px-8",
                    i !== 0 && "md:border-l md:border-white/10"
                  )}>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 relative shrink-0">
                        <div className="absolute inset-0 rounded-full bg-white/5 border border-white/10" />
                        <Portrait type={founder.type} className="w-full h-full text-white/80" />
                      </div>
                      <div className="space-y-0.5">
                        <h6 className="font-serif text-base tracking-tight uppercase leading-none">{founder.name}</h6>
                        <p className="text-[9px] uppercase font-bold tracking-widest text-artvalo-secondary">{founder.role}</p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <p className="text-[9px] font-mono text-white/40 uppercase leading-relaxed tracking-wider">{founder.background}</p>
                      <p className="text-[11px] text-white/60 leading-relaxed font-light">{founder.focus}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="h-[1px] w-full bg-white/5" />

              {/* Advisory Subsection */}
              <div className="space-y-6">
                <h5 className="text-[9px] font-bold uppercase tracking-[0.3em] opacity-40">Advisory Network</h5>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-4">
                  {ADVISORS.map((advisor, i) => (
                    <div key={i} className="flex justify-between items-center text-[10px] group border-b border-white/5 pb-2">
                      <span className="text-white/50 uppercase font-medium">{advisor.role.split(' ').slice(0, 2).join(' ')}</span>
                      <span className="text-white/80 font-bold group-hover:text-artvalo-accent transition-colors">{advisor.name}</span>
                    </div>
                  ))}
                  <div className="flex justify-between items-center text-[10px] opacity-70 italic border-b border-white/5 pb-2">
                    <span className="text-white/40">Auction Specialists</span>
                    <span>Sotheby's / Christie's</span>
                  </div>
                </div>
              </div>
            </div>
          </BentoCard>

          <div className="flex flex-col gap-6">
            <BentoCard className="bg-artvalo-accent text-white border-none flex-1 flex flex-col justify-center">
              <h3 className="text-[10px] font-bold uppercase tracking-widest mb-1 opacity-80">Market Penetration</h3>
              <div className="text-5xl font-serif">$2.3B</div>
              <p className="text-[10px] uppercase font-bold mt-2 tracking-widest">1% Addressable Share</p>
            </BentoCard>
            
            <BentoCard className="flex flex-col justify-center border-artvalo-accent/20">
               <div className="flex items-center gap-2 mb-2">
                  <div className="h-2 w-2 bg-artvalo-secondary rounded-full" />
                  <span className="text-[10px] font-bold uppercase tracking-widest">Growth Staging</span>
               </div>
               <p className="text-xs text-artvalo-muted leading-relaxed">Scaling infrastructure for private museums & family offices by Q4 2026.</p>
            </BentoCard>
          </div>
        </div>
      </Section>

      {/* Allocation & Dev Costs */}
      <Section id="strategy" title="$500K Initial Raise">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <BentoCard className="lg:col-span-8 !p-0 border-none bg-white shadow-lg overflow-hidden" noPadding>
            <div className="p-8 pb-4">
               <h4 className="font-serif text-3xl tracking-tighter italic">Strategic Allocation</h4>
               <p className="text-sm text-artvalo-muted max-w-xl mt-2 font-light">Capital deployment focused on proprietary data acquisition and high-fidelity price modeling.</p>
            </div>
            <div className="p-10 pt-4">
              <SegmentedProgressBar 
                segments={[
                  { label: 'Artwork acquisition', value: 20, color: '#2D2D2D', amount: '$20K' },
                  { label: 'Product development', value: 180, color: '#C65D3D', amount: '$180K' },
                  { label: 'Data acquisition', value: 150, color: '#7A9D8F', amount: '$150K' },
                  { label: 'Market expansion', value: 100, color: '#8E9299', amount: '$100K' },
                  { label: 'Legal & Ops', value: 50, color: '#F0EBE4', amount: '$50K' },
                ]}
              />
            </div>
            
            <div className="bg-artvalo-bg/50 p-8 border-t border-artvalo-ink/5">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="space-y-4">
                     <div className="flex items-center gap-3">
                        <ShieldCheck className="h-4 w-4 text-artvalo-accent" />
                        <h5 className="text-[10px] font-bold uppercase tracking-widest">Entry Strategy Insight</h5>
                     </div>
                     <p className="text-xs text-artvalo-muted leading-relaxed italic">
                        "ArtValo strategically allocates $20K toward acquiring selected artworks. This serves as a direct entry point into the ecosystem of auction houses and private collectors, enabling relationship-building and institutional access."
                     </p>
                  </div>
                  <div className="space-y-4">
                    <h5 className="text-[10px] font-bold uppercase tracking-widest text-center opacity-40">Relationship Flow</h5>
                    <div className="flex items-center justify-between gap-2 px-4 relative">
                       <div className="absolute top-1/2 left-4 right-4 h-[0.5px] bg-artvalo-ink/10 -translate-y-1/2 z-0" />
                       {[
                         { id: 'AH', label: 'Houses' },
                         { id: 'C', label: 'Collectors' },
                         { id: 'G', label: 'Galleries' },
                         { id: 'AV', label: 'ArtValo', accent: true }
                       ].map((node, i) => (
                         <div key={i} className={cn(
                           "relative z-10 w-10 h-10 rounded-full flex items-center justify-center text-[8px] font-bold border",
                           node.accent ? "bg-artvalo-accent text-white border-artvalo-accent" : "bg-white text-artvalo-ink border-artvalo-ink/10"
                         )}>
                           {node.id}
                           {i < 3 && <div className="absolute -right-3 top-1/2 -translate-y-1/2 text-artvalo-ink/20">→</div>}
                         </div>
                       ))}
                    </div>
                  </div>
               </div>
            </div>
          </BentoCard>

          <div className="lg:col-span-4 flex flex-col gap-6">
            <BentoCard className="bg-artvalo-ink text-white border-none flex-1 flex flex-col justify-center">
              <div className="space-y-4 mb-4">
                <h4 className="font-serif text-2xl uppercase tracking-tighter text-artvalo-accent">Dev Phase</h4>
                <p className="text-[9px] uppercase tracking-widest text-white/40">Infrastructure Sprint</p>
              </div>
              <div className="h-[180px]">
                <MinimalBarChart horizontal data={[
                   { name: 'Fe', value: 60, color: '#C65D3D' },
                   { name: 'Be', value: 55, color: '#7A9D8F' },
                   { name: 'Alg', value: 40, color: '#9CA3AF' }, // grey fix
                   { name: 'UX', value: 25, color: '#D6CFC7' },
                ]} />
              </div>
            </BentoCard>
            <BentoCard className="border-artvalo-accent/10">
               <div className="text-[10px] uppercase font-bold tracking-widest mb-2 opacity-50">SaaS Roadmap</div>
               <p className="text-xs text-artvalo-muted italic leading-relaxed">
                 Scaling to full institutional API deployment by Q4 2026.
               </p>
            </BentoCard>
          </div>
        </div>
      </Section>

      {/* Roadmap & Vision */}
      <Section title="Ecosystem Vision" id="vision">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
           <div className="space-y-8">
              <div className="space-y-4">
                 <h4 className="font-serif text-3xl">Strategic Entry</h4>
                 <p className="text-artvalo-muted leading-relaxed font-light">
                   ArtValo enters through institutional auction intelligence and guarantee pricing infrastructure. We solve the high-stakes uncertainty faced by specialists and guarantors.
                 </p>
              </div>
              <div className="space-y-6">
                 {[
                   { icon: Target, title: 'Phase 1: Institutional Core', text: 'Auction specialists, guarantors, and large galleries.' },
                   { icon: Cpu, title: 'Phase 2: Forecasting Standard', text: 'Integrating with art lenders and family offices.' },
                   { icon: Globe2, title: 'Long-term Vision', text: 'The standard forecasting and pricing infrastructure layer for the global art market.' }
                 ].map((item, i) => (
                   <div key={i} className="flex gap-4 group">
                      <div className="h-10 w-10 shrink-0 flex items-center justify-center rounded-full bg-artvalo-card border border-artvalo-ink/5 group-hover:border-artvalo-accent transition-colors">
                         <item.icon className="h-4 w-4 text-artvalo-accent" />
                      </div>
                      <div className="space-y-1">
                         <p className="text-sm font-bold uppercase tracking-tight">{item.title}</p>
                         <p className="text-xs text-artvalo-muted leading-relaxed">{item.text}</p>
                      </div>
                   </div>
                 ))}
              </div>
           </div>

           <BentoCard className="bg-white border-artvalo-ink/5 aspect-square flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 paper-texture opacity-30" />
              {/* Ecosystem Network Diagram (SVG) */}
              <svg viewBox="0 0 400 400" className="w-[80%] h-[80%] text-artvalo-muted z-10">
                 <defs>
                   <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                     <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" />
                   </marker>
                 </defs>
                 
                 {/* Center Node */}
                 <circle cx="200" cy="200" r="40" fill="#C65D3D" fillOpacity="0.1" stroke="#C65D3D" strokeWidth="1" />
                 <text x="200" y="195" textAnchor="middle" fill="#C65D3D" fontSize="10" fontWeight="bold" dy=".3em">ARTVALO</text>
                 <text x="200" y="210" textAnchor="middle" fill="#C65D3D" fontSize="7" uppercase tracking-widest>INFRASTRUCTURE</text>

                 {/* Peripheral Nodes */}
                 {[
                   { x: 100, y: 100, label: 'AUCTION HOUSES' },
                   { x: 300, y: 100, label: 'GUARANTORS' },
                   { x: 100, y: 300, label: 'ART LENDERS' },
                   { x: 300, y: 300, label: 'FAMILY OFFICES' }
                 ].map((node, i) => (
                   <g key={i}>
                     <line x1="200" y1="200" x2={node.x} y2={node.y} stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" opacity="0.3" />
                     <circle cx={node.x} cy={node.y} r="30" fill="#F0EBE4" stroke="currentColor" strokeWidth="0.5" />
                     <text x={node.x} y={node.y} textAnchor="middle" fill="#2D2D2D" fontSize="6" fontWeight="bold" className="uppercase tracking-tighter" dy=".3em">{node.label}</text>
                   </g>
                 ))}

                 {/* Ecosystem Waves */}
                 <circle cx="200" cy="200" r="140" fill="none" stroke="currentColor" strokeWidth="0.2" strokeDasharray="2 2" opacity="0.2" />
                 <circle cx="200" cy="200" r="180" fill="none" stroke="currentColor" strokeWidth="0.2" strokeDasharray="1 1" opacity="0.1" />
              </svg>
           </BentoCard>
        </div>
      </Section>

      {/* Footer */}
      <footer className="border-t border-artvalo-ink/5 bg-artvalo-card py-20 px-6">
        <div className="mx-auto max-w-7xl flex flex-col md:flex-row justify-between gap-12">
           <div className="space-y-6">
              <div className="flex items-center gap-2">
                <div className="h-4 w-4 rounded-sm bg-artvalo-accent" />
                <span className="font-serif text-2xl font-medium tracking-tight text-artvalo-ink uppercase">ArtValo</span>
              </div>
              <p className="max-w-xs text-xs text-artvalo-muted leading-relaxed">
                Empowering the global art market with institutional-grade data transparency and predictive pricing intelligence.
              </p>
           </div>
           
           <div className="grid grid-cols-2 sm:grid-cols-3 gap-12">
              <div className="space-y-4">
                 <p className="text-[10px] uppercase tracking-widest font-bold">Contact</p>
                 <ul className="space-y-2 text-xs text-artvalo-muted">
                    <li>investors@artvalo.io</li>
                    <li>London | Oxford</li>
                 </ul>
              </div>
              <div className="space-y-4">
                 <p className="text-[10px] uppercase tracking-widest font-bold">Privacy</p>
                 <ul className="space-y-2 text-xs text-artvalo-muted">
                    <li>Data Security</li>
                    <li>SLA / Enterprise</li>
                 </ul>
              </div>
              <div className="space-y-4">
                 <p className="text-[10px] uppercase tracking-widest font-bold font-serif italic text-artvalo-accent">Confidential</p>
                 <p className="text-[9px] text-artvalo-muted uppercase leading-tight italic">Investor Document v2026.05</p>
              </div>
           </div>
        </div>
        <div className="mx-auto max-w-7xl mt-20 pt-8 border-t border-artvalo-ink/5 flex justify-between items-center text-[9px] uppercase tracking-widest text-artvalo-muted/50 font-mono">
           <span>© 2026 ARTVALO ANALYTICS LTD.</span>
           <span>SECURE FINANCIAL TERMINAL ACCESS</span>
        </div>
      </footer>
    </div>
  );
}
