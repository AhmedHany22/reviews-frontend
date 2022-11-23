import "./Navbar.css";

import { Link } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";
import Spinner from "./../Spinner/index";

const CATEGORIES = gql`
  query GetCategories {
    categories {
      data {
        id
        attributes {
          name
        }
      }
    }
  }
`;

const Navbar = () => {
  const { data, loading, error } = useQuery(CATEGORIES);
  if (data) console.log(data);

  if (loading) return <Spinner />;

  if (error)
    return (
      <div className="m-24">
        <h1 className="font-extrabold text-gray-700">Error: can't the load data :(</h1>
      </div>
    );

  return (
    <nav className="bg-white sm:px-4 py-2.5 w-full border-b border-gray-200">
      <div className="container flex flex-wrap items-center justify-between px-12">
        <Link to="/" className="flex items-center">
          <img
            src="https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=height:60/https://www.filepicker.io/api/file/JIGkr7PVQeuw9rcBtGuB"
            className="h-6 mr-3 sm:h-9"
            alt="Flowbite Logo"
          />
          <span className="self-center text-xl whitespace-nowrap font-extrabold text-gray-700">Ninja</span>
        </Link>
        <div className="flex md:order-2">
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-sticky"
            aria-expanded="false">
            <span className="sr-only">Open main menu</span>
          </button>
        </div>
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
          <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white">
            {data.categories.data.map((category) => (
              <li key={category.id}>
                <Link
                  to={`/category/${category.id}`}
                  className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 font-bold">
                  {category.attributes.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
