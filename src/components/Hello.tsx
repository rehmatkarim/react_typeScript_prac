import React from "react";

type objectType = {
  companyName: string;
  location: string;
  companyType: string;
};

type props = {
  name: string;
  age: number;
  jobTitle: string;
  employeeInfo: objectType;
  numbers: Array<number>;
};

const Hello:React.VoidFunctionComponent<props>= ({ name, age, jobTitle, employeeInfo, numbers }) => {
  return (
    <div>
      <p>
        hello my name is {name} and i am {age} years old and i am professional{" "}
        {jobTitle}
      </p>
      <table>
        <tbody>
          <tr>
            <th>Company Name</th>
            <td>{employeeInfo.companyName}</td>
          </tr>
          <tr>
            <th>Company location</th>
            <td>{employeeInfo.location}</td>
          </tr>
          <tr>
            <th>Company Type</th>
            <td>{employeeInfo.companyType}</td>
          </tr>
        </tbody>
      </table>
      {numbers.map((count) => (
        <p key={count}>{count}</p>
      ))}
      
    </div>
  );
};

export default Hello;
