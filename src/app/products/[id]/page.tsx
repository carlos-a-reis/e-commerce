import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import AddProductSection from '@/app/components/AddProductSection'

type ProductProps = {
  params: {
    id: string
  }
}

export default async function Product({ params }: ProductProps) {
  const response = await fetch(`https://dummyjson.com/products/${params.id}`)
  const product = await response.json()

  return (
    <main className="md:flex md:justify-center">
      <section className="md:flex md:justify-center md:w-324 md:gap-8 md:mt-8 lg:justify-between lg:mt-14">
        <div>
          <Image
            width={390}
            height={390}
            src={product.thumbnail}
            alt={product.title}
            className="h-85 object-cover md:w-96 md:h-96 md:rounded-lg lg:w-147 lg:h-147"
          />
        </div>
        <div className="flex flex-col gap-5 p-6 md:p-0 lg:gap-8">
          <h2 className="max-h-17 overflow-hidden text-3xl lg:text-4xl md:order-1">
            {product.title}
          </h2>
          <div className="flex items-center gap-2.5 divide-textGray md:order-3">
            <div className="flex gap-1">
              <FontAwesomeIcon icon={faStar} className="w-4 text-yellowStar" />
              <span>{product.rating}</span>
            </div>
            <h3 className=" max-w-ss h-6 overflow-hidden border-l border-textGray pl-2.5 md:max-w-none">
              {product.brand}
            </h3>
            <h3 className="border-l border-textGray pl-2.5">{`Stock: ${product.stock}`}</h3>
          </div>
          <h1 className="text-4xl font-semibold text-mainBlue lg:text-5xl md:order-2">
            {`$${product.price.toFixed(2)}`}
          </h1>
          <hr className="hidden md:block order-4 border-mainGray" />
          <p className="hidden md:block text-xl font-semibold order-5">
            Description:
          </p>
          <p className="max-h-24 overflow-hidden text-textGray md:h-20 md:w-147 lg:h-24 md:text-black md:order-6">
            {product.description}
          </p>
          <AddProductSection stock={product.stock} price={product.price} />
        </div>
      </section>
    </main>
  )
}
