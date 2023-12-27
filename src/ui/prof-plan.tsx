import AppButton from "../components/button/button";

type PlanData = {
  plan: string;
  currency: string;
  amount: string;
  storage: string;
  users: string;
  send: string;
};
export const AppProfPLan = ({ plan }: { plan: PlanData[] }) => {
  return (
    <div
      className={`bg-[#7479E1] md:w-full w-[24rem] rounded-2xl max-w-xl h-full`}
    >
      {plan.map((planData, index) => (
        <div
          key={index}
          className="w-full flex flex-col items-center px-10 py-10"
        >
          <h2 className="font-bold text-xl text-white">{planData.plan}</h2>
          <div className="flex items-center my-8">
            <span className="text-4xl font-bold text-white mt-2 mr-2">
              {planData.currency}
            </span>
            <span className="text-7xl font-bold text-white">
              {planData.amount}
            </span>
          </div>
          <hr className="w-full font-bold mt-4" />
          <div className="mt-4">
            <span className="text-xl font-bold text-white">
              {planData.storage}
            </span>
          </div>
          <hr className="w-full font-bold mt-4" />
          <div className="mt-4">
            <span className="text-xl font-bold text-white">
              {planData.users}
            </span>
          </div>
          <hr className="w-full font-bold mt-4" />
          <div className="mt-4">
            <span className="text-xl font-bold text-white">
              {planData.send}
            </span>
          </div>
          <hr className="w-full font-bold mt-4" />
          <div className="w-full  my-6">
            <AppButton className="button-secondary"></AppButton>
          </div>
        </div>
      ))}
    </div>
  );
};
