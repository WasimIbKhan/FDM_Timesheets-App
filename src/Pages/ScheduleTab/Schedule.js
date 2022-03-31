import { Link } from 'react-router-dom';
import React from 'react';
import { Inject, ScheduleComponent, Day, Week, WorkWeek, Month, Agenda} from '@syncfusion/ej2-react-schedule'
function Schedule() {
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