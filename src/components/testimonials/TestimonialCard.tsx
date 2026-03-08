import React from "react";

interface TestimonialCardProps {
  text: string;
  age: number;
  author: string;
}
const TestimonialCard: React.FC<TestimonialCardProps> = React.memo(
  ({ text, author, age }) => {
    return (
      <div className="review-card">
        <p className="card-author">{author}</p>
        <p className="card-age">AGE {age}</p>
        <p className="card-text">"{text}"</p>
      </div>
    );
  },
);

export default TestimonialCard;
