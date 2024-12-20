import React, { useState } from 'react';

const PricingPlan = () => {
  // State to track the selected plan
  const [selectedPlan, setSelectedPlan] = useState('basic');

  // Plan details
  const plans = {
    basic: {
      title: 'Basic',
      price: 'Free',
      subtext: '',
      discount: '',
      features: [
        { text: 'Unlimited Mileage', isAvailable: true },
        { text: 'Advanced Car Diagnostics', isAvailable: true },
        { text: '24/7 Roadside Assistance', isAvailable: false },
        { text: 'Optimize Fuel Efficiency', isAvailable: false },
        { text: 'Smart Car App Integration', isAvailable: true },
        { text: 'Multiple Driver Profiles', isAvailable: false },
      ],
    },
    standard: {
      title: 'Standard',
      price: '$99',
      subtext: '/Yearly',
      discount: '30%',
      features: [
        { text: 'Unlimited Mileage', isAvailable: true },
        { text: 'Advanced Car Diagnostics', isAvailable: true },
        { text: '24/7 Roadside Assistance', isAvailable: false },
        { text: 'Optimize Fuel Efficiency', isAvailable: true },
        { text: 'Smart Car App Integration', isAvailable: true },
        { text: 'Multiple Driver Profiles', isAvailable: false },
      ],
    },
    pro: {
      title: 'Pro',
      price: '$149',
      subtext: '/Month',
      discount: '20%',
      features: [
        { text: 'Unlimited Mileage', isAvailable: true },
        { text: 'Advanced Car Diagnostics', isAvailable: true },
        { text: '24/7 Roadside Assistance', isAvailable: true },
        { text: 'Optimize Fuel Efficiency', isAvailable: true },
        { text: 'Smart Car App Integration', isAvailable: true },
        { text: 'Multiple Driver Profiles', isAvailable: true },
      ],
    },
  };

  const handlePlanClick = (plan) => {
    setSelectedPlan(plan);
  };

  return (
    <div className="bg-white">
      <div className="container px-6 py-8 mx-auto">
        <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl">
          Simple pricing plan
        </h1>

        <p className="max-w-2xl mx-auto mt-4 text-center text-gray-500 xl:mt-6">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias quas magni libero consequuntur voluptatum velit amet id repudiandae ea, deleniti laborum in neque eveniet.
        </p>

        <div className="grid grid-cols-1 gap-8 mt-6 lg:grid-cols-3 xl:mt-12">
          {Object.keys(plans).map((planKey) => {
            const plan = plans[planKey];
            return (
              <div
                key={planKey}
                className={`flex items-center justify-between px-8 py-4 border cursor-pointer rounded-xl ${
                  selectedPlan === planKey ? 'border-blue-500' : 'border-gray-300'
                }`}
                onClick={() => handlePlanClick(planKey)}
              >
                <div className="flex flex-col items-center space-y-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-gray-400 sm:h-7 sm:w-7"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>

                  <h2 className="text-lg font-medium text-gray-700 sm:text-xl">{plan.title}</h2>
                </div>

                <div className="flex flex-col items-center space-y-1">
                  {plan.discount && (
                    <div className="px-2 text-xs text-blue-500 bg-gray-100 rounded-full sm:px-4 sm:py-1">
                      Save {plan.discount}
                    </div>
                  )}

                  <h2 className="text-2xl font-semibold text-gray-500 sm:text-3xl">
                    {plan.price} <span className="text-base font-medium">{plan.subtext}</span>
                  </h2>
                </div>
              </div>
            );
          })}
        </div>

        <div className="p-8 mt-8 space-y-8 bg-gray-100 rounded-xl">
          {plans[selectedPlan].features.map((feature, index) => (
            <Feature key={index} text={feature.text} isAvailable={feature.isAvailable} />
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <button className="px-8 py-2 tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80">
            Choose Plan
          </button>
        </div>
      </div>
    </div>
  );
};

const Feature = ({ text, isAvailable }) => (
  <div className="flex items-center justify-between text-gray-800">
    <p className="text-lg sm:text-xl">{text}</p>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`w-5 h-5 ${isAvailable ? 'text-blue-500' : 'text-red-400'} sm:h-7 sm:w-7`}
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
        clipRule="evenodd"
      />
    </svg>
  </div>
);

export default PricingPlan;
