import { redirect } from 'next/navigation'
import FilteredProductList from '../components/FilteredProductList'
import FilterMenu from '../components/FilterMenu/FilterMenu'

type SearchProps = {
  searchParams: { [key: string]: string }
}

export default async function Search({ searchParams }: SearchProps) {
  if (!searchParams.q) {
    redirect('/')
  }

  const response = await fetch(
    `https://dummyjson.com/products/search?q=${searchParams.q}`,
  )
  const { products } = await response.json()

  return (
    <main className="flex flex-col justify-center mt-6 md:flex-row md:flex-wrap">
      <h1 className="w-full text-lg text-center md:text-2xl md:font-medium">
        Results for{' '}
        <span className="text-mainBlue">{`"${searchParams.q}"`}</span>
      </h1>
      <div className="flex flex-col md:flex-row md:w-324">
        <FilterMenu products={products} />
        <FilteredProductList products={products} />
      </div>
    </main>
  )
}
