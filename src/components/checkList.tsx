import React, { useState } from 'react';
import './checkList.css';


function CheckList() {
    const [checkList, setList] = useState(['']);
    const [dates, setDates] = useState([''])

    function enter(key: any) {
        if (key.key === 'Enter') {
            addList();
        }
    }

    function addList() {
        let addBox = document.getElementById('add') as HTMLInputElement | null;
        if (addBox != null) {
            let item = addBox.value;
            setList(checkList => [...checkList, item]);
        }
    }
    return (
        <div>
            <div className="functions">
                <input type="text" id="add" className="subject" onKeyDown={enter} />
                &nbsp;
                <button onClick={addList} className="submit">Submit</button>
            </div>
            <div className="list">
                <p>Items:</p>
                {checkList.map(check => {
                    return (
                        <div>
                            {check}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default CheckList;
