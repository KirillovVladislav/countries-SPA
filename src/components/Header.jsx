import React from "react"
import DarkModeIcon from "@mui/icons-material/DarkMode"

export const Header = () => {
  return (
    <div className='header'>
      <div className='header_container'>
        <h2 className='logo'>Where is the world</h2>
        <div className='switch_mode '>
          <DarkModeIcon />
          <h3>dark mode</h3>
        </div>
      </div>
    </div>
  )
}
