import { useParams, Navigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { getPostBySlug } from '../utils/markdown-parser';

export default function PostPage() {
  const { slug } = useParams<{ slug: string }>();

  if (!slug) {
    return <Navigate to="/" replace />;
  }

  const post = getPostBySlug(slug);

  if (!post) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center animate-fade-in-up">
        <h1 className="text-4xl font-display font-bold text-white mb-4">Post Not Found</h1>
        <p className="text-brand-pastel-400">The article you are looking for does not exist.</p>
      </div>
    );
  }

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 pt-32 pb-16 md:pt-40 animate-fade-in-up">
      {/* Post Header */}
      <header className="mb-12 text-center">
        {post.frontmatter.category && (
          <span className="text-brand-highlight text-sm font-semibold tracking-wider uppercase mb-4 block">
            {post.frontmatter.category}
          </span>
        )}
        <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 leading-tight">
          {post.frontmatter.title}
        </h1>
        <div className="flex items-center justify-center space-x-4 text-brand-pastel-400 text-sm">
          <span>{post.frontmatter.author}</span>
          <span>•</span>
          <time dateTime={post.frontmatter.date}>
            {new Date(post.frontmatter.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </time>
        </div>
      </header>

      {/* Featured Image */}
      {post.frontmatter.imageUrl && (
        <div className="mb-12 rounded-2xl overflow-hidden shadow-[0_8px_30px_rgba(186,230,253,0.1)] border border-brand-pastel-500/10">
          <img
            src={post.frontmatter.imageUrl}
            alt={post.frontmatter.title}
            className="w-full h-auto object-cover max-h-[500px]"
          />
        </div>
      )}

      {/* Markdown Content */}
      <div className="prose prose-lg mx-auto">
        <ReactMarkdown
          components={{
            code({ node, inline, className, children, ...props }: any) {
              const match = /language-(\w+)/.exec(className || '');
              return !inline && match ? (
                <SyntaxHighlighter
                  {...props}
                  style={vscDarkPlus}
                  language={match[1]}
                  PreTag="div"
                  className="rounded-xl border border-brand-pastel-500/10 shadow-lg my-6"
                >
                  {String(children).replace(/\n$/, '')}
                </SyntaxHighlighter>
              ) : (
                <code {...props} className={`${className} bg-brand-deep-100 rounded px-1.5 py-0.5`}>
                  {children}
                </code>
              );
            }
          }}
        >
          {post.content}
        </ReactMarkdown>
      </div>
    </article>
  );
}
