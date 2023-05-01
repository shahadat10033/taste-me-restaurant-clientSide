import React from "react";

const Footer = () => {
  return (
    <div className="bg-dark text-light text-center py-5">
      <h3 className="fst-italic fs-4 text-warning pb-3">Be updated</h3>
      <h2 className="fs-bold  fs-3 pb-5">SUBSCRIBE US</h2>
      <p>
        Subscribe to our page to get firsts
        <br />
        Gift voucher by
        <span className=" fs-4 text-warning">Taste Me Restaurant</span>
      </p>
      <div className="mb-3">
        <img
          src="google.svg"
          alt=""
          style={{ width: 30, height: 30 }}
          className="mx-2"
        ></img>
        <img
          src="instra.png"
          alt=""
          style={{ width: 30, height: 30 }}
          className="mx-2"
        ></img>
        <img
          src="fb.png"
          alt=""
          style={{ width: 30, height: 30 }}
          className="mx-2"
        ></img>
        <img
          src="github.png"
          alt=""
          style={{ width: 30, height: 30 }}
          className="mx-2"
        ></img>
        <img
          src="twit.png"
          alt=""
          style={{ width: 30, height: 30 }}
          className="mx-2"
        ></img>
      </div>
      <small>
        © 2023, All Rights Reserved, Made by
        <span className="  text-warning">Md Shahadat Hossain</span>
      </small>
    </div>
  );
};

export default Footer;
