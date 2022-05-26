import React from "react"
import Navbar from "./navbar"

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="select-none overflow-x-hidden text-slate-600 scrollbar-hide">
      <div className="flex flex-1 flex-col scrollbar-hide">{children}</div>
      <Navbar />
    </div>
  )
}

export default Layout
