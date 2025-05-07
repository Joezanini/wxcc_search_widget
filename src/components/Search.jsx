import React, { useEffect }from 'react'
import { CloseButton, Input, InputGroup } from '@chakra-ui/react'
import { useRef, useState } from "react"
import Result from './Result.jsx'
import useDebounce from "../hooks/useDebounce.jsx"
import { Desktop } from "@wxcc-desktop/sdk";

function Search() {

  const [search, setSearch] = useState('');
  const debouncedSearch = useDebounce(search, 1000);

  useEffect(async () => {
    await Desktop.config.init();
    console.log('WxCC local : ', Desktop.config.clientLocale);
  }, [])


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
