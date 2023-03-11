
export function Toggle ({ label, handleToggle, selected }) {
  return (
    <div className="flex gap-2 items-center">
      <label className='font-fredoka text-lg'>{label}</label>
      <button
        onClick={handleToggle}
        className={'w-12 h-7 shadow-sm rounded-full p-1 relative ' +
          (selected ? 'bg-sky-500' : 'bg-gray-300')
        }>
      <div
        className={'w-1/2 h-full bg-white rounded-full shadow-md transition-transform ' +
        (selected ? 'translate-x-full' : '')
      }>

        </div>
      </button>
    </div>
  )
}
