export default function ProductCard({title, price, imageURL}) {
    return (
        <div>
            <h1>{title}</h1>
            <p>{price}</p>
            <img alt="product image" src={imageURL}/>
        </div>
    )
}