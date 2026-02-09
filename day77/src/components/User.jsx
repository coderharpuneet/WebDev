import React from "react";

const User = (props) => {
  // Predefined set of premium-looking Tailwind background colors
  const colors = [
    "bg-blue-100",
    "bg-green-100",
    "bg-purple-100",
    "bg-pink-100",
    "bg-indigo-100",
    "bg-amber-100",
    "bg-emerald-100",
    "bg-rose-100",
    "bg-sky-100",
    "bg-violet-100",
  ];

  // Pick a random color from the list once per mount
  const randomColor = React.useMemo(
    () => colors[Math.floor(Math.random() * colors.length)],
    [],
  );

  return (
    <div
      className={`${randomColor} p-6 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/40 backdrop-blur-md w-80 flex flex-col items-center text-center gap-4 m-2 hover:-translate-y-2`}
    >
      <div className="w-32 h-32 rounded-2xl overflow-hidden bg-white p-2 shadow-inner group">
        <img
          src={props.image}
          alt={props.title}
          className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      <div className="w-full">
        <h2
          className="text-xl font-bold text-gray-800 line-clamp-1 h-7"
          title={props.title}
        >
          {props.title}
        </h2>
        <p className="text-[10px] font-black text-indigo-600 uppercase tracking-widest mt-1">
          {props.category}
        </p>
      </div>

      <div className="flex flex-col gap-2 w-full py-3 border-y border-gray-200/50">
        <div className="flex justify-between items-center text-sm px-2">
          <span className="text-gray-500 font-semibold uppercase text-[10px]">
            Price
          </span>
          <span className="text-gray-900 font-bold text-lg">
            ${props.price}
          </span>
        </div>
      </div>

      <p className="text-gray-600 text-xs line-clamp-2 italic h-8 leading-relaxed">
        {props.description}
      </p>

      <button className="w-full mt-2 px-6 py-3 bg-white hover:bg-black hover:text-white text-gray-800 font-bold rounded-2xl shadow-md transition-all duration-300 active:scale-95 cursor-pointer">
        Add to Cart
      </button>
    </div>
  );
};

export default User;
