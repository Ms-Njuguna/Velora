import axios from "axios";
import { useEffect, useState } from "react";
import ProductGrid from "../components/ProductGrid";
import Button from "../components/Button";

export default function ProductGallery() {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    async function fetchProducts() {

        try {

            setLoading(true);
            setError("");

            const response = await axios.get(
                "https://dummyjson.com/products"
            );

            setProducts(response.data.products);

        } catch (err) {

            setError(
                "Unable to load products. Please try again."
            );

        } finally {

            setLoading(false);
        }
    }

    useEffect(() => {
        fetchProducts();
    }, []);

    // Loading state
    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
        );
    }

    // Error state
    if (error) {
        return (
            <div className="text-center mt-10">
                <h1 className="text-2xl text-red-500 mb-4">
                    {error}
                </h1>

                <Button
                    label="Retry"
                    onClick={fetchProducts}
                />
            </div>
        );
    }

    return (
        <div>
            <ProductGrid products={products} />
        </div>
    );
}