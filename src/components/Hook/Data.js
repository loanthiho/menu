
import { useState } from 'react';

function Data() {
    const [data,setdata]=useState({
        cps:12,
        td:10,
        tt:8,
        ts:2
    });
        return (
            <div>
                <h1>Menu</h1>
                <p>Ca fe sua{data.cps}</p>
                <p>Tra dao{data.td}</p>
                <p>Tra tac{data.tt}</p>
                <p>Tra sua{data.ts}</p>
            </div>
        );
    }


export default data;