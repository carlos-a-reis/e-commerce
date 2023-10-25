'use client'

import { useState } from 'react'

type AddProductSectionProps = {
  stock: number
}

export default function AddProductSection({ stock }: AddProductSectionProps) {
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
    <section className="flex justify-between w-screen fixed bottom-0 border-t border-mainGray p-6">
      <div className="flex">
        <button onClick={handleSubtract} className="count-btn rounded-s-xl">
          -
        </button>
        <p className="flex justify-center items-center w-14 h-12 border border-mainBlue text-2xl text-mainBlue">
          {productQuantity}
        </p>
        <button onClick={handleAdd} className="count-btn rounded-e-xl">
          +
        </button>
      </div>
      <button className="w-40 h-12 rounded-xl text-xl font-bold text-white bg-mainBlue">
        Add to Cart
      </button>
    </section>
  )
}
