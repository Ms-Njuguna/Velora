import ProductCard from "./ProductCard";
import CartItem from "./CartItem";

export default function ProductGrid() {
    const products = [
        {id: 1, title: "Chocolate Bar", price:180, imageURL: "https://i.pinimg.com/1200x/9e/5e/5f/9e5e5fff5909a73effa955de6b15999b.jpg"},
        {id: 2, title: "Lemon Cake Slice", price:250, imageURL: "https://i.pinimg.com/736x/52/d4/5b/52d45b9972006ee8fadc326a4ea12480.jpg"},
        {id: 3, title: "Caramel Popcorn", price:100, imageURL: "https://i.pinimg.com/1200x/14/65/59/146559d8bbd5e0d67a6002b2b83787b3.jpg"},
    ];

    function onAddToCart() {
        console.log('Product added!')
    }

    return (
        <section>
            <h1>Browse through some of our products</h1>
            <div className="grid grid-cols-3 gap-4">
                {products.map((p) => (
                    <div key={p.id}>
                        <ProductCard key={p.id} title={p.title} price={p.price} imageURL={p.imageURL} onAddToCart={onAddToCart}/>
                        <CartItem product={p}/>
                    </div>
                ))}
            </div>
        </section>
    )
}