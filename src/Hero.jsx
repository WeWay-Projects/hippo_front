import { toast } from 'react-toastify';
import './Hero.scss';
export default () => {

    const copyCa = () => {

        navigator.clipboard.writeText('0x8993129d72e733985f7f1a00396cbd055bad6f817fee36576ce483c8bbb8b87b')
            .then(() => {
                toast.success('Successfully copied!')
            })
            .catch(err => {
                console.error("Err: ", err);
            });
    }

    return (
        <div className='Hero'>
            <div className='Hero_header'>
                <a href='https://x.com/hippo_cto' target='_blank' className='Hero_header_element BTN'>
                    <img src="/img/x.svg" alt="" />
                    <div className='circle free_img'>
                        <div className="circle_inner"></div>
                    </div>
                </a>
                <a href='https://t.me/HIPPO_SUI' target='_blank' className='Hero_header_element BTN'>
                    <img src="/img/tg.svg" alt="" />
                    <div className='circle free_img'>
                        <div className="circle_inner"></div>
                    </div>
                </a>
            </div>
            <div className='Hero_content'>
                <img src="/img/heroDecor.png" alt="" />
            </div>
            <div className='Hero_buttons'>
                <a className='Hero_button BTN BTN_white' href='https://app.cetus.zone/swap?from=0x2::sui::SUI&to=0x8993129d72e733985f7f1a00396cbd055bad6f817fee36576ce483c8bbb8b87b::sudeng::SUDENG' target='blank'>
                    <span>
                        buy $HIPPO now
                    </span>
                    <div className='circle free_img'>
                        <div className="circle_inner"></div>
                    </div>
                </a>
                <div className='Hero_button BTN' onClick={copyCa}>
                    <span>
                        CA
                    </span>
                    <div className='circle free_img'>
                        <div className="circle_inner"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}