const { Fragment, useState, useEffect } = require("react");

function RemoteDropDown() {
  // here create states
  const [options, setOptions] = useState([]);

  useEffect(() => {
    // here mount component once
    let mounted = true;

    fetch("//www.swapi.tech/api/people")
      .then((response) => response.json())
      .then((data) => {
        return data.results;
      })
      .then((characters) => characters.map(({ name }) => name))
      .then((names) => {
        if (!mounted) return;
        setOptions(names);
      });

    return () => {
      mounted = false;
    };
  }, [options]);

  return (
    <Fragment>
      {options && options.length !== 0 ? (
        <select>
          {options.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
      ) : (
        <p>Loading data! please wait!</p>
      )}
    </Fragment>
  );
}

export default RemoteDropDown;
