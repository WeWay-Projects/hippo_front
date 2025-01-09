import './scss/Footer.scss';
export default () => {
    return (
        <div className='Footer'>
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
    )
}