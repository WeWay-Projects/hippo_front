import { useEffect, useState } from 'react';
import './scss/Counter.scss';
export default () => {
    const [num, setnum] = useState(3);
    useEffect(() => {
        setTimeout(() => {
            setnum(2)
        }, 1000);
        setTimeout(() => {
            setnum(1)
        }, 2000);
        setTimeout(() => {
            setnum('Start!')
        }, 3000);
    }, [])

    return (
        <div className='Counter'>
            {num}
        </div>
    )
}