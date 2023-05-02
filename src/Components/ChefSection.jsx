import React from "react";

const ChefSection = () => {
  return (
    <div className=" bg-light row  py-2">
      <div className="col-md-4">
        <div className=" bg-success text-light rounded-4  m-1">
          <h3 className="pb-5 text-center">Name:{}</h3>
          <div className="row r ">
            <div className="col-md-6">
              <img src="" alt="" className="image-fluid me-3"></img>
            </div>
            <div className="col-md-6">
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
          <div className="py-4 text-center">
            <button className="btn btn-light  ">View Recipes</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefSection;
