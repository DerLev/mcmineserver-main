import { useState, Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'

function CookieConsent() {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <Transition
    show={isOpen}
    as={Fragment}
    >
      <Dialog onClose={() => setIsOpen(false)} className="fixed z-10 inset-0 overflow-y-auto text-black">
        <div className="flex items-center justify-center min-h-screen">

          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-30" />
          </Transition.Child>


          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="relative bg-white rounded max-w-md mx-auto py-2 px-4">
              <Dialog.Title className="text-xl font-semibold">Cookies</Dialog.Title>
              <Dialog.Description className="font-light mb-4">
                This website uses cookies.
              </Dialog.Description>

              <p className="mb-5">
                We only use cookies to prevent this banner from showing up.
              </p>

              <button onClick={() => setIsOpen(false)} className="block py-1 px-3 w-full bg-gray-200 hover:bg-gray-300 focus:outline-none rounded shadow transition focus:ring">Ok</button>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  )
}

export default CookieConsent
