import React, { useEffect, useState } from "react"
import axios from "axios"
import { ALL_COUNTRIES } from "./config"
import { Header } from "./components/Header"
import { Filters } from "./components/Filters"
import LinearProgress from "@mui/material/LinearProgress"
import { CountriesList } from "./components/CountriesList"

import "./App.css"

function App() {
  const [countries, setCountries] = useState([])
  const [isLoading, setIsLoading] = useState(false)

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
      <Filters />
      {isLoading ? <LinearProgress /> : <CountriesList countries={countries} />}
    </div>
  )
}

export default App
