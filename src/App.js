import { useState } from 'react';
import Background from './components/Background';
import Board from './components/Board';
import Settings from './components/Settings';

// const BASE_URL = 'https://api.flaticon.com/v3/app/authentication';

function App() {
    const [gameOptions, setGameOptions] = useState(null);

    const initializeGame = (options) => {
        setGameOptions(options);
    };

    const restartGame = () => {
        setGameOptions(null);
    };

    return (
        <>
            <Background />
            <h1>Memory Game</h1>
            {!gameOptions ? <Settings initializeGame={initializeGame} /> : <Board gameOptions={gameOptions}
                restartGame={restartGame} />}
        </>
    );
}

export default App;
























    ////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////// API I WANTED TO ACTUALLY USE BUT COULDN'T FIGURE OUT ///////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////

    // #1
    // fetch(BASE_URL, {
    //     method: "POST",
    //     headers: {
    //         'Content-Type':'multipart/form-data',
    //         'Accept':'application/json',
    //     },
    //     body: {Bearer: '2669a400ef5bdaf9bebe3746f9a696a6a01a714b'}
    // });


    // #2
    // const encodedParams = new URLSearchParams();
    // encodedParams.append("apikey", "17f66a5c6bbc154a10b154b2b05b8cfea5a7b612");
    // const options = {
    //     method: 'POST',
    //     headers: {
    //         'content-type': 'application/x-www-form-urlencoded',
    //         'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
    //         'X-RapidAPI-Host': 'flaticon.p.rapidapi.com'
    //     },
    //     body: encodedParams
    // };
    // fetch('https://flaticon.p.rapidapi.com/app/authentication', options)
    //     .then(response => response.json())
    //     .then(response => console.log(response))
    //     .catch(err => console.error(err));


    // #3
    // const headers = {
    //     'Content-Type': 'application/json',
    //     Authorization: 'Bearer bcc91462e4771bee25082caa510f6f9d85545062'
    // };
    // fetch({
    //     url: 'https://api.flaticon.com/v3/search/icons/{orderBy}',
    //     method: 'get',
    //     data: '?q=string',
    //     headers: headers,
    //     success: function (data) {
    //         console.log(JSON.stringify(data));
    //     }
    // });


    // #4
    // const headers = {
    //     'Content-Type': 'multipart/form-data',
    //     'Accept': 'application/json',
    //     "Authorization": 'Bearer d67085d228c34084e0bb597629d300a4d606a880'
    // };
    // fetch({
    //     url: 'https://api.flaticon.com/v3/app/authentication',
    //     method: "POST",
    //     headers: headers,
    //     success: function (data) {
    //         console.log(JSON.stringify(data));
    //     },
    //     body: 'd67085d228c34084e0bb597629d300a4d606a880'
    // });
