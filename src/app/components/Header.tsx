import CategoryMenu from './CategoryMenu'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faMagnifyingGlass,
  faCartShopping,
} from '@fortawesome/free-solid-svg-icons'

export default async function Header() {
  const response = await fetch('https://dummyjson.com/products/categories')
  const categories = await response.json()

  return (
    <header className="flex justify-center items-center w-screen h-12 bg-white border-b border-mainGray sm:h-15">
      <div className="flex justify-between w-85 md:w-screen lg:w-324">
        <div className="flex justify-between items-center h-9 w-17 md:h-12 md:w-48 md:ml-3 lg:ml-0">
          <CategoryMenu categories={categories} />
          <div className="bg-mainBlue w-9 h-9 md:w-35 md:h-12"></div>
        </div>
        <form className="flex items-center ml-6 md:m-0">
          <input
            type="text"
            className="w-36 h-8 border rounded-s-md border-mainBlue placeholder-textGray text-xs text-center md:w-133 md:h-8 md:border-2 md:text-base"
            placeholder="Search"
          />
          <button
            type="submit"
            className="flex justify-center items-center w-8 h-8 border rounded-e-md bg-mainBlue border-mainBlue md:w-12"
          >
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="w-3 h-3 text-white md:w-4 md:h-4"
            />
          </button>
        </form>
        <div className="flex justify-end items-center h-9 w-17 md:justify-center md:h-12 md:w-48">
          <FontAwesomeIcon
            icon={faCartShopping}
            className="w-7 text-mainBlue md:w-8"
          />
        </div>
      </div>
    </header>
  )
}
