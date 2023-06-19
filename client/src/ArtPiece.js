const ArtPiece = ({ backgroundColor }) => {
    const BORDER_WIDTH = 10;
    return (
        <div>
            <h2>Art Piece Placeholder</h2>
            <svg
                className="art-piece"
                style={{ backgroundColor: backgroundColor }}
            >
                <rect
                    x={100}
                    y={100}
                    width={200}
                    height={200}
                    fill={"pink"}
                    stroke={"black"}
                    strokeWidth={BORDER_WIDTH}
                    fillOpacity={1}
                />
            </svg>
        </div>
    );
}

export default ArtPiece;
