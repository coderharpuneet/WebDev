import React from "react";

const Card = (props) => {
  return (
    <div className="w-[340px] bg-white rounded-3xl shadow-lg overflow-hidden">
      {/* Cover Image */}
      <div className="relative h-36 bg-gradient-to-b from-sky-200 to-sky-100">
  <button
    className={` cursor-pointer absolute top-3 right-3 px-4 py-1 rounded-full shadow text-sm font-semibold transition
      ${
        props.user.follow
          ? "bg-white text-gray-800"
          : "bg-blue-500 text-white hover:bg-blue-600"
      }
    `}
  >
    {props.user.follow ? "Following" : "Follow"}
  </button>
</div>


      {/* Profile Section */}
      <div className="relative flex flex-col items-center -mt-14 px-6">
        {/* Avatar with ring */}
        <div className="rounded-full p-[3px] bg-gradient-to-r from-pink-500 via-yellow-400 to-green-400">
          <img
            src={props.user.profile}
            alt="profile"
            className="w-24 h-24 rounded-full border-4 border-white object-cover"
          />
        </div>

        {/* Name & Bio */}
        <h2 className="mt-4 text-lg font-semibold text-gray-900">
          {props.user.fullName}
        </h2>
        <p className="mt-1 text-sm text-gray-500 text-center">
          {props.user.title}
        </p>

        {/* Stats */}
        <div className="mt-5 w-full bg-gray-50 rounded-2xl py-4 flex justify-between text-center">
          <div className="flex-1">
            <p className="text-base font-semibold text-gray-900">{props.user.likesCount}</p>
            <p className="text-xs text-gray-500">Likes</p>
          </div>
          <div className="flex-1">
            <p className="text-base font-semibold text-gray-900">{props.user.postCount}</p>
            <p className="text-xs text-gray-500">Posts</p>
          </div>
          <div className="flex-1">
            <p className="text-base font-semibold text-gray-900">342.9K</p>
            <p className="text-xs text-gray-500">Views</p>
          </div>
        </div>

        {/* Social Icons */}
        <div className="mt-4 mb-6 flex gap-6 text-gray-600">
          <i className="ri-instagram-line text-xl cursor-pointer hover:text-black"></i>
          <i className="ri-twitter-x-line text-xl cursor-pointer hover:text-black"></i>
          <i className="ri-dribbble-line text-xl cursor-pointer hover:text-black"></i>
        </div>
      </div>
    </div>
  );
};

export default Card;
