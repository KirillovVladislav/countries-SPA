import React, { useEffect, useMemo, useState } from "react"
import axios from "axios"
import { ALL_COUNTRIES } from "./config"
import { Header } from "./components/Header"
import { CountriesFilters } from "./components/CountriesFilters"
import LinearProgress from "@mui/material/LinearProgress"
import { CountriesList } from "./components/CountriesList"

import "./App.css"

function App() {
  const [countries, setCountries] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [filter, setFilter] = useState({ sortRegion: "", query: "" })

  const sortedCountries = useMemo(() => {
    if (filter.sortRegion) {
      return countries.filter(country =>
        country.region.includes(filter.sortRegion)
      )
    }
    return countries
  }, [filter.sortRegion, countries])

  const sortedandSearchQuery = useMemo(() => {
    return sortedCountries.filter(country =>
      country.name.toLowerCase().includes(filter.query.toLowerCase())
    )
  }, [filter.query, sortedCountries])

  useEffect(() => {
    const getCountries = async () => {
      setIsLoading(true)

      const result = await axios.get(ALL_COUNTRIES)

      setCountries(result.data)
      setIsLoading(false)
    }

    getCountries()
  }, [])

  return (
    <div className='App'>
      <Header />
      <CountriesFilters filter={filter} setFilter={setFilter} />
      {isLoading ? (
        <LinearProgress />
      ) : (
        <CountriesList countries={sortedandSearchQuery} />
      )}
    </div>
  )
}

export default App
