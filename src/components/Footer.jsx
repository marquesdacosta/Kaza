import '@styles/footer.scss';
import logoFooter from '../assets/logoFooter.png';

function Footer (){
    return(
        <footer>
            <img src={logoFooter} alt="logoFooter" />
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer