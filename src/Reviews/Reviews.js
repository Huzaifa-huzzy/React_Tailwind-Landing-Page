import React, { useState } from 'react';

const Reviews = () => {
  // Initial client data
  const clients = [
    {
      name: 'Mia Brown',
      role: 'Marketer',
      image: 'https://images.unsplash.com/photo-1499470932971-a90681ce8530?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, quam. Odio voluptatem officiis eos illo! Pariatur, totam alias. Beatae accusamus earum quos obcaecati minima molestias.',
    },
    {
      name: 'Robbert',
      role: 'CTO, Robert Consultancy',
      image: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
      review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ea tempora dolores qui eius pariatur odit ad voluptas iste, cum accusantium beatae tempore quasi nesciunt distinctio.',
    },
    {
      name: 'Jeny Doe',
      role: 'CEO, Jeny Consultancy',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=761&q=80',
      review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ea tempora dolores qui eius pariatur odit ad voluptas iste, cum accusantium beatae tempore quasi nesciunt distinctio.',
    },
    {
      name: 'Lead Designer',
      role: 'Developer at Stech',
      image: 'https://images.unsplash.com/photo-1488508872907-592763824245?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea voluptates fugiat corrupti laudantium dolores reiciendis pariatur esse quod nihil quia cupiditate debitis quisquam nemo.',
    },
  ];

  // State to track the current review
  const [currentClientIndex, setCurrentClientIndex] = useState(0);

  // Function to go to the next client (right arrow)
  const nextClient = () => {
    setCurrentClientIndex((prevIndex) => (prevIndex + 1) % clients.length);
  };

  // Function to go to the previous client (left arrow)
  const prevClient = () => {
    setCurrentClientIndex(
      (prevIndex) => (prevIndex - 1 + clients.length) % clients.length
    );
  };

  const currentClient = clients[currentClientIndex];

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
          What clients are saying
        </h1>

        <div className="flex justify-center mx-auto mt-6">
          <span className="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
          <span className="inline-block w-3 h-1 mx-1 bg-blue-500 rounded-full"></span>
          <span className="inline-block w-1 h-1 bg-blue-500 rounded-full"></span>
        </div>

        <div className="flex items-start max-w-6xl mx-auto mt-16">
          {/* Left Arrow Button */}
          <button
            title="left arrow"
            onClick={prevClient}
            className="p-2 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 lg:block hover:bg-gray-100"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Review Content */}
          <div>
            <p className="flex items-center text-center text-gray-500 lg:mx-8">
              {currentClient.review}
            </p>

            <div className="flex flex-col items-center justify-center mt-8">
              <img
                className="object-cover rounded-full w-14 h-14"
                src={currentClient.image}
                alt={currentClient.name}
              />

              <div className="mt-4 text-center">
                <h1 className="font-semibold text-gray-800 dark:text-white">
                  {currentClient.name}
                </h1>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {currentClient.role}
                </span>
              </div>
            </div>
          </div>

          {/* Right Arrow Button */}
          <button
            title="right arrow"
            onClick={nextClient}
            className="p-2 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 lg:block hover:bg-gray-100"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
