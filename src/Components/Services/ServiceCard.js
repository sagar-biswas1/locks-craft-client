import React from "react";
import { Link } from "react-router-dom";
import "./service.css";
const ServiceCard = ({ service }) => {
  const { description, title, image, _id } = service;
  return (
    <div className="col mt-4 mb-5">
      <Link
        to={`/dashboard/book-service?serviceId=${_id}`}
        className="text-decoration-none text-dark"
      >
        <div className="card h-100 service-card-body">
          {/* <div style={{ overflow: "hidden" }}>
            <img
              src={image}
              className="card-img-top w-100 service-icon"
              alt="..."
            />
          </div> */}
          <div className="h-50 d-flex justify-content-center align-items-center mt-5">
            <img src={image} alt="" className=" service-icon" srcSet="" />
          </div>
          <div
            className="card-body service-card-body-text mt-5"
            style={{ backgroundColor: "#e5e5e552", padding: "5px" }}
          >
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ServiceCard;