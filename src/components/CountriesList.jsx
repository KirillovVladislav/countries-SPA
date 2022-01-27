import React from "react"
import { CountriesItem } from "./CountriesItem"

export const CountriesList = ({ countries }) => {
  return (
    <div className='countries'>
      {countries.map(country => (
        <CountriesItem key={country.numericCode} country={country} />
      ))}
    </div>
  )
}
