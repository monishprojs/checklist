import React, { useEffect, useState } from 'react';
import './checkList.css';


function CheckList() {
    const [checkList, setList] = useState([{ message: "Follow monishprojs on GitHub", date: "today" }]);

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
            if (msg != "") {
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
                <input type="text" id="add" className="subject" onKeyDown={enter} />
                &nbsp;
                <input type="text" id="date" className="subject" onKeyDown={enter} />
                &nbsp;
                <button onClick={addList} className="submit">Add</button>
            </div>
            <div className="list">
                <p>Your Tasks:</p>
                {checkList.map((check, index) => {
                    return (
                        <div>
                            {check.message} &nbsp; {check.date}
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
