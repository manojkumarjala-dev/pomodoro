import React from 'react';

const Alarm = React.forwardRef((_, ref) => {
    const path = '/alarm.mp3'; // Corrected path
    return (
        <audio ref={ref} controls>
            <source src={path} type='audio/mp3'></source>
            Your browser does not support the audio element
        </audio>
    );
});

Alarm.displayName = 'Alarm';

export default Alarm;
