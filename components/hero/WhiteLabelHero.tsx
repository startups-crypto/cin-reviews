"use client";
import type { Dictionary } from "@/app/[lang]/dictionaries";
import clsx from "clsx";
import { useState } from "react";

type WhiteLabelHeroProps = Readonly<{
  heroDictionary: Dictionary["hero"];
  reviews: Dictionary["reviews"];
}>;

const decorations = [
  "hero-decoration-top-center",
  "hero-decoration-top-left",
  "hero-decoration-ellipse-full",
  "hero-decoration-skeleton",
  "hero-decoration-bottom-center",
] as const;

const step = 10;

export function WhiteLabelHero({ heroDictionary, reviews }: WhiteLabelHeroProps) {
  const [visible, setVisible] = useState(10);

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
          {reviews.map((review, index) => {
            return <li key={index} className={index < visible ? "active" : ""}><h4>{review}</h4></li>;
          })}
        </ul>
        <div className="review-button">
          <button className={clsx("s-button","s-button--small", visible >= reviews.length ? "hide" : "")} onClick={() => setVisible(visible + step)}>Load more</button>
        </div>
      </section>
    </div>
  );
}
