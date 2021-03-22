import React from 'react';
import Hello from './components/Hello'
import Counter from './components/Counter';



function App() {
  let age:number = 26;
  let employeeInfo= {
    companyName:"iplex",
    location:"islamabad",
    companyType:"software house"

  }
  let arr:Array<number> = [1,2,3,4]
  let count:number = 0;
  return (
    <div className="App">
      <Hello name="Rehmat karim" age={age} jobTitle="React Js Developer" employeeInfo={employeeInfo} numbers={arr}/>
      <div>
        <Counter count={count}/>
      </div>
    </div>
  );
}

export default App;
