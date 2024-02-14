import '@styles/banner.scss';

function Banner ({ imageUrl, showTitle }){
    return(
        <section className='banner'>
            <img src={imageUrl} alt="banniere" />
                {showTitle && <h1 className='banner__title'>Chez vous, partout et ailleurs</h1>}
        </section>
    )
}

export default Banner