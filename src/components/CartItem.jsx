import Button from "./Button";

export default function CartItem({ product, handleRemove }) {
    const {title, imageURL, id} = product;

    return (
        <div className="flex gap-3">
            <img alt={title} src={imageURL} className="h-12 w-12 rounded-xl"/>
            <h3 className="font-bold">{title}</h3>
            <Button label='Remove' variant = "primary" onClick={() => handleRemove(product.id)} />
        </div>
    )
}