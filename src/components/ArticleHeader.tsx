export default function ArticleHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <header className="relative text-center py-16 md:py-20 mb-6 animate-fadeUp">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(600px_300px_at_50%_30%,rgba(37,99,235,0.18),transparent_70%)]" />
      <div className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.5em] text-gold">
        <span className="diamond-bullet" />
        {eyebrow}
        <span className="diamond-bullet" />
      </div>
      <h1 className="font-display font-bold text-4xl md:text-6xl mt-5 leading-tight">
        <span className="text-gradient">{title}</span>
      </h1>
      <p className="max-w-2xl mx-auto mt-5 text-lg text-muted">{description}</p>
      <div className="ornament max-w-md mx-auto">
        <span className="diamond" />
      </div>
    </header>
  );
}
