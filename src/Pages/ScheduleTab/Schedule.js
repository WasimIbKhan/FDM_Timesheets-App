import { Link } from 'react-router-dom';
import React from 'react';
import { useSelector} from "react-redux";
import { Inject, ScheduleComponent, Day, Week, WorkWeek, Month, Agenda} from '@syncfusion/ej2-react-schedule'
function Schedule() {
    const user = useSelector(state => state.user.name)
    console.log(user)
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