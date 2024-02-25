import Dropdown from "../components/elements/Dropdown"
import { useState } from "react"
import TicketsTable from "../components/TicketsTable"
import Navbar from "../components/Navbar"
import SideMenu from "../components/SideMenu/SideMenu"

export type Option = {
  value: string
  name: string
}

export default function DashboardPage() {
  const [selection, setSelection] = useState<Option>({ value: "", name: "" })
  const [isSideMenuOpen, setSideMenuOpen] = useState(true)

  const handleSelect = (option: Option) => {
    setSelection(option)
  }

  // const options = [
  //   { value: "a", name: "AAA" },
  //   { value: "b", name: "BBB" },
  //   { value: "c", name: "CCC" },
  // ]
  return (
    <div className="md:grid-cols-6 md:grid h-full">
      {/*<Dropdown options={options} value={selection} onChange={handleSelect} />*/}
      <div className="md:col-span-1">
        <SideMenu
          isOpen={isSideMenuOpen}
          onClose={() => setSideMenuOpen(false)}
        />
      </div>
      <div className="flex flex-col md:col-span-5">
        <Navbar sideMenuHandling={() => setSideMenuOpen(true)} />
        <TicketsTable />
      </div>
    </div>
  )
}
