import React from "react";
import "./Style/Home1.css"

import { FaFacebook, FaInstagram } from "react-icons/fa";
import { Container, Row, Col } from "react-bootstrap";
import Header1 from "./Header1";
import Footer from "./Footer";
import Header from "../ADMIN/Header";

const Home1 = () => {
  return (
    <>

    <br /><br />
      <div className="fade-in d-flex justify-content-center">
        <img
          src="public/6424688.webp"
          alt="Kitchen Appliances"
          className="img-fluid rounded"
          style={{ width: "65%", height: "50%", borderRadius: "15px" }}
        />
      </div>

      <br />
      <br />

      <section className="mb-5 text-center slide-up">
        <h1 className="text-primary mb-3">WHY CHOOSE US ?</h1>
        <h3>
          <p className="lead fw-light">Fastest services with best price!</p>
        </h3>
        <br />
        <br />
        <div className="row mt-7 justify-content-center">
          <div className="col-md-6 mb-4 zoom-in">
            <div className="card h-100 border-0">
              <div className="d-flex justify-content-center align-items-center">
                <img
                  src="public/1721238945-8006.avif"
                  className="card-img-top"
                  alt="New Electronic Equipment"
                  style={{ width: "80%", height: "auto", borderRadius: "15px" }}
                />
              </div>
              <div className="card-body">
                <h3 className="card-title">New Electronic Equipment</h3>
                <p className="card-text">
                  You can purchase Electronics items with Best PRICES & OFFERS
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6 mb-4 zoom-in">
            <div className="card h-100 border-0">
              <div className="d-flex justify-content-center align-items-center">
                <img
                  src="public/DALL·E 2025-02-21 22.10.42 - A professional service technician for home appliances, wearing a blue uniform with a tool belt, repairing a washing machine in a modern home setting. .webp"
                  className="card-img-top"
                  alt="Repair Electronics Equipment"
                  style={{ width: "60%", height: "auto", borderRadius: "15px" }}
                />
              </div>
              <div className="card-body">
                <h3 className="card-title">Repair Electronics Equipment</h3>
                <p className="card-text">
                  Repair All Electronics items With Best Price
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Container>
      <Row className="text-center text-md-start">
        {/* About Us Section */}
        <Col md={4} className="mb-4 fadeIn">
          <h1>About Us -</h1>
          <p>
            We provide the best home appliance sales and repair services.
            Our expert technicians and premium products ensure customer
            satisfaction at the best prices.
          </p>
        </Col>
        
       
        <Col md={4} className="mb-4 ms-auto slideInRight">
          <h1>Contact Us -</h1>
          <p>Email: support@homeappliances.com</p>
          <p>Phone: +91 8200221828</p>
          <p>Location: NAVGUJARAT COLLEGE OF COMPUTER APPLICATIONS</p>
          <div className="d-flex gap-3 mt-2">
            <a href="https://facebook.com" className="text-light fs-4">
              <FaFacebook style={{ color: "blue", fontSize: "40px" }} />
            </a>
            <a href="https://instagram.com" className="text-light fs-4">
              <FaInstagram
                style={{
                  fontSize: "40px",
                  background: "linear-gradient(to right, #8a3abf, #e1306c, #f58529, #f7b731)",
                  borderRadius: "10px",
                  display: "inline-block",
                }}
              />
            </a>
          </div>
        </Col>
      </Row>
    </Container>
   
    </>
  );
};

export default Home1;
