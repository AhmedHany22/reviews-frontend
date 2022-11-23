import "./Category.css";
import { useParams } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";

import Review from "./../../Components/Review/index";
import Spinner from "./../../Components/Spinner/index";

const CATEGORY = gql`
  query GetCategory($id: ID!) {
    category(id: $id) {
      data {
        id
        attributes {
          name
          reviews {
            data {
              id
              attributes {
                rating
                title
                body
                createdAt
                categories {
                  data {
                    id
                    attributes {
                      name
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

const Category = () => {
  let { id } = useParams();

  const { data, loading, error } = useQuery(CATEGORY, { variables: { id: id } });

  if (loading) return <Spinner />;

  if (error)
    return (
      <div className="m-24">
        <h1 className="font-extrabold text-gray-700">Error: can't the load data :(</h1>
      </div>
    );

  const category = data.category.data;
  const reviews = category.attributes.reviews.data;

  console.log(reviews);
  return (
    <div className="w-5/6 mx-auto my-12">
      <h2 className="text-4xl font-extrabold text-gray-700 w-max">Ninja Reviews</h2>

      <ol className="relative border-l border-gray-200 mx-4 my-8">
        {reviews.map((review) => (
          <Review key={category.id} review={review} />
        ))}
      </ol>
    </div>
  );
};

export default Category;
