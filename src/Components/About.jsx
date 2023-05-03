import React from "react";

const About = () => {
  return (
    <div className="row bg-dark text-light">
      <div className="col-md-6 text-center ">
        <h3 className="text-warning fst-italic fs-3 mt-5 pt-5 ">Our story</h3>
        <h3 className="text-light fw-bold fs-1 py-2">ABOUT US</h3>
        <hr className="text-light" />
        <p className="text-warning  py-5">
          Discover Your New Favorite Dining Destination.
        </p>
        <br />
        <small className="text-light py-5 my-5">
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
              <h3 className="fw-bold py-5 ">
                $ FREE <br /> DELIVER
              </h3>
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
              <h3 className="fw-bold py-5 ">
                FRESHLY <br /> COOKED{" "}
              </h3>
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
              <h3 className="fw-bold  py-5">
                ALWAYS <br /> SUPPORT
              </h3>
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
