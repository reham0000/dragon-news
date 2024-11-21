import React from "react";
import { AiOutlineStar } from "react-icons/ai";
import { BsEye } from "react-icons/bs";

const NewsCard = ({ news }) => {
  const {
    title,
    author,
    thumbnail_url,
    rating,
    total_view,
    others_info,
    details,
  } = news;

  return (
    <div className="card bg-base-100 shadow-xl p-4">
      <div className="flex items-center mb-4">
        <img
          src={author.img}
          alt={author.name}
          className="w-10 h-10 rounded-full mr-3"
        />
        <div>
          <h2 className="text-sm font-semibold">{author.name}</h2>
          <p className="text-xs text-gray-500">{author.published_date}</p>
        </div>
      </div>

      <img
        src={thumbnail_url}
        alt="Thumbnail"
        className="rounded-lg mb-4 w-96 h-96"
      />

      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-sm text-gray-600 mb-4">
        {details.substring(0, 100)}...
      </p>

      <div className="flex justify-between items-center text-sm text-gray-600">
        <div className="flex items-center">
          <AiOutlineStar className="text-yellow-500 mr-1" />
          <span>{rating.number}</span>
          <span className="ml-1">({rating.badge})</span>
        </div>
        <div className="flex items-center">
          <BsEye className="mr-1" />
          <span>{total_view}</span>
        </div>
      </div>

      {others_info.is_trending && (
        <span className="badge badge-secondary mt-3">Trending</span>
      )}
    </div>
  );
};

export default NewsCard;

