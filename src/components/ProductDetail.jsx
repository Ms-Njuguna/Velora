import axios from "axios";
import { useEffect, useState } from "react";

export default function ProductDetail({ productId }) {

    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    async function fetchProduct() {

        try {

            setLoading(true);
            setError("");

            const response = await axios.get(
                `https://dummyjson.com/products/${productId}`
            );

            setProduct(response.data);

        } catch (err) {

            if (err.response?.status === 404) {
                setError("Product not found.");
            } else {
                setError("Failed to load product.");
            }

        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchProduct();
    }, [productId]);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-64">
                <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
        );
    }

    if (error) {
        return (
            <h1 className="text-2xl text-red-500 text-center">
                {error}
            </h1>
        );
    }

    return (
        <div className="max-w-md mx-auto p-6 shadow-xl rounded-xl">
            <img
                src={product.thumbnail}
                alt={product.title}
                className="w-full h-64 object-cover rounded-lg"
            />

            <h1 className="text-3xl font-bold mt-4">
                {product.title}
            </h1>

            <p className="text-gray-600 mt-2">
                {product.description}
            </p>

            <p className="text-2xl font-semibold mt-4">
                ${product.price}
            </p>
        </div>
    );
}