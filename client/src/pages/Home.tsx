/*
 * Design Philosophy: "Dark Premium Tech"
 * Deep navy/black background, purple + cyan neon accents
 * IBM Plex Mono for code/data, Outfit for titles
 * Glow effects, professional enterprise aesthetic
 * 
 * Foco: Bot Telegram + Base Web + Admin Web (mesma API)
 */

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Send,
  Zap,
  MessageCircle,
  Globe,
  Lock,
  BarChart3,
  Users,
  Rocket,
  CheckCircle2,
  ArrowRight,
  Menu,
  X,
  Github,
  Linkedin,
  Mail,
  Smartphone,
  Layout,
  Layers,
  Activity,
  Server,
  KeyRound,
} from "lucide-react";

const HERO_BG =
  "https://private-us-east-1.manuscdn.com/sessionFile/7U8261CEA4n3UtNAVYSgEQ/sandbox/lPZjugDN7FAUA0fJ6H3BFT-img-1_1772077785000_na1fn_bmV4eHVzLWhlcm8tYmc.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvN1U4MjYxQ0VBNG4zVXROQVZZU2dFUS9zYW5kYm94L2xQWmp1Z0RON0ZBVUEwZko2SDNCRlQtaW1nLTFfMTc3MjA3Nzc4NTAwMF9uYTFmbl9ibVY0ZUhWekxXaGxjbTh0WW1jLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=UxfjTHfnsHTiFo4pSzjEPByoZ60~fhld0pTaraioSBf-Gvj9G21E6MwTz9fhCGo~oiDMfP7~x~TC6bQfSu4leC1hiAYlrB03UinP7rjukTpq3V~QU1aRXdMb~6B3DYl08Nae9uhniSW9yMQ2L7hLiYl0Rnh19rg2KY31Y8UDx9V-Phqk5XYUmWryF~VJkNDe1wtOeI6DxUIJ8CBUet-JiDtOkqF4-WH-qJnUlNLQNBTTqP1s-Yc~m8K~GTyTgfXs4yRTmYU2QBClhnHi7OChb5yqqKjyc~MMlFbBRWM2LNffxn7lIzTv3AK5KNneRiDPKUHYBdLuzDvE8wjQ7AWArQ__";

const BOT_IMG =
  "https://private-us-east-1.manuscdn.com/sessionFile/7U8261CEA4n3UtNAVYSgEQ/sandbox/lPZjugDN7FAUA0fJ6H3BFT-img-2_1772077779000_na1fn_bmV4eHVzLWZlYXR1cmUtYm90.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvN1U4MjYxQ0VBNG4zVXROQVZZU2dFUS9zYW5kYm94L2xQWmp1Z0RON0ZBVUEwZko2SDNCRlQtaW1nLTJfMTc3MjA3Nzc5MDAwMF9uYTFmbl9ibVY0ZUhWekxXWmxZWFIxY21VdFltOTAucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=rcr-dzQaNqbBbGKZLRuIT-0oIIG7n-dDLOlggtb6wXaj6mPl4nbIaIFNCCzTXGC2EPeU9mrQM2CByB3CxTcfqiYnx9yzo4qjMykDbJWDPvBYDnypPtxzULUFYUv-uWzJhUNYf4c4b~JBfCdJvLNEbsevWZhsz6~cO9sgCdWsKxFUY6LLSGYdogMk8t6MEmmvpuOKo3SiYlJApTCvrfTfEax5yjXbOHZXKlBsJ~7sgEIJH-48Q1V5koJ9pjavKpEnOhzR~yz35tcF8x5nwLYYoFjST7i1izjppJslCdCqGN3CIM5UjwKSVXjgh69zAiOB4jFI-VKLkTuu8JDwAdMRvA__";

const API_IMG =
  "https://private-us-east-1.manuscdn.com/sessionFile/7U8261CEA4n3UtNAVYSgEQ/sandbox/lPZjugDN7FAUA0fJ6H3BFT-img-3_1772077779000_na1fn_bmV4eHVzLWZlYXR1cmUtYXBp.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvN1U4MjYxQ0VBNG4zVXROQVZZU2dFUS9zYW5kYm94L2xQWmp1Z0RON0ZBVUEwZko2SDNCRlQtaW1nLTNfMTc3MjA3Nzc5MDAwMF9uYTFmbl9ibVY0ZUhWekxXWmxZWFIxY21VdFlYQnAucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=TMXSwYSPxPGsy6b18j95M3xfsv9IVVG8aI0ZmZSpoTCBWd3kbmTbe9hT1BpuYV0lEJnpa7Tudpu~5p~~9cNOLbU8oe9ssZQIwF0uhHp88Mz8Riqz-h7BrQpOPhnBKU4PohlBhtDV7qde-ycVkTfUVKFem3sZNrQYCglEECTIRzf71STAc0z587lA7fLvlUd~GD0mNezOPGs1~1UpHYkRJWPVIOa34KmqHropxd5yZ7-9hQZCAtMyfiQ~hTpmmuvlkSN4GVOI7PkLJk-Ecza5ikLz0~fuZfqGJztkcW6EzpKdAZFW2tTDePjuXdNnG1KFVKbsO-~xaFkL~JgvUEKoFA__";

const GATES_IMG =
  "https://private-us-east-1.manuscdn.com/sessionFile/7U8261CEA4n3UtNAVYSgEQ/sandbox/lPZjugDN7FAUA0fJ6H3BFT-img-4_1772077779000_na1fn_bmV4eHVzLWZlYXR1cmUtZ2F0ZXM.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvN1U4MjYxQ0VBNG4zVXROQVZZU2dFUS9zYW5kYm94L2xQWmp1Z0RON0ZBVUEwZko2SDNCRlQtaW1nLTRfMTc3MjA3Nzc5MDAwMF9uYTFmbl9ibVY0ZUhWekxXWmxZWFIxY21VdFoyRjBaWE0ucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=FGgsszbizTssX76eQMeOgGGm2hvtCpWGhmCvWQ5jfZYfa9SuN57LP0-ZgyOOkzufm451ikQBn2ZMxP24bVaLJd5ToOKlNwUT8HVdUCGfV8pg6rYxxIub5v8jYYZO4cx5EaUh7y2Ld6HTgaHChNmO0A~UIA5gfQHPCvdC9jY6fTdX0lDFB1nTS6ot96G9jC0dxGvTgMVM2Ygxka55qsucfAaHLQDtwbpxyKMLZSPZm18u6ORWe85eAZMhMTGjjt1h2Y9psoGTihXvu6vwAwoj9~El9rhzJ8wIJ-xhcmW3hzkxFA0wNTXKR-evErN3WOifUHbNyQlJ9fGGIW3n6svObA__";

const features = [
  {
    icon: MessageCircle,
    title: "Bot Telegram",
    description:
      "Painel completo integrado no Telegram. Donos gerenciam estoque, preços, usuários, afiliados, vendas, gates e configurações da loja diretamente pelo bot. Clientes compram, pagam via PIX e podem se tornar afiliados.",
    image: BOT_IMG,
  },
  {
    icon: Globe,
    title: "Base Web",
    description:
      "Loja virtual responsiva para seus clientes. Catálogo de cartões, carrinho de compras, checkout com PIX integrado e histórico de pedidos.",
    image: API_IMG,
  },
  {
    icon: Layout,
    title: "Admin Web",
    description:
      "Painel de controle completo para donos. Gestão de estoque, preços, usuários, afiliados, relatórios e configurações da loja em interface web profissional.",
    image: GATES_IMG,
  },
];

const architecture = [
  {
    component: "Bot Telegram",
    icon: MessageCircle,
    description: "Interface de gerenciamento para donos e compras para clientes",
    color: "purple",
  },
  {
    component: "Base Web",
    icon: Globe,
    description: "Loja virtual responsiva com catálogo e checkout PIX integrado",
    color: "cyan",
  },
  {
    component: "Admin Web",
    icon: Layout,
    description: "Central de gestão completa para administrar bot, base web, dashboards e controle financeiro",
    color: "purple",
  },
  {
    component: "API Backend",
    icon: Layers,
    description: "Mesma API compartilhada por todas as interfaces",
    color: "cyan",
  },
];

const capabilities = [
  { label: "PIX Integrado", icon: Zap },
  { label: "Gestão de Estoque", icon: BarChart3 },
  { label: "Multi-tenant", icon: Users },
  { label: "Gates no servidor do bot", icon: Server },
  { label: "APIs Rede, Cielo, Pagar.me, Braspag", icon: KeyRound },
  { label: "API única (Bot + Web + Admin)", icon: Layers },
];

const pricing = [
  {
    name: "Starter",
    price: "R$ 99",
    period: "/mês",
    description: "Perfeito para começar",
    features: [
      "1 loja",
      "Bot Telegram",
      "Base Web",
      "Até 1.000 transações",
      "Suporte por email",
    ],
    cta: "Começar Agora",
    highlighted: false,
  },
  {
    name: "Professional",
    price: "R$ 299",
    period: "/mês",
    description: "Para operações em crescimento",
    features: [
      "Lojas ilimitadas",
      "Bot Telegram",
      "Base Web",
      "Admin Web",
      "Transações ilimitadas",
      "Suporte prioritário",
      "Webhooks customizados",
    ],
    cta: "Começar Agora",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Customizado",
    period: "",
    description: "Soluções personalizadas",
    features: [
      "Tudo do Professional",
      "SLA garantido",
      "Suporte 24/7",
      "Integração dedicada",
      "Ambiente isolado",
      "Consultoria técnica",
    ],
    cta: "Falar com Vendas",
    highlighted: false,
  },
];

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-purple-950 to-slate-950">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md border-b border-purple-500/10">
        <div className="container flex items-center justify-between h-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold gradient-text-purple-cyan"
          >
            NexxusCard
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {["Features", "Pricing", "Docs", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-white/60 hover:text-white transition-colors text-sm"
              >
                {item}
              </a>
            ))}
            <button className="btn-primary">Começar</button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="md:hidden border-t border-purple-500/10 bg-slate-950/95"
            >
              <div className="container py-4 flex flex-col gap-4">
                {["Features", "Pricing", "Docs", "Contact"].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-white/60 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                ))}
                <button className="btn-primary w-full">Começar</button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 opacity-30"
          style={{ backgroundImage: `url(${HERO_BG})`, backgroundSize: "cover", backgroundPosition: "center" }}
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/70 to-slate-950" />

        {/* Animated background elements */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-96 h-96 rounded-full opacity-5"
            style={{
              background: i % 2 === 0 ? "radial-gradient(circle, #6D28D9, transparent)" : "radial-gradient(circle, #06B6D4, transparent)",
              left: `${15 + i * 20}%`,
              top: `${10 + (i % 3) * 30}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
            }}
            transition={{
              duration: 6 + i,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

        <div className="container relative z-10 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 mb-6 badge-purple px-4 py-2 rounded-full">
              <Rocket size={16} />
              <span className="text-sm font-semibold">Plataforma SaaS Multi-canal</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
              Gerencie sua loja de cartões com{" "}
              <span className="gradient-text-purple-cyan">NexxusCard</span>
            </h1>

            <p className="text-xl text-white/70 max-w-2xl mb-8 leading-relaxed">
            Um ecossistema completo com Bot Telegram, Base Web e Admin Web, todos integrados em uma única API. Gerencie estoque, preços e vendas de qualquer lugar.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="btn-primary flex items-center justify-center gap-2">
                Começar Grátis
                <ArrowRight size={18} />
              </button>
              <button className="btn-secondary flex items-center justify-center gap-2">
                Ver Demo
                <Send size={18} />
              </button>
            </div>

            {/* Stats - 3 colunas na mesma linha em mobile e desktop */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4">
              {[
                { label: "Latência API", value: "< 200ms", icon: Zap, accent: "cyan" },
                { label: "Transações", value: "500K+", icon: BarChart3, accent: "cyan" },
                { label: "Uptime", value: "99.9%", icon: Activity, accent: "purple" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="group flex items-center gap-1.5 sm:gap-3 px-2 py-2 sm:px-4 sm:py-3 rounded-lg sm:rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-purple-500/40 hover:bg-white/[0.08] transition-all duration-300 min-w-0"
                >
                  <div className={`flex shrink-0 items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-lg ${stat.accent === "cyan" ? "bg-cyan-500/20 text-cyan-400" : "bg-purple-500/20 text-purple-400"}`}>
                    <stat.icon size={20} />
                  </div>
                  <div className="min-w-0">
                    <div className="text-sm sm:text-xl md:text-2xl font-bold text-white tabular-nums truncate">{stat.value}</div>
                    <div className="text-[10px] sm:text-xs text-white/50 font-medium truncate">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Architecture Section */}
      <section className="container py-20 border-t border-purple-500/10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Arquitetura Integrada
          </h2>
          <p className="text-white/60 text-lg max-w-2xl">
            Três interfaces, uma API. Tudo sincronizado em tempo real.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {architecture.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`neon-card p-6 ${item.color === "cyan" ? "cyan-accent-card" : ""}`}
            >
              <div className={`feature-icon mb-4 ${item.color === "cyan" ? "cyan" : ""}`}>
                <item.icon size={24} className={item.color === "cyan" ? "text-cyan-400" : "text-purple-400"} />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{item.component}</h3>
              <p className="text-white/60 text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container py-20 border-t border-purple-500/10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Três Interfaces, Uma Plataforma
          </h2>
          <p className="text-white/60 text-lg max-w-2xl">
            Bot, Web e Admin. Tudo sincronizado pela mesma API.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              onClick={() => setActiveFeature(i)}
              className={`neon-card p-6 cursor-pointer transition-all ${
                activeFeature === i ? "ring-2 ring-cyan-400" : ""
              }`}
            >
              <div className="feature-icon mb-4">
                <feature.icon size={24} className="text-purple-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-white/60 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Feature Detail */}
        <motion.div
          key={activeFeature}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="neon-card p-8 overflow-hidden"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-white mb-4">
                {features[activeFeature].title}
              </h3>
              <p className="text-white/70 mb-6 leading-relaxed">
                {features[activeFeature].description}
              </p>
              <ul className="space-y-3">
                {["Configuração simples", "Escalável", "Suporte completo"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-white/80">
                    <CheckCircle2 size={18} className="text-cyan-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <img
                src={features[activeFeature].image}
                alt={features[activeFeature].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent" />
            </div>
          </div>
        </motion.div>
      </section>

      {/* Capabilities Section */}
      <section className="container py-20 border-t border-purple-500/10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Recursos Completos
          </h2>
          <p className="text-white/60 text-lg">
            Tudo que você precisa para gerenciar sua operação
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {capabilities.map((cap, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.05 }}
              viewport={{ once: true }}
              className="neon-card-hover neon-card p-4 flex items-center gap-3"
            >
              <div className="feature-icon cyan flex-shrink-0">
                <cap.icon size={20} className="text-cyan-400" />
              </div>
              <span className="text-white font-medium">{cap.label}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Gates & Payment APIs Section */}
      <section className="container py-20 border-t border-purple-500/10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Infraestrutura de Gates
          </h2>
          <p className="text-white/60 text-lg max-w-2xl">
            Hospedagem integrada e APIs padrão de adquirentes desenvolvidas no store-center.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="neon-card p-8"
          >
            <div className="feature-icon cyan mb-6">
              <Server size={28} className="text-cyan-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Hospedagem de gates no servidor do bot
            </h3>
            <p className="text-white/70 leading-relaxed mb-4">
            As gates podem ser adicionadas em formato .php e executadas no mesmo servidor da aplicação e do bot Telegram.
            Tudo centralizado em um único ambiente, com mais controle, menor latência e sem dependência de hospedagens externas.
            </p>
            <ul className="space-y-2 text-white/60 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-cyan-400 flex-shrink-0" />
                Gates e bot na mesma máquina
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-cyan-400 flex-shrink-0" />
                Execução integrada com bot e API
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-cyan-400 flex-shrink-0" />
                Menor latência e mais controle
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="neon-card p-8 cyan-accent-card"
          >
            <div className="feature-icon cyan mb-6">
              <KeyRound size={28} className="text-cyan-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              APIs padrão de keys (adquirentes)
            </h3>
            <p className="text-white/70 leading-relaxed mb-4">
              Integrações prontas com as APIs oficiais de adquirentes, desenvolvidas no store-center: E-Rede, Cielo, Pagar.me e Braspag. Padrão de keys unificado para facilitar a ativação, diminuir erros e acelerar a operação.
            </p>
            <div className="flex flex-wrap gap-2">
              {["E-Rede", "Cielo", "Pagar.me", "Braspag"].map((name) => (
                <span
                  key={name}
                  className="px-3 py-1.5 rounded-lg bg-white/10 text-white/90 text-sm font-medium border border-cyan-500/30"
                >
                  {name}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="container py-20 border-t border-purple-500/10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Planos Simples e Transparentes
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Escolha o plano perfeito para sua operação. Sem taxas ocultas.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pricing.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`relative rounded-lg p-8 transition-all ${
                plan.highlighted
                  ? "neon-card ring-2 ring-purple-400 scale-105"
                  : "neon-card"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <span className="badge-purple px-3 py-1 text-xs font-semibold">
                    MAIS POPULAR
                  </span>
                </div>
              )}

              <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
              <p className="text-white/60 text-sm mb-6">{plan.description}</p>

              <div className="mb-6">
                <span className="text-4xl font-bold text-white">{plan.price}</span>
                <span className="text-white/60 text-sm">{plan.period}</span>
              </div>

              <button
                className={`w-full mb-8 py-3 rounded-lg font-semibold transition-all ${
                  plan.highlighted
                    ? "btn-primary"
                    : "btn-secondary"
                }`}
              >
                {plan.cta}
              </button>

              <ul className="space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-white/80 text-sm">
                    <CheckCircle2 size={16} className="text-cyan-400 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container py-20 border-t border-purple-500/10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="cyan-accent-card p-12 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Pronto para começar?
          </h2>
          <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
            Junte-se a milhares de donos de lojas que já usam NexxusCard para gerenciar suas operações.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary">Começar Grátis</button>
            <button className="btn-secondary">Agendar Demo</button>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t border-purple-500/10 py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-bold text-white mb-4">NexxusCard</h3>
              <p className="text-white/60 text-sm">
                Plataforma SaaS multi-canal para lojas de cartões. Bot Telegram, Base Web e Admin Web compartilhando a mesma API.
              </p>
            </div>
            {[
              {
                title: "Produto",
                links: ["Features", "Pricing", "Security", "Docs"],
              },
              {
                title: "Empresa",
                links: ["Sobre", "Blog", "Contato", "Carreiras"],
              },
              {
                title: "Legal",
                links: ["Privacidade", "Termos", "Cookies", "Compliance"],
              },
            ].map((col) => (
              <div key={col.title}>
                <h4 className="text-white font-semibold mb-4">{col.title}</h4>
                <ul className="space-y-2">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-white/60 hover:text-white text-sm transition-colors">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-purple-500/10 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/60 text-sm">
              © 2026 NexxusCard. Todos os direitos reservados.
            </p>
            <div className="flex gap-4 mt-4 md:mt-0">
              {[
                { icon: Github, href: "#" },
                { icon: Linkedin, href: "#" },
                { icon: Mail, href: "#" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="text-white/60 hover:text-white transition-colors"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
