import { useState } from 'react';
import './EnterName.scss';
import { gameStore } from './GameStore';
import { toast } from 'react-toastify';
import { observer } from 'mobx-react';

const apiurl = import.meta.env.VITE_API_URL;


export default observer(({ hide }) => {
    const [name, setname] = useState('');

    const encrypt = (data) => {
        const jsonString = JSON.stringify(data);
        const base64String = btoa(jsonString);
        return base64String.split('').reverse().join('');
    }

    const sendStat = async () => {
        const data = {
            name: name,
            score: gameStore.score
        };
        const encryptedData = encrypt(data)

        // Отправка POST-запроса
        fetch(`${apiurl}/user`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json" // Указываем тип содержимого
            },
            body: JSON.stringify({ data: encryptedData }) // Преобразуем объект в JSON
        })
            .then(response => {
                if (!response.ok) {
                    toast.warning('Something went wrong...')
                    // throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json(); // Парсим JSON из ответа
            })
            .then(result => {
                toast.success('Result sent!')
                localStorage.setItem('topscore', gameStore.score)
                hide()
            })
            .catch(error => {
                toast.warning('Something went wrong...')
                console.error("Ошибка:", error);
            });
    }

    return (
        <div className='EnterName' onClick={hide}>
            <div className='EnterName_inner' onClick={(e) => {
                e.stopPropagation()
            }}>
                <div className='EnterName_closer free_img'>
                    <div className='EnterName_closer_inner' onClick={hide}>
                        X
                    </div>
                </div>
                <div className='EnterName_content'>
                    <div className='EnterName_decor'>
                        <img src="/img/enterName.png" alt="" />
                    </div>
                    <div className='EnterName_info'>
                        <div className='EnterName_text'>
                            Nice try! Do you want to immortalize your score?
                        </div>
                        <div className='EnterName_controls'>
                            <input type="text" placeholder='Your name..' value={name} onChange={(e) => { setname(e.target.value) }} />
                            <div className='EnterName_controls_btn BTN BTN_white' onClick={sendStat}>
                                <span>
                                    -&gt;
                                </span>
                                <div className='circle free_img'>
                                    <div className="circle_inner"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
})