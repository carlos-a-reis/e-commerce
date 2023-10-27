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
    <main>
      <h1>{`Results for ${searchParams.q}`}</h1>
      <FilteredList products={products} />
    </main>
  )
}
