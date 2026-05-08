export default function Button({ label, variant = "primary", onClick }) {
    const baseStyles = "mt-4 w-full py-2 rounded-md"
    const variants = {
        primary: "bg-slate-900 text-white hover:bg-slate-700",
        secondary: "bg-gray-200 text-black hover:bg-gray-300",
    }

    return (
        <button onClick={onClick} className={`${baseStyles} ${variants[variant]}`}>{label}</button>
    )
}