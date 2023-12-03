import './habit.css'
import healthImg from '../../../assets/images/healthcare.png'
import gameImg from '../../../assets/images/joystick.png'
import waterImg from '../../../assets/images/drop.png'

const Habit = () => {
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

        <div className="graph"></div>
      </div>

      <div className="habit-btns">

      </div>
    </div>
  );
};

export default Habit;
