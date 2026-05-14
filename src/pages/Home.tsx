import PostCard from '../components/PostCard';
import { getAllPosts } from '../utils/markdown-parser';

export default function Home() {
  const posts = getAllPosts();
  return (
    <>
      {/* ═══════════════════ HERO SECTION ═══════════════════ */}
      <section id="hero" className="relative w-full overflow-hidden px-4 sm:px-8 lg:px-12 pt-48 pb-32 md:pt-64 md:pb-56 flex flex-col items-center">
        {/* Decorative elements */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          {/* Grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                'linear-gradient(rgba(186,230,253,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(186,230,253,0.3) 1px, transparent 1px)',
              backgroundSize: '64px 64px',
            }}
          />
          {/* Radial glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[700px] w-[700px] rounded-full bg-brand-highlight/[0.06] blur-[150px]" />
        </div>

        <div className="mx-auto max-w-4xl text-center">

          {/* Headline */}
          <h1
            className="animate-fade-in-up text-4xl font-extrabold font-display leading-[1.1] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
            style={{ animationDelay: '0.15s' }}
          >
            <span className="text-brand-pastel-50">Donde las </span>
            <span className="text-gradient-brand">ideas</span>
            <br className="hidden sm:block" />{' '}
            <span className="text-brand-pastel-50">cobran </span>
            <span className="relative">
              <span className="text-gradient-brand">vida</span>
            </span>
          </h1>

          {/* Subtitle */}
          <p
            className="animate-fade-in-up mx-auto mt-8 max-w-2xl text-base sm:text-lg leading-relaxed text-brand-pastel-500"
            style={{ animationDelay: '0.3s' }}
          >
            Bloggie es tu espacio para escribir articulos sobre gerencia
          </p>
        </div>
      </section>

      {/* ═══════════════════ POSTS SECTION ═══════════════════ */}
      <section id="posts" className="relative w-full px-4 sm:px-8 lg:px-12 pt-16 pb-32 md:pt-24 md:pb-48 flex flex-col items-center">
        {/* Section header */}
        <div className="w-full max-w-7xl mx-auto">
          <div className="flex flex-col items-start gap-6 mb-8 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-3xl mb-4 font-bold font-display text-brand-pastel-50 sm:text-4xl">
                Últimos Artículos
              </h2>
              <p className="mb-2 mt-2 text-brand-pastel-500">
                Las publicaciones más recientes de nuestra comunidad
              </p>
            </div>
          </div>

          {/* Post grid */}
          <div className="stagger mt-12 grid w-full grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:gap-10">
            {posts.map((post, i) => (
              <PostCard key={post.slug} post={post} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ NEWSLETTER CTA ═══════════════════ */}
      {/* <section id="subscribe" className="w-full px-4 sm:px-8 lg:px-12 py-16 flex justify-center">
        <div className="w-full max-w-4xl mx-auto">
          <div className="animate-pulse-glow relative overflow-hidden rounded-3xl border border-brand-highlight/20 bg-gradient-to-br from-brand-deep-200 to-brand-deep-100 p-8 sm:p-12">
            {
            <div className="pointer-events-none absolute -top-20 -right-20 h-60 w-60 rounded-full bg-brand-highlight/10 blur-[80px]" />

            <div className="relative text-center">
              <h3 className="text-2xl font-bold font-display text-brand-pastel-50 sm:text-3xl">
                No te pierdas ni un artículo
              </h3>
              <p className="mx-auto mt-3 max-w-md text-sm text-brand-pastel-500">
                Suscríbete a nuestro newsletter y recibe lo mejor del desarrollo
                web directamente en tu bandeja de entrada.
              </p>

              <form
                className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
                onSubmit={(e) => e.preventDefault()}
              >
                <input
                  type="email"
                  id="newsletter-email"
                  placeholder="tu@email.com"
                  className="flex-1 rounded-full border border-brand-deep-400 bg-brand-deep/80 px-5 py-3 text-sm text-brand-pastel-100 placeholder-brand-pastel-500/40 outline-none transition-all duration-200 focus:border-brand-highlight/50 focus:ring-2 focus:ring-brand-highlight/20"
                />
                <button
                  type="submit"
                  id="newsletter-submit"
                  className="rounded-full bg-gradient-to-r from-brand-highlight to-brand-highlight-200 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-highlight/25 transition-all duration-300 hover:shadow-xl hover:shadow-brand-highlight/40 hover:scale-105 active:scale-95"
                >
                  Suscribirme
                </button>
              </form>

              <p className="mt-4 text-[11px] text-brand-pastel-500/40">
                Sin spam. Cancela cuando quieras.
              </p>
            </div>
          </div>
        </div>
      </section>*/}
    </>
  );
}
