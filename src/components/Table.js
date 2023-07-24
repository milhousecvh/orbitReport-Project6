import satData from "./satData";
import "./styling.css";

const Table = ({sat}) => {

  return (
      <table>
        <thead>
        <tr>
          <th>Name</th>
          <th>Type of Satellite</th>
          <th>Launch Date</th>
          <th>Status</th>
        </tr>
        </thead>
        <tbody>
        {sat.map((data) => {
        return (
        <tr key = {data.id}>
          <td>{data.name}</td>
          <td>{data.type}</td>
          <td>{data.launchDate}</td>
          <td><Status /></td>
        </tr>
        )})};
        </tbody>
      </table>
  );
};


function Status(data){
  let value = data.operational;
  let activity;
  if(value == true){
    activity = "Active";
  }
  else {
   activity = "Inactive";}
   return activity;
}


export default Table;