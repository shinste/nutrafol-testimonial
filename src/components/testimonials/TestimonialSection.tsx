import { useMemo, useState } from "react";
import { IoMdArrowForward } from "react-icons/io";
import { reviews, type reviewProps } from "./testimonialsData";
import TestimonyCarousel from "./TestimonyCarousel";
import "./testimonials.css";

const TestimonialSection = () => {
  const [category, setCategory] = useState("All Stories");
  const filters = ["All Stories", "Postpartum", "PCOS/Hormones", "Stress"];
  const [index, setIndex] = useState(0);
  const filteredReviews: reviewProps[] = useMemo(() => {
    if (category === "All Stories") return reviews;
    return reviews.filter((r) => r.category === category);
  }, [category]);

  return (
    <section className="testimonial-section">
      <header className="testimonial-heading">
        <h2>REAL STORIES</h2>
        <h1>Results You Can See</h1>
        <h3>
          You are not alone! See how women just like you have taken control of
          their hair health.
        </h3>
      </header>

      <div className="testimonial-filter">
        {filters.map((filter) => (
          <button
            key={filter}
            className={`filter-button ${category === filter ? "selected-button" : ""}`}
            onClick={() => {
              setCategory(filter);
              setIndex(0);
            }}
          >
            {filter}
          </button>
        ))}
      </div>

      <TestimonyCarousel
        reviews={filteredReviews}
        index={index}
        setIndex={setIndex}
      />

      <button className="cta-button flex-items-center">
        <p>Try it Yourself</p>
        <div className="cta-arrow flex-items-center">
          <IoMdArrowForward />
        </div>
      </button>
    </section>
  );
};

export default TestimonialSection;
