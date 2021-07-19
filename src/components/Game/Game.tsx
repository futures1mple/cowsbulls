import React, { useState } from 'react'
import './Game.css'

interface GameProps {
}

const Game: React.FC<GameProps> = () => {

    const [userNumber, setUserNumber] = useState('')

    let nubmers = {};

    let ourNumber = 0



    while (ourNumber < 100) {
        ourNumber = (Math.random() * 1000)
        ourNumber = Math.floor(ourNumber)
    }


    const numberCheck = () => {
        let a = userNumber;
        let b = [];
        b = a.split('');
        console.log(ourNumber);
        
    }

    const generateNumber = () => {
        var fullNumber = [];
        var digit1 = Math.floor(Math.random() * 9) + 1;

        var digit2 = Math.floor(Math.random() * 9) + 1;

        while (digit1 == digit2) {
            digit2 = Math.floor(Math.random() * 9) + 1;
        }

        var digit3 = Math.floor(Math.random() * 9) + 1;

        while (digit3 == digit1 && digit3 == digit2 ) {
            digit3 = Math.floor(Math.random() * 9) + 1;
        }

        fullNumber.push(digit1, digit2, digit3);

        ourNumber = parseInt(fullNumber.join(''));

        console.log(ourNumber);
    }


    return (
        <div className="Game">
            <div className="container">
                <div className="game-board col-6 offset-3" style={{flexWrap:"wrap"}}>
                    <div className="col-12 mb-5">
                        You can generate new number. Just push the button!
                        <button onClick={()=>{generateNumber()}} className="col-12 mt-3 p-1 generate-button" style={{border:"none"}}>Generate</button>
                    </div>
                    <div className='col-12'>Enter your predicted number:</div>
                    <div className="mt-3 justify-content-between col-12">
                        <input type="number col-7" onChange={(e)=>{setUserNumber(e.target.value)}} className="user-input-field" />
                        <button className="user-button offset-1 col-4" onClick={()=>{numberCheck()}}>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Game;