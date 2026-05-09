import axios from "axios";
import { useEffect, useState } from "react";
import ProductGrid from "../components/ProductGrid";

export default function ProductGallery() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        async function fetchProducts() {
            try {
                const response = await axios.get("https://dummyjson.com/products");
                setProducts(response.data.products);
            } catch (err) {
                setError("Failed to fetch products.");
            } finally {
                setLoading(false);
            }
        }

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
            <h1 className="text-2xl text-red-500 text-center mt-10">
                {error}
            </h1>
        );
    }

    return (
        <div>
            <ProductGrid products={products} />
        </div>
    )
}