import { AppPlan } from "./plan";
import { AppProfPLan } from "./prof-plan";

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
const masterPlanData = [
  {
    plan: "Master",
    currency: "$",
    amount: "39.99",
    storage: "2 TB storage",
    users: "10 Users Allowed",
    send: "Send up to 20 GB",
  },
];
const professionalPlanData = [
  {
    plan: "Professional",
    currency: "$",
    amount: "24.99",
    storage: "1 TB storage",
    users: "5 Users Allowed",
    send: "Send up to 10 GB",
  },
];

export const AppMonthlyPlan = () => {
  return (
    <>
      <div className="flex flex-col space-y-12 lg:space-y-0 lg:flex-row items-center">
        <AppPlan plan={basicPlanData} />
        <AppProfPLan plan={professionalPlanData} />
        <AppPlan plan={masterPlanData} />
      </div>
    </>
  );
};
