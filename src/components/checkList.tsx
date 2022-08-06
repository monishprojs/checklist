import React, { useState } from 'react';
import './checkList.css';


function CheckList() {
    const [checkList, setList] = useState(['Start of Checklist']);
    return (
        <div className="list">
            {checkList.map(check => {
                return (
                    <div>
                        {check}
                    </div>
                );
            })}
        </div>
    );
}

export default CheckList;
