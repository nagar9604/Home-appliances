import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Dropdown, Nav, Navbar, Container } from "react-bootstrap";
import "./Style/Header1.css"
const Header1 = () => {
  const [productDropdown, setProductDropdown] = useState(false);
  const [complainDropdown, setComplainDropdown] = useState(false);
  const [feedbackDropdown, setFeedbackDropdown] = useState(false);
  const [toggle, setToggle] = useState(true);

  return (
    <header>
   
      <nav className="navbar navbar-expand-lg navbar-dark bg-black">
        <div className="container-fluid">
          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarNav"
          >
            <img
            src="public/Untitled design.png"
              alt="logo"
             
              height="auto"
              className="me-3"
              style={{ width:"250px",marginLeft:"25px"}}
              
            />
          
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link active text-white px-3" to="/">
                  HOME
                </Link>
              </li>

              <li
                className="nav-item dropdown"
                onMouseEnter={() => setProductDropdown(true)}
                onMouseLeave={() => setProductDropdown(false)}
              >
                <Dropdown show={productDropdown}>
                  <Dropdown.Toggle
                    variant="dark"
                    id="dropdown-basic"
                    bsPrefix="custom-toggle"
                    className="nav-link bg-black border-0 text-white w-100 text-center menu-item"
                  >
                    PRODUCT
                  </Dropdown.Toggle>
                  <Dropdown.Menu
                    style={{
                      minWidth: "160px", // Ensures a minimum size
                      backgroundColor: "#333", // Matches navbar dark theme
                      borderRadius: "8px", // Smooth rounded corners
                      border: "none", // Removes sharp border
                      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)", // Soft shadow for better look
                    }}
                  >
                    <Dropdown.Item
                      href="#"
                      style={{
                        color: "white",
                        padding: "10px 20px",
                        fontSize: "16px",
                        transition: "background 0.3s ease-in-out", // Smooth hover effect
                      }}
                      onMouseEnter={(e) =>
                        (e.target.style.backgroundColor = "black")
                      }
                      onMouseLeave={(e) =>
                        (e.target.style.backgroundColor = "transparent")
                      }
                    >
                      Product Details
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="#"
                      style={{
                        color: "white",
                        padding: "10px 20px",
                        fontSize: "16px",
                        transition: "background 0.3s ease-in-out",
                      }}
                      onMouseEnter={(e) =>
                        (e.target.style.backgroundColor = "black")
                      }
                      onMouseLeave={(e) =>
                        (e.target.style.backgroundColor = "transparent")
                      }
                    >
                      Service Details
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white px-3" to="/productorder">
                  PRODUCT ORDERS
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white px-3" to="/servicerequest">
                  SERVICE REQUEST
                </Link>
              </li>
              <li
                className="nav-item dropdown"
                onMouseEnter={() => setComplainDropdown(true)}
                onMouseLeave={() => setComplainDropdown(false)}
              >
                <Dropdown show={complainDropdown}>
                  <Dropdown.Toggle
                    variant="dark"
                    id="dropdown-basic"
                    bsPrefix="custom-toggle"
                    className="nav-link bg-black border-0 text-white w-100 text-center menu-item"
                  >
                    COMPLAIN
                  </Dropdown.Toggle>
                  <Dropdown.Menu
                    style={{
                      minWidth: "180px", // Ensures a minimum size
                      backgroundColor: "#333", // Matches navbar dark theme
                      borderRadius: "8px", // Smooth rounded corners
                      border: "none", // Removes sharp border
                    }}
                  >
                    <Dropdown.Item
                      href="#"
                      style={{
                        color: "white",
                        padding: "10px 20px",
                        fontSize: "16px",
                        transition: "background 0.3s ease-in-out", // Smooth hover effect
                      }}
                      onMouseEnter={(e) =>
                        (e.target.style.backgroundColor = "black")
                      }
                      onMouseLeave={(e) =>
                        (e.target.style.backgroundColor = "transparent")
                      }
                    >
                      My Complains
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="#"
                      style={{
                        width: "auto",
                        color: "white",
                        padding: "10px 20px",
                        fontSize: "16px",
                        transition: "background 0.3s ease-in-out",
                      }}
                      onMouseEnter={(e) =>
                        (e.target.style.backgroundColor = "black")
                      }
                      onMouseLeave={(e) =>
                        (e.target.style.backgroundColor = "transparent")
                      }
                    >
                      Customer Complains
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </li>
              <li
                className="nav-item dropdown"
                onMouseEnter={() => setFeedbackDropdown(true)}
                onMouseLeave={() => setFeedbackDropdown(false)}
              >
                <Dropdown show={feedbackDropdown}>
                  <Dropdown.Toggle
                    variant="dark"
                    id="dropdown-basic"
                    bsPrefix="custom-toggle"
                    className="nav-link bg-black border-0 text-white w-100 text-center menu-item"
                  >
                    FEEDBACK
                  </Dropdown.Toggle>
                  <Dropdown.Menu
                    style={{
                      minWidth: "180px", // Ensures a minimum size
                      backgroundColor: "#333", // Matches navbar dark theme
                      borderRadius: "8px", // Smooth rounded corners
                      border: "none", // Removes sharp border
                    }}
                  >
                    <Dropdown.Item
                      href="#"
                      style={{
                        color: "white",
                        padding: "10px 20px",
                        fontSize: "16px",
                        transition: "background 0.3s ease-in-out", // Smooth hover effect
                      }}
                      onMouseEnter={(e) =>
                        (e.target.style.backgroundColor = "black")
                      }
                      onMouseLeave={(e) =>
                        (e.target.style.backgroundColor = "transparent")
                      }
                    >
                      My Feedbacks
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="#"
                      style={{
                        width: "auto",
                        color: "white",
                        padding: "10px 20px",
                        fontSize: "16px",
                        transition: "background 0.3s ease-in-out",
                      }}
                      onMouseEnter={(e) =>
                        (e.target.style.backgroundColor = "black")
                      }
                      onMouseLeave={(e) =>
                        (e.target.style.backgroundColor = "transparent")
                      }
                    >
                      Customer Feedbacks
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </li>
              <li className="nav-item">
                <Link
                  to={toggle ? "/loginpage" : "/registrationpage : /forgot-password"}
                  className="nav-link text-white px-3"
                  onClick={() => setToggle(!toggle)}
                >
                  LOGIN
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header1;
