import CategoryMenu from './CategoryMenu'
import SearchBar from './SearchBar'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

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
        <SearchBar />
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
