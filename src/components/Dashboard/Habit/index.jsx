import "./habit.css";
import healthImg from "../../../assets/images/healthcare.png";
import gameImg from "../../../assets/images/joystick.png";
import waterImg from "../../../assets/images/drop.png";
import React, { useState } from "react";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { Progress, Select } from "antd";


const Habit = () => {
  // Antd Progress
  const [percent, setPercent] = useState(0);
  const increase = () => {
    setPercent((prevPercent) => {
      const newPercent = prevPercent + 10;
      if (newPercent > 100) {
        return 100;
      }
      return newPercent;
    });
  };
  const decline = () => {
    setPercent((prevPercent) => {
      const newPercent = prevPercent - 10;
      if (newPercent < 0) {
        return 0;
      }
      return newPercent;
    });
  };

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };  
  
  return (
    <div className="habit-container">
      <div className="habit-upperBody">
        <div className="header">
          {/* Image According to habit */}
          <div className="habit-image">
            <img src={waterImg} alt="" />
          </div>
          <h4 className="habit-name">Water</h4>
        </div>

        <div className="graph">
          <Progress type="circle" percent={percent} />
        </div>
      </div>

      <div className="habit-btns">
        <button className="dec-count" onClick={decline}><MinusOutlined /></button>
        <button className="inc-count" onClick={increase}><PlusOutlined /></button>
      </div>

      <div className="select-completition">
      <Select className="antd-select-tag"
      defaultValue="Select"
      onChange={handleChange}
      options={[
        { value: 'Done', label: 'Done' },
        { value: 'Not Done', label: 'Not Done' },
        { value: 'None', label: 'None' },
      ]}
    />
      </div>
    </div>
  );
};

export default Habit;
