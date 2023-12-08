import "./prevData.css";
import { Select } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { prevBox } from "../../../../../actions";

const PrevData = () => {
    const dispatch = useDispatch();
  return (
    <div className="prevData-container">
      <span
        className="close-box-btn"
        onClick={() => {
          dispatch(prevBox(false));
        }}
      >
        <FontAwesomeIcon icon={faXmark} />
      </span>

      <h2>7th Dec, 2023</h2>

      <div className="selector-container">
        <label htmlFor="antd-select">Status:</label>
        <Select
          id="antd-select"
          defaultValue="Not Done"
          options={[
            { value: "Done", label: "Done" },
            { value: "Not Done", label: "Not Done" },
            { value: "None", label: "None" },
          ]}
        />
      </div>
    </div>
  );
};

export default PrevData;
