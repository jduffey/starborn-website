import { colors, colorNumberMap } from './color-palette';

const BORDER_WIDTH = 10;

console.log(colors);

const allColorsAreBlack = (candidates) => {
    console.log(candidates);
    return candidates.every(candidate => {
        console.log(candidate);
        const result = candidate === colors.BLACK;
        console.log(colors.BLACK);
        console.log(result);
        return result;
    });
}

const getStrokeColor = (backgroundColor, patternColors) => {
    let strokeColor = colors.BLACK;
    if (allColorsAreBlack(patternColors)) {
        console.log('all colors are black');
        if (backgroundColor === colors.BLACK) {
            strokeColor = colors.WHITE;
        } else {
            strokeColor = backgroundColor;
        }
    }
    return strokeColor;
}

const rectangle = (x, y, width, height, fill, interiorColors) => {
    return <rect
        x={x}
        y={y}
        width={width}
        height={height}
        fill={fill}
        stroke={getStrokeColor(fill, interiorColors)}
        strokeWidth={BORDER_WIDTH}
        fillOpacity={1}
    />
}

const singleSquare = (interiorColors) => {
    return rectangle(100, 100, 200, 200, interiorColors[0], interiorColors);
}

const createTwoHorizontalBarArt = (interiorColors) => {
    return [
        rectangle(100, 100, 200, 100, interiorColors[0], interiorColors),
        rectangle(100, 200, 200, 100, interiorColors[1], interiorColors)
    ];
}

const createTwoVerticalBarArt = (interiorColors) => {
    return [
        rectangle(100, 100, 100, 200, interiorColors[0], interiorColors),
        rectangle(200, 100, 100, 200, interiorColors[1], interiorColors)
    ];
}

const createFourSquareArt = (interiorColors) => {
    return [
        rectangle(100, 100, 100, 100, interiorColors[0], interiorColors),
        rectangle(200, 100, 100, 100, interiorColors[1], interiorColors),
        rectangle(100, 200, 100, 100, interiorColors[2], interiorColors),
        rectangle(200, 200, 100, 100, interiorColors[3], interiorColors)
    ];
}

const ArtPiece = ({ backgroundColor, artStyle, interiorColors }) => {
    interiorColors = [1, 1, 1, 1];
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
