import { Dialog, Transition } from "@headlessui/react"
import { ForwardedRef, forwardRef, Fragment, useState } from "react"
import { XMarkIcon } from "@heroicons/react/16/solid"

export default function SideMenu({
  isOpen,
  onClose,
}: {
  isOpen: boolean
  onClose: () => void
}) {
  return (
    <div
      className="absolute bg-white z-10 top-0 left-0 right-0 h-screen md:z-0 md:h-fit md:static"
      hidden={!isOpen}
    >
      <div className="flex justify-center">
        <span className="text-lg font-bold font-sans absolute top-4">
          Helpdesk App
        </span>
      </div>
      <button
        type="button"
        className="relative rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
        onClick={onClose}
      >
        <span className="absolute -inset-2.5" />
        <span className="sr-only">Close panel</span>
        <XMarkIcon className="h-6 w-6 md:hidden" aria-hidden="true" />
      </button>
      <div className="grid self-center h-screen place-content-center gap-y-6 text-center">
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

// let SidePanel = forwardRef(function (props, ref: ForwardedRef<any>) {
//   const [open, setOpen] = useState(true)
//
//   return (
//     <div className="absolute top-0" ref={ref}>
//       <Dialog as="div" className="relative z-10" onClose={setOpen}>
//         <Transition.Child
//           as={Fragment}
//           enter="ease-in-out duration-500"
//           enterFrom="opacity-0"
//           enterTo="opacity-100"
//           leave="ease-in-out duration-500"
//           leaveFrom="opacity-100"
//           leaveTo="opacity-0"
//         >
//           <div
//             className={`basis-1/5 border-r flex flex-col justify-center relative ${
//               open ? "visible" : "hidden"
//             }`}
//           >
//             <div className="flex justify-center">
//               <span className="text-2xl font-bold font-sans absolute top-4">
//                 Helpdesk App
//               </span>
//             </div>
//
//             <button
//               type="button"
//               className="relative rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
//               onClick={() => setOpen(false)}
//             >
//               <span className="absolute -inset-2.5" />
//               <span className="sr-only">Close panel</span>
//               <XMarkIcon className="h-6 w-6" aria-hidden="true" />
//             </button>
//
//             <div className="grid self-center place-content-center gap-y-6 text-center">
//               <button className="hover:bg-purple-300 font-medium	 hover:rounded-lg hover:text-white py-1 px-2">
//                 ALL
//               </button>
//               <button className="hover:bg-purple-300 font-medium	 hover:rounded-lg hover:text-white py-1 px-2">
//                 DASHBOARD
//               </button>
//               <button className="hover:bg-purple-300 font-medium	 hover:rounded-lg hover:text-white py-1 px-2">
//                 STATISTICS
//               </button>
//             </div>
//           </div>
//         </Transition.Child>
//       </Dialog>
//     </div>
//   )
// })
//
// export default function SideMenu({
//   show,
//   // sideMenuHandling,
// }: {
//   show: boolean
//   // sideMenuHandling: () => void
// }) {
//   return <Transition.Root show={show} as={SidePanel}></Transition.Root>
// }
