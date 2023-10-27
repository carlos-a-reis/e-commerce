import ProductList from './components/ProductList'

export default async function Home() {
  const response = await fetch('https://dummyjson.com/products')
  const { products } = await response.json()

  return (
    <main className="flex justify-center">
      <ProductList products={products} />
    </main>
  )
}
