'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

export default function SearchBar() {
  const router = useRouter()
  const [search, setSearch] = useState('')

  const handleSearchInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    router.push(`/search?q=${search}`)
  }

  return (
    <form
      onSubmit={(event) => handleSubmit(event)}
      className="flex items-center ml-6 md:m-0"
    >
      <input
        type="text"
        className="w-36 h-8 border rounded-s-md border-mainBlue placeholder-textGray text-xs text-center md:w-133 md:h-8 md:border-2 md:text-base"
        placeholder="Search"
        required
        value={search}
        onChange={(event) => handleSearchInput(event)}
      />
      <button className="flex justify-center items-center w-8 h-8 border rounded-e-md bg-mainBlue border-mainBlue md:w-12">
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className="w-3 h-3 text-white md:w-4 md:h-4"
        />
      </button>
    </form>
  )
}
