import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

type ProductProps = {
  params: {
    id: string
  }
}

export default async function Product({ params }: ProductProps) {
  const response = await fetch(`https://dummyjson.com/products/${params.id}`)
  const product = await response.json()

  return (
    <main>
      <Image
        width={390}
        height={390}
        src={product.thumbnail}
        alt={product.title}
        className="h-96 object-cover"
      />
      <div className="flex flex-col gap-5 p-5">
        <h2 className="text-3xl">{product.title}</h2>
        <div className="flex items-center gap-2.5 divide-textGray">
          <div className="flex gap-1">
            <FontAwesomeIcon icon={faStar} className="w-4 text-yellowStar" />
            <span>{product.rating}</span>
          </div>
          <h3 className="border-l border-textGray pl-2.5">{product.brand}</h3>
          <h3 className="border-l border-textGray pl-2.5">{`Stock: ${product.stock}`}</h3>
        </div>
        <h1 className="text-4xl font-semibold text-mainBlue">
          {`$${product.price.toFixed(2)}`}
        </h1>
        <p className="text-textGray">{product.description}</p>
      </div>
    </main>
  )
}
