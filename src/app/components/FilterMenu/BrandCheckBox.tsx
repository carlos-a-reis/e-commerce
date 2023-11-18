import { ChangeEvent } from 'react'

type BrandCheckBoxProps = {
  brand: string
  handleCheckBrand: (e: ChangeEvent<HTMLInputElement>) => void
}

export default function BrandCheckBox({
  brand,
  handleCheckBrand,
}: BrandCheckBoxProps) {
  return (
    <li className="flex items-center">
      <input
        type="checkbox"
        name={brand}
        onChange={(e) => handleCheckBrand(e)}
        className="brand-checkbox"
      />
      <label htmlFor={brand} className="w-35 font-medium">
        {brand}
      </label>
    </li>
  )
}
