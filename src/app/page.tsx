import { ProductCard, ProductInfo } from '../components/ProductCard'

export default async function Home() {
  const response = await fetch('https://dummyjson.com/products')
  const { products } = await response.json()

  return (
    <main>
      <ul className="flex flex-wrap justify-center gap-mbs mt-8">
        {products.map((product: ProductInfo) => (
          <ProductCard productInfo={product} key={product.id} />
        ))}
      </ul>
    </main>
  )
}
