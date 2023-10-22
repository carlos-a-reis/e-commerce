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
        <div
          className="flex flex-col w-40 h-60 rounded-lg border border-borderGray
          hover:-translate-y-0.5 duration-100 hover:border-mainBlue
          md:justify-center md:items-center md:w-62 md:h-87 p-cmt pb-0"
        >
          <Image
            width={160}
            height={160}
            className="w-40 h-40 rounded-t-lg object-cover
            md:w-59 md:h-59 md:rounded-lg"
            src={productInfo.thumbnail}
            alt={productInfo.title}
          />
          <div
            className="flex flex-col justify-between w-40 h-20 p-2
            md:w-62 md:h-26 md:px-4"
          >
            <h2 className="max-h-6 overflow-hidden text-sm md:max-h-8 md:text-lg md:overflow-hidden md:order-2">
              {productInfo.title}
            </h2>
            <h1 className="text-mainBlue font-semibold md:text-xl md:order-3">
              {`$${productInfo.price.toFixed(2)}`}
            </h1>
            <div className="flex justify-between h-4 md:justify-start md:h-5 md:gap-x-4 md:order-1">
              <h3 className="text-xs overflow-hidden md:text-sm">
                {productInfo.brand}
              </h3>
              <div className="flex justify-center w-12 h-3 md:h-4">
                <FontAwesomeIcon
                  icon={faStar}
                  className="w-3 text-yellowStar md:w-4"
                />
                <span className="text-xs ml-1 md:text-sm">
                  {productInfo.rating}
                </span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </li>
  )
}
