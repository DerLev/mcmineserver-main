import { ExclamationIcon } from '@heroicons/react/outline'

export default function Custom500() {
  return (
    <>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <h1 className="flex items-center gap-2 text-4xl font-mono">
          <ExclamationIcon className="h-16 w-16" />
          <span>500: Internal Server Error</span>
        </h1>
      </div>
    </>
  )
}