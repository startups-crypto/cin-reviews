import type { Dictionary } from "@/app/[lang]/dictionaries";

type WhiteLabelHeroProps = Readonly<{
  heroDictionary: Dictionary["hero"];
}>;

const decorations = [
  "hero-decoration-top-center",
  "hero-decoration-top-left",
  "hero-decoration-ellipse-full",
  "hero-decoration-skeleton",
  "hero-decoration-bottom-center",
] as const;

export function WhiteLabelHero({ heroDictionary }: WhiteLabelHeroProps) {
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
        <h1 className="t-center text-g-green">
          <span className="font-alkatra-medium">{heroDictionary.title}</span>
          {heroDictionary.titlePart2}
        </h1>
        <ul className="cin-reviews">
          <li>
            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat.</p>
          </li>
          <li>
            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat.</p>
          </li>
          <li>
            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat.</p>
          </li>
          <li>
            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat.</p>
          </li>
          <li>
            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat.</p>
          </li>
          <li>
            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat.</p>
          </li>
          <li>
            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat.</p>
          </li>
          <li>
            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat.</p>
          </li>
        </ul>
      </section>
    </div>
  );
}
