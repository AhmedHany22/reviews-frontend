import "./Review.css";
import { Link } from "react-router-dom";

const Review = ({ review }) => {
  return (
    <li className="mb-10 ml-4">
      <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
      <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
        {review.attributes.createdAt.substring(0, 10)}
      </time>
      <h3 className="text-lg font-semibold text-gray-900 dark:gray-900">{review.attributes.title}</h3>
      <p className="mb-2 text-base font-normal text-gray-500 dark:text-gray-400">{review.attributes.body.substring(0, 300)}...</p>
      <Link className="text-sky-500" to={`/details/${review.id}`}>
        Read more {">"}
      </Link>
    </li>
  );
};

export default Review;
