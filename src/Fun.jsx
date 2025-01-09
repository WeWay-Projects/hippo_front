import './scss/Fun.scss';
export default () => {
    return (
        <div className='Fun'>
            <div className='Fun_bg free_img'>
                <img src="/img/funBg.svg" alt="" />
            </div>
            <div className='Fun_content'>
                <div className='Fun_text'>
                    <div className='Fun_text_header'>
                        Welcome to HipHop Fun!
                    </div>
                    <a href='https://www.hiphop.fun/' target='_blank' className='Fun_text_btn BTN BTN_white'>
                        <span>
                            HipHop.Fun
                        </span>
                        <div className='circle free_img'>
                            <div className="circle_inner"></div>
                        </div>
                    </a>
                </div>
                <div className='Fun_decor free_img'>
                    <img src="/img/skate.png" alt="" />
                </div>
            </div>
        </div>
    )
}