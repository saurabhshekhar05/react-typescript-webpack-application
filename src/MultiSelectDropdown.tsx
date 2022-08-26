import { useState } from "react";

export const MultiSelectDropdown = () => {
    const [colors, setColors] = useState<String[]>();

    // Handle the onChange event of the select
    const onChangeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedOptions = event.currentTarget.selectedOptions;

        const newColors = [];
        for (let i = 0; i < selectedOptions.length; i++) {
            newColors.push(selectedOptions[i].value);
        }

        setColors(newColors);
    };

    return (
        <div className="container">
            <h3>KindaCode.com</h3>
            <select multiple size={5} onChange={onChangeHandler} className="select">
                <option value="Blue">Blue</option>
                <option value="Red">Red</option>
                <option value="Yellow">Yellow</option>
                <option value="Green">Green</option>
                <option value="Indiogo">Indigo</option>
                <option value="Purple">Purple</option>
                <option value="Lime">Lime</option>
                <option value="Amber">Amber</option>
            </select>
            <br />
            <div>
                {/* Display the selected values */}
                {colors &&
                    colors.map((color, index) => <span className="color" key={index}>{color}</span>)}
            </div>
        </div>
    );
};
