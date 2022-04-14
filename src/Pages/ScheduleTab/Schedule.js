import { Link } from 'react-router-dom';
import React from 'react';
import { useSelector} from "react-redux";
import { Inject, ScheduleComponent, Day, Week, WorkWeek, Month, Agenda,
    Resize,
    DragAndDrop} from '@syncfusion/ej2-react-schedule'
import { DateTimePickerComponent } from '@syncfusion/ej2-react-calendars';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
function Schedule() {
    const userId = useSelector(state => state.user.userId)
    const editorTemplate = props => {
        return props !== undefined ? (
          <table
            className="custom-event-editor"
            style={{ width: '100%', cellpadding: '5' }}
          >
            <tbody>
              <tr>
                <td className="e-textlabel">Summary</td>
                <td style={{ colspan: '4' }}>
                <DropDownListComponent
                    id="Summary"
                    placeholder="Choose status"
                    className="e-field e-input"
                    style={{ width: '100%' }}
                    name="Subject"
                    dataSource={['task 1', 'task 2', 'task 3']}
                  />
                </td>
              </tr>
              <tr>
                <td className="e-textlabel">Status</td>
                <td style={{ colspan: '4' }}>
                  <DropDownListComponent
                    id="EventType"
                    placeholder="Choose status"
                    data-name="EventType"
                    className="e-field"
                    style={{ width: '100%' }}
                    dataSource={['New', 'Requested', 'Confirmed']}
                  />
                </td>
              </tr>
              <tr>
                <td className="e-textlabel">From</td>
                <td style={{ colspan: '4' }}>
                  <DateTimePickerComponent
                    id="StartTime"
                    format="dd/MM/yy hh:mm a"
                    data-name="StartTime"
                    value={new Date(props.startTime || props.StartTime)}
                    className="e-field"
                  />
                </td>
              </tr>
              <tr>
                <td className="e-textlabel">To</td>
                <td style={{ colspan: '4' }}>
                  <DateTimePickerComponent
                    id="EndTime"
                    format="dd/MM/yy hh:mm a"
                    data-name="EndTime"
                    value={new Date(props.endTime || props.EndTime)}
                    className="e-field"
                  />
                </td>
              </tr>
              <tr>
                <td className="e-textlabel">Reason</td>
                <td style={{ colspan: '4' }}>
                  <textarea
                    id="Description"
                    className="e-field e-input"
                    name="Description"
                    rows={3}
                    cols={50}
                    style={{
                      width: '100%',
                      height: '60px !important',
                      resize: 'vertical'
                    }}
                  />
                </td>
              </tr>
            </tbody>
          </table>
        ) : (
          <div />
        );
      };

    return ( 
        <div>
            <Link to='Task'>Tasks</Link>
            <ScheduleComponent currentView='Week' editorTemplate={editorTemplate}>
                <Inject services={[Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop]} />
            </ScheduleComponent>
        </div>
    )
    
}

export default Schedule