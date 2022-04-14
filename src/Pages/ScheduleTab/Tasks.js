import React from 'react';
import {Link, useNavigate } from 'react-router-dom';
import * as userAction from '../../store/action/user'
import { useDispatch, useSelector } from 'react-redux';
function Tasks() {
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const [task, setTask] = useState()

    const submitEdition = useCallback(async() => {
        await dispatch(userAction.addTask(task))
        navigate(-1)
      },[dispatch, task])

    return(
        <div>
            <input onChange={event => setTask(event.target.value)}/>
            <input type="submit" onClick={submitEdition} />
        </div>
    )
}

export default Tasks