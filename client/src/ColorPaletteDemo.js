import React from 'react';
import { colors } from './color-palette';

const ColorPaletteDemo = () => {
    const orderOfDisplay = ['WHITE', 'BLACK', 'RED', 'ORANGE', 'YELLOW', 'GREEN', 'BLUE', 'PURPLE'];

    return (
        <div>
            <h2>Color Palette</h2>
            <div className="color-palette">
                {orderOfDisplay.map((color) => (
                    <div
                        key={color}
                        className="color-box"
                        style={{ backgroundColor: colors[color] }}
                    ></div>
                ))}
            </div>
        </div>
    );
};

export default ColorPaletteDemo;