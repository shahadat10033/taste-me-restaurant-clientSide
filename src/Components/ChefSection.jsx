import React from "react";

const ChefSection = () => {
  return (
    <div className="bg-dark row  py-2">
      <div className="col-md-4">
        <div className=" bg-light text-dark rounded-2 text-center m-1">
          <h3 className="pb-5">Name:{}</h3>
          <div className="d-flex align-items-center justify-content-between">
            <img src="" alt="" style={{ width: 100, height: 200 }}></img>
            <div>
              <p className="fw-semibold pb-4">Years of experience:{} years</p>
              <p className="fw-semibold">Numbers of recipes:{} items</p>
              <p>
                <span>
                  <img
                    src="likes.png"
                    alt=""
                    style={{ width: 20, height: 20 }}
                  />
                </span>
                {}
              </p>
            </div>
          </div>
          <div className="py-4">
            <button className="btn btn-dark  ">View Recipes</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefSection;
