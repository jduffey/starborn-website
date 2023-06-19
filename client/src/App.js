import React from 'react';
import ArtDigest from './ArtDigest';
import ColorPalette from './ColorPalette';
import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            artDigest: null,
        };
    }

    componentDidMount() {
        const randomHash = [...Array(64)].map(() => Math.floor(Math.random() * 16).toString(16)).join('');
        const artDigest = new ArtDigest(randomHash);
        this.setState({ artDigest });
    }

    render() {
        const { artDigest } = this.state;

        return (
            <div className="app">
                {artDigest && (
                    <div>
                        <h1>Art Digest</h1>
                        <p>Digest: {artDigest.digest}</p>
                        <p>Star Rank: {artDigest.starRank}</p>
                        <p>Art Style: {artDigest.artStyle}</p>
                        <p>Background Color: {artDigest.backgroundColor}</p>
                        <p>Interior Colors: {artDigest.interiorColors.join(', ')}</p>
                    </div>
                )}
                <ColorPalette />
            </div>
        );
    }
}

export default App;
