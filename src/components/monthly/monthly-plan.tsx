import { AppPlan } from "./plan";

const basicPlanData = [
  {
    plan: "Basic",
    currency: "$",
    amount: "19.99",
    storage: "500 GB storage",
    users: "2 Users Allowed",
    send: "Send up to 3 GB",
  },
];

export const AppMonthlyPlan = () => {
  return (
    <div className="flex flex-row items-center">
      <AppPlan
        className="bg-white w-[26rem] rounded-2xl max-w-xl h-full"
        plan={basicPlanData}
      />
    </div>
  );
};
