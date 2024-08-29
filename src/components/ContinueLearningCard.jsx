import React from 'react';

const ContinueLearningCard = ({ category, title, completedLessons, totalLessons, percentage, imageUrl }) => {
  return (
    <div className="flex items-center p-4 bg-white rounded-lg shadow-md mb-4 dark:text-white dark:bg-gray-700">
      <img src={imageUrl} alt={title} className="w-16 h-16 rounded-lg" />
      <div className="ml-4 flex-1">
        <div className="text-sm text-gray-500 uppercase font-bold">{category}</div>
        <div className="text-xl font-semibold">{title}</div>
        <div className="text-sm text-gray-500">{completedLessons}/{totalLessons} Lessons</div>
      </div>
      <div className="w-16 h-16 relative">
        <svg className="absolute top-0 left-0" viewBox="0 0 36 36">
          <path
            className="stroke-current text-gray-300"
            d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
            fill="none"
            strokeWidth="3.8"
          />
          <path
            className="stroke-current text-blue-500"
            d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831"
            fill="none"
            strokeDasharray={`${percentage}, 100`}
            strokeWidth="3.8"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center text-sm font-semibold">
          {percentage}%
        </div>
      </div>
    </div>
  );
};

export default ContinueLearningCard;
