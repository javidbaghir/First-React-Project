import React from 'react'

function Modal({item, openModal}) {
  return (
   
    <div>
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40">
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="bg-white p-6 rounded-lg shadow-lg w-[400px] relative">
          <div className="flex items-center justify-between pb-5">
            <h2 className="text-xl font-semibold">{item.title}</h2>
            <button onClick={openModal} className=" text-red-400 text-xl ">
              ✖️
            </button>
          </div>
          <img
            className="w-full h-[250px] object-cover rounded-lg"
            src={item.img}
          />
          <p className="text-gray-600 mt-2">{item.desc}</p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Modal