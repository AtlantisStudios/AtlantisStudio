import { useEffect, useRef, useState } from "react";

/** Scroll progress bar fixed at top */
export function ScrollProgress() {
  const [p, setP] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      setP(max > 0 ? (h.scrollTop / max) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div
      className="fixed top-0 left-0 h-[2px] z-[200] pointer-events-none"
      style={{
        width: `${p}%`,
        background: "linear-gradient(90deg, transparent, var(--gold), transparent)",
        boxShadow: "0 0 12px var(--gold)",
        transition: "width 80ms linear",
      }}
    />
  );
}

/** Parallax floating gold orbs that drift with scroll + mouse */
export function ParallaxBackdrop() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    let y = 0, mx = 0, my = 0, raf = 0;
    const update = () => {
      if (ref.current) {
        const orbs = ref.current.querySelectorAll<HTMLElement>("[data-orb]");
        orbs.forEach((el, i) => {
          const speed = parseFloat(el.dataset.speed || "0.2");
          const dx = mx * (i % 2 === 0 ? 20 : -20) * speed;
          const dy = my * (i % 2 === 0 ? 20 : -20) * speed - y * speed;
          el.style.transform = `translate3d(${dx}px, ${dy}px, 0)`;
        });
      }
      raf = 0;
    };
    const schedule = () => { if (!raf) raf = requestAnimationFrame(update); };
    const onScroll = () => { y = window.scrollY; schedule(); };
    const onMouse = (e: MouseEvent) => {
      mx = (e.clientX / window.innerWidth) - 0.5;
      my = (e.clientY / window.innerHeight) - 0.5;
      schedule();
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("mousemove", onMouse, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("mousemove", onMouse);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);
  return (
    <div ref={ref} aria-hidden className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <div data-orb data-speed="0.15" className="absolute -top-32 -left-32 size-[40rem] rounded-full opacity-30 blur-3xl"
        style={{ background: "radial-gradient(circle, oklch(0.78 0.13 80 / 0.6), transparent 70%)" }} />
      <div data-orb data-speed="0.25" className="absolute top-1/3 -right-40 size-[36rem] rounded-full opacity-25 blur-3xl"
        style={{ background: "radial-gradient(circle, oklch(0.65 0.14 60 / 0.6), transparent 70%)" }} />
      <div data-orb data-speed="0.35" className="absolute bottom-0 left-1/4 size-[30rem] rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle, oklch(0.85 0.13 85 / 0.5), transparent 70%)" }} />
      <div data-orb data-speed="0.2" className="absolute top-2/3 left-10 size-[24rem] rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle, oklch(0.58 0.12 70 / 0.5), transparent 70%)" }} />
    </div>
  );
}

/** Wraps children, fades + slides them in when in viewport */
export function Reveal({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  as?: React.ElementType;
}) {
  const ref = useRef<HTMLElement>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setShown(true); io.disconnect(); } },
      { threshold: 0.15, rootMargin: "0px 0px -80px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <Tag
      ref={ref as never}
      className={className}
      style={{
        opacity: shown ? 1 : 0,
        transform: shown ? "translateY(0)" : "translateY(40px)",
        transition: `opacity 0.9s ease-out ${delay}ms, transform 0.9s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
      }}
    >
      {children}
    </Tag>
  );
}

/** Image with subtle parallax + tilt on hover */
export function ParallaxImage({
  src, alt, className = "",
}: { src: string; alt: string; className?: string }) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current, img = imgRef.current;
    if (!wrap || !img) return;
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        const rect = wrap.getBoundingClientRect();
        const center = rect.top + rect.height / 2;
        const off = (window.innerHeight / 2 - center) / window.innerHeight;
        img.style.setProperty("--py", `${off * 30}px`);
        raf = 0;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { window.removeEventListener("scroll", onScroll); if (raf) cancelAnimationFrame(raf); };
  }, []);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    e.currentTarget.style.setProperty("--rx", `${-y * 6}deg`);
    e.currentTarget.style.setProperty("--ry", `${x * 6}deg`);
  };
  const onLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.setProperty("--rx", "0deg");
    e.currentTarget.style.setProperty("--ry", "0deg");
  };

  return (
    <div
      ref={wrapRef}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={`relative [perspective:1200px] ${className}`}
    >
      <div className="absolute -inset-3 border border-gold/30 transition-transform duration-300"
        style={{ transform: "rotateX(var(--rx,0)) rotateY(var(--ry,0))" }} />
      <div className="absolute -inset-1.5 border border-gold/60 transition-transform duration-300"
        style={{ transform: "rotateX(var(--rx,0)) rotateY(var(--ry,0))" }} />
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        width={1280}
        height={1280}
        loading="lazy"
        className="relative w-full will-change-transform transition-transform duration-300"
        style={{ transform: "translate3d(0, var(--py,0), 0) rotateX(var(--rx,0)) rotateY(var(--ry,0))" }}
      />
    </div>
  );
}
