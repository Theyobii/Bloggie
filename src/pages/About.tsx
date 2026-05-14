export default function About() {
  return (
    <article className="mx-auto max-w-4xl px-4 sm:px-6 pt-48 pb-16 md:pt-56 animate-fade-in-up">
      <div className="prose prose-lg mx-auto">
        <h1 className="text-center md:text-left">Sobre Bloggie</h1>
        <p className="lead">
          Bienvenido a la sección "Acerca de". Aquí descubrirás de qué trata este proyecto, quién está detrás de él y cómo fue construido pieza por pieza.
        </p>
        
        <h2>¿De qué trata el blog?</h2>
        <p>
          <strong>Bloggie</strong> es un espacio diseñado para compartir conocimientos, ideas y experiencias sobre gerencia, tecnología y desarrollo de proyectos. El objetivo principal es ofrecer artículos concisos, estructurados y de alto valor que ayuden a otros profesionales a mejorar sus habilidades y mantenerse siempre actualizados.
        </p>

        <h2>¿Quién soy y en qué me destaco?</h2>
        <p>
          Soy un profesional apasionado por el desarrollo de software y la gerencia tecnológica. Me destaco en la creación de aplicaciones web modernas, la resolución de problemas complejos y la búsqueda de interfaces que ofrezcan experiencias de usuario (UX) excepcionales.
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
    </article>
  );
}
