import React from 'react';
import './progress_bar.css'
const ProgressBar = ({label,percent}) => {
    const style={
        left:percent+'%'
    }
    const styleBg={
        width:percent+'%'
    }
    return (
        <div className="progress_bar">
            <div className="label">{label}</div>
            <div className="progress_line">
                <span className="progress_percent" style={style}>{percent}%</span>
                <span className="progress_bg" style={styleBg}/>
            </div>
        </div>
    );
};

export default ProgressBar;