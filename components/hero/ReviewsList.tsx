"use client";

import type { Dictionary } from "@/app/[lang]/dictionaries";
import clsx from "clsx";
import { useState } from "react";

type ReviewsListProps = Readonly<{
  reviews: Dictionary["reviews"];
  loadMoreText: Dictionary["reviewsCTA"];
}>;

const initialVisibleReviews = 10;
const step = 10;
const staggerDelay = 100;

export function ReviewsList({ reviews, loadMoreText }: ReviewsListProps) {
  const [visible, setVisible] = useState(initialVisibleReviews);
  const [revealStart, setRevealStart] = useState<number | null>(null);
  const allReviewsVisible = visible >= reviews.length;


  function handleLoadMore() {
    setRevealStart(visible);
    setVisible((currentVisible) =>
      Math.min(currentVisible + step, reviews.length),
    );
  }

  return (
    <>
      <ul aria-live="polite" className="cin-reviews" id="cin-reviews">
        {reviews.map((review, index) => (
          <li
            className={index < visible ? "active" : ""}
            key={index}
            style={{
              transitionDelay:
                revealStart !== null && index >= revealStart
                  ? `${(index - revealStart) * staggerDelay}ms`
                  : undefined,
            }}
          >
            <blockquote>
              <p>{review}</p>
            </blockquote>
          </li>
        ))}
      </ul>
      <div className="review-button">
        <button
          aria-controls="cin-reviews"
          aria-expanded={allReviewsVisible}
          className={clsx(
            "s-button",
            "s-button--small",
            allReviewsVisible && "hide",
          )}
          onClick={handleLoadMore}
          type="button"
        >
          {loadMoreText}
        </button>
      </div>
    </>
  );
}
