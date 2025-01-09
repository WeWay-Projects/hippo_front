import { makeAutoObservable } from "mobx";


class MovesStore {
    moves = '';
    currentMove = '001';
    currentMoveNum = 0;
    to = 0;


    init() {
        this.moves = generateString()
        clearTimeout(this.to)
        this.move()
    }

    move() {
        const arr = this.getMovesArray()
        this.currentMove = arr[this.currentMoveNum];
        this.currentMoveNum = this.currentMoveNum + 1;
        if (this.currentMove >= 24000) {
            this.moves = generateString()
            this.currentMove = 0;
        }
        this.to = setTimeout(() => {
            this.move()
        }, 200);
    }

    addMove(type) {
        let arr = this.getMovesArray()
        if (type === 'e') {
            for (let i = 2; i >= 1; i--) {
                arr.splice(this.currentMoveNum, 0, `e0${i}`);
            }
        } else {
            for (let i = 4; i >= 1; i--) {
                arr.splice(this.currentMoveNum, 0, `${type}0${i}`);
            }
        }
        this.moves = arr.join('')
    }

    getMovesArray() {
        return this.moves.match(new RegExp(`.{1,3}`, 'g'));
    }

    constructor() {
        makeAutoObservable(this); // Делает все свойства наблюдаемыми
    }

}
export const movesStore = new MovesStore();


const generateString = () => {
    // Создаем строку от 001 до 025
    let baseString = "";
    for (let i = 1; i <= 25; i++) {
        baseString += i.toString().padStart(3, "0");
    }

    // Повторяем строку 1000 раз
    const repeatedString = baseString.repeat(1000);

    return repeatedString;
};