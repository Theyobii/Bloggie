import PostCard from '../components/PostCard';
import { getAllPosts } from '../utils/markdown-parser';

export default function Home() {
  const posts = getAllPosts();
  return (
    <>
      {/* ═══════════════════ HERO SECTION ═══════════════════ */}
      <section id="hero" className="relative w-full overflow-hidden px-4 sm:px-8 lg:px-12 pt-40 pb-32 md:pt-48 md:pb-48 flex flex-col items-center bg-gradient-to-b from-slate-950 via-slate-950 to-brand-deep">
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

          {/* Floating Particles */}
          <div className="absolute top-1/4 left-1/4 h-2 w-2 rounded-full bg-brand-highlight-300 shadow-[0_0_15px_rgba(6,182,212,0.8)] animate-float" style={{ animationDelay: '0s', animationDuration: '4s' }} />
          <div className="absolute top-1/3 right-1/4 h-3 w-3 rounded-full bg-brand-pastel-300 shadow-[0_0_20px_rgba(125,211,252,0.8)] animate-float" style={{ animationDelay: '1s', animationDuration: '5s' }} />
          <div className="absolute bottom-1/4 left-1/3 h-1.5 w-1.5 rounded-full bg-brand-highlight-400 shadow-[0_0_10px_rgba(139,92,246,0.8)] animate-float" style={{ animationDelay: '2s', animationDuration: '3.5s' }} />
          <div className="absolute top-1/2 right-1/3 h-2 w-2 rounded-full bg-brand-highlight-50 shadow-[0_0_15px_rgba(56,189,248,0.8)] animate-float" style={{ animationDelay: '0.5s', animationDuration: '4.5s' }} />
          <div className="absolute bottom-1/3 right-1/2 h-2.5 w-2.5 rounded-full bg-brand-pastel-100 shadow-[0_0_12px_rgba(224,242,254,0.6)] animate-float" style={{ animationDelay: '1.5s', animationDuration: '4.2s' }} />
        </div>

        <div className="mx-auto max-w-4xl text-center">

          {/* Headline */}
          <h1
            className="animate-fade-in-up text-4xl font-extrabold font-display leading-[1.1] tracking-[-0.02em] sm:text-5xl md:text-6xl lg:text-7xl"
            style={{ animationDelay: '0.15s' }}
          >
            <span className="text-brand-pastel-50">Bien</span>
            <span className="text-gradient-pastel">venido</span>
            <br className="hidden sm:block" />{' '}
            <span className="text-brand-pastel-50">a Blog</span>
            <span className="relative">
              <span className="text-gradient-pastel">gie</span>
            </span>
          </h1>

          {/* Subtitle */}
          <p
            className="animate-fade-in-up mx-auto mt-8 max-w-2xl text-base sm:text-lg leading-relaxed text-brand-pastel-500"
            style={{ animationDelay: '0.3s' }}
          >
            Bloggie es el espacio ideal para saber sobre el mundo de la tecnologia
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
                Todos los artículos
              </h2>
              <p className="mb-2 mt-2 text-brand-pastel-500">
                Un vistazo de lo que estamos desarrollando y compartiendo.
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
    </>
  );
}
