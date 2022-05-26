import React, { useEffect, useState } from "react"

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const menuOptions = [
    // {
    //   title: "Rólunk",
    // },
    {
      title: "Eseményeink",
    },
    // {
    //   title: "Galéria",
    // },
    // {
    //   title: "Tagjaink",
    // },
    {
      title: "Víziónk",
    },
    {
      title: "Támogatóink",
    },
  ]

  const setOpacity = () => {
    if (window.scrollY >= 160) {
      setScrolled(true)
    } else {
      setScrolled(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", setOpacity)
    return () => window.removeEventListener("scroll", setOpacity)
  })

  return (
    <div
      className={`fixed inset-x-0 top-0 flex h-14 items-center justify-between px-4 text-white ${
        scrolled ? "bg-estiemGreen" : "bg-transparent"
      }`}
    >
      ESTIEM Budapest BME
      <div className="flex space-x-3 font-semibold">
        {menuOptions.map((option) => (
          <div
            key={option.title}
            className={`cursor-pointer px-2 py-1 hover:bg-white hover:text-estiemGreen`}
          >
            {option.title}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Navbar
