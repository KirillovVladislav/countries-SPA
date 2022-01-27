import React from "react"
import SearchIcon from "@mui/icons-material/Search"

export const Filters = () => {
  return (
    <div className='filter_select'>
      <div className='input'>
        <SearchIcon />
        <input type='text' placeholder='Search for a country' />
      </div>
      <div className='select_region'>
        <select name='' id=''>
          <option>All</option>
          <option>Africa</option>
          <option>Americas</option>
          <option>Asia</option>
          <option>Europe</option>
          <option>Oceania</option>
        </select>
      </div>
    </div>
  )
}
