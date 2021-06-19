import React, { useState } from 'react';

ColorBox.propTypes = {

};

function ColorBox(props) {
    const [color, setColor] = useState('pink');
    return (
        <div
            className='color-box'
            style={{ backgroundColor: color }}
        >
            Màu mè quá
        </div>
    );
}

export default ColorBox;
