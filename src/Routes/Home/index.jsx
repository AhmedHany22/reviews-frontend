import "./Home.css";
import Review from "../../Components/Review";
import useFetch from "./../../Hooks/useFetch";
import Spinner from "../../Components/Spinner";

const Home = () => {
  const { data, loading, error } = useFetch("http://localhost:1337/api/reviews");

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return (
      <div className="m-24">
        <h1 className="font-extrabold text-gray-700">Error: can't the load data</h1>
      </div>
    );
  }

  return (
    <div className="w-5/6 mx-auto my-12">
      <h2 className="text-4xl font-extrabold text-gray-700 w-max">
        Ninja Reviews
        <hr className="mt-2 w-auto h-1 bg-gray-500 rounded border-0 " />
      </h2>

      <ol className="relative border-l border-gray-200 mx-4 my-8">
        {data && data.map((review) => <Review key={review.id} review={review} />)}
      </ol>
    </div>
  );
};

export default Home;
