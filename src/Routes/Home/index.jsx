import "./Home.css";
import { gql, useQuery } from "@apollo/client";

import Review from "../../Components/Review";
import Spinner from "../../Components/Spinner";

const REVIEWS = gql`
  query GetReviews {
    reviews {
      data {
        id
        attributes {
          title
          rating
          body
          createdAt
        }
      }
    }
  }
`;

const Home = () => {
  const { data, loading, error } = useQuery(REVIEWS);

  if (loading) return <Spinner />;

  if (error)
    return (
      <div className="m-24">
        <h1 className="font-extrabold text-gray-700">Error: can't the load data :(</h1>
      </div>
    );

  return (
    <div className="w-5/6 mx-auto my-12">
      <h2 className="text-4xl font-extrabold text-gray-700 w-max">Ninja Reviews</h2>

      <ol className="relative border-l border-gray-200 mx-4 my-8">
        {data.reviews.data.map((review) => (
          <Review key={review.id} review={review} />
        ))}
      </ol>
    </div>
  );
};

export default Home;
