import { useEffect, useState } from "react";
import axios from "axios";
import "./Style/ComplainList.css";
import Header from "./Header";
const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";
const ComplainList = () => {
  const [Complains, setComplains] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_BASE_URL}/complainlist`)
      .then((response) => setComplains(response.data)) // Updated from setCustomers to setComplains
      .catch((error) => console.error("Error fetching complains:", error));
  }, []);

  return (<>
  <Header/>
    <div className="main-content">
        <div className="table-wrapper">
          <h1 style={{ fontWeight: "bolder", fontFamily: "serif" }}>Complain List :</h1>
          <table>
            <thead>
              <tr>
                <th> ID</th>
                <th> DESCRIPTION</th>
                <th> ServicProvider_Id</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {Complains.map((Complain) => (
                <tr key={Complain.complain_id}>
                  <td>{Complain.complain_id}</td>
                  <td>{Complain.complain_description}</td>
                  <td>{Complain.serviceprovider_id}</td>
                  <td>
                  📝 ❗
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      </>    
  );
  
  
};

export default ComplainList;
