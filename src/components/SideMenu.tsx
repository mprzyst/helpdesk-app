export default function SideMenu() {
  return (
    <div className="basis-1/5 border-r flex flex-col justify-center relative">
      <div className="flex justify-center">
        <span className="text-2xl font-bold font-sans absolute top-4">
          Helpdesk App
        </span>
      </div>

      <div className="grid self-center place-content-center gap-y-6 text-center">
        <button className="hover:bg-purple-300 font-medium	 hover:rounded-lg hover:text-white py-1 px-2">
          ALL
        </button>
        <button className="hover:bg-purple-300 font-medium	 hover:rounded-lg hover:text-white py-1 px-2">
          DASHBOARD
        </button>
        <button className="hover:bg-purple-300 font-medium	 hover:rounded-lg hover:text-white py-1 px-2">
          STATISTICS
        </button>
      </div>
    </div>
  )
}
