import { useState } from "react";
import { AppToggleSwitch } from "./components/toggle-switch/toggle-switch";
import { AppMonthlyPlan } from "./components/monthly/monthly-plan";
import { AppAnnualPlan } from "./components/annually/annual-plan";

function App() {
  const [selectedPlan, setSelectedPlan] = useState<string>("monthly");

  const handleToggleChange = () => {
    setSelectedPlan((prev: string) => {
      const newPlan = prev === "annually" ? "monthly" : "annually";
      return newPlan;
    });
  };
  return (
    <div className="w-full lg:max-w-6xl xl:max-w-7xl h-full mx-auto pt-12 px-6">
      <div className="flex items-center flex-col justify-center">
        <div>
          <h1 className="text-4xl font-body font-bold text-legal-eagle">
            Our Pricing
          </h1>
        </div>
        <div className="w-full max-w-xs mt-14">
          <AppToggleSwitch
            checked={selectedPlan === "monthly"}
            onToggleChange={handleToggleChange}
          />
        </div>
        <div className="mt-20 w-full">
          {selectedPlan === "monthly" ? <AppMonthlyPlan /> : <AppAnnualPlan />}
        </div>
      </div>
    </div>
  );
}

export default App;
