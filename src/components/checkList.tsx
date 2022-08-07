import React, { useState } from 'react';
import './checkList.css';


function CheckList() {
    const [checkList, setList] = useState(['Start of Checklist']);
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
                <input type="text" id="add" className="subject" />
                <button onClick={addList} className="submit">Submit</button>
            </div>
            <div className="list">
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
