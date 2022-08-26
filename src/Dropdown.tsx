import { useState } from "react";
import { IDropDownOptions } from "./IDropDownOptions";

export const DropDownComponent = (props:
    {
        optionList: IDropDownOptions[],
        defaultSelectValue: string,
        handleClick?: () => string;
    }) => {


    //  const defaultSelectValue = "Select a fruit";


    // Array of all options
    // const optionList = [
    //     { value: "red", label: "Red" },
    //     { value: "green", label: "Green" },
    //     { value: "yellow", label: "Yellow" },
    //     { value: "blue", label: "Blue" },
    //     { value: "white", label: "White" }
    // ];

    // React state to manage selected options
    const [selectedOptions, setSelectedOptions] = useState(props.defaultSelectValue);


    // Function triggered on selection
    function handleSelect(event: any) {
        debugger;
        setSelectedOptions(event.currentTarget.value);
        console.log('defaultSelectValue: ' + props.defaultSelectValue);
        console.log('selectedOptions: ' + selectedOptions);
    }

    return (
        <div className="app">
            <h6>Choose your Value: {selectedOptions}</h6>
            {/* <div>{props.handleClick && props.handleClick()}</div> */}
            <div className="dropdown-container">
                <select defaultValue={selectedOptions}
                    style={{ color: selectedOptions === props.defaultSelectValue ? "gray" : "black" }}
                    onChange={handleSelect} className="select">
                    <option value={props.defaultSelectValue}>{props.defaultSelectValue}</option>
                    {props.optionList.map((options: IDropDownOptions, index: number) => {
                        return (
                            <option key={index} value={options.DropdownID}>{options.DropdownValue}</option>
                        )
                    })}
                </select>
            </div>
        </div>
    );
};
