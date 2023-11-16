'use client'

import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import ProductCard, { ProductInfo } from './ProductCard'

type ProductListProps = {
  products: ProductInfo[]
}

export default function FilteredProductList({ products }: ProductListProps) {
  const [filteredProducts, setFilteredProducts] = useState<ProductInfo[]>()
  const searchParams = useSearchParams()

  useEffect(() => {
    filterProducts(products)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [products])

  const filterByPrice = (products: ProductInfo[]) => {
    const maxPrice = Number(searchParams.get('max_price')) || 0
    const minPrice = Number(searchParams.get('min_price')) || 0

    let filtered = products

    if (maxPrice !== 0) {
      filtered = filtered.filter((product) => product.price <= maxPrice)
    }
    if (minPrice !== 0) {
      filtered = filtered.filter((product) => product.price >= minPrice)
    }

    return filtered
  }

  const sortProducts = (
    products: ProductInfo[],
    key: keyof ProductInfo,
    reverseOrder = false,
  ) => {
    const productsToOrder = products.slice()
    const orderParam = reverseOrder ? -1 : 1

    return productsToOrder.sort((a, b) => {
      const valueA = a[key]
      const valueB = b[key]

      if (valueA < valueB) {
        return -1 * orderParam
      } else if (valueA > valueB) {
        return 1 * orderParam
      } else {
        return 0
      }
    })
  }

  const filterByOrder = (products: ProductInfo[]) => {
    const order = searchParams.get('order_by')

    if (order !== undefined && order !== null) {
      const rising = order.includes('rising')
      const decrasing = order.includes('decrasing')
      const price = order.includes('price')
      const rating = order.includes('rating')

      if ((rising || decrasing) && (price || rating)) {
        const orderBy = price ? 'price' : 'rating'
        console.log(decrasing)
        return sortProducts(products, orderBy, decrasing)
      }
    }

    return products
  }

  const filterByBrands = (products: ProductInfo[]) => {
    const brandString = searchParams.get('brands')

    if (brandString !== 'null' && brandString !== null) {
      const brands = brandString.replace(/%/g, ',').split(',')

      return products.filter((product) =>
        brands.includes(product.brand.toLocaleLowerCase()),
      )
    }

    return products
  }

  const filterProducts = (products: ProductInfo[]) => {
    const priceFilter = filterByPrice(products)
    const orderFilter = filterByOrder(priceFilter)
    const brandsFilter = filterByBrands(orderFilter)

    setFilteredProducts(brandsFilter)
  }

  return (
    <ul className="flex flex-wrap justify-center gap-mbs mt-8 md:w-324 md:gap-3">
      {filteredProducts &&
        filteredProducts.map((product: ProductInfo) => (
          <ProductCard productInfo={product} key={product.id} />
        ))}
    </ul>
  )
}
