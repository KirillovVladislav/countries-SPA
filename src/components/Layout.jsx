import React from "react"
import useTheme from "../hooks/useTheme"
import cn from "classnames"

export const Layout = ({ children }) => {
  const { isDark } = useTheme()

  return <div className={cn("layout", { dark: isDark })}>{children}</div>
}
