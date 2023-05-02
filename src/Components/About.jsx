import React from "react";

const About = () => {
  return (
    <div className="row bg-dark text-light">
      <div className="col-md-6 text-center ">
        <h3 className="text-warning fst-italic fs-3 ">Our story</h3>
        <h3 className="text-light fw-bold fs-1 ">ABOUT US</h3>
        <hr className="text-light" />
        <p className="text-warning">
          Discover Your New Favorite Dining Destination.
        </p>
        <br />
        <small className="text-light">
          Experience the art of culinary delight at our restaurant, where every
          dish is a masterpiece crafted with passion and creativity. Indulge in
          our hand-selected ingredients, impeccable service, and warm ambiance,
          all coming together to create a memorable dining experience that will
          leave you craving for more.
        </small>
        <div className="row my-5 ms-2 ">
          <div className="col-md-4 text-center  text-dark">
            <div className="border-4 rounded-3 bg-light">
              <img
                src="delivery.png"
                alt=""
                style={{ width: 40, height: 40 }}
                className="my-5"
              ></img>
              <hr />
              <h3 className="fw-bold ">FREE DELIVERY</h3>
            </div>
          </div>
          <div className="col-md-4 text-center  text-dark">
            <div className="border-4 rounded-3 bg-light">
              <img
                src="cooking.png"
                alt=""
                style={{ width: 40, height: 40 }}
                className="my-5"
              ></img>
              <hr />
              <h3 className="fw-bold ">FRESHLY COOKED</h3>
            </div>
          </div>
          <div className="col-md-4 text-center  text-dark">
            <div className="border-4 rounded-3 bg-light">
              <img
                src="24support.svg"
                alt=""
                style={{ width: 40, height: 40 }}
                className="my-5"
              ></img>
              <hr />
              <h3 className="fw-bold ">ALWAYS SUPPORT</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <img src="chef.jpg" alt="" className="img-fluid"></img>
      </div>
    </div>
  );
};

export default About;
