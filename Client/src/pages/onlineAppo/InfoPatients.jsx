import "./appoint.css";

export const InfoPatients = ({ name, date, time, phone, reason }) => {
  return (
    // <table className="listPatients">
      // <tr>
      //   <td className="Patient">{name}</td>
      //   <td className="Patient">{date}</td>
      //   <td className="Patient">{time}</td>
      //   <td className="Patient">{phone}</td>
      //   <td className="Patient">{reason}</td>
      // </tr>
    // </table>
    <div className="listPatients">
      <div className="Patient">{name}</div>
      <div className="Patient">{date}</div>
      <div className="Patient">{time}</div>
      <div className="Patient">{phone}</div>
      <div className="Patient">{reason}</div>
    </div>
  );
};
