import { useMemo } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import TestimonialCard from "./TestimonialCard";
import type { reviewProps } from "./testimonialsData";
import "./testimonials.css";

interface TestimonyCarouselProps {
  reviews: reviewProps[];
  index: number;
  setIndex: React.Dispatch<React.SetStateAction<number>>;
}

const TestimonyCarousel: React.FC<TestimonyCarouselProps> = ({
  reviews,
  index,
  setIndex,
}) => {
  const { column1Reviews, column2Reviews } = useMemo(() => {
    const col1: reviewProps[] = [];
    const col2: reviewProps[] = [];
    reviews.forEach((review, i) => {
      if (i % 2 === 0) col1.push(review);
      else col2.push(review);
    });
    return { column1Reviews: col1, column2Reviews: col2 };
  }, [reviews]);

  const totalSlides = Math.max(
    Math.ceil(column1Reviews.length / 2),
    Math.ceil(column2Reviews.length / 2),
  );

  const prev = () => setIndex((i) => (i === 0 ? totalSlides - 1 : i - 1));
  const next = () => setIndex((i) => (i === totalSlides - 1 ? 0 : i + 1));

  const slideIndices = Array.from({ length: totalSlides }, (_, i) => i);

  return (
    <div className="flex-items-center">
      <button onClick={prev} className="carousel-button">
        <MdKeyboardArrowLeft size={30} />
      </button>

      <div className="max-w-lg">
        <div className="carousel-parent">
          <div
            className="carousel"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {slideIndices.map((slideIdx) => {
              const start = slideIdx * 2;
              const end = start + 2;

              return (
                <div key={slideIdx} className="reviews-container">
                  <div className="column">
                    {column1Reviews.slice(start, end).map((review) => (
                      <TestimonialCard
                        key={review.id}
                        text={review.text}
                        author={review.author}
                        age={review.age}
                      />
                    ))}
                  </div>
                  <div className="column">
                    {column2Reviews.slice(start, end).map((review) => (
                      <TestimonialCard
                        key={review.id}
                        text={review.text}
                        author={review.author}
                        age={review.age}
                      />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="pagination-container">
          {slideIndices.map((_, i) => (
            <div
              key={i}
              className="pagination"
              style={{
                width: index === i ? "24px" : "10px",
                backgroundColor: index === i ? "#007A73" : "#d9d9d9",
              }}
            ></div>
          ))}
        </div>
      </div>

      <button onClick={next} className="carousel-button">
        <MdKeyboardArrowRight size={30} />
      </button>
    </div>
  );
};

export default TestimonyCarousel;
