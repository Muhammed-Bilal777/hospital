import React from 'react'

function Button({title}) {
  return (
    <div>
        <button className="bg-slate-600 text-white px-4 py-2 rounded-md hover:text-red-600 transition duration-300 ease-in-out ">{title}</button>
    </div>
  )
}

export default Button