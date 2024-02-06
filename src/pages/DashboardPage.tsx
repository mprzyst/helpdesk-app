import Dropdown from "../components/Dropdown"
import { useState } from "react"

export type Option = {
  value: string
  name: string
}

export default function DashboardPage() {
  const [selection, setSelection] = useState<Option>({ value: "", name: "" })

  const handleSelect = (option: Option) => {
    setSelection(option)
  }

  const options = [
    { value: "a", name: "AAA" },
    { value: "b", name: "BBB" },
    { value: "c", name: "CCC" },
  ]
  return (
    <div className="flex flex-col">
      <Dropdown options={options} value={selection} onChange={handleSelect} />
      <div className="border rounded-xl p-4 m-4">
        <table>
          <thead>
            <tr className="border-b">
              <th>Date created</th>
              <th>Date updated</th>
              <th>Title</th>
              <th>Description</th>
              <th>Status</th>
              <th>Assigned</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:accent-zinc-100">
              <td>6.03.2023 11:10</td>
              <td>12.03.2023 12:45</td>
              <td>Problem with payment</td>
              <td>Hello, I have problem with...</td>
              <td>In progress</td>
              <td>Cate Walton</td>
            </tr>
            <tr>
              <td>6.03.2023 11:10</td>
              <td>12.03.2023 12:45</td>
              <td>Problem with payment</td>
              <td>Hello, I have problem with...</td>
              <td>In progress</td>
              <td>Cate Walton</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
