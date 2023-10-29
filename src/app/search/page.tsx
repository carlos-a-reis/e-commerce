import { redirect } from 'next/navigation'
import FilteredList from '../components/FilteredList'

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
    <main className="mt-6">
      <h1 className="text-lg text-center">
        Results for{' '}
        <span className="text-mainBlue">{`"${searchParams.q}"`}</span>
      </h1>
      <FilteredList products={products} />
    </main>
  )
}
