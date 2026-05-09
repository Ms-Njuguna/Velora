import ProductCard from "./ProductCard";
import CartItem from "./CartItem";

export default function ProductGrid({products}) {

    function onAddToCart() {
        console.log('Product added!')
    }

    function handleRemove(id) {
        console.log(`Item ID No.: ${id} has been removed from cart!`);
    }


    return (
        <section>
            <h1>Browse through some of our products</h1>
            <div className="grid grid-cols-3 gap-4">
                {products.map((p) => (
                    <div key={p.id}>
                        <ProductCard key={p.id} title={p.title} price={p.price} imageURL={p.thumbnail} onAddToCart={onAddToCart}/>
                        <CartItem product={p} handleRemove={handleRemove}/>
                    </div>
                ))}
            </div>
        </section>
    )
}