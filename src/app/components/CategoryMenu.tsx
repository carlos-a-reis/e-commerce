'use client'

import { useState } from 'react'
import Link from 'next/link'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { config } from '@fortawesome/fontawesome-svg-core'
config.autoAddCss = false

type CategoryProps = {
  categories: string[]
}

export default function CategoryMenu(props: CategoryProps) {
  const [showCategoryMenu, setShowCategoryMenu] = useState(false)

  const handleClick = () => {
    setShowCategoryMenu(!showCategoryMenu)
  }

  return (
    <>
      <FontAwesomeIcon
        icon={faBars}
        className="w-6 text-mainBlue md:w-7"
        onClick={handleClick}
      />
      {showCategoryMenu && (
        <>
          <aside className="w-75 h-screen left-0 top-0 z-10 pt-6 pl-8 overflow-auto fixed bg-white md:w-82">
            <h1 className=" text-2xl mb-10 font-bold">All Categories</h1>
            <ul className="space-y-8 pb-6">
              {props.categories.map((category) => {
                let formattedCategory =
                  category.charAt(0).toUpperCase() + category.slice(1)
                if (formattedCategory.includes('-')) {
                  formattedCategory = formattedCategory.replace('-', ' ')
                }
                return (
                  <li className="text-xl" key={category}>
                    <Link href={`/category/${category}`}>
                      {formattedCategory}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </aside>
          <div className="opacity-box" onClick={handleClick}></div>
        </>
      )}
    </>
  )
}
