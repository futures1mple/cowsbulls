import React, { useState } from "react";
import "./Game.css";

interface GameProps {}

let ourNumber = 0;
var fullNumber = [];
var digit1 = Math.floor(Math.random() * 9) + 1;
var digit2 = Math.floor(Math.random() * 9) + 1;
while (digit1 === digit2) {
    digit2 = Math.floor(Math.random() * 9) + 1;
}
var digit3 = Math.floor(Math.random() * 9) + 1;
while (digit3 === digit1 || digit3 === digit2) {
    digit3 = Math.floor(Math.random() * 9) + 1;
}
fullNumber.push(digit1, digit2, digit3);
ourNumber = parseInt(fullNumber.join(""));

const Game: React.FC<GameProps> = () => {
    const [userNumber, setUserNumber] = useState("");
    const [numberList, setNumberList] = useState(['']);

    const generateNumber = () => {
        var fullNumber = [];
        var digit1 = Math.floor(Math.random() * 9) + 1;
        var digit2 = Math.floor(Math.random() * 9) + 1;
        while (digit1 === digit2) {
        digit2 = Math.floor(Math.random() * 9) + 1;
        }
        var digit3 = Math.floor(Math.random() * 9) + 1;
        while (digit3 === digit1 || digit3 === digit2) {
        digit3 = Math.floor(Math.random() * 9) + 1;
        }
        fullNumber.push(digit1, digit2, digit3);
        ourNumber = parseInt(fullNumber.join(""));
    };

    const numberCheck = () => {
        let son = ourNumber.toString().split("");
        let b = [];
        b = userNumber.split("");
        var cows = 0;
        var bulls = 0;
        for (var i = 0; i < 3; i++) {
            for (var j = 0; j < 3; j++) {
                if (b[i] === son[j]) {
                    cows++;
                    if (i === j) {
                        cows--;
                        bulls++;
                    }
                }
            }
        }

        setNumberList([...numberList, userNumber + " "  + " – " + " " + "cows:  " + cows + " " + "; " + " " + "bulls:  " + bulls])

        
        if (bulls === 3) {
            document.getElementById("game-board")?.classList.add("d-none");
            document.getElementById("win-banner")?.classList.remove("d-none");
        }
    };


    return (
        <div className="Game">
            <div className="container">
                <div
                id="game-board"
                className="game-board col-6 offset-3"
                style={{ flexWrap: "wrap" }}
                >
                    <div className="col-12 mb-5">
                        You can generate new number. Just push the button!
                        <button
                        onClick={() => {
                            generateNumber();
                        }}
                        className="col-12 mt-3 p-1 generate-button"
                        style={{ border: "none" }}
                        >
                        Generate
                        </button>
                    </div>
                    <div className="col-12">Enter your predicted number:</div>
                    <div className="mt-3 justify-content-between col-12">
                        <input
                            type="number col-7"
                            onChange={(e) => {
                                setUserNumber(e.target.value);
                            }}
                            className="user-input-field"
                            />
                        <button
                            className="user-button offset-1 col-4"
                            onClick={() => {
                                numberCheck();
                                console.log(numberList);
                            }}
                            >
                            Submit
                        </button>
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
                <div id='win-banner' className="win-banner d-none">
                    <div className="win-text" style={{ fontSize: "3rem" }}>
                        You win!
                    </div>
                    <button
                        className="play-again p-2 mt-3"
                        onClick={() => {
                            document.getElementById("game-board")?.classList.remove("d-none");
                            document.getElementById("win-banner")?.classList.add("d-none");
                            generateNumber();
                        }}
                    >
                        Play again!
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Game;
