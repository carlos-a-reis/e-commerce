'use client'

import { ChangeEvent, useState } from 'react'
import BrandCheckBox from './BrandCheckBox'
import { ProductInfo } from '../ProductCard'
import { SetURLType } from './FilterMenu'

type BrandFilterProps = {
  setURL: (params: SetURLType) => void
  products: ProductInfo[]
}

export default function BrandFilter({ setURL, products }: BrandFilterProps) {
  const [checkedBrands, setCheckedBrands] = useState<string[]>([])

  const brands: string[] = Array.from(
    new Set(products.map((product) => product.brand)),
  )

  const handleCheckBrand = (event: ChangeEvent<HTMLInputElement>) => {
    const param = event.target.name.toLocaleLowerCase()

    if (event.target.checked) {
      const URL = [...checkedBrands, param]
      setCheckedBrands(URL)
      setURL({ brands: URL.toString().replace(/,/g, '%') })
    } else {
      const URL = checkedBrands.filter((brand) => brand !== param)
      setCheckedBrands(URL)
      setURL({ brands: URL.toString().replace(/,/g, '%') })
    }
  }

  return (
    <div>
      <h1 className="filter-title mb-4">Brand</h1>
      {brands && (
        <ul className="flex flex-col gap-4">
          {brands.map((brand) => (
            <BrandCheckBox
              key={brand}
              brand={brand}
              handleCheckBrand={handleCheckBrand}
            />
          ))}
        </ul>
      )}
    </div>
  )
}
