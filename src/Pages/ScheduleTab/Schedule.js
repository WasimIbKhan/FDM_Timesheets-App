import { Link } from 'react-router-dom';
import React from 'react';
import { useSelector} from "react-redux";
import { Inject, ScheduleComponent, Day, Week, WorkWeek, Month, Agenda} from '@syncfusion/ej2-react-schedule'
function Schedule() {
    const userId = useSelector(state => state.user.userId)
    console.log("step 3")
    console.log(userId)
    return ( 
        <div>
            <Link to='/Task'>Tasks</Link>
            <ScheduleComponent currentView='Week' >
                <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
            </ScheduleComponent>
        </div>
    )
    
}

export default Schedule