import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

// Pages routes
import Home from "./Routes/Home";
import Navbar from "./Components/Navbar/index";
import Preveiw from "./Routes/Preveiw/index";
import Category from "./Routes/Category/index";

// Graphql Apollo Client
const client = new ApolloClient({
  uri: "http://localhost:1337/graphql",
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:id" element={<Preveiw />} />
          <Route path="/category/:id" element={<Category />} />
        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  );
};

export default App;
