import React from "react"
import SearchIcon from "@mui/icons-material/Search"
import { MySelect } from "./UI/select/MySelect"

export const CountriesFilters = ({ filter, setFilter }) => {
  return (
    <div className='filter_select'>
      <div className='input'>
        <SearchIcon />
        <input
          type='text'
          placeholder='Search for a country'
          value={filter.query}
          onChange={e => setFilter({ ...filter, query: e.target.value })}
        />
      </div>
      <div className='select_region'>
        <MySelect
          defaultValue='All'
          value={filter.sortRegion}
          onChange={sortedCountries =>
            setFilter({ ...filter, sortRegion: sortedCountries })
          }
          options={[
            { value: "Africa", name: "Africa" },
            { value: "Americas", name: "Americas" },
            { value: "Asia", name: "Asia" },
            { value: "Europe", name: "Europe" },
            { value: "Oceania", name: "Oceania" },
          ]}
        />
      </div>
    </div>
  )
}
