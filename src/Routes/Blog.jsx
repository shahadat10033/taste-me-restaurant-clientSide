import React from "react";

const Blog = () => {
  return (
    <div className="bg-light text-dark container border-dark">
      <div className="text-center  p-5">
        <button className="  btn btn-danger">Pdf Download</button>
      </div>
      <h3 className=" pb-4 fs-1 text-warning text-center">
        Some important questions
      </h3>
      <div className="fs-4">
        Q1. Tell us the differences between uncontrolled and controlled
        components
        <br />
        A1. The key difference between the two approaches is that with an
        uncontrolled component, the value of the input is managed by the
        browser, while with a controlled component, the value is managed by
        React. This gives React more control over the behavior of the form,
        allowing for more complex validation and manipulation of the input data.
        <br />
        <br />
        <hr />
        Q2. How to validate React props using PropTypes?
        <br />
        A2. PropTypes is a utility in React that is used to validate the props
        of a component. It allows you to define the type of each prop that a
        component is expecting, as well as specify whether the prop is required
        or optional.The PropTypes module provides a range of validators that can
        be used to define the type of props. Here are a few examples:
        <br />
        PropTypes.string: Validates that the prop is a string.
        <br />
        PropTypes.number: Validates that the prop is a number. <br />
        PropTypes.bool: Validates that the prop is a boolean value. <br />
        PropTypes.array: Validates that the prop is an array. <br />
        PropTypes.object: Validates that the prop is an object.
        <br />
        <br />
        <hr />
        Q3. Tell us the difference between nodejs and express js.
        <br />
        A3. Node.js and Express.js are both technologies used for server-side
        web development, but they serve different purposes. Node.js is a
        server-side runtime environment that is used to build server-side
        applications in JavaScript. It allows developers to use JavaScript to
        write server-side code, which means they can use the same language for
        both the client-side and server-side of a web application. Node.js
        provides a set of core modules that can be used to build server-side
        applications, such as HTTP, file system, and socket.io. Express.js is a
        web framework built on top of Node.js that simplifies the process of
        building server-side applications. It provides a set of features and
        functionality for building web applications, such as routing,
        middleware, and template engines. Express.js is designed to be flexible
        and unopinionated, allowing developers to choose the tools and libraries
        that they want to use.
        <br />
        <br />
        <hr />
        Q4. What is a custom hook, and why will you create a custom hook?
        <br />
        A4. In React, a custom hook is a JavaScript function that uses one or
        more built-in React hooks (such as useState, useEffect, useContext,
        etc.) to encapsulate reusable logic in a simple and reusable way. Custom
        hooks allow developers to share common logic between components without
        repeating code
        <br />
        <br />
      </div>
    </div>
  );
};

export default Blog;
