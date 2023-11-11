'use client'

import { useState } from 'react'
import PriceFilter from './PriceFilter'
import { faSliders } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRouter, useSearchParams } from 'next/navigation'
import OrderFilter from './OrderFilter'

export type SetURLType = {
  maxPrice?: string | null
  minPrice?: string | null
  orderBy?: string | null
  brands?: string | null
}

export default function FilterMenu() {
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
      <div className="flex justify-end w-85 absolute self-center">
        <FontAwesomeIcon
          icon={faSliders}
          className="w-6 text-mainBlue md:hidden"
          onClick={handleClick}
        />
      </div>
      {showFilterMenu && (
        <>
          <aside className="side-menu flex flex-col gap-8 right-0">
            <h1 className="text-3xl font-bold">Filter</h1>
            <PriceFilter setURL={setURL} />
            <OrderFilter setURL={setURL} />
          </aside>
          <div className="opacity-box" onClick={handleClick}></div>
        </>
      )}
    </>
  )
}
