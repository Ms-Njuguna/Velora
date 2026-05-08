export default function ProductCard({title, price, imageURL}) {
    const validatePrice = typeof price === "number" && !isNaN(price) ? price : 0;

    return (
        <div>
            <h1>{title}</h1>
            <p>kes: {validatePrice.toFixed(2)}</p>
            <img alt="product image" src={imageURL}/>
        </div>
    )
}