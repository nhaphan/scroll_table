import React from 'react';
import logo from './logo.svg';
import './App.css';


const render_row = (first_name, last_name, point, number) => {
  let row = [];
  row.push(<td>{first_name}</td>);
  row.push(<td>{last_name}</td>);
  for (let i = 0; i < number; i++) {
    row.push(<td>{point}</td>);
  }
  return <tr>{row}</tr>;
};

function App() {
  const num = 50;
  let points_th = [];

  for(let i = 0; i < num; i++ ) {
    points_th.push(<th>Points</th>);
  }

  let row_1 = render_row('Jill', 'Smith', 50, num);
  let row_2 = render_row('Eva', 'Jackson', 94, num);
  let row_3 = render_row('Adam', 'Johnson', 67, num);
  return (
      <div>
        <div className='container'>
          <table>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              {points_th}
            </tr>
              {row_1}
              {row_2}
              {row_3}
          </table>
        </div>
      </div>
  );
}

export default App;
