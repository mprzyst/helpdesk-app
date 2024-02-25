import { Attributes, ClassAttributes } from "react"

export default function TicketsTable() {
  return (
    <div className="w-screen md:w-auto bg-gray-100">
      <h2>Tickets</h2>
      <div className="border rounded-xl p-4 m-4 overflow-x-auto">
        <table>
          <thead>
            <tr className="border-b">
              <th>Date created</th>
              <th>Date updated</th>
              <th>Title</th>
              <th>Description</th>
              <th>Status</th>
              <th>Assigned</th>
              <th></th>
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
              <td>
                <button>View</button>
              </td>
            </tr>
            <tr>
              <td>6.03.2023 11:10</td>
              <td>12.03.2023 12:45</td>
              <td>Problem with payment</td>
              <td>Hello, I have problem with...</td>
              <td>In progress</td>
              <td>Cate Walton</td>
              <td>
                <button>View</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
