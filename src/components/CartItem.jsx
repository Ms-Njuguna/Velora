import Button from "./Button";

export default function CartItem({ product }) {
    const {title, imageURL, id} = product;

    function handleRemove() {
        console.log(`Item ID No.: ${id} has been removed from cart!`);
    }

    return (
        <div className="flex gap-3">
            <img alt={title} src={imageURL} className="h-12 w-12 rounded-xl"/>
            <h3 className="font-bold">{title}</h3>
            <Button label='Remove' variant = "primary" onClick={handleRemove} />
        </div>
    )
}