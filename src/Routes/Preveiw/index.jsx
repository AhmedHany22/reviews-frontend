import "./Preveiw.css";
import { faker } from "@faker-js/faker";
import { gql, useQuery } from "@apollo/client";
import { Link, useParams } from "react-router-dom";

import Spinner from "./../../Components/Spinner/index";

const REVIEW = gql`
  query GetReview($id: ID!) {
    review(id: $id) {
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

const Preveiw = () => {
  let { id } = useParams();

  const { data, loading, error } = useQuery(REVIEW, { variables: { id: id } });
  console.log(data);

  if (loading) return <Spinner />;

  if (error)
    return (
      <div className="m-24">
        <h1 className="font-extrabold text-gray-700">Error: can't the load data :(</h1>
      </div>
    );

  return (
    <section className="text-gray-600 body-font mx-12">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            {data && data.review.data.attributes.title}
            <br className="hidden lg:inline-block" />
          </h1>
          <p className="mb-8 leading-relaxed pl-2">{data && data.review.data.attributes.body}</p>
          <div className="flex justify-center">
            <Link
              to="/"
              className="inline-flex text-white bg-sky-500 border-0 py-2 px-6 focus:outline-none hover:bg-sky-700 rounded text-lg">
              Back
            </Link>
          </div>
        </div>

        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img className="object-cover object-center rounded" alt="hero" src={faker.image.nature()} />
        </div>
      </div>
    </section>
  );
};

export default Preveiw;
