import Banner from "../components/Banner";
import banner_2 from '../assets/banner_2.png';
import BlocCollapse from "../components/BlocCollapse";


function APropos (){
    return (
        <main>
            <Banner imageUrl={banner_2} showTitle={false}/>
            <BlocCollapse/>
        </main>
    )
}

export default APropos