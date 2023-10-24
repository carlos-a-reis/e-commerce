import ProductCard, { ProductInfo } from './components/ProductCard'

export default async function Home() {
  const response = await fetch('https://dummyjson.com/products')
  const { products } = await response.json()

  return (
    <main className="flex justify-center">
      <ul className="flex flex-wrap justify-center gap-mbs mt-8 md:justify-between md:w-324 md:gap-3">
        {products.map((product: ProductInfo) => (
          <ProductCard productInfo={product} key={product.id} />
        ))}
      </ul>
    </main>
  )
}
