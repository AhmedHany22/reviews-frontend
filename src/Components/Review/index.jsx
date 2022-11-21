import "./Review.css";

const Review = () => {
  return (
    <li class="mb-10 ml-4">
      <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
      <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
        February 2022
      </time>
      <h3 class="text-lg font-semibold text-gray-900 dark:gray-900">
        Application UI code in Tailwind CSS
      </h3>
      <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
        Get access to over 20+ pages including a dashboard layout, charts,
        kanban board, calendar, and pre-order E-commerce & Marketing pages.
      </p>
    </li>
  );
};

export default Review;
