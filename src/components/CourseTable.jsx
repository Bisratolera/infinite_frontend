import React from "react";

const CourseTable = () => {
  const courses = [
    {
      name: "Mastering Design System",
      lessons: "15/15",
      status: "Complete",
      level: "Intermediate",
      category: "Design",
      statusColor: "bg-green-100 text-green-800",
    },
    {
      name: "UI/UX Design",
      lessons: "12/15",
      status: "Ongoing",
      level: "Beginner",
      category: "Design",
      statusColor: "bg-blue-100 text-blue-800",
    },
    {
      name: "Learn Data Analyst",
      lessons: "8/20",
      status: "Ongoing",
      level: "Expert",
      category: "Data",
      statusColor: "bg-blue-100 text-blue-800",
    },
  ];

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full table-auto">
        <thead>
          <tr className="bg-gray-100 dark:bg-gray-700 ">
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 dark:text-white ">Course Name</th>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 dark:text-white">Lessons</th>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 dark:text-white">Status</th>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 dark:text-white">Level</th>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 dark:text-white">Category</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course, index) => (
            <tr key={index} className="border-b ">
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 flex items-center space-x-3">
              <img src={`/pexels-shkrabaanthony-5475784.jpg`} alt="icon" className="w-8 h-8" />

                <span className="dark:text-white">{course.name}</span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-white">{course.lessons}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full dark:text-white ${course.statusColor}`}>
                  {course.status}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-white">{course.level}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-white">{course.category}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CourseTable;
