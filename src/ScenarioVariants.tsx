import { useEffect, useState } from "react";
import { DropDownComponent } from "./Dropdown";
import { IDropDownOptions } from "./IDropDownOptions";

export const ScenarioVariants = (props: { firstChildValue?: string }) => {

  console.log('First Child Value ', props.firstChildValue); let scenarioVariantsOptions: IDropDownOptions[] = [];
  // debugger;
  const [scenarioVariant, setScenarioVariant] = useState<IDropDownOptions[]>([]);

  useEffect(() => {
    debugger;
    console.log('First Child Value in UseEffect ', props.firstChildValue)
    scenarioVariantsOptions = [
      { DropdownID: "FX", DropdownValue: "FX", ApiValue: "TACO" },
      { DropdownID: "FI", DropdownValue: "FI", ApiValue: "TACO" },
      { DropdownID: "IRD", DropdownValue: "IRD", ApiValue: "Spoofing" },
      { DropdownID: "MMRD", DropdownValue: "MMRD", ApiValue: "Parking" }
    ];
    // debugger;
    scenarioVariantsOptions = scenarioVariantsOptions.filter(x => x.ApiValue == 'TACO');
    setScenarioVariant(scenarioVariantsOptions)

  }, []);



  return (
    <>
      <DropDownComponent optionList={scenarioVariant} defaultSelectValue={'Select a scenario variants'} />
    </>
  );
};
