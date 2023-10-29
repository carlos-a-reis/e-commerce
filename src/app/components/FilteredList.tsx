'use client'

import { useState } from 'react'
import ProductList from './ProductList'
import FilterMenu from './FilterComponents/FilterMenu'
import { ProductInfo } from './ProductCard'

type FilteredListProps = {
  products: ProductInfo[]
}

export default function FilteredList({ products }: FilteredListProps) {
  const [productList, setProductList] = useState<ProductInfo[] | []>(products)

  const filterProducts = (products: ProductInfo[]) => {
    setProductList(products)
  }

  return (
    <>
      <FilterMenu productList={productList} filterProducts={filterProducts} />
      <ProductList products={productList} />
    </>
  )
}
