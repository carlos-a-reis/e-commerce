type OrderRadioInputProps = {
  filterName: string
}

export default function OrderRadioInput({ filterName }: OrderRadioInputProps) {
  return (
    <div className="flex items-center">
      <input
        type="radio"
        name="order-input"
        id={filterName}
        className="order-input"
      />
      <label htmlFor={filterName} className="font-medium">
        {filterName}
      </label>
    </div>
  )
}
