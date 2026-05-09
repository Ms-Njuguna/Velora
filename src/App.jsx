import ProductGallery from "./components/ProductGallery"
import ProductTitleSync from "./components/ProductTitleSync"
import TimerCleanup from "./components/TimerCleanup"
import SearchEffect from "./components/SearchEffect"
import ProductDetail from "./components/ProductDetail"

function App() {
  console.log(import.meta.env.VITE_API_KEY)
  return (
    <>
      <ProductDetail productId={999999} />
      <h1 className="text-3xl font-bold underline">
        Welcome to Velora!
      </h1>
      <ProductGallery />
      <div className="space-y-10 p-8">
        <ProductTitleSync />
        <TimerCleanup />
        <SearchEffect />
      </div>
    </>
  )
}

export default App
