import React, { useState } from 'react';
import { createDocumentRegistry } from 'typescript';
import './checkList.css';


function CheckList() {
    const [checkList, setList] = useState(['Start of Checklist']);
    function addList(item: string) {
        setList(checkList => [...checkList, item]);
    }
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
