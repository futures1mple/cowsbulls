import React, { useState } from "react";
import "./Game.css";

interface GameProps {}

let ourNumber = 0;


var fullNumber = [];
var digit1 = Math.floor(Math.random() * 10);
while(digit1 === 0) {
    digit1 = Math.floor(Math.random() * 10);
}
var digit2 = Math.floor(Math.random() * 10);
while (digit1 === digit2) {
    digit2 = Math.floor(Math.random() * 10);
}
var digit3 = Math.floor(Math.random() * 10);
while (digit3 === digit1 || digit3 === digit2) {
    digit3 = Math.floor(Math.random() * 10);
}
var digit4 = Math.floor(Math.random() * 10);
while (digit4 === digit1 || digit4 === digit2 || digit4 === digit3) {
    digit4 = Math.floor(Math.random() * 10);
}
fullNumber.push(digit1, digit2, digit3, digit4);
ourNumber = parseInt(fullNumber.join(""));


const Game: React.FC<GameProps> = () => {
    const [ userNumber , setUserNumber ] = useState("");
    const [ numberList , setNumberList ] = useState(['']);
    const [ pace , setPace ] = useState(0);


    const validation = () => {
        let un = userNumber.toString().split("");
        let setStatus = ''
        if (un.length != 4) {
            return setStatus = 'err'
        } else if ( un[0] === '0' ) {
            return setStatus = 'err'
        } else if ( un[0] == un[1] || un[0] == un[2] || un[0] == un[3] || un[1] == un[2] || un[1] == un[3] || un[2] == un[3] ) {
            return setStatus = 'err';
        } else if ( parseInt(userNumber) <= 0 ) {
            return setStatus = 'err';
        } else {
            return setStatus = 'ok';
        }
    }
   
    const numberCheck = () => {
        let son = ourNumber.toString().split("");
        let b = [];
        b = userNumber.split("");
        var cows = 0;
        var bulls = 0;
        for (var i = 0; i < 4; i++) {
            for (var j = 0; j < 4; j++) {
                if (b[i] === son[j]) {
                    cows++;
                    if (i === j) {
                        cows--;
                        bulls++;
                    }
                }
            }
        }
        setPace(pace+1)
        setNumberList([...numberList, userNumber + " "  + " – " + " " + "cows:  " + cows + " " + "; " + " " + "bulls:  " + bulls])
        if (bulls === 4) {
            document.getElementById("game-board")?.classList.add("d-none");
            document.getElementById("win-banner")?.classList.remove("d-none");
        }
    };


    return (
        <div className="Game">
            <div className="container d-flex flex-wrap">
                <div className="row">
                    <div id="game-board" className="col-12 col-md-6 p-3" style={{height: 'inherit'}}>
                        <div className="game-board rules-container h-100">
                            <ul>
                                <li>The number to be guessed must be a 4 digit number, using only digits from 0 - 9, each digit atmost once. e.g. 1234 is valid, 0123 is not valid, 9877 is not valid, 9876 is valid.</li>
                                <li>For every guess that the player makes, he gets 2 values - the number of bulls and the number of cows. 1 bull means the guess contains and the target number have 1 digit in common, and in the correct position. 1 cow means the guess and the target have 1 digit in common, but not in correct position. e.g. Let the target be 1234. Guessing 4321 will give 0 bulls and 4 cows. 3241 will give 1 bull and 3 cows. 4 bulls means you have won the game!</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 p-3">                
                        <div
                        className="game-board"
                        style={{ flexWrap: "wrap" }}
                        >
                            <div className="col-12 mb-5">
                                You can generate new number. Just push the button!
                                <button
                                onClick={() => {
                                    // generateNumber();
                                    window.location.reload();
                                }}
                                className="col-12 mt-3 p-1 generate-button"
                                style={{ border: "none" }}
                                >
                                Generate
                                </button>
                            </div>
                            <div className="col-12">Enter your predicted number:</div>
                            <div className="mt-3 justify-content-between col-12">
                                <form onSubmit={(e) => {
                                            e.preventDefault();
                                            let statusIs = validation();
                                            if (statusIs === 'ok') {
                                                numberCheck();
                                            } else {
                                                alert('Number is wrong!!!');
                                            }
                                            setUserNumber('');
                                        }}>
                                    <input
                                        id='personal-input'
                                        type="number"
                                        onChange={(e) => {
                                            setUserNumber(e.target.value);
                                        }}
                                        className="user-input-field col-7"
                                        value={userNumber}
                                        />
                                    <button
                                        type='submit'
                                        className="user-button offset-1 col-4"
                                        >
                                        Submit
                                    </button>
                                </form>
                            </div>
                            <div className="col-6 offset-3 align-items-center mt-5">
                                <div className="col-12 text-center">Your numbers</div>
                                <div className="col-12 number-list">
                                    <ul>
                                        {numberList.map((number)=> {
                                            return(<li style={{listStyleType:'none'}}>{number}</li>)
                                        })}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div id='win-banner' className="win-banner d-none col-12 col-md-6">
                        <div className="win-text" style={{ fontSize: "3rem" }}>
                            You win!
                            <div className="pace">You did it in {pace} steps</div>
                        </div>
                        <button
                            className="play-again p-2 mt-3"
                            onClick={() => {
                                document.getElementById("game-board")?.classList.remove("d-none");
                                document.getElementById("win-banner")?.classList.add("d-none");
                                // generateNumber();
                                window.location.reload();
                            }}
                            >
                            Play again!
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Game;
