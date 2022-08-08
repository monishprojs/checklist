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
        <div className="content">
            <div className="functions">
                <TextField type="text" id="add" variant="outlined" label="Event" className="subject" onKeyDown={enter} />
                <span className='spacer'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                <br className='spacerMobile'/>
                <br className='spacerMobile' />
                <TextField type="text" id="date" variant="outlined" label="Date (Optional)" className="subject" onKeyDown={enter} />
            </div>
            <div className='submitField'>
                <Button className='submit' variant="contained" onClick={addList} >Add</Button>
            </div>
            <div className="list">
                <p>
                <b>Your Tasks:</b>
                </p>
                {checkList.map((check, index) => {
                    return (
                        <div className="item">
                            Event: {check.message}, &nbsp; Date: {check.date}
                            &nbsp;
                            <button className="remove" onClick={() => removeList(index)}>x</button>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default CheckList;
