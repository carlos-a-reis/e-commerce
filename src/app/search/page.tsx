import { redirect } from 'next/navigation'
import FilteredProductList from '../components/FilteredProductList'
import FilterMenu from '../components/FilterMenu'

type SearchProps = {
  searchParams: { [key: string]: string }
}

export default async function Search({ searchParams }: SearchProps) {
  if (!searchParams.q) {
    redirect('/')
  }

  const response = await fetch(
    `https://dummyjson.com/products/search?q=${searchParams.q}`
  )
  const { products } = await response.json()

  return (
    <main className="flex flex-col mt-6">
      <h1 className="text-lg text-center">
        Results for{' '}
        <span className="text-mainBlue">{`"${searchParams.q}"`}</span>
      </h1>
      <FilterMenu />
      <FilteredProductList products={products} />
    </main>
  )
}
