import React from "react";

const Card = ({ title, subreddit, link }) => {
  return (
    <div
      className="max-w-sm rounded overflow-hidden shadow-lg"
      style={{ height: 100 + "%" }}
    >
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">subreddit: {subreddit}</p>
      </div>
      <div className="px-6 py-4" style={{ textAlign: "center" }}>
        <a
          href={link}
          target="_blank"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          View On Reddit
        </a>
      </div>
    </div>
  );
};

export default Card;
