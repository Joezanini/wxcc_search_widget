import React from 'react'
import { CloseButton, Input, InputGroup } from '@chakra-ui/react'
import { useRef, useState } from "react"
import Result from './Result.jsx'
import useDebounce from "../hooks/useDebounce.jsx"

function Search() {

  const [search, setSearch] = useState('');
  const debouncedSearch = useDebounce(search, 1000);


  const searchRef = useRef(null)
  const endElement = search ? (
    <CloseButton
      size="xs"
      onClick={() => {
        setSearch('')
        searchRef.current?.focus()
      }}
      me="-2"
    />
  ) : undefined

  return (
    <>
      <InputGroup endElement={endElement}>
        <Input
          ref={searchRef}
          placeholder="Search"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value)
          }}
        />
      </InputGroup>
      <Result searchTerm={debouncedSearch} />
    </>
  )
}

export default Search
