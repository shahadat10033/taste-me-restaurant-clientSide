// import React from 'react';

// const ErrorPg = () => {
//     return (
//         <div>

//         </div>
//     );
// };

// export default ErrorPg;

import React from "react";
import { Link, useRouteError } from "react-router-dom";

const ErrorPg = () => {
  const { error, status } = useRouteError();
  return (
    <div
      className="bg-image card shadow-1-strong r "
      style={{
        backgroundImage: 'url("error.jpg")',
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover",
      }}
    >
      <div
        className="text-center container "
        style={{ width: 200, height: 200 }}
      ></div>
      <section
        className="d-flex justify-items-center  p-16  text-secondary "
        style={{ height: "100vh" }}
      >
        <div className="container d-flex flex-column justify-items-center   mx-auto my-5">
          <div className="max-w-md text-center">
            <h2 className="mb-5 fw-bold fs-1 text-light">
              <span className="fw-bold">Error</span> {status || 404}
            </h2>
            <p className="fs-2 fw-semibold  mb-5 text-light">
              {error?.message}
            </p>
            <Link
              to="/"
              className="px-5 py-3 font-semibold rounded bg-primary text-light text-decoration-none"
            >
              Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ErrorPg;
