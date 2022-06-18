import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
const Progress = () => {
    const now = 68;
    const now1 = 77;
    const now2 = 51;
    const p = 'our skill'

    return (

        <div className='p-3 w-75'>

            <ProgressBar className='mb-3' now={now} variant="primary" label={`${p} ${now}%`} />
            <ProgressBar className='mb-3' now={now1} variant="info" label={`${p} ${now1}%`} />
            <ProgressBar className='mb-3' now={now2} variant="success" label={`${p} ${now2}%`} />
        </div>
    );
};

export default Progress;