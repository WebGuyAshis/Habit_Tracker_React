import "./habit.css";
// import waterIcon from "../../../assets/images/drop.png";
// import healthIcon from "../../../assets/images/healthcare.png";
// import gameIcon from "../../../assets/images/joystick.png";
// import workingIcon from '../../../assets/images/working.png';
// import sleepIcon from '../../../assets/images/sleep.png';
// import exerciseIcon from '../../../assets/images/running.png'

import React, { useEffect, useState } from "react";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { Progress, Select } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { activeHabitData, activeUser, prevBox } from "../../../actions";

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

  // States for Count and Status
  const [completedCount, setCompletedCount] = useState(habit.prevRecord[0].countCompleted);
  const [statusChange, setStatusChange] = useState(habit.prevRecord[0].status)



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

  // states for previous record data
  // const [preVRecordBox, setprevRecordBox] = useState(true)
const showRecord = (id)=>{
  console.log("Show Record of!", id);
  dispatch(prevBox(true))

  let habitData = user.habitData.filter((habit)=> habit.id === id);
  console.log("Habit data:", habitData);

  dispatch(activeHabitData(habitData))
}


const handleStatusChange = (value) =>{
  console.log("value of Select:", value);
  if(value === "Done"){
    setStatusChange("Done")
    setCompletedCount(habit.habitCount)
  }else if(value === "Not Done"){
    setStatusChange("Not Done")
  }else{
    setStatusChange("None")
  }
}


useEffect(()=>{
  if (user) {  
    // Handling Count according to status
    if(statusChange === "Done"){
      setCompletedCount(habit.habitCount)
    }

    console.log("Status Updated", index);
    user.habitData[index].prevRecord[0].status = statusChange;

    dispatch(activeUser(user));
    localStorage.setItem("user", JSON.stringify(user));
  }

}, [statusChange])

  // Updating User as Per the count completed
  // Updating Store as the count changes
  useEffect(() => {
    if (user) {

      if(completedCount == habit.habitCount  && habit.habitCount > 0){
        setStatusChange("Done");
      }else if(completedCount < habit.habitCount && habit.habitCount > 0){
        setStatusChange("Not Done");
      }else {
        setStatusChange("None");
      }

      console.log("Count Updated", index);
      user.habitData[index].prevRecord[0].countCompleted = completedCount;

      dispatch(activeUser(user));

      localStorage.setItem("user", JSON.stringify(user));
    }
  }, [completedCount]);

  return (
    <div className="habit-container">
      <div className="habit-upperBody" onClick={()=>{showRecord(habit.id)}}>
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
          defaultValue={user.habitData[index].prevRecord[0].status}
          onChange={(value)=>{handleStatusChange(value)}}
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
