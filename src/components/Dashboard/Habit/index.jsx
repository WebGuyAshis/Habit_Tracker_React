import "./habit.css";
import waterIcon from "../../../assets/images/drop.png";
import healthIcon from "../../../assets/images/healthcare.png";
import gameIcon from "../../../assets/images/joystick.png";
import workingIcon from '../../../assets/images/working.png';
import sleepIcon from '../../../assets/images/sleep.png';
import exerciseIcon from '../../../assets/images/running.png'

import React, { useEffect, useState } from "react";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { Progress, Select } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { activeUser, prevBox } from "../../../actions";

const Habit = ({ habit, index }) => {
  let dispatch = useDispatch();
  let user = useSelector((state) => state.setUserData);
  console.log("Index or Key!", index);
  // Antd Progress
  let initialPercent = (habit.countCompleted / habit.habitCount) * 100;
  console.log(
    "Inital Count %",
    habit.habitCount,
    habit.countCompleted,
    " F: ",
    initialPercent
  );
  const [percent, setPercent] = useState(
    !isNaN(initialPercent) ? initialPercent : 0
  );

  const [completedCount, setCompletedCount] = useState(habit.countCompleted);
  // Handling ProgressBar
  const increase = () => {
    setCompletedCount((prevCount) => {
      let newCount = prevCount + 1;

      setPercent((prevPercent) => {
        if (habit.habitCount === 0) {
          console.log("Habit Count Not Set");
          return 100;
        }
        const newPercent = (newCount / habit.habitCount) * 100;

        // Ensure that the newPercent does not exceed 100
        return newPercent > 100 ? 100 : newPercent;
      });
      if (habit.habitCount === 0) {
        return 0;
      }
      if (newCount > habit.habitCount) {
        return newCount - 1;
      }
      return newCount;
    });
  };

  const decline = () => {
    setCompletedCount((prevCount) => {
      const newCount = prevCount - 1;

      setPercent((prevPercent) => {
        const newPercent = (newCount / habit.habitCount) * 100;

        // Ensure that the newPercent does not exceed 100
        return newPercent < 0 ? 0 : newPercent;
      });

      if (newCount <= 0) {
        return 0;
      }
      return newCount;
    });
  };

  // Updating User as Per the count completed
  // Updating Store as the count changes
  useEffect(() => {
    if (user) {
      console.log("Count Updated", index);
      user.habitData[index].countCompleted = completedCount;
      dispatch(activeUser(user));

      localStorage.setItem("user", JSON.stringify(user));
    }
  }, [completedCount]);
  // states for previous record data
  // const [preVRecordBox, setprevRecordBox] = useState(true)
const showRecord = ()=>{
  console.log("Show Record!");
  dispatch(prevBox(true))
}

  return (
    <div className="habit-container">
      <div className="habit-upperBody" onClick={showRecord}>
        <div className="header">
          {/* Image According to habit */}
          <div className="habit-image">
            <img src={habit.habitIcon} alt="" />
          </div>
          <h4 className="habit-name">{habit.habitName}</h4>
        </div>

        <div className="graph">
          <Progress type="circle" percent={percent} />
        </div>
      </div>

      <div className="habit-btns">
        <button className="dec-count" onClick={decline}>
          <MinusOutlined />
        </button>
        <button className="inc-count" onClick={increase}>
          <PlusOutlined />
        </button>
      </div>

      <div className="select-completition">
        <Select
          className="antd-select-tag"
          defaultValue="Select"
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

export default Habit;
