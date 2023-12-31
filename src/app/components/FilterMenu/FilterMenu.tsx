'use client'

import { useState } from 'react'
import PriceFilter from './PriceFilter'
import { faSliders } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRouter, useSearchParams } from 'next/navigation'
import OrderFilter from './OrderFilter'
import BrandFilter from './BrandFilter'
import { ProductInfo } from '../ProductCard'

export type SetURLType = {
  maxPrice?: string | null
  minPrice?: string | null
  orderBy?: string | null
  brands?: string | null
}

type FilterMenuProps = {
  products: ProductInfo[]
}

export default function FilterMenu({ products }: FilterMenuProps) {
  const [showFilterMenu, setShowFilterMenu] = useState(false)
  const router = useRouter()
  const searchParams = useSearchParams()

  const search = searchParams.get('q')
  const URLParams = {
    maxPrice: searchParams.get('max_price'),
    minPrice: searchParams.get('min_price'),
    orderBy: searchParams.get('order_by'),
    brands: searchParams.get('brands'),
  }

  const handleClick = () => {
    setShowFilterMenu((state) => !state)
  }

  const setURL = (params: SetURLType) => {
    params = {
      ...URLParams,
      ...params,
    }
    router.push(
      `/search?q=${search}&max_price=${params.maxPrice}&min_price=${params.minPrice}&order_by=${params.orderBy}&brands=${params.brands}`,
    )
  }

  return (
    <>
      <div className="flex -mt-7 justify-end w-85 absolute self-center md:hidden">
        <FontAwesomeIcon
          icon={faSliders}
          className="w-6 text-mainBlue"
          onClick={handleClick}
        />
      </div>
      <aside
        data-showFilter={showFilterMenu}
        className="side-filter data-[showFilter=true]:flex"
      >
        <h1 className="text-3xl font-bold md:text-4xl">Filter</h1>
        <PriceFilter setURL={setURL} />
        <OrderFilter setURL={setURL} />
        <BrandFilter setURL={setURL} products={products} />
      </aside>
      <div
        data-showFilter={showFilterMenu}
        className="opacity-box hidden data-[showFilter=true]:block"
        onClick={handleClick}
      ></div>
    </>
  )
}
