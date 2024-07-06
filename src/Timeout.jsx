const { Fragment, useState, useEffect } = require("react");

const Timeout = () => {
  const [message, setMessage] = useState("waiting..!");

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setMessage("Time completed!");
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <Fragment>
      <p>status: {message}</p>
    </Fragment>
  );
};

export default Timeout;
