import React, { useEffect, useState } from "react";
import axios, { CancelTokenSource } from 'axios'
import { DropDownComponent } from "./Dropdown";
import { IDropDownOptions } from "./IDropDownOptions";
import { ScenarioVariants } from "./ScenarioVariants";

export const Scenarios = (props: {
  handleClick?: () => string;
}) => {

  const scenarioLists: IDropDownOptions[] = [];

  // const [scenarioOptions, setDropDownData]: [IDropDownOptions[], (scenarioOptions: IDropDownOptions[]) => void] = React.useState(
  //   scenarioLists
  // );

  const [scenarioOptions, setDropDownData] = useState(scenarioLists);

  let arrays: IDropDownOptions[] = [];
  // const [loading, setLoading]: [boolean, (loading: boolean) => void] = React.useState<boolean>(true);

  const [error, setError]: [string, (error: string) => void] = React.useState('');

  // const cancelToken = axios.CancelToken; //create cancel token
  // const [cancelTokenSource, setCancelTokenSource]: [CancelTokenSource, (cancelTokenSource: CancelTokenSource) => void
  // ] = React.useState(cancelToken.source());


  useEffect(() => { getAllScenarios(); }, []);

  const getAllScenarios = () => {
    axios
      .get<IDropDownOptions[]>('https://jsonplaceholder.typicode.com/posts', {
        //cancelToken: cancelTokenSource.token,
        headers: {
          'Content-Type': 'application/json',
        },
        timeout: 10000,
      })
      .then((response) => {

        response.data.map((z: any) => {
          arrays.push(
            {
              DropdownID: z.id,
              DropdownValue: z.title
            }
          )
        });
        arrays = [];
        arrays = [
          { DropdownID: "TACO", DropdownValue: "TACO Scenario" },
          { DropdownID: "OrderCancellation", DropdownValue: "Order Cancellation" },
          { DropdownID: "Spoofing", DropdownValue: "Spoofing" },
          { DropdownID: "Ramping", DropdownValue: "Ramping" },
          { DropdownID: "Parking", DropdownValue: "Parking" }
        ];

        setDropDownData(arrays); //setDropDownData(response.data);   
        // setLoading(false);
      })
      .catch(error => console.log(`Error: `, error));
    //       .catch ((ex) => {
    //   let error = axios.isCancel(ex) ? 'Request Cancelled'
    //     : ex.code === 'ECONNABORTED' ? 'A timeout has occurred'
    //       : ex.response.status === 404 ? 'Resource Not Found'
    //         : 'An unexpected error has occurred';

    //   setError(error);
    //   //setLoading(false);
    // });
  };

  // const handleCancelClick = () => {
  //   if (cancelTokenSource) {
  //     cancelTokenSource.cancel('User cancelled operation');
  //   }
  // };

  // const scenarioOptions: IDropDownOptions[] = [
  //   { DropdownID: "TACO", DropdownValue: "TACO" },
  //   { DropdownID: "OrderCancellation", DropdownValue: "Order Cancellation" },
  //   { DropdownID: "Spoofing", DropdownValue: "Spoofing" },
  //   { DropdownID: "Ramping", DropdownValue: "Ramping" },
  //   { DropdownID: "Parking", DropdownValue: "Parking" }
  // ];

  const [dropDownSelectedValue, setValueOnChangeDropDown] = useState('');

  const handleClick = (dropdownValue: string) => {
    console.log('dropdownValue: ', dropdownValue);
    setValueOnChangeDropDown(dropdownValue);
    return dropdownValue;
  }

  return (
    <>
      <div className="mb-3 mt-3">
        {/* {loading && <button onClick={handleCancelClick}>Cancel</button>} */}
        <div>{props.handleClick && props.handleClick()}</div>
        <DropDownComponent
          optionList={scenarioOptions}
          defaultSelectValue={'Select a scenario'}
          handleClick={() => handleClick(dropDownSelectedValue)}
        />

      </div>
      {/* <div className="mb-3">
        <ScenarioVariants />
      </div> */}
      {/* <div className="mb-3">
        {dropDownSelectedValue != '' && dropDownSelectedValue != 'Select a scenario' ? <ScenarioVariants firstChildValue={dropDownSelectedValue} /> :
          <ScenarioVariants />}
      </div> */}

    </>
  );
};
