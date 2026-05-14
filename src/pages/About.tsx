export default function About() {
  return (
    <article className="mx-auto max-w-6xl px-4 sm:px-6 pt-48 pb-16 md:pt-56 animate-fade-in-up">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">

        {/* Sidebar with Sticky Photo */}
        <aside className="lg:w-1/3">
          <div className="lg:sticky lg:top-32 flex flex-col items-center lg:items-start">
            <div className="relative group">
              {/* Background glow */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-brand-highlight to-brand-highlight-400 opacity-30 blur transition duration-500 group-hover:opacity-60" />

              <div className="relative h-64 w-64 lg:h-80 lg:w-full overflow-hidden rounded-2xl border border-brand-pastel-500/20 bg-brand-deep-200 shadow-2xl">
                <img
                  src="/authors/theyobi.jpg"
                  alt="Theyobii"
                  className="h-full w-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-105 hover:scale-100"
                />
              </div>
            </div>

            <div className="mt-8 text-center lg:text-left">
              <h3 className="text-2xl font-bold font-display text-white">Theyobii</h3>
              <p className="text-brand-highlight font-medium mt-1">Gerente de Tecnología & Dev</p>

              <div className="mt-6 flex justify-center lg:justify-start gap-4">
                {/* Simplified social link demo */}
                <span className="text-xs text-brand-pastel-500/60 uppercase tracking-widest">Connect with me below</span>
              </div>
            </div>
          </div>
        </aside>

        {/* Content Section */}
        <div className="lg:w-2/3 prose prose-lg">
          <h1 className="text-center lg:text-left">Sobre Bloggie</h1>
          <p>
            Bienvenido a la sección "Acerca de". Aquí descubrirás de qué trata este proyecto, quién está detrás de él y cómo fue construido pieza por pieza.
          </p>

          <h2>¿De qué trata el blog?</h2>
          <p>
            <strong>Bloggie</strong> es un espacio diseñado para compartir conocimientos, ideas y experiencias sobre gerencia, tecnología y desarrollo de proyectos. El objetivo principal es ofrecer artículos concisos, estructurados y de alto valor que ayuden a otros profesionales a mejorar sus habilidades y mantenerse siempre actualizados.
          </p>

          <h2>¿Quién soy y en qué me destaco?</h2>
          <p>
            Soy Jonny Cabrera, apasionado por el desarrollo de software. Me destaco en la creación de aplicaciones web modernas, la búsqueda de interfaces que ofrezcan experiencias de usuario (UX) excepcionales.
          </p>
          <p>
            Mi enfoque se centra en encontrar el equilibrio perfecto entre una arquitectura técnica robusta y un diseño altamente estético.
          </p>

          <h2>¿Cómo se armó Bloggie?</h2>
          <p>
            Este blog no es una simple plantilla; fue construido desde cero con un enfoque en rendimiento extremo y una estética premium en modo oscuro. Las tecnologías que le dan vida incluyen:
          </p>
          <ul>
            <li><strong>React & TypeScript:</strong> La base del proyecto, ofreciendo componentes modulares y seguridad de tipos.</li>
            <li><strong>Vite:</strong> Nuestro motor de desarrollo y empaquetado, que permite un flujo de trabajo increíblemente rápido.</li>
            <li><strong>Tailwind CSS v4:</strong> Encargado de todo el estilo visual, utilizando una paleta de colores personalizada de tonos azules profundos y acentos en azul pastel.</li>
            <li><strong>Sistema Markdown:</strong> Los artículos no viven en una base de datos compleja, sino en archivos locales <code>.md</code>. Esto permite escribir cómodamente y que el blog los parsee, ordene por fecha y los renderice automáticamente con resaltado de sintaxis.</li>
          </ul>
        </div>
      </div>
    </article>
  );
}
