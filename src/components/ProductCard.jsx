export default function ProductCard({title, price, imageURL, onAddToCart}) {
    const validatePrice = typeof price === "number" && !isNaN(price) ? price : 0;

    return (
        <div className="bg-white rounded-lg border border-slate-200 p-4 hover:shadow-lg transition-shadow">
            <img alt={title} src={imageURL} className="w-full h-48 object-cover rounded-md" />
            <div className="mt-4">
                <h3 className="text-lg font-bold text-slate-900">{title}</h3>
                <p className="text-xl text-blue-600 font-semibold">${price.toFixed(2)}</p>
                <button onClick={onAddToCart} className="mt-4 w-full bg-slate-900 text-white py-2 rounded-md hover:bg-slate-700">Add to Cart</button>
            </div>
        </div>
    )
}