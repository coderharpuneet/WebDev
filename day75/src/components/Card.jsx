import React from 'react'

const Card = (props) => {
  return (
    <div
              key={props.index}
              className="lg:w-[24vw] md:w-[40vw] sm:w-[45vw] rounded-xl py-8 px-8 flex items-center flex-col text-center bg-white text-black"
            >
              <img
                className="h-24 w-24 rounded-full"
                src={props.elem.userImage}
                alt=""
              />
              <h1 className="text-2xl mt-2 font-semibold">{props.elem.userName}</h1>
              <h5 className=" text-blue-500 text-lg font-semibold my-3">
                {props.elem.userRole}
              </h5>
              <p className="text-sm font-medium leading-tight">
                {props.elem.userDescription}
              </p>
              <button onClick={()=>props.deleteHandler(props.index)} className="bg-red-600 text-white font-semibold px-4 py-2 rounded mt-3 text-xs cursor-pointer active:scale-95">
                Remove
              </button>
            </div>
  )
}

export default Card