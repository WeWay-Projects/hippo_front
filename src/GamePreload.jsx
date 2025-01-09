export default () => {
    return (
        <>
            {Array(25)
                .fill(0)
                .map((_, index) => {
                    const curstr = (index + 1).toString().padStart(3, "0");

                    return <div key={`Preload-${index}`} className='Game_decor_hippo_preload free_img'>
                        <img src={`/img/dance/${curstr}.png`} alt="" />
                        {index === 0 && <img src={`/img/dance/e01.png`} alt="" />}
                        {index === 1 && <img src={`/img/dance/e02.png`} alt="" />}
                        {index === 0 && <img src={`/img/dance/W01.png`} alt="" />}
                        {index === 1 && <img src={`/img/dance/W02.png`} alt="" />}
                        {index === 2 && <img src={`/img/dance/W03.png`} alt="" />}
                        {index === 3 && <img src={`/img/dance/W04.png`} alt="" />}
                        {index === 0 && <img src={`/img/dance/A01.png`} alt="" />}
                        {index === 1 && <img src={`/img/dance/A02.png`} alt="" />}
                        {index === 2 && <img src={`/img/dance/A03.png`} alt="" />}
                        {index === 3 && <img src={`/img/dance/A04.png`} alt="" />}
                        {index === 0 && <img src={`/img/dance/S01.png`} alt="" />}
                        {index === 1 && <img src={`/img/dance/S02.png`} alt="" />}
                        {index === 2 && <img src={`/img/dance/S03.png`} alt="" />}
                        {index === 3 && <img src={`/img/dance/S04.png`} alt="" />}
                        {index === 0 && <img src={`/img/dance/D01.png`} alt="" />}
                        {index === 1 && <img src={`/img/dance/D02.png`} alt="" />}
                        {index === 2 && <img src={`/img/dance/D03.png`} alt="" />}
                        {index === 3 && <img src={`/img/dance/D04.png`} alt="" />}
                    </div>
                })}
        </>
    )
}