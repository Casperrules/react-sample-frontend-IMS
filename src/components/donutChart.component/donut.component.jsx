import React, {useState, useRef, useEffect} from 'react';
import ReactDOM from 'react-dom';
import drawChart from '../../lib/drawChart';

export const Chart=({data})=>{
    const ref = useRef(null);
    useEffect(() => {
        if(ref.current){
            drawChart(ref.current,data);
        }
    }, [ref,data]);
    return (
        <div className="container">
            <div className="graph" ref = {ref}></div>
        </div>
    );
}