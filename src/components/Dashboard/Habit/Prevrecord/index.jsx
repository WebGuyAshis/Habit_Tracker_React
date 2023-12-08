import PrevData from './PrevData';
import './prevRecord.css'


const PrevRecord = () =>{
    return (
        <div className="prevRecord-background">

            <div className="prevRecord-container">
                <h1>Habit Name</h1>

                <h3>Previous Records</h3>
                <div className="previous-record-list">
                    {/* Import Previous Data Icons */}

                    <PrevData/>
                    <PrevData/>
                    <PrevData/>
                    <PrevData/>
                    <PrevData/>
                    <PrevData/>
                </div>

                <button className='delete-habit-btn'>Delete habit</button>

            </div>
        </div>
    )
}

export default PrevRecord;