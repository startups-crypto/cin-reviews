import type { Dictionary } from "@/app/[lang]/dictionaries";
import { ReviewsList } from "@/components/hero/ReviewsList";
import { DeferredAlkatraText } from "../deferredAlkatraText/DeferredAlkatraText";

type WhiteLabelHeroProps = Readonly<{
  heroDictionary: Dictionary["hero"];
  reviews: Dictionary["reviews"];
  reviewsCTA: Dictionary["reviewsCTA"];
}>;

const decorations = [
  "hero-decoration-top-center",
  "hero-decoration-top-left",
  "hero-decoration-ellipse-full",
  "hero-decoration-skeleton",
  "hero-decoration-bottom-center",
] as const;

export function WhiteLabelHero({ heroDictionary, reviews, reviewsCTA }: WhiteLabelHeroProps) {
  return (
    <div className="hero-wrapper white-label-page-hero">
      <section className="hero">
        <h1 className="t-center text-g-green">
          {heroDictionary.title}<DeferredAlkatraText>{heroDictionary.titlePart2}</DeferredAlkatraText>
        </h1>
        <ReviewsList reviews={reviews} loadMoreText={reviewsCTA} />
      </section>
    </div>
  );
}
