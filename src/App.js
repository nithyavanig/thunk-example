import "./App.css";
import Header from "./containers/Header";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import ProductListing from "./containers/ProductListing";
import ProductDetails from "./containers/ProductDetails";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" exact element={<ProductListing />} />
        <Route path="/product/:productId" element={<ProductDetails />} />
        <Route>404 Not found</Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
