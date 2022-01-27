import React from "react"

export const CountriesItem = ({ country }) => {
  return (
    <div className='country'>
      <div className='flag_container'>
        <img src={country.flags.svg} alt={country.name} />
        <div className='details'>
          <h3 className='name'>{country.name}</h3>
          <p>
            Population: <span className='values'>{country.population}</span>
          </p>
          <p>
            Region: <span className='values'>{country.region}</span>
          </p>
          <p>
            Country: <span className='values'>{country.capital}</span>
          </p>
        </div>
      </div>
    </div>
  )
}
