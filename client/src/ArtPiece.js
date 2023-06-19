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

const singleSquare = (fillColor) => {
    return rectangle(100, 100, 200, 200, fillColor, "black");
}

const createTwoHorizontalBarArt = (fillColor) => {
    return [
        rectangle(100, 100, 200, 100, fillColor, "black"),
        rectangle(100, 200, 200, 100, fillColor, "black")
    ];
}

const createTwoVerticalBarArt = (fillColor) => {
    return [
        rectangle(100, 100, 100, 200, fillColor, "black"),
        rectangle(200, 100, 100, 200, fillColor, "black")
    ];
}

const createFourSquareArt = (fillColor) => {
    return [
        rectangle(100, 100, 100, 100, fillColor, "black"),
        rectangle(200, 100, 100, 100, fillColor, "black"),
        rectangle(100, 200, 100, 100, fillColor, "black"),
        rectangle(200, 200, 100, 100, fillColor, "black")
    ];
}

const ArtPiece = ({ backgroundColor, artStyle }) => {
    return (
        <div>
            <h2>Art Piece Placeholder</h2>
            <svg
                className="art-piece"
                style={{ backgroundColor: backgroundColor }}
            >
                {{
                    0: singleSquare("pink"),
                    1: createTwoHorizontalBarArt("pink"),
                    2: createTwoVerticalBarArt("pink"),
                    3: createFourSquareArt("pink"),
                }[artStyle]}
            </svg>
        </div>
    );
}

export default ArtPiece;
