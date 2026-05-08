import ProductGrid from "./components/ProductGrid"

function App() {
  console.log(import.meta.env.VITE_API_KEY)
  return (
    <>
      <h1 className="text-3xl font-bold underline">
        Welcome to Velora!
      </h1>
      <ProductGrid />
    </>
  )
}

export default App
