import { useEffect, useState } from 'react';
import './scss/Game.scss';
import { gameStore } from './GameStore';
import { movesStore } from './MovesStore';
import { observer } from 'mobx-react';
import GamePreload from './GamePreload';
import Counter from './Counter';
import Leaderboard from './Leaderboard';
import EnterName from './EnterName.jsx';

const ELEMENTS_PER_MOMENT = 50

export default observer(() => {
    const [tapFeedback, settapFeedback] = useState(0);
    const [showCounter, setshowCounter] = useState(false);
    const [showEnterName, setshowEnterName] = useState(false);
    const [showLB, setshowLB] = useState(false);

    let tfTO
    const handleKeyPress = (event) => {
        const pressedKey = event.key.toUpperCase();
        const tf = gameStore.tap(pressedKey)
        clearTimeout(tfTO)
        if (tf === 'win') {
            settapFeedback(1)
        } else {
            settapFeedback(-1)
        }
        tfTO = setTimeout(() => {
            settapFeedback(0)
        }, 500);
    };
    useEffect(() => {
        gameStore.initGame()
        // gameStore.startGame()
        movesStore.init()
        window.addEventListener('keydown', handleKeyPress);

        return () => {
            window.removeEventListener('keydown', handleKeyPress);
            gameStore.stopGame()
        }
    }, [])


    useEffect(() => {
        const oldTop = localStorage.getItem('topscore') || 0
        if (gameStore.score > oldTop) {
            if (gameStore.gameStopped && gameStore.score) {
                setshowEnterName(true)
            }
        }
    }, [gameStore.gameStopped])


    return (
        <div className='Game'>
            {
                showCounter && <Counter />
            }
            {
                showEnterName && <EnterName hide={() => { setshowEnterName(false) }} />
            }
            {
                showLB && <Leaderboard hide={() => { setshowLB(false) }} />
            }
            <div className='Game_field'>
                <div className='Game_field_elements free_img' style={{
                    opacity: gameStore.gameStopped ? 0 : 1
                }}>
                    {Array(5000)
                        .fill(0)
                        .map((_, index) => {
                            if (index - ELEMENTS_PER_MOMENT / 2 < gameStore.currentMove && index + ELEMENTS_PER_MOMENT / 2 > gameStore.currentMove && gameStore.gameField[index] !== '0') {
                                return <div className='Game_field_element free_img' key={`el-${index}`} style={{
                                    transform: `translate(${-(index - gameStore.currentMove) * 100}px, 0px)`,
                                    transition: `transform ${gameStore.msPerMove}ms linear`
                                }}>
                                    <div className='Game_field_element_inner' style={{
                                        scale: index === gameStore.currentMove ? 1.5 : 1
                                    }}>
                                        {
                                            gameStore.gameField[index]
                                            // index === gameStore.currentMove && 'meow'
                                        }
                                    </div>
                                </div>
                            }
                        })}
                </div>
                <div className='Game_field_decor_line Game_field_decor_top free_img'>
                    <div className="Game_field_decor_line_inner"></div>
                </div>
                <div className='Game_field_decor_line Game_field_decor_bot free_img'>
                    <div className="Game_field_decor_line_inner"></div>
                </div>
                <div className='Game_field_decor_square free_img'>
                    <div className={`Game_field_decor_square_inner 
                        ${tapFeedback === 1 && 'Game_field_decor_square_inner_win'} 
                        ${tapFeedback === -1 && 'Game_field_decor_square_inner_loose'}  
                        `} ></div>
                    {/* ${gameStore.pointsNow && 'Game_field_decor_square_inner_win'} */}
                </div>
            </div>
            <div className='Game_controls container'>
                <div className='Game_controls_group'>
                    <div className='Game_controls_lives'>
                        <img src={gameStore.lives >= 1 ? `/img/heart.svg` : '/img/heartBroken.svg'} alt="" />
                        <img src={gameStore.lives >= 2 ? `/img/heart.svg` : '/img/heartBroken.svg'} alt="" />
                        <img src={gameStore.lives >= 3 ? `/img/heart.svg` : '/img/heartBroken.svg'} alt="" />
                        {/* LIVES: {gameStore.lives} */}
                    </div>
                    <div className='Game_controls_el Game_controls_el_score'>
                        SCORE: {gameStore.score} {gameStore.streak > 0 && <><br /> {gameStore.streak} in row!</>}
                    </div>
                </div>
                <div className='Game_controls_lb BTN' onClick={() => {
                    setshowLB(true)
                }}>
                    <span>
                        LEADERBOARD
                    </span>
                    <div className='circle free_img'>
                        <div className="circle_inner"></div>
                    </div>
                </div>
            </div>
            <div className='Game_decor'>
                <div className='Game_decor_hippo free_img '>
                    <GamePreload />
                    <img src={`/img/dance/${movesStore.currentMove}.png`} alt="" />
                </div>
                <div className='Game_decor_controls'>
                    <div className='Game_decor_controls_buttons'>
                        <div className='Game_decor_controls_buttons_bg free_img'>
                            <img src="/img/buttonsBg.svg" alt="" />
                        </div>
                        <div className='Game_decor_controls_buttons_w'>
                            <div className={`Game_decor_controls_buttons_el BTN`} onClick={() => {
                                handleKeyPress({ key: 'W' })
                            }}>
                                <span>
                                    W
                                </span>
                                <div className='circle free_img'>
                                    <div className="circle_inner"></div>
                                </div>
                            </div>
                        </div>
                        <div className='Game_decor_controls_buttons_asd'>
                            <div className={`Game_decor_controls_buttons_el BTN`} onClick={() => {
                                handleKeyPress({ key: 'A' })
                            }}>
                                <span>
                                    A
                                </span>
                                <div className='circle free_img'>
                                    <div className="circle_inner"></div>
                                </div>
                            </div>
                            <div className={`Game_decor_controls_buttons_el BTN`} onClick={() => {
                                handleKeyPress({ key: 'S' })
                            }}>
                                <span>
                                    S
                                </span>
                                <div className='circle free_img'>
                                    <div className="circle_inner"></div>
                                </div>
                            </div>
                            <div className={`Game_decor_controls_buttons_el BTN`} onClick={() => {
                                handleKeyPress({ key: 'D' })
                            }}>
                                <span>
                                    D
                                </span>
                                <div className='circle free_img'>
                                    <div className="circle_inner"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='Game_decor_controls_start'>
                        <div className='Game_decor_controls_start_inner BTN BTN_white' onClick={() => {
                            setshowCounter(true)
                            setTimeout(() => {
                                gameStore.startGame()
                                setshowCounter(false)
                            }, 4000);
                        }}>
                            <span>
                                START
                            </span>
                            <div className='circle free_img'>
                                <div className="circle_inner"></div>
                            </div>

                        </div>
                    </div>
                    <div className='Game_controls_lb Game_controls_lb_mob BTN' onClick={() => {
                        setshowLB(true)
                    }}>
                        <span>
                            LEADERBOARD
                        </span>
                        <div className='circle free_img'>
                            <div className="circle_inner"></div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
})