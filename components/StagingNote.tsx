import { XIcon } from '@heroicons/react/outline'
import { useState } from 'react'
import ENV from '../env.json'

function StagingNote() {
  const [note, setNote] = useState(true);

  return (
    <>
     {
      note &&
      <div className="bg-yellow-400 py-3 px-5 text-yellow-800 flex justify-between flex-grow-0 flex-none absolute top-4 max-w-4xl w-full z-10 rounded-lg left-1/2 transform -translate-x-1/2 shadow-lg">
        <h1>You are viewing the latest beta/staging release of our website. <b>Version: {ENV.commitHash}</b></h1>
        <button onClick={() => setNote(!note)}>
          <XIcon className="w-4 h-4" />
        </button>
      </div>
     }
    </>
  )
}

export default StagingNote
