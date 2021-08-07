import React, { useState } from 'react'
import "./styles.css";

export const Content = ({emojiDataset}) => {
    const emojiList = Object.keys(emojiDataset);
    
    let answerDisplayStatus = false;
    let [answer, setAnswer] = useState("Our emoji Dataset");

    let handleInput = (event) => {
        let value = event.target.value;
        console.log(value);

        if(value){
            answerDisplayStatus = true;
            answer = emojiList.filter((emoji) => {
                console.log("emoji: ",typeof value);
                return emoji === value;
            });

            if(answer.length !== 0){
                setAnswer(emojiDataset[answer[0]]);
            }
            else{
                setAnswer("No emoji available with your input");
            }

            console.log(answer);
        }
    }

    let emojiClickHandler = (emoji) => {
        setAnswer(emojiDataset[emoji]);
    }

    return (
        <div className="mainContent">
            <input onChange={handleInput} className="emojiInput" type="text" placeholder="Enter the emoji you want to know about.."/>

            <p className="answer">{answer}</p>
            <div className="emojiList">
                { emojiList.map((emoji) => (
                    <span key={emoji} onClick={() => {return emojiClickHandler(emoji)}} className="emoji">{emoji}</span>
                ))}
            </div>
        </div>
    );
}