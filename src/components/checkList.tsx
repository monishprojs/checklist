import React, {useState } from 'react';
import './checkList.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';



function CheckList() {
    const [checkList, setList] = useState([{ message: "Follow monishprojs on GitHub", date: "Today" }]);

    function enter(key: any) {
        if (key.key === 'Enter') {
            addList();
        }
    }

    function addList() {
        let addBox = document.getElementById('add') as HTMLInputElement | null;
        let dateBox = document.getElementById('date') as HTMLInputElement | null;
        if (addBox != null && dateBox != null) {
            let msg = addBox.value;
            let time = dateBox.value;
            if (msg !== "") {
                setList(checkList => [...checkList, { message: msg, date: time }]);
            }
        }
    }

    function removeList(index: number) {
        let placeholder = [...checkList];
        placeholder.splice(index, 1);
        setList(placeholder);
    }

    return (
        <div>
            <div className="functions">
                <TextField type="text" id="add" variant="filled" label="Event" className="subject" onKeyDown={enter} />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <TextField type="text" id="date" variant="filled" label="Date (Optional)" className="subject" onKeyDown={enter} />
                &nbsp;
            </div>
            <div className='submit'>
                <Button variant="contained" onClick={addList} >Add</Button>
            </div>
            <div className="list">
                <p>
                <b>Your Tasks:</b>
                </p>
                {checkList.map((check, index) => {
                    return (
                        <div>
                            Event: {check.message}, &nbsp; Date: {check.date}
                            &nbsp;
                            <button className="remove" onClick={() => removeList(index)}>x</button>
                            <br /><br />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default CheckList;
