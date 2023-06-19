import React from 'react';

const ColorPalette = () => {
    const colors = [
        { name: 'WHITE', value: '#FFFFFF' },
        { name: 'BLACK', value: '#000000' },
        { name: 'RED', value: '#FF0000' },
        { name: 'ORANGE', value: '#FF7F00' },
        { name: 'YELLOW', value: '#FFFF00' },
        { name: 'GREEN', value: '#00FF00' },
        { name: 'BLUE', value: '#0000FF' },
        { name: 'PURPLE', value: '#6A0DAD' },
    ];

    return (
        <div>
            <h2>Color Palette</h2>
            <div className="color-palette">
                {colors.map((color) => (
                    <div
                        key={color.name}
                        className="color-box"
                        style={{ backgroundColor: color.value }}
                    ></div>
                ))}
            </div>
        </div>
    );
};

export default ColorPalette;