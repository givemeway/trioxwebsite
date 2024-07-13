import "./DropDown.css";

const DropDown = ({ open, children }) => {
  return <div className={`dropdown ${open ? "active" : ""}`}>{children}</div>;
};

export default DropDown;
