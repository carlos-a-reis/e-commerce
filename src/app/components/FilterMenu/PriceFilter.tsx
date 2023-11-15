'use client'

import {
  ChangeEvent,
  Dispatch,
  FormEvent,
  SetStateAction,
  useState,
} from 'react'
import { SetURLType } from './FilterMenu'

type PriceFilterProps = {
  setURL: (params: SetURLType) => void
}

export default function PriceFilter({ setURL }: PriceFilterProps) {
  const [maxPrice, setMaxPrice] = useState(0)
  const [minPrice, setMinPrice] = useState(0)
  const [validValues, setValidValues] = useState(true)

  const handlePriceChange = (
    event: ChangeEvent<HTMLInputElement>,
    setter: Dispatch<SetStateAction<number>>,
  ) => {
    setValidValues(true)
    setter(Number(event.target.value))
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (maxPrice >= minPrice || maxPrice === 0) {
      setValidValues(true)
      setURL({ maxPrice: maxPrice.toString(), minPrice: minPrice.toString() })
    } else {
      setValidValues(false)
    }
  }

  return (
    <form className="flex flex-col gap-4" onSubmit={(e) => handleSubmit(e)}>
      <h2 className="filter-title">Price</h2>
      <div className="flex flex-col">
        <input
          type="number"
          placeholder="max"
          data-valid={validValues}
          className="price-input data-[valid=false]:border-red-500"
          onChange={(e) => handlePriceChange(e, setMaxPrice)}
          value={maxPrice || ' '}
        />
        {!validValues && <p className="invalid-price">Must be the highest</p>}
      </div>
      <div className="flex flex-col">
        <input
          type="number"
          placeholder="min"
          data-valid={validValues}
          className="price-input data-[valid=false]:border-red-500"
          onChange={(e) => handlePriceChange(e, setMinPrice)}
          value={minPrice || ' '}
        />
        {!validValues && <p className="invalid-price">Must be the lowest</p>}
      </div>
      <button
        type="submit"
        className="w-44 h-8 rounded-lg text-lg font-semibold text-white text-center bg-mainBlue"
      >
        Filter
      </button>
    </form>
  )
}
