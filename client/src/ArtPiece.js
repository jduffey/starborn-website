import React, { useEffect, useState } from 'react';
import ArtDigest from './ArtDigest';

function ArtPiece() {
    const [artDigest, setArtDigest] = useState(null);

    useEffect(() => {
        const randomHash = [...Array(64)].map(() => Math.floor(Math.random() * 16).toString(16)).join('');

        const art = new ArtDigest(randomHash);

        setArtDigest(art);
    }, []);

    if (!artDigest) {
        return <div>Loading...</div>;
    }

    return (
        <div className="art-piece">
            <h2>Art Piece</h2>
            <p>Star Rank: {artDigest.starRank}</p>
            <p>Art Style: {artDigest.artStyle}</p>
            <p>Background Color: {artDigest.backgroundColor}</p>
            <p>Interior Colors: {artDigest.interiorColors.join(', ')}</p>
        </div>
    );
}

export default ArtPiece;
