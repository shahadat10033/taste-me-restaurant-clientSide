import React from "react";

const Stats = () => {
  return (
    <div className="d-flex flex-column bg-light text-dark align-items-center text-center py-5">
      <div className="my-5 ">
        <img src="people.svg" alt="" style={{ width: 50, height: 50 }} />
        <h5 className="text-warning fw-bold  pt-4" style={{ fontSize: 60 }}>
          120K
        </h5>
        <h5 className="fw-bold fs-3">HAPPY PEOPLE</h5>
      </div>
      <div className="my-5 ">
        <img src="coffee.svg" alt="" style={{ width: 50, height: 50 }} />
        <h5 className="text-warning fw-bold  pt-4" style={{ fontSize: 60 }}>
          27K
        </h5>
        <h5 className="fw-bold fs-3">CUP OF COFFEE</h5>
      </div>
      <div className="my-5 ">
        <img src="checf.webp" alt="" style={{ width: 50, height: 50 }} />
        <h5 className="text-warning fw-bold  pt-4" style={{ fontSize: 60 }}>
          500
        </h5>
        <h5 className="fw-bold fs-3">CHEF RECIPE</h5>
      </div>
      <div className="my-5 ">
        <img src="award.png" alt="" style={{ width: 50, height: 50 }} />
        <h5 className="text-warning fw-bold  pt-4" style={{ fontSize: 60 }}>
          4K
        </h5>
        <h5 className="fw-bold fs-3">BEST AWARDS</h5>
      </div>
    </div>
  );
};

export default Stats;
