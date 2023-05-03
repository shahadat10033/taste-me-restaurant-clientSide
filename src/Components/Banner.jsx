import React from "react";

const Banner = () => {
  return (
    <div
      className="bg-image card shadow-1-strong   h-100"
      style={{
        backgroundImage: 'url("Homebanner.jpg")',
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover",
      }}
    >
      <div className="card-body text-light text-center">
        <h5 className="card-title my-5 py-5">
          <span className="fst-italic fs-4 my-3">Welcome to our</span>
          <br />
          <span className="fw-bold fs-1 my-5">RESTAURANT</span>
        </h5>
        <small className="card-text pt-5 mt-5">
          Come for the food, stay for the memories .<br /> our restaurant is the
          perfect place to create unforgettable moments.
        </small>
        <div className="my-5 py-5">
          <button className="btn btn-outline-light me-3">BOOK TABLE</button>
          <button className="btn btn-outline-light">VIEW MENU</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
