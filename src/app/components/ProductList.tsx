'use client'

import ProductCard, { ProductInfo } from './ProductCard'

type ProductListProps = {
  products: ProductInfo[]
}

export default function FilteredProductList({ products }: ProductListProps) {
  return (
    <ul className="flex flex-wrap justify-center gap-mbs mt-8 md:w-324 md:gap-3">
      {products.map((product: ProductInfo) => (
        <ProductCard productInfo={product} key={product.id} />
      ))}
    </ul>
  )
}
