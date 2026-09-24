export default function SectionTitle({
  kicker,
  title,
}: {
  kicker: string;
  title: string;
}) {
  return (
    <div className="section-title">
      <div className="kicker">{kicker}</div>
      <h2>{title}</h2>
      <div className="deco">
        <span />
      </div>
    </div>
  );
}
