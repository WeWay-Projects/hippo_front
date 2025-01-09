import { makeAutoObservable } from "mobx";
import { movesStore } from "./MovesStore";

const PERCENT_OF_NORM_TAP = 25

class GameStore {
    gameField = '';
    score = 0;
    pointsNow = false;
    lives = 3;
    msPerMove = 500;
    streak = 0;
    currentMove = 0;
    nextTikTO = 0;
    gameStopped = true;

    setPointsNow(state) {
        this.pointsNow = state
    }

    skip() {
        this.streak = 0;
    }

    tap(button) {
        if (this.gameStopped) return
        if (!['W', 'A', 'S', 'D'].includes(button)) return
        if (button != this.gameField[this.currentMove]) return this.looseTap()
        if (!this.pointsNow) return this.looseTap()
        this.streak = this.streak + 1
        this.score = this.score + Math.ceil((100 * ((this.streak / 10) ** 2)) / 10) * 10
        movesStore.addMove(button)
        return 'win'
    }

    looseTap() {
        this.streak = 0
        this.lives = this.lives - 1;
        if (this.lives < 1) this.stopGame()
        movesStore.addMove('e')
        return 'loose'
    }

    tik() {
        if (!this.gameStopped) {
            this.msPerMove = this.msPerMove - (this.msPerMove > 500 ? 4 : this.msPerMove > 400 ? 1 : this.msPerMove > 300 ? .5 : this.msPerMove > 200 ? .25 : .1)
            this.currentMove = this.currentMove + 1
            console.log(this.msPerMove);

            this.nextTikTO = setTimeout(() => {
                if (this.currentMove >= 0 && this.gameField[this.currentMove] !== '0') {
                    this.setPointsNow(true)
                }
                setTimeout(() => {
                    this.tik()
                }, this.msPerMove * (PERCENT_OF_NORM_TAP / 100));
                setTimeout(() => {
                    this.setPointsNow(false)
                }, this.msPerMove * ((PERCENT_OF_NORM_TAP / 100) * 2));
            }, this.msPerMove * (1 - PERCENT_OF_NORM_TAP / 100));
        }

    }

    stopGame() {
        clearTimeout(this.nextTikTO)
        this.gameStopped = true;
    }

    updateSpeed() {
        this.speed = this.speed + 1
    }

    constructor() {
        makeAutoObservable(this); // Делает все свойства наблюдаемыми
    }

    initGame = () => {
        this.gameField = generateRandomString(4000);
        this.score = 99;
        this.currentMove = -3;
        this.pointsNow = 0;
        this.lives = 3;
        this.msPerMove = 1000;
        this.streak = 0;
        this.gameStopped = true;
    }

    startGame = () => {
        this.initGame()
        this.gameStopped = false;
        this.tik()
    }
}

export const gameStore = new GameStore();


function generateRandomString(length) {
    const characters = ['W', 'A', 'S', 'D', '0'];
    // const characters = ['W', 'A', 'S', 'D'];
    let result = '';
    let lastChar = '';
    let repeatCount = 0;

    for (let i = 0; i < length; i++) {
        let randomChar;

        do {
            randomChar = characters[Math.floor(Math.random() * characters.length)];
        } while (randomChar === lastChar && repeatCount >= 2);

        if (randomChar === lastChar) {
            repeatCount++;
        } else {
            repeatCount = 0;
        }

        result += randomChar;
        lastChar = randomChar;
    }

    return result;
}