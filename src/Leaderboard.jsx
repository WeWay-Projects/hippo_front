import { useEffect, useState } from 'react';
import './scss/Leaderboard.scss';
import { toast } from 'react-toastify';

const apiurl = import.meta.env.VITE_API_URL;


export default ({ hide }) => {
    const [leaders, setleaders] = useState([]);
    useEffect(() => {
        fetch(`${apiurl}/user`)
            .then(response => {
                if (!response.ok) {
                    toast.warning('Something went wrong...')
                }
                return response.json(); // Парсим JSON из ответа
            })
            .then(result => {
                setleaders(result)
                //   console.log("Успешный ответ:", result);
            })
            .catch(error => {
                console.error("Err:", error);
            });
    }, [])

    return (
        <div className='Leaderboard' onClick={hide}>
            <div className='Leaderboard_inner' onClick={(e) => { e.stopPropagation() }}>
                <div className='Leaderboard_header'>
                    <div className='Leaderboard_header_text'>
                        HIPPO LEADERBOARD
                    </div>
                    <div className='Leaderboard_header_cross' onClick={hide}>
                        X
                    </div>
                </div>
                <div className='Leaderboard_list'>
                    <div className='Leaderboard_element'>
                        <div className='Leaderboard_element_rank'>
                            RANK
                        </div>
                        <div className='Leaderboard_element_name'>
                            NAME
                        </div>
                        <div className='Leaderboard_element_score'>
                            SCORE
                        </div>
                    </div>
                    {leaders.map((leader, index) => {
                        return <div className='Leaderboard_element' key={`leaders_${index}`}>
                            <div className='Leaderboard_element_rank'>
                                {index + 1}
                            </div>
                            <div className='Leaderboard_element_name'>
                                {leader.name}
                            </div>
                            <div className='Leaderboard_element_score'>
                                {leader.score}
                            </div>
                        </div>
                    })}

                </div>
            </div>
        </div>
    )
}