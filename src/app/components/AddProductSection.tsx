import ProductQuantitySetter from './ProductQauntitySetter'

export type AddProductSectionProps = {
  stock: number
  price: number
}

export default function AddProductSection({
  stock,
  price,
}: AddProductSectionProps) {
  return (
    <section
      className="flex justify-between fixed w-screen h-24 left-0 bottom-0 border-t border-mainGray p-6 
        md:static md:w-168 md:h-48 md:border-2 md:rounded-2xl md:order-7
        lg:h-70 lg:py-14 lg:px-10"
    >
      <ProductQuantitySetter stock={stock} price={price} />
      <div className="md:flex flex-col justify-between">
        <p className="hidden md:block text-xl font-medium">
          Only <span className="text-mainBlue">{`${stock} Items`}</span> Left!
        </p>
        <button className="hidden md:block w-64 h-12 rounded-xl mb-1 text-2xl font-bold text-white bg-mainBlue">
          Buy Now
        </button>
        <button
          className="w-40 h-12 rounded-xl text-xl font-bold text-white bg-mainBlue 
          md:w-64 md:text-2xl md:text-mainBlue md:bg-white md:border md:border-mainBlue"
        >
          Add to Cart
        </button>
      </div>
    </section>
  )
}
