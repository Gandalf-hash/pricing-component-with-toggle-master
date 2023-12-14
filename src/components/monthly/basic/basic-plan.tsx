const data = [
  {
    plan: "Basic",
    currency: "$",
    amount: "19.99",
    storage: "500 GB storage",
    users: "2 Users Allowed",
    send: "Send up to 3 GB",
  },
];

export const AppBasicPlan = () => {
  return (
    <div className="bg-white w-[26rem] rounded-2xl max-w-xl h-[60vh]">
      {data.map((planData, index) => (
        <div
          key={index}
          className="w-full flex flex-col items-center px-10 py-4"
        >
          <h2 className="font-bold text-xl text-legal-eagle">
            {planData.plan}
          </h2>
          <div className="flex items-center my-8">
            <span className="text-4xl font-bold text-true-blue mt-4">
              {planData.currency}
            </span>
            <span className="text-7xl font-bold text-true-blue">
              {planData.amount}
            </span>
          </div>
          <hr className="w-full font-bold mt-4" />
          <div className="mt-4">
            <span className="text-xl font-bold text-legal-eagle">
              {planData.storage}
            </span>
          </div>
          <hr className="w-full font-bold mt-4" />
          <div className="mt-4">
            <span className="text-xl font-bold text-legal-eagle">
              {planData.users}
            </span>
          </div>
          <hr className="w-full font-bold mt-4" />
          <div className="mt-4">
            <span className="text-xl font-bold text-legal-eagle">
              {planData.send}
            </span>
          </div>
          <hr className="w-full font-bold mt-4" />
        </div>
      ))}
    </div>
  );
};
