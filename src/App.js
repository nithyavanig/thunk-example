import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import ProductComponent from "./containers/ProductComponent";
import Header from "./containers/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" exact element={<ProductComponent />} />
        <Route>404 Not found</Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
