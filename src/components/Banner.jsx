import banner from '../assets/banner.png';
import '../styles/banner.scss';

function Banner(){
    return(
        <section className='banner'>
            <img src={banner} alt="banniere" />
                <h1 className='banner__title'>Chez vous, partout et ailleurs</h1>
        </section>
    )
}

export default Banner