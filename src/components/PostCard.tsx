import type { Post } from '../types/Post';

interface PostCardProps {
  post: Post;
  index: number;
}



export default function PostCard({ post, index }: PostCardProps) {
  const formattedDate = new Intl.DateTimeFormat('es-ES', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }).format(new Date(post.date));

  return (
    <article
      id={`post-card-${post.id}`}
      className="group relative flex flex-col rounded-2xl border border-brand-deep-400/40 bg-brand-deep-100/60 backdrop-blur-sm transition-all duration-500 hover:border-brand-highlight/30 hover:shadow-xl hover:shadow-brand-highlight/[0.07] hover:-translate-y-1"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Top accent bar */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-highlight/0 to-transparent transition-all duration-500 group-hover:via-brand-highlight/50" />

      <div className="flex flex-1 flex-col p-6 sm:p-8">


        {/* Title */}
        <h3 className="text-lg font-bold font-display leading-snug text-brand-pastel-50 transition-colors duration-300 group-hover:text-white">
          <a href={`#post-${post.id}`} className="after:absolute after:inset-0">
            {post.title}
          </a>
        </h3>

        {/* Excerpt */}
        <p className="mt-3 flex-1 text-sm leading-relaxed text-brand-pastel-500">
          {post.excerpt}
        </p>

        {/* Meta row */}
        <div className="mt-6 flex items-center justify-between border-t border-brand-deep-400/30 pt-4">
          <div className="flex items-center gap-2">
            {/* Avatar placeholder */}
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-brand-highlight/30 to-brand-highlight-400/30 text-[10px] font-bold text-brand-pastel-100">
              {post.author.name
                .split(' ')
                .map((n) => n[0])
                .join('')}
            </div>
            <span className="text-xs font-medium text-brand-pastel-500">
              {post.author.name}
            </span>
          </div>

          <div className="flex items-center gap-3 text-xs text-brand-pastel-500/60">
            <time dateTime={post.date}>{formattedDate}</time>
            {post.readingTime && (
              <>
                <span className="text-brand-deep-500">·</span>
                <span>{post.readingTime} min</span>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Hover glow */}
      <div className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-gradient-to-b from-brand-highlight/[0.05] to-transparent" />
    </article>
  );
}
