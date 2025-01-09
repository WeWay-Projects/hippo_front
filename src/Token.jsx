import './scss/Token.scss';
export default () => {
    return (
        <div className='Token container'>
            <div className='Token_sui'>
                <div className='Token_sui_text'>
                    $HIPPO is a native Sui meme — we're proud to be part of an ecosystem that's destined to lead
                </div>
                <div className='Token_sui_img'>
                    <img src="/img/surf.png" alt="" />
                </div>
            </div>
            <div className='Token_bg free_img'>
                <img src="/img/tokenBg.svg" alt="" />
            </div>
            <div className='Token_content'>
                <div className='Token_header'>
                    A community token on
                    <div className="Token_header_img free_img">
                        <img src="/img/sui.png" alt="" />
                    </div>
                    SUI
                </div>
                <div className='Token_btns'>
                    <a href='https://www.binance.com/en/futures/HIPPOUSDT' className='Token_btn BTN BTN_white'>
                        <span>
                            LISTED ON BINANCE
                        </span>
                        <div className='circle free_img'>
                            <div className="circle_inner"></div>
                        </div>
                    </a>
                    <a href='https://dexscreener.com/sui/0xb785e6eed355c1f8367c06d2b0cb9303ab167f8359a129bb003891ee54c6fce0?__cf_chl_tk=8NNwOG0omDBYXVQ.lGZRIB9aZoX3VuenN..mlztBiPs-1728211851-0.0.1.1-6015' className='Token_btn BTN BTN_white'>
                        <span>
                            DEXSCREENER
                        </span>
                        <div className='circle free_img'>
                            <div className="circle_inner"></div>
                        </div>
                    </a>
                    <a href='https://coinmarketcap.com/currencies/sudeng/' className='Token_btn BTN BTN_white'>
                        <span>
                            CMC
                        </span>
                        <div className='circle free_img'>
                            <div className="circle_inner"></div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}