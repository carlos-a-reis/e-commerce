'use client'

import { FormEvent } from 'react'
import { SetURLType } from './FilterMenu'
import OrderRadioInput from './OrderRadioInput'

type OrderFilterProps = {
  setURL: (params: SetURLType) => void
}

export default function OrderFilter({ setURL }: OrderFilterProps) {
  const handleInputChange = (event: FormEvent<HTMLDivElement>) => {
    const orderFilter = (event.target as HTMLElement).id
      .toLowerCase()
      .replace(' ', '_')
    setURL({ orderBy: orderFilter })
  }

  return (
    <div onChange={(e) => handleInputChange(e)} className="flex flex-col gap-4">
      <h1 className="text-2xl font-semibold">Order by</h1>
      <OrderRadioInput filterName="Rising Price" />
      <OrderRadioInput filterName="Decreasing Price" />
      <OrderRadioInput filterName="Rising Rating" />
      <OrderRadioInput filterName="Decreasing Rating" />
    </div>
  )
}
