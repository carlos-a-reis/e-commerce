'use client'

import { ReactNode, createContext, useState } from 'react'
import { ProductInfo } from '../components/ProductCard'

interface FilterContextType {
  productList: ProductInfo[] | undefined
  filterProducts: (products: ProductInfo[]) => void
}

export const FilterContext = createContext({} as FilterContextType)

type FilterProviderProps = {
  children: ReactNode
}

export function FilterProvider({ children }: FilterProviderProps) {
  const [productList, setProductList] = useState<ProductInfo[]>()

  const filterProducts = (products: ProductInfo[]) => {
    setProductList(products)
  }

  return (
    <FilterContext.Provider value={{ productList, filterProducts }}>
      {children}
    </FilterContext.Provider>
  )
}
