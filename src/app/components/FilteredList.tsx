'user client'

import FilteredProductList from './FilteredProductList'
import { ProductInfo } from './ProductCard'
import FilterMenu from './FilterMenu'
import { useState } from 'react'

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
      <FilteredProductList products={productList} />
    </>
  )
}
