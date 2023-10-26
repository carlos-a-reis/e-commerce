'use client'

import { useState } from 'react'
import { AddProductSectionProps } from './AddProductSection'

export default function ProductQuantitySetter({
  stock,
  price,
}: AddProductSectionProps) {
  const [productQuantity, setProductQuantity] = useState(1)

  const handleSubtract = () => {
    if (productQuantity > 1) {
      setProductQuantity((state) => state - 1)
    }
  }

  const handleAdd = () => {
    if (productQuantity < stock) {
      setProductQuantity((state) => state + 1)
    }
  }

  return (
    <div className="flex flex-col justify-between">
      <p className="hidden md:block text-xl font-semibold">Set Quantity</p>
      <div className="flex">
        <button onClick={handleSubtract} className="count-btn rounded-s-xl">
          -
        </button>
        <p
          className="flex justify-center items-center w-14 h-12 border border-mainBlue font-semibold text-2xl text-mainBlue
          md:w-38 md:font-bold"
        >
          {productQuantity}
        </p>
        <button onClick={handleAdd} className="count-btn rounded-e-xl">
          +
        </button>
      </div>
      <div className="hidden md:flex justify-between w-64">
        <p className="font-medium">Sub total</p>
        <p className="text-xl text-end font-medium">
          {`$${(productQuantity * price).toFixed(2)}`}
        </p>
      </div>
    </div>
  )
}
