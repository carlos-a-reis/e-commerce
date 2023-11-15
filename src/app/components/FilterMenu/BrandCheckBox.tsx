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
    <li>
      <input
        type="checkbox"
        name={brand}
        onChange={(e) => handleCheckBrand(e)}
        className="brand-checkbox"
      />
      <label htmlFor={brand} className="font-medium">
        {brand}
      </label>
    </li>
  )
}