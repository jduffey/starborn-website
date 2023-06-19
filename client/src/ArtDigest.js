class ArtDigest {
    constructor(digest) {
        const expectedPattern = /^[A-Fa-f0-9]{64}$/;
        if (!expectedPattern.test(digest)) {
            throw new Error(`Value must match the regex of a SHA256 digest (value: ${digest}).`);
        }
        this.digest = digest;
        this.starRank = this._getStarRank(digest);
        this.artStyle = this._getArtStyle(digest);
        this.backgroundColor = this._getBackgroundColor(digest);
        this.interiorColors = this._getInteriorColors(digest);
    }

    _getStarRank(digest) {
        const first9CharsAsInt = parseInt(`0x${digest.slice(0, 9)}`);
        let starCount = 0;
        const nonZeroStarCountPossibilities = 32;
        const minPowOfTwo = 0;
        const maxPowOfTwo = minPowOfTwo + nonZeroStarCountPossibilities;
        const maxSizeOf9HexDigits = 16 ** 9;
        for (let exp = minPowOfTwo; exp < maxPowOfTwo; exp++) {
            if (first9CharsAsInt < maxSizeOf9HexDigits / (2 ** exp)) {
                starCount += 1;
            } else {
                break;
            }
        }
        return starCount;
    }

    _getArtStyle(digest) {
        // const artStyles = [
        //     "Single Square",
        //     "Two Horizontal Bars",
        //     "Two Vertical Bars",
        //     "Four Squares"
        // ];
        const artStyleDigestChar = digest[58];
        // return artStyles[parseInt(artStyleDigestChar, 16) >> 2];
        return parseInt(artStyleDigestChar, 16) >> 2;
    }

    _getBackgroundColor(digest) {
        return parseInt(digest[59], 16) % 8;
    }

    _getInteriorColors(digest) {
        const colorOptions = 8;
        const color1 = parseInt(digest[60], 16) % colorOptions;
        const color2 = parseInt(digest[61], 16) % colorOptions;
        const color3 = parseInt(digest[62], 16) % colorOptions;
        const color4 = parseInt(digest[63], 16) % colorOptions;

        return [color1, color2, color3, color4];
    }
}

export default ArtDigest;
