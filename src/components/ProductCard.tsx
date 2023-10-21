import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

export type ProductInfo = {
  id: number
  title: string
  description: string
  price: number
  rating: number
  stock: number
  brand: string
  category: string
  thumbnail: string
  images: string[]
}

type ProductCardProps = {
  productInfo: ProductInfo
}

export function ProductCard({ productInfo }: ProductCardProps) {
  return (
    <li>
      <Link href={'/'}>
        <Image
          width={160}
          height={160}
          className="w-40 h-40 rounded-t-lg border border-b-0 border-borderGray object-cover"
          src={productInfo.thumbnail}
          alt={productInfo.title}
        />
        <div className="flex flex-col justify-between w-40 h-20 rounded-b-lg border border-t-0 p-2 border-borderGray">
          <h2 className="max-h-6 overflow-hidden text-sm">
            {productInfo.title}
          </h2>
          <h1 className="text-mainBlue font-semibold">
            {`$${productInfo.price.toFixed(2)}`}
          </h1>
          <div className="flex justify-between h-4">
            <h3 className="text-xs overflow-hidden">{productInfo.brand}</h3>
            <div className="flex justify-center w-12 h-3">
              <FontAwesomeIcon icon={faStar} className="w-3 text-yellowStar" />
              <span className="text-xs ml-1">{productInfo.rating}</span>
            </div>
          </div>
        </div>
      </Link>
    </li>
  )
}
