import { createFileRoute } from "@tanstack/react-router";
import {
  Globe2,
  Send,
  BarChart3,
  Calendar,
  Headphones,
  Sliders,
  Sparkles,
  Award,
  Clock,
  Instagram,
  Phone,
  MapPin,
  Music,
  Play,
  MessageCircle,
  Layers,
  Ear,

} from "lucide-react";
import { ScrollProgress, ParallaxBackdrop, Reveal, ParallaxImage } from "@/components/ScrollFX";
import logoAsset from "@/assets/atlantis-logo.png.asset.json";
import distributionHeroAsset from "@/assets/distribution-hero.jpg.asset.json";
import masteringHeroAsset from "@/assets/mastering-hero.jpg.asset.json";
import mezclaHeroAsset from "@/assets/mezcla-hero.jpg.asset.json";
import studioBgAsset from "@/assets/studio-bg.jpg.asset.json";

const WHATSAPP_URL =
  "https://l.instagram.com/?u=https%3A%2F%2Fwa.link%2F5cr159%3Futm_source%3Dig%26utm_medium%3Dsocial%26utm_content%3Dlink_in_bio%26fbclid%3DPAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQPOTM2NjE5NzQzMzkyNDU5AAGnagVeXEnAVCDq6uNSSRN6irT0TG175yWGqvWpgdy2iapD-5DfcnJyHxe3hBY_aem_4bhQNYuMhYaBohns65fvBA&e=AUBHSPDkrpVqZbtFGvXqYEF5FVxI38lEuoLqOwpkPPFuQ-n4FV8gcHwA0eomkncpWj8NnMqZBtXsenrmXSEo5toZACLSfVUTjmYbQRx-kO1ewv-oZgyknkZOOs-r9TIC1q81eVfRGidzoEcMCgcMK-s";

const logo = logoAsset.url;
const distributionHero = distributionHeroAsset.url;
const masteringHero = masteringHeroAsset.url;
const mezclaHero = mezclaHeroAsset.url;
const studioBg = studioBgAsset.url;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Atlantis Studios — Distribución Digital & Mastering Profesional" },
      {
        name: "description",
        content:
          "Estudio de grabación, mezcla y producción en Nueva Atlantis, Buenos Aires. Distribución a +50 plataformas y mastering profesional listo para el mundo.",
      },
      { property: "og:title", content: "Atlantis Studios — Tu música, lista para el mundo" },
      {
        property: "og:description",
        content:
          "Distribución digital a Spotify, Apple Music, YouTube y +50 plataformas. Mastering profesional con identidad.",
      },
    ],
  }),
  component: Index,
});

const platforms = [
  "Spotify",
  "Apple Music",
  "YouTube Music",
  "Deezer",
  "Tidal",
  "TikTok",
  "Amazon Music",
  "SoundCloud",
  "Pandora",
  "Napster",
];

const distFeatures = [
  { icon: Globe2, title: "Alcance Global", desc: "Tu música disponible en más de 50 plataformas digitales en todo el mundo." },
  { icon: Send, title: "Publicación Simple", desc: "Nos encargamos de todo el proceso para que tu música llegue lejos, fácil y rápido." },
  { icon: BarChart3, title: "Control Total", desc: "Mantené el control de tu música y lanzamientos desde tu cuenta personal." },
  { icon: Calendar, title: "Lanzá Cuando Quieras", desc: "Elegí la fecha de publicación y nosotros nos ocupamos de que todo esté listo." },
  { icon: Headphones, title: "Enfocate En Tu Arte", desc: "Dejanos el trabajo técnico para que vos te enfoques en crear y crecer." },
];

const mezclaFeatures = [
  { icon: Ear, title: "Imagen Estéreo", desc: "Experiencia de sonido envolvente y equilibrada en todo el espectro." },
  { icon: Sliders, title: "Balance Total", desc: "Cada instrumento y voz en su lugar perfecto." },
  { icon: BarChart3, title: "Claridad y Pegada", desc: "Realzamos la definición y la dinámica para un sonido profesional." },
  { icon: Calendar, title: "Flujo de Trabajo", desc: "Entregamos tus mezclas a tiempo y nos adaptamos a tus plazos." },
  { icon: Headphones, title: "Escucha Crítica", desc: "Análisis detallado de cada pista para un control total del sonido." },
];

const masterFeatures = [
  { icon: Sliders, title: "Sonido Profesional", desc: "Mayor claridad, equilibrio y definición en todas las frecuencias." },
  { icon: Headphones, title: "Listo Para Plataformas", desc: "Optimizado para Spotify, Apple Music, YouTube y más." },
  { icon: Sparkles, title: "Mayor Impacto", desc: "Más volumen percibido sin perder dinámica ni calidad." },
  { icon: Award, title: "Experiencia & Criterio", desc: "Tratamiento profesional en cada detalle de tu música." },
  { icon: Clock, title: "Entrega Rápida", desc: "Procesos eficientes y comunicación directa." },
];

function Index() {
  return (
    <div className="min-h-screen text-cream overflow-x-hidden relative">
      <ScrollProgress />
      <ParallaxBackdrop />
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Escribinos por WhatsApp"
        className="fixed bottom-6 right-6 z-50 inline-flex items-center justify-center size-14 rounded-full bg-gold text-ink shadow-[0_10px_40px_-5px_oklch(0.72_0.14_75/0.6)] hover:scale-110 hover:shadow-[0_0_50px_oklch(0.72_0.14_75/0.8)] transition-all animate-float"
      >
        <MessageCircle className="size-7" strokeWidth={2} />
      </a>
      <div className="relative z-[1]">
      {/* HERO */}
      <header
        className="relative min-h-screen flex flex-col items-center justify-center px-6 py-16"
        style={{
          backgroundImage: `linear-gradient(180deg, oklch(0.08 0.01 60 / 0.85), oklch(0.14 0.014 60 / 0.95)), url(${studioBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 pointer-events-none" style={{ background: "var(--gradient-vignette)" }} />

        <nav className="absolute top-0 left-0 right-0 flex items-center justify-between px-6 md:px-12 py-6 z-10">
          <span className="font-display text-xs tracking-[0.4em] text-gold">EST · MMXX</span>
          <span className="font-display text-xs tracking-[0.4em] text-gold hidden md:inline">
            NUEVA ATLANTIS · BUENOS AIRES
          </span>
        </nav>

        <div className="relative z-10 flex flex-col items-center text-center max-w-4xl">
          <img
            src={logo}
            alt="Atlantis Studios — Grabación, Mezcla, Producción"
            width={420}
            height={420}
            className="w-64 md:w-80 mb-8 drop-shadow-2xl animate-float"
          />

          <Reveal className="flex items-center gap-4 mb-6">
            <div className="h-px w-12 bg-gold/60" />
            <span className="ornament text-[0.6rem] md:text-xs">TU MÚSICA · NUESTRO ARTE</span>
            <div className="h-px w-12 bg-gold/60" />
          </Reveal>

          <Reveal delay={120}>
            <h1 className="font-display font-bold text-5xl md:text-7xl lg:text-8xl leading-[0.95] mb-6">
              <span className="block gradient-gold-text shimmer-text">Tu música</span>
              <span className="block text-cream italic font-serif font-normal text-3xl md:text-5xl mt-3">
                merece llegar
              </span>
              <span className="block gradient-gold-text shimmer-text">más lejos</span>
            </h1>
          </Reveal>

          <Reveal delay={240}>
            <p className="font-serif italic text-lg md:text-xl text-cream/80 max-w-2xl leading-relaxed mt-4">
              Distribución digital y mastering profesional desde Nueva Atlantis, Buenos Aires.
              Vos creás, nosotros la llevamos al mundo.
            </p>
          </Reveal>

          <Reveal delay={360} className="flex flex-col sm:flex-row gap-4 mt-10">
            <a
              href="#distribucion"
              className="btn-magnetic group inline-flex items-center justify-center gap-3 px-8 py-4 bg-gold text-ink font-display tracking-widest text-sm font-semibold"
            >
              <Globe2 className="size-4 transition-transform group-hover:rotate-12" />
              DISTRIBUCIÓN
            </a>
            <a
              href="#mezcla"
              className="btn-magnetic group inline-flex items-center justify-center gap-3 px-8 py-4 border border-gold text-gold font-display tracking-widest text-sm font-semibold hover:bg-gold hover:text-ink transition-colors"
            >
              <Layers className="size-4 transition-transform group-hover:rotate-12" />
              MEZCLA
            </a>
            <a
              href="#mastering"
              className="btn-magnetic group inline-flex items-center justify-center gap-3 px-8 py-4 border border-gold text-gold font-display tracking-widest text-sm font-semibold hover:bg-gold hover:text-ink transition-colors"
            >
              <Sliders className="size-4 transition-transform group-hover:rotate-12" />
              MASTERING
            </a>
          </Reveal>
        </div>

        <div className="absolute bottom-8 left-0 right-0 flex items-center justify-center gap-4 px-6 z-10">
          <div className="h-px flex-1 max-w-32 bg-gold/40" />
          <span className="ornament text-[0.55rem] md:text-[0.65rem]">
            GRABACIÓN · MEZCLA · PRODUCCIÓN
          </span>
          <div className="h-px flex-1 max-w-32 bg-gold/40" />
        </div>
      </header>

      {/* DISTRIBUCIÓN */}
      <section id="distribucion" className="relative py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <Reveal className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-16 bg-gold/60" />
              <span className="ornament text-xs">TU MÚSICA · EN TODAS LAS PLATAFORMAS</span>
              <div className="h-px w-16 bg-gold/60" />
            </div>
            <h2 className="font-display text-5xl md:text-7xl font-bold gradient-gold-text shimmer-text mb-4">
              Distribución
            </h2>
            <p className="font-serif italic text-2xl md:text-3xl text-cream/90">Digital</p>
          </Reveal>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
            <Reveal>
              <ParallaxImage
                src={distributionHero}
                alt="Globo dorado conectando con plataformas digitales"
              />
            </Reveal>

            <Reveal delay={150}>
              <p className="font-serif text-2xl md:text-3xl leading-relaxed text-cream/90 mb-6">
                Llevamos tu música a más de{" "}
                <span className="text-gold font-semibold not-italic">50 plataformas digitales</span>{" "}
                en todo el mundo.
              </p>
              <p className="font-serif italic text-xl text-cream/70 mb-10">
                Vos creás, nosotros la distribuimos.
              </p>

              <div className="vintage-card interactive-card p-6 md:p-8">
                <div className="flex items-center gap-3 mb-5">
                  <Music className="size-4 text-gold" />
                  <span className="font-display text-xs tracking-[0.3em] text-gold">
                    DISPONIBLE EN
                  </span>
                </div>
                <div className="flex flex-wrap gap-x-5 gap-y-3">
                  {platforms.map((p) => (
                    <span
                      key={p}
                      className="font-sans text-base text-cream/85 flex items-center gap-2 transition-all hover:text-gold hover:translate-x-1 cursor-default"
                    >
                      <Play className="size-3 text-gold" fill="currentColor" />
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          <div className="gold-divider mb-16" />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {distFeatures.map(({ icon: Icon, title, desc }, i) => (
              <Reveal key={title} delay={i * 80} className="text-center group feature-card">
                <div className="feature-icon inline-flex items-center justify-center size-16 rounded-full border border-gold/40 mb-5">
                  <Icon className="size-6 text-gold" strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-xs tracking-[0.2em] text-gold mb-3 font-semibold">
                  {title.toUpperCase()}
                </h3>
                <p className="font-sans text-sm text-cream/70 leading-relaxed">{desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* DIVIDER */}
      <div className="relative py-8 px-6">
        <div className="max-w-4xl mx-auto flex items-center gap-4">
          <div className="h-px flex-1 bg-gold/40" />
          <span className="ornament text-xs">VOS HACÉS MÚSICA · NOSOTROS LA LLEVAMOS AL MUNDO</span>
          <div className="h-px flex-1 bg-gold/40" />
        </div>
      </div>

      {/* MEZCLA */}
      <section id="mezcla" className="relative py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <Reveal className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-16 bg-gold/60" />
              <span className="ornament text-xs">SACA EL MÁXIMO POTENCIAL DE TU MÚSICA</span>
              <div className="h-px w-16 bg-gold/60" />
            </div>
            <h2 className="font-display text-5xl md:text-7xl font-bold gradient-gold-text shimmer-text mb-4">
              Mezcla
            </h2>
            <p className="font-serif italic text-2xl md:text-3xl text-cream/90">Profesional</p>
          </Reveal>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
            <Reveal>
              <ParallaxImage
                src={mezclaHero}
                alt="Consola de mezcla analógica dorada con globo terráqueo"
              />
            </Reveal>

            <Reveal delay={150}>
              <p className="font-serif text-2xl md:text-3xl leading-relaxed text-cream/90 mb-6">
                Transformamos tus grabaciones en un sonido{" "}
                <span className="text-gold font-semibold not-italic">cristalino y potente</span>.
              </p>
              <p className="font-serif italic text-xl text-cream/70 mb-10">
                Vos creás, nosotros perfeccionamos.
              </p>

              <div className="vintage-card interactive-card p-6 md:p-8">
                <div className="flex items-center gap-3 mb-5">
                  <Layers className="size-4 text-gold" />
                  <span className="font-display text-xs tracking-[0.3em] text-gold">
                    INGENIERÍA DE SONIDO DE CLASE MUNDIAL
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {["VOCES", "INSTRUMENTOS", "DINÁMICA", "PROFUNDIDAD", "ESPACIO", "PUNCH"].map(
                    (tag) => (
                      <span
                        key={tag}
                        className="tag-chip px-4 py-2 border border-gold/40 font-display text-[0.65rem] tracking-[0.25em] text-gold cursor-default"
                      >
                        {tag}
                      </span>
                    ),
                  )}
                </div>
              </div>
            </Reveal>
          </div>

          <div className="gold-divider mb-16" />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {mezclaFeatures.map(({ icon: Icon, title, desc }, i) => (
              <Reveal key={title} delay={i * 80} className="text-center group feature-card">
                <div className="feature-icon inline-flex items-center justify-center size-16 rounded-full border border-gold/40 mb-5">
                  <Icon className="size-6 text-gold" strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-xs tracking-[0.2em] text-gold mb-3 font-semibold">
                  {title.toUpperCase()}
                </h3>
                <p className="font-sans text-sm text-cream/70 leading-relaxed">{desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* DIVIDER */}
      <div className="relative py-8 px-6">
        <div className="max-w-4xl mx-auto flex items-center gap-4">
          <div className="h-px flex-1 bg-gold/40" />
          <span className="ornament text-xs">CADA DETALLE CUENTA · CADA FRECUENCIA IMPORTA</span>
          <div className="h-px flex-1 bg-gold/40" />
        </div>
      </div>

      {/* MASTERING */}
      <section
        id="mastering"
        className="relative py-24 md:py-32 px-6"
        style={{
          backgroundImage: `linear-gradient(180deg, oklch(0.14 0.014 60 / 0.95), oklch(0.10 0.01 60 / 0.98)), url(${studioBg})`,
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="max-w-7xl mx-auto">
          <Reveal className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-16 bg-gold/60" />
              <span className="ornament text-xs">TU MÚSICA · TU IDENTIDAD · NUESTRO MASTER</span>
              <div className="h-px w-16 bg-gold/60" />
            </div>
            <h2 className="font-display text-5xl md:text-7xl font-bold gradient-gold-text shimmer-text mb-4">
              Mastering
            </h2>
            <p className="font-serif italic text-2xl md:text-3xl text-cream/90">Profesional</p>
          </Reveal>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
            <Reveal className="order-2 lg:order-1">
              <p className="font-serif text-2xl md:text-3xl leading-relaxed text-cream/90 mb-6">
                Llevá tu música al siguiente nivel.
              </p>
              <p className="font-serif italic text-xl text-cream/80 mb-8">
                Sonido claro, potente y{" "}
                <span className="text-gold not-italic font-semibold">listo para el mundo.</span>
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {["PRECISIÓN", "EQUILIBRIO", "VOLUMEN", "IMPACTO", "TRADUCCIÓN"].map((tag) => (
                  <span
                    key={tag}
                    className="tag-chip px-4 py-2 border border-gold/40 font-display text-[0.65rem] tracking-[0.25em] text-gold cursor-default"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="vintage-card interactive-card p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Headphones className="size-4 text-gold" />
                  <span className="font-display text-xs tracking-[0.3em] text-gold">
                    OPTIMIZADO PARA
                  </span>
                </div>
                <p className="font-sans text-cream/80 text-base leading-relaxed">
                  Spotify · Apple Music · YouTube · Streaming · Redes · Shows
                </p>
              </div>
            </Reveal>

            <Reveal delay={150} className="order-1 lg:order-2">
              <ParallaxImage
                src={masteringHero}
                alt="Consola analógica vintage con medidor VU dorado"
              />
            </Reveal>
          </div>

          <div className="gold-divider mb-16" />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {masterFeatures.map(({ icon: Icon, title, desc }, i) => (
              <Reveal key={title} delay={i * 80} className="text-center group feature-card">
                <div className="feature-icon inline-flex items-center justify-center size-16 rounded-full border border-gold/40 mb-5">
                  <Icon className="size-6 text-gold" strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-xs tracking-[0.2em] text-gold mb-3 font-semibold">
                  {title.toUpperCase()}
                </h3>
                <p className="font-sans text-sm text-cream/70 leading-relaxed">{desc}</p>
              </Reveal>
            ))}
          </div>

          <div className="text-center mt-20">
            <p className="font-serif italic text-xl md:text-2xl text-cream/90 max-w-3xl mx-auto">
              "Respetamos la identidad de cada canción, potenciando el sonido sin perder dinámica
              ni intención artística."
            </p>
          </div>
        </div>
      </section>

      {/* UBICACIÓN */}
      <section id="ubicacion" className="relative py-24 md:py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <Reveal className="text-center mb-12">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-16 bg-gold/60" />
              <span className="ornament text-xs">VISITÁ EL ESTUDIO</span>
              <div className="h-px w-16 bg-gold/60" />
            </div>
            <h2 className="font-display text-5xl md:text-7xl font-bold gradient-gold-text shimmer-text mb-4">
              Ubicación
            </h2>
            <p className="font-serif italic text-2xl md:text-3xl text-cream/90">
              Nueva Atlantis, Buenos Aires
            </p>
          </Reveal>

          <Reveal delay={150}>
            <div className="vintage-card interactive-card overflow-hidden border border-gold/30 shadow-[0_0_60px_-20px_oklch(0.78_0.13_80/0.25)]">
              <div className="relative w-full aspect-[16/9] md:aspect-[21/9]">
                <iframe
                  title="Ubicación de Atlantis Studios en Google Maps"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3218!2d-56.6805845!3d-36.7651652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x959c65d902d54f1f%3A0x1f870e4b5045d2c3!2sAtlantis%20Studios!5e0!3m2!1ses!2sar!4v1718812800000!6m2!1ses!2sar"
                  className="absolute inset-0 w-full h-full border-0 grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-start gap-4">
                  <div className="feature-icon inline-flex items-center justify-center size-12 rounded-full border border-gold/40 shrink-0">
                    <MapPin className="size-5 text-gold" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-display text-sm tracking-[0.2em] text-gold mb-1">ATLANTIS STUDIOS</h3>
                    <p className="font-sans text-cream/70 text-base leading-relaxed">
                      Nueva Atlantis, Partido de La Costa, Buenos Aires, Argentina
                    </p>
                  </div>
                </div>
                <a
                  href="https://www.google.com/maps/place/Atlantis+Studios/@-36.7651652,-56.6805845,17z"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-magnetic inline-flex items-center justify-center gap-2 px-8 py-4 border border-gold text-gold font-display tracking-widest text-xs font-semibold hover:bg-gold hover:text-ink transition-colors"
                >
                  <MapPin className="size-4" />
                  ABRIR EN GOOGLE MAPS
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 px-6 border-y border-gold/30">
        <div className="max-w-4xl mx-auto text-center">
          <div className="ornament text-xs mb-8">— ENVIANOS TU TEMA —</div>
          <h2 className="font-display text-4xl md:text-6xl font-bold gradient-gold-text mb-6">
            Listo para el mundo
          </h2>
          <p className="font-serif italic text-xl text-cream/80 mb-12 max-w-2xl mx-auto">
            Enviános tu tema, EP o álbum y recibí los masters listos, o publicá en +50
            plataformas globales con nosotros.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-magnetic inline-flex items-center justify-center gap-3 px-10 py-5 bg-gold text-ink font-display tracking-widest text-sm font-semibold hover:bg-cream transition-colors"
            >
              <MessageCircle className="size-4" />
              ESCRIBINOS POR WHATSAPP
            </a>
            <a
              href="https://instagram.com/atlantisstudios.lacosta"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-10 py-5 border border-gold text-gold font-display tracking-widest text-sm font-semibold hover:bg-gold hover:text-ink transition-colors"
            >
              <Instagram className="size-4" />
              @atlantisstudios.lacosta
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center mb-8">
            <img src={logo} alt="Atlantis Studios" width={120} height={120} className="w-24 opacity-80" loading="lazy" />
          </div>
          <div className="grid md:grid-cols-3 gap-8 text-center font-sans text-sm text-cream/70">
            <div className="flex flex-col items-center gap-2">
              <Instagram className="size-4 text-gold" />
              <span>@atlantisstudios.lacosta</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Phone className="size-4 text-gold" />
              <span>+54 9 2257 63-3307</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <MapPin className="size-4 text-gold" />
              <span>Nueva Atlantis, Buenos Aires</span>
            </div>
          </div>
          <div className="mt-10 pt-6 border-t border-gold/20 text-center font-display text-[0.65rem] tracking-[0.3em] text-gold/60">
            © ATLANTIS STUDIOS · MMXXVI · ALL RIGHTS RESERVED
          </div>
        </div>
      </footer>
      </div>
    </div>
  );
}
