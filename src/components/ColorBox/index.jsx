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
            Màu mè quá, tạo conflict
        </div>
    );
}

export default ColorBox;
