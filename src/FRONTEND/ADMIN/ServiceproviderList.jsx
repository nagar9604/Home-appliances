import { useEffect, useState } from "react";
import axios from "axios";
import "./Style/CustomerList.css"; // Reuse your existing CSS
import Header from "./Header";

const ServiceProviderList = () => {
  const [serviceProviders, setServiceProviders] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/serviceproviderslist") // Adjust API endpoint
      .then((response) => setServiceProviders(response.data))
      .catch((error) =>
        console.error("Error fetching service providers:", error)
      );
  }, []);

  const deleteServiceProvider = async (serviceProviderId) => {
    if (window.confirm("Are you sure ? you want to delete service Provider??")) {
      try {
        await axios.delete(
          `http://localhost:5000/serviceprovider/${serviceProviderId}`
        );

        setServiceProviders(
          serviceProviders.filter(
              (provider) => provider.service_provider_id !== serviceProviderId
          )
      );
        
      } catch (error) {
        console.error("Error deleting service provider:", error);
      }
    }
  };

  return (
    <>
      <Header />
      <div className="main-content">
        <div className="table-wrapper1">
          <h1 style={{ fontWeight: "bolder", fontFamily: "serif" }}>
            Service Provider List :
          </h1>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Address</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Password</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {serviceProviders.map((provider) => (
                <tr key={provider.serviceprovider_id}>
                  <td>{provider.serviceprovider_id}</td>
                  <td>{provider.serviceprovider_name}</td>
                  <td>{provider.serviceprovider_address}</td>
                  <td>{provider.serviceprovider_contact}</td>
                  <td>{provider.serviceprovider_email}</td>
                  <td>{provider.password}</td>
                  <td>
                    <button
                      className="delete-btn"
                      onClick={() =>
                        deleteServiceProvider(provider.service_provider_id)
                      }
                    >
                      Delete
                    </button>
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

export default ServiceProviderList;
