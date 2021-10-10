import { XIcon } from '@heroicons/react/outline'
import { useState } from 'react'

function StagingNote() {
  const [note, setNote] = useState(true);

  return (
    <>
     {
       note &&
      <div className="bg-yellow-400 py-3 px-5 text-yellow-800 flex justify-between flex-grow-0">
        <h1>You are viewing the latest beta/staging release of our website</h1>
        <button onClick={() => setNote(!note)}>
          <XIcon className="w-4 h-4" />
        </button>
      </div>
     }
    </>
  )
}

export default StagingNote
