import { colors, colorNumberMap } from './color-palette';

const BORDER_WIDTH = 10;

const rectangle = (x, y, width, height, fill, stroke) => {
    return <rect
        x={x}
        y={y}
        width={width}
        height={height}
        fill={fill}
        stroke={stroke}
        strokeWidth={BORDER_WIDTH}
        fillOpacity={1}
    />
}

const singleSquare = (interiorColors) => {
    return rectangle(100, 100, 200, 200, interiorColors[0], "black");
}

const createTwoHorizontalBarArt = (interiorColors) => {
    return [
        rectangle(100, 100, 200, 100, interiorColors[0], "black"),
        rectangle(100, 200, 200, 100, interiorColors[1], "black")
    ];
}

const createTwoVerticalBarArt = (interiorColors) => {
    return [
        rectangle(100, 100, 100, 200, interiorColors[0], "black"),
        rectangle(200, 100, 100, 200, interiorColors[1], "black")
    ];
}

const createFourSquareArt = (interiorColors) => {
    return [
        rectangle(100, 100, 100, 100, interiorColors[0], "black"),
        rectangle(200, 100, 100, 100, interiorColors[1], "black"),
        rectangle(100, 200, 100, 100, interiorColors[2], "black"),
        rectangle(200, 200, 100, 100, interiorColors[3], "black")
    ];
}

const ArtPiece = ({ backgroundColor, artStyle, interiorColors }) => {
    const mappedColors = interiorColors.map(colorNumber => colors[colorNumberMap[colorNumber]]);

    return (
        <div>
            <h2>Art Piece Placeholder</h2>
            <svg
                className="art-piece"
                style={{ backgroundColor: backgroundColor }}
            >
                {{
                    0: singleSquare(mappedColors),
                    1: createTwoHorizontalBarArt(mappedColors),
                    2: createTwoVerticalBarArt(mappedColors),
                    3: createFourSquareArt(mappedColors),
                }[artStyle]}
            </svg>
        </div>
    );
}

export default ArtPiece;
