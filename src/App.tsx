import { useState } from "react";
import { AppToggleSwitch } from "./components/toggle-switch/toggle-switch";
import { AppBasicPlan } from "./components/monthly/basic/basic-plan";

function App() {
  const [selectedPlan, setSelectedPlan] = useState<string>("annually");

  const handleToggleChange = () => {
    setSelectedPlan((prev: string) => {
      const newPlan = prev === "annually" ? "monthly" : "annually";
      return newPlan;
    });
  };
  return (
    <div className="w-full xl:max-w-7xl h-full mx-auto p-12">
      <div className="flex items-center flex-col  justify-center">
        <div>
          <h1 className="text-4xl font-body font-bold text-legal-eagle">
            Our Pricing
          </h1>
        </div>
        <div className="w-full max-w-xs mt-14">
          <AppToggleSwitch
            checked={selectedPlan === "annually"}
            onToggleChange={handleToggleChange}
          />
        </div>
        <div className="mt-20">
          <AppBasicPlan />
        </div>
      </div>
    </div>
  );
}

export default App;
