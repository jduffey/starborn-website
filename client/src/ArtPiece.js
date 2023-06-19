const BORDER_WIDTH = 10;

const singleSquare = (fillColor) => {
    return <rect
        x={100}
        y={100}
        width={200}
        height={200}
        fill={fillColor}
        stroke={"black"}
        strokeWidth={BORDER_WIDTH}
        fillOpacity={1}
    />
}

const ArtPiece = ({ backgroundColor }) => {
    return (
        <div>
            <h2>Art Piece Placeholder</h2>
            <svg
                className="art-piece"
                style={{ backgroundColor: backgroundColor }}
            >
                {singleSquare("pink")}
            </svg>
        </div>
    );
}

export default ArtPiece;
