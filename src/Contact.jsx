import { Fragment, useState } from "react";

const FOCUS_NONE = 0;
const FOCUS_USER = 1;
const FOCUS_REQUEST = 2;

function getStyle(isActive) {
  return {
    display: "flex",
    flexDirection: "column",
    backgroundColor: isActive ? "oldlace" : "transparent",
  };
}

function Field({ label, children }) {
  <label>
    {label}:<br />
    {children}
  </label>;
}

function Contact() {
  const [focus, setFocus] = useState(FOCUS_NONE);
  const onUserFocus = () => setFocus(FOCUS_USER);
  const onRequestFocus = () => setFocus(FOCUS_REQUEST);
  const onBlur = () => setFocus(FOCUS_NONE);

  return (
    <Fragment>
      <form>
        <h1>Contact</h1>
        <fieldset onFocus={onUserFocus} style={getStyle(focus === FOCUS_USER)}>
          <legend>User</legend>
          <Field label="Name">
            <input />
          </Field>
          <Field label="Email">
            <input type="email" />
          </Field>
        </fieldset>
        <fieldset
          onFocus={onRequestFocus}
          style={getStyle(focus === FOCUS_REQUEST)}
        >
          <legend>Request</legend>
          <Field label="Subject">
            <input />
          </Field>
          <Field label="Body">
            <textarea></textarea>
          </Field>
        </fieldset>
      </form>
    </Fragment>
  );
}

export default Contact;
