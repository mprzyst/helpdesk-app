import Dropdown from "../components/elements/Dropdown"
import { useState } from "react"
import TicketsTable from "../components/TicketsTable"
import SideMenu from "../components/SideMenu"
import Navbar from "../components/Navbar"

export type Option = {
  value: string
  name: string
}

export default function DashboardPage() {
  const [selection, setSelection] = useState<Option>({ value: "", name: "" })

  const handleSelect = (option: Option) => {
    setSelection(option)
  }

  // const options = [
  //   { value: "a", name: "AAA" },
  //   { value: "b", name: "BBB" },
  //   { value: "c", name: "CCC" },
  // ]
  return (
    <div className="flex flex-row h-full">
      {/*<Dropdown options={options} value={selection} onChange={handleSelect} />*/}
      <SideMenu />
      <div className="flex flex-col w-full">
        <Navbar />
        <TicketsTable />
      </div>
    </div>
  )
}
