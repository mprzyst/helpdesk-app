import { useEffect, useRef, useState } from "react"
import { Menu } from "@headlessui/react"
import { Option } from "../pages/DashboardPage"

export default function Dropdown({
  options,
  value,
  onChange,
}: {
  options: Option[]
  value: Option
  onChange: (option: Option) => void
}) {
  const [isOpen, setIsOpen] = useState(false)
  const divEl = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handler = (event: Event) => {
      if (!divEl.current) {
        return
      }
      if (!divEl.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("click", handler, true) //during capture phase

    return () => {
      // this will be called automatically whenever component is removed from the screen
      document.removeEventListener("click", handler)
    }
  }, [])

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  const handleOptionClick = (option: any) => {
    setIsOpen(false)
    onChange(option)
  }

  const renderedOptions = options.map((option: any) => {
    return (
      <div
        className="cursor-pointer hover:bg-amber-100"
        key={option.name}
        onClick={() => handleOptionClick(option)}
      >
        {option.name}
      </div>
    )
  })

  return (
    <div className="container  w-48" ref={divEl}>
      <button
        onClick={handleClick}
        className="inline-flex w-full justify-center bg-black/20 px-4 py-2 text-sm font-medium text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
      >
        {value.name || "Options"}
      </button>
      {isOpen && (
        <div className="rounded-md border-black border">{renderedOptions}</div>
      )}
    </div>
  )
}
