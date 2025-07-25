import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Styles/Telivision.css";
import CusFooter from "./CusFooter";
import CusHeader from "./CusHeader";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";
const Telivision = () => {
  const navigate = useNavigate();
  const [ledProducts, setLedProducts] = useState([]);
  const [qledProducts, setQledProducts] = useState([]);

  useEffect(() => {
    const fetchLedTelevisions = async () => {
      try {
        const response = await axios.get(
          "${API_BASE_URL}/api/televisions/led"
        );
        setLedProducts(response.data);
      } catch (error) {
        console.error("Error fetching LED televisions:", error);
      }
    };

    const fetchQledTelevisions = async () => {
      try {
        const response = await axios.get(
          "${API_BASE_URL}/api/televisions/qled"
        );
        setQledProducts(response.data);
      } catch (error) {
        console.error("Error fetching QLED televisions:", error);
      }
    };

    fetchLedTelevisions();
    fetchQledTelevisions();
  }, []);

  const handleAddToCart = (product) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    const cartItem = {
      id: product.product_id, // Unique ID
      image: `${API_BASE_URL}/uploads/${product.product_image}`, // Full image URL
      name: product.product_name,
      description: product.product_description,
      price: product.product_price,
      quantity: 1, // Default quantity
    };

    cart.push(cartItem);
    localStorage.setItem("cart", JSON.stringify(cart));
    toast.success("Your product is added to Cart successfully!", {
      position: "top-center",
    });
  };

  return (
    <>
      <CusHeader />

      {/* LED Section */}
      <div className="container my-3">
        <div className="row justify-content-center">
          <div className="card-body">
            <div className="card shadow-lg p-4">
              <h4
                style={{
                  padding: "20px",
                  borderRadius: "15px",
                  background: "#fff",
                  display: "inline-block",
                }}
              >
                LED:
              </h4>
              <br />
              <br />
              <div className="row row-cols-2 row-cols-md-2 g-4">
                {ledProducts.map((product) => (
                  <div
                    key={product.product_id}
                    className="card product-card shadow-sm h-100"
                  >
                    <img
                      src={`${API_BASE_URL}/uploads/${product.product_image}`}
                      className="card-img"
                      alt={product.product_name}
                      style={{ height: "275px" }}
                    />{" "}
                    <div className="card-body">
                      <h5 className="card-title">
                        {product.product_description}
                      </h5>
                      <div className="d-flex justify-content-start align-items-center mb-3">
                        <span className="fs-2 fw-bold text-primary">
                          ₹{product.product_price}
                        </span>
                      </div>
                      <button
                        className="btn btn-warning w-100 mt-auto"
                        onClick={() => handleAddToCart(product)}
                      >
                        <AiOutlineShoppingCart size={20} /> Add to cart
                      </button>
                      <br />
                      <br />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* QLED Section */}
      <div className="container my-3">
        <div className="row justify-content-center">
          <div className="card-body">
            <div className="card shadow-lg p-4">
              <h4
                style={{
                  padding: "20px",
                  borderRadius: "15px",
                  background: "#fff",
                  display: "inline-block",
                }}
              >
                QLED:
              </h4>
              <br />
              <br />
              <div className="row row-cols-2 row-cols-md-2 g-4">
                {qledProducts.map((product) => (
                  <div
                    key={product.product_id}
                    className="card product-card shadow-sm h-100"
                  >
                    <img
                      src={`${API_BASE_URL}/uploads/${product.product_image}`}
                      className="card-img"
                      alt={product.product_name}
                      style={{ height: "275px" }}
                    />{" "}
                    <div className="card-body">
                      <h5 className="card-title">
                        {product.product_description}
                      </h5>
                      <div className="d-flex justify-content-start align-items-center mb-3">
                        <span className="fs-2 fw-bold text-primary">
                          ₹{product.product_price}
                        </span>
                      </div>
                      <button
                        className="btn btn-warning w-100 mt-auto"
                        onClick={() => handleAddToCart(product)}
                      >
                        <AiOutlineShoppingCart size={20} /> Add to cart
                      </button>
                      <br />
                      <br />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <ToastContainer />
      <footer className="bg-black text-white text-center py-3">
     <h4> <p>&copy; 2025 Home Appliance Service. All rights reserved.</p></h4>
      <p>
        <a href="/privacy" className="text-white">Privacy Policy</a> |{" "}
        <a href="/terms" className="text-white">Terms of Service</a>
      </p>
    </footer>
    </>
  );
};

export default Telivision;
