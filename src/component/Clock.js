import React, { useState, useEffect, useRef } from 'react';
import classes from './Clock.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowDown,faArrowUp,faPlay,faPause,faRefresh} from '@fortawesome/free-solid-svg-icons'
import myBeep from './beep1.wav';


const  PomodoroClock=() => {
    const [breakLength, setBreakLength] = useState(5);
    const [sessionLength, setSessionLength] = useState(25);
    const [timerLabel, setTimerLabel] = useState("Session");
    const [timeLeft, setTimeLeft] = useState(sessionLength * 60);
    const [isActive, setIsActive] = useState(false);
    const [isSession, setIsSession] = useState(true);
    const [isStart, setIsStart] = useState(false);
    const [colorTimer, setColorTimer] = useState('white');
    const [isPause, setIsPause] = useState(false);

    const beep = useRef(null);




    useEffect(() => {

        let interval = null;
        if (isPause) {
            setTimeout(
                () => {
                    setIsActive(true);
                    setIsPause(false);
                    if (timeLeft === 0) {
                        if (isSession) {
                            setTimerLabel("Break");
                            setTimeLeft(breakLength * 60);

                            setIsSession(false);
                        } else {
                            setTimerLabel("Session");
                            setTimeLeft(sessionLength * 60);

                            setIsSession(true);
                        }
                    }
                }, 1000  );
        }


        if (isActive) {
            interval = setInterval(() => {

                setTimeLeft((timeLeft) => timeLeft - 1);

            }, 1000);

            if (timeLeft === 0) {
                beep.current.play();
                setColorTimer('white');
                setIsPause(true);
                setIsActive(false);



            }else {

                if (isSession) {
                    setColorTimer('blue');
                }else { setColorTimer('red');}
            }


                //
        } else {
            clearInterval(interval);

        }

        return () => clearInterval(interval);

    }, [isPause, isActive, timeLeft, breakLength, sessionLength, isSession]);
    const currentStyle ={color: 'white',background: '#a06f97'};

    const handleStartStop = () => {

                setIsActive(!isActive);

    };

    const handleReset = () => {
        beep.current.pause();
        beep.current.currentTime = 0;
        setIsActive(false);
        setIsPause(false);


        setIsSession(true);
        setTimerLabel("Session");
        setBreakLength(5);
        setSessionLength(25);
        setTimeLeft(25 * 60);
        setColorTimer('white');
    };

    const handleBreakDecrement = () => {
        if (breakLength > 1) {
            setBreakLength(breakLength - 1);
        }
    };

    const handleBreakIncrement = () => {
        if (breakLength < 60) {
            setBreakLength(breakLength + 1);
        }
    };

    const handleSessionDecrement = () => {
        if (sessionLength > 1) {
            setSessionLength(sessionLength - 1);
            setTimeLeft((sessionLength - 1) * 60);
        }
    };

    const handleSessionIncrement = () => {
        if (sessionLength < 60) {
            setSessionLength(sessionLength + 1);
            setTimeLeft((sessionLength + 1) * 60);
        }
    };

    const formatTime = (time) => {
        let minutes = Math.floor(time / 60);
        let seconds = time % 60;
        return (
            (minutes < 10 ? "0" + minutes : minutes) +
            ":" +
            (seconds < 10 ? "0" + seconds : seconds)
        );
    };



    return (
        <div id="container" className={classes.container}>
            <div id="app">
                <div>
                    <div className={classes.mainTitle}>25 + 5 Clock</div>
                    <div className={classes.lengthControl}>
                        <div id="break-label">Break Length</div>
                        <button className={classes.btnLevel} id="break-decrement" value="-" onClick={handleBreakDecrement}>
                             <FontAwesomeIcon icon={faArrowDown} size="1x" style={currentStyle} />

                        </button>
                        <div className={classes.btnLevel} id="break-length">{breakLength}</div>
                        <button className={classes.btnLevel} id="break-increment" value="+" onClick={handleBreakIncrement}>
                             <FontAwesomeIcon icon={faArrowUp} size="1x" style={currentStyle}/>
                        </button>
                    </div>
                    <div className={classes.lengthControl}>
                        <div id="session-label">Session Length</div>
                        <button className={classes.btnLevel} id="session-decrement" value="-" onClick={handleSessionDecrement}>
                             <FontAwesomeIcon icon={faArrowDown} size="1x" style={currentStyle}/>
                        </button>
                        <div className={classes.btnLevel} id="session-length">{sessionLength}</div>
                        <button className={classes.btnLevel} id="session-increment" value="+" onClick={handleSessionIncrement}>
                               <FontAwesomeIcon icon={faArrowUp} size="1x" style={currentStyle}/>
                        </button>
                    </div>
                    <div className={classes.timer} >
                        <div className={classes.timerWrapper} style={{color: colorTimer}}>
                            <div id="timer-label">{timerLabel}</div>
                            <div id="time-left" className={classes.timerLeft}> {formatTime(timeLeft)}</div>
                        </div>
                    </div>
                    <div className={classes.timerControl}>
                        <button id="start_stop" onClick={handleStartStop}>
                            <FontAwesomeIcon icon={faPlay} size="1x" style={currentStyle}/>
                            <FontAwesomeIcon icon={faPause} size="1x" style={currentStyle}/>
                         </button>
                        <button id="reset" onClick={handleReset}>
                             <FontAwesomeIcon icon={faRefresh} size="1x" style={currentStyle}/>
                        </button>
                    </div>
                    <div className={classes.author}> Designed and Coded by
                        <a href="https://goo.gl/6NNLMG" target="_blank"> Ruslana Chaika</a></div>



                    <audio id="beep" ref={beep} preload="auto" src={myBeep}></audio>


                </div>
            </div>
        </div>
        );
    }
    export default PomodoroClock;