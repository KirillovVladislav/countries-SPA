import React from "react"
import DarkModeIcon from "@mui/icons-material/DarkMode"
import useTheme from "../hooks/useTheme"

export const Header = () => {
  const { isDark, setIsDark } = useTheme()

  return (
    <div className='header'>
      <div className='header_container'>
        <h2 className='logo'>Where is the world</h2>
        <div className='switch_mode ' onClick={() => setIsDark(!isDark)}>
          <DarkModeIcon />
          {!isDark ? <h3>dark mode</h3> : <h3>light mode</h3>}
        </div>
      </div>
    </div>
  )
}
