import Image from "next/image";

type WhiteLabelHeroProps = Readonly<{
  imageAlt: string;
  title: string;
}>;

const decorations = [
  "hero-decoration-top-center",
  "hero-decoration-top-left",
  "hero-decoration-ellipse-full",
  "hero-decoration-skeleton",
  "hero-decoration-bottom-center",
] as const;

export function WhiteLabelHero({ imageAlt, title }: WhiteLabelHeroProps) {
  return (
    <div className="hero-wrapper white-label-page-hero">
      {decorations.map((className) => (
        <div
          aria-hidden="true"
          className={`${className} hero-decoration`}
          key={className}
        />
      ))}

      <section className="hero">
        <h1 className="t-center text-g-green">{title}</h1>
      </section>
    </div>
  );
}
