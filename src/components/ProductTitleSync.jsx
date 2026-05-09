import { useEffect, useState } from "react";

export default function ProductTitleSync() {
  const [product, setProduct] = useState("Chocolate Bar");

  useEffect(() => {
    document.title = product;
  }, [product]);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">{product}</h1>

      <div className="flex gap-2">
        <button
          onClick={() => setProduct("Chocolate Bar")}
          className="bg-brown-500 text-white px-4 py-2 rounded"
        >
          Chocolate Bar
        </button>

        <button
          onClick={() => setProduct("Vanilla Cake")}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Vanilla Cake
        </button>

        <button
          onClick={() => setProduct("Strawberry Donut")}
          className="bg-pink-500 text-white px-4 py-2 rounded"
        >
          Strawberry Donut
        </button>
      </div>
    </div>
  );
}