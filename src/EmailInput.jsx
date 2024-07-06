const { Fragment, useState } = require("react");

function EmailInput() {
  const [emailId, setEmailId] = useState("");

  return (
    <Fragment>
      <label>
        Email ID:
        <input
          type="email"
          value={emailId}
          onChange={(event) => setEmailId(event.target.value)}
        />
        <button
          type="submit"
          onClick={() => {
            console.log(`email id : ${emailId}`);
          }}
        >
          Submit
        </button>
      </label>
    </Fragment>
  );
}

export default EmailInput;
