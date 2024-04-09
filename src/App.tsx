import {
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
} from "react-router-dom";
import Cart from "./components/Cart";
import Home from "./components/Home";
import Layout from "./components/Layout";
import NotFound from "./components/NotFound";
import ProductDetails from "./components/ProductDetails";
import "./scss/index.scss";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/product/:id" element={<ProductDetails />} />
                <Route path="/cart" element={<Cart />} />
            </Route>
            <Route path="/not-found" element={<NotFound />} />
        </Route>
    )
);

function App() {
    return (
        <div className="app">
            <RouterProvider router={router} />
        </div>
    );
}

export default App;
