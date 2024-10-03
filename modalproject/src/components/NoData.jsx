import React from 'react'

function NoData() {
  return (
    <div className="flex flex-col items-center gap-2">
      <img
        className="size-[150px] object-contain"
        src="https://cdn-icons-png.flaticon.com/128/7486/7486754.png"
        alt="No Data"
      />
      <p className="mt-10 text-xl text-red-500">Data yoxdur</p>
    </div>
  )
}

export default NoData