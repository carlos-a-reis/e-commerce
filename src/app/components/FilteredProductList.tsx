'use client'

import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import ProductCard, { ProductInfo } from './ProductCard'

type ProductListProps = {
  products: ProductInfo[]
}

export default function FilteredProductList({ products }: ProductListProps) {
  const [filteredProducts, setFilteredProducts] = useState(products)
  const searchParams = useSearchParams()

  useEffect(() => {
    filterByPrice(products)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [products])

  const filterByPrice = (products: ProductInfo[]) => {
    const maxPrice = Number(searchParams.get('max_price'))
    const minPrice = Number(searchParams.get('min_price'))

    let filtered = products

    if (maxPrice !== 0) {
      filtered = filtered.filter((product) => product.price <= maxPrice)
    }
    if (minPrice !== 0) {
      filtered = filtered.filter((product) => product.price >= minPrice)
    }

    setFilteredProducts(filtered)
  }

  return (
    <ul className="flex flex-wrap justify-center gap-mbs mt-8 md:w-324 md:gap-3">
      {filteredProducts.map((product: ProductInfo) => (
        <ProductCard productInfo={product} key={product.id} />
      ))}
    </ul>
  )
}
