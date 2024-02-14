import Banner from "@components/Banner";
import banner_2 from '../assets/banner_2.png';
import BlocCollapse from "@components/BlocCollapse";
import text from '@datas/texte_a_propos.json';

function APropos (){


    return (
        <main>
            <Banner imageUrl={banner_2} showTitle={false}/>
            <BlocCollapse props={text} />
        </main>
    )
}

export default APropos