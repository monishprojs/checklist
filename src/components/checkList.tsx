import React, { useState } from 'react';
import './checkList.css';


function CheckList() {
    const [checkList, setList] = useState(['Follow Me on GitHub']);
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
            if (item != "") {
                setList(checkList => [...checkList, item]);
            }
        }
    }

    function removeList(index: number) {
        setList(checkList => [...checkList.splice(index, 1)]);
    }

    return (
        <div>
            <div className="functions">
                <input type="text" id="add" className="subject" onKeyDown={enter} />
                &nbsp;
                <button onClick={addList} className="submit">Add</button>
            </div>
            <div className="list">
                <p>Items:</p>
                {checkList.map((check, index) => {
                    return (
                        <div>
                            {check}
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
