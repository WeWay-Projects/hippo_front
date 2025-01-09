import './scss/About.scss';
export default () => {
    return (
        <div className='About'>
            <div className='About_bg free_img'>
                <img src="/img/aboutBg.svg" alt="" />
            </div>
            <div className='About_content container'>
                <div className='About_text'>
                    $HIPPO is a community of based individuals that honours Moo Deng, an always distressed hippo that blew up as a meme.
                    <br /><br />
                    JOIN THE $HIPPO HERD 
                </div>
                <div className='About_decor'>
                    <img src="/img/aboutDecor.png" alt="" />
                </div>
            </div>
        </div>
    )
}