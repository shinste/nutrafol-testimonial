interface TestimonialCardProps {
  text: string;
  age: number;
  author: string;
}
const TestimonialCard: React.FC<TestimonialCardProps> = ({
  text,
  age,
  author,
}) => {
  return (
    <div className="review-card">
      <p className="card-author">{author}</p>
      <p className="card-age">AGE {age}</p>
      <p className="card-text">"{text}"</p>
    </div>
  );
};

export default TestimonialCard;
