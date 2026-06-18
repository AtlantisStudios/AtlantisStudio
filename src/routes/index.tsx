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
} from "lucide-react";
import logoAsset from "@/assets/atlantis-logo.png.asset.json";
import distributionHeroAsset from "@/assets/distribution-hero.jpg.asset.json";
import masteringHeroAsset from "@/assets/mastering-hero.jpg.asset.json";
import studioBgAsset from "@/assets/studio-bg.jpg.asset.json";

const logo = logoAsset.url;
const distributionHero = distributionHeroAsset.url;
const masteringHero = masteringHeroAsset.url;
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

const masterFeatures = [
  { icon: Sliders, title: "Sonido Profesional", desc: "Mayor claridad, equilibrio y definición en todas las frecuencias." },
  { icon: Headphones, title: "Listo Para Plataformas", desc: "Optimizado para Spotify, Apple Music, YouTube y más." },
  { icon: Sparkles, title: "Mayor Impacto", desc: "Más volumen percibido sin perder dinámica ni calidad." },
  { icon: Award, title: "Experiencia & Criterio", desc: "Tratamiento profesional en cada detalle de tu música." },
  { icon: Clock, title: "Entrega Rápida", desc: "Procesos eficientes y comunicación directa." },
];

function Index() {
  return (
    <div className="min-h-screen text-cream overflow-x-hidden">
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
            className="w-64 md:w-80 mb-8 drop-shadow-2xl"
          />

          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-12 bg-gold/60" />
            <span className="ornament text-[0.6rem] md:text-xs">TU MÚSICA · NUESTRO ARTE</span>
            <div className="h-px w-12 bg-gold/60" />
          </div>

          <h1 className="font-display font-bold text-5xl md:text-7xl lg:text-8xl leading-[0.95] mb-6">
            <span className="block gradient-gold-text">Tu música</span>
            <span className="block text-cream italic font-serif font-normal text-3xl md:text-5xl mt-3">
              merece llegar
            </span>
            <span className="block gradient-gold-text">más lejos</span>
          </h1>

          <p className="font-serif italic text-lg md:text-xl text-cream/80 max-w-2xl leading-relaxed mt-4">
            Distribución digital y mastering profesional desde Nueva Atlantis, Buenos Aires.
            Vos creás, nosotros la llevamos al mundo.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-10">
            <a
              href="#distribucion"
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-gold text-ink font-display tracking-widest text-sm font-semibold hover:bg-cream transition-colors"
            >
              <Globe2 className="size-4" />
              DISTRIBUCIÓN
            </a>
            <a
              href="#mastering"
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 border border-gold text-gold font-display tracking-widest text-sm font-semibold hover:bg-gold hover:text-ink transition-colors"
            >
              <Sliders className="size-4" />
              MASTERING
            </a>
          </div>
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
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-16 bg-gold/60" />
              <span className="ornament text-xs">TU MÚSICA · EN TODAS LAS PLATAFORMAS</span>
              <div className="h-px w-16 bg-gold/60" />
            </div>
            <h2 className="font-display text-5xl md:text-7xl font-bold gradient-gold-text mb-4">
              Distribución
            </h2>
            <p className="font-serif italic text-2xl md:text-3xl text-cream/90">Digital</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
            <div className="relative">
              <div className="absolute -inset-3 border border-gold/30" />
              <div className="absolute -inset-1.5 border border-gold/60" />
              <img
                src={distributionHero}
                alt="Globo dorado conectando con plataformas digitales"
                width={1280}
                height={1280}
                loading="lazy"
                className="relative w-full"
              />
            </div>

            <div>
              <p className="font-serif text-2xl md:text-3xl leading-relaxed text-cream/90 mb-6">
                Llevamos tu música a más de{" "}
                <span className="text-gold font-semibold not-italic">50 plataformas digitales</span>{" "}
                en todo el mundo.
              </p>
              <p className="font-serif italic text-xl text-cream/70 mb-10">
                Vos creás, nosotros la distribuimos.
              </p>

              <div className="vintage-card p-6 md:p-8">
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
                      className="font-sans text-base text-cream/85 flex items-center gap-2"
                    >
                      <Play className="size-3 text-gold" fill="currentColor" />
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="gold-divider mb-16" />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {distFeatures.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="text-center group">
                <div className="inline-flex items-center justify-center size-16 rounded-full border border-gold/40 mb-5 group-hover:border-gold transition-colors">
                  <Icon className="size-6 text-gold" strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-xs tracking-[0.2em] text-gold mb-3 font-semibold">
                  {title.toUpperCase()}
                </h3>
                <p className="font-sans text-sm text-cream/70 leading-relaxed">{desc}</p>
              </div>
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
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-16 bg-gold/60" />
              <span className="ornament text-xs">TU MÚSICA · TU IDENTIDAD · NUESTRO MASTER</span>
              <div className="h-px w-16 bg-gold/60" />
            </div>
            <h2 className="font-display text-5xl md:text-7xl font-bold gradient-gold-text mb-4">
              Mastering
            </h2>
            <p className="font-serif italic text-2xl md:text-3xl text-cream/90">Profesional</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
            <div className="order-2 lg:order-1">
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
                    className="px-4 py-2 border border-gold/40 font-display text-[0.65rem] tracking-[0.25em] text-gold"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="vintage-card p-6 md:p-8">
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
            </div>

            <div className="relative order-1 lg:order-2">
              <div className="absolute -inset-3 border border-gold/30" />
              <div className="absolute -inset-1.5 border border-gold/60" />
              <img
                src={masteringHero}
                alt="Consola analógica vintage con medidor VU dorado"
                width={1280}
                height={1280}
                loading="lazy"
                className="relative w-full"
              />
            </div>
          </div>

          <div className="gold-divider mb-16" />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {masterFeatures.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="text-center group">
                <div className="inline-flex items-center justify-center size-16 rounded-full border border-gold/40 mb-5 group-hover:border-gold transition-colors">
                  <Icon className="size-6 text-gold" strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-xs tracking-[0.2em] text-gold mb-3 font-semibold">
                  {title.toUpperCase()}
                </h3>
                <p className="font-sans text-sm text-cream/70 leading-relaxed">{desc}</p>
              </div>
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
              href="https://wa.me/5492257633307"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-gold text-ink font-display tracking-widest text-sm font-semibold hover:bg-cream transition-colors"
            >
              <Phone className="size-4" />
              +54 9 2257 63-3307
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
  );
}
