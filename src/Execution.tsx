import { useState } from "react"
import { Scenarios } from "./Scenarios"
import { ScenarioVariants } from "./ScenarioVariants"

export const Execution = () => {

    const [dropDownSelectedValue, setValueOnChangeDropDown] = useState('');

    const handleClick = (dropdownValue: string) => {
        //  debugger;
        console.log('dropdownValue: ', dropdownValue);
        setValueOnChangeDropDown(dropdownValue);
        return dropdownValue;
    }

    return (
        <>
            <h2>Execution</h2>
            <form>
                <div className="mb-3 mt-3">
                    <Scenarios handleClick={() => handleClick(dropDownSelectedValue)} />
                </div>
                <div className="mb-3">
                    <ScenarioVariants firstChildValue={dropDownSelectedValue} />
                </div>
            </form>
        </>
    )
}