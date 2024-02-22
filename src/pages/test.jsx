import Card from "@components/Card"
import RatingStars from "@components/RatingStars"
import TagsRating from "@components/TagsRating"
import Tags from "@components/Tags"
import InfoTitle from "../components/InfoTitle"
import etoile from "../assets/etoile_pleine.png"
import InfoHost from "../components/InfoHost"
import InfoLogement from "../components/InfoLogement"
import DescEquip from "@components/DescEquip"
import Collapse from "../components/Collapse"
import BlocCollapse from "../components/BlocCollapse"
import logement from "@datas/logements.json"

function Test() {

    const tags = ['tag1', 'tag2' , 'tag3'] // obliger d'avoir un tableau car tags utiliser .map 
    const data = {
        host: {
            name: 'Bernard',
            picture: etoile, 
        },
    };
    
    const otherdata = [
    { title: 'Titre 1', description: 'Description 1' },
    { title: 'Titre 2', description: 'Description 2' },
    { title: 'Titre 3', description: 'Description 3' }
];

    return (
        <div>
            <Tags tags={tags}/>
            <RatingStars rating={4} />
            <TagsRating rating={5} tags={tags}/>
            <InfoTitle title={'titre'} location={'location'} />
            <InfoHost name={'lenom'} picture={etoile}/>
            <DescEquip title1={'titre1'} title2={'titre2'} description={'desc'} equipments={['equip1', 'equip2', 'equip3']}/>
            <InfoLogement                 
                title={'logementData.title'}
                location={'logementData.location'}
                host={data.host}
                tags={['valeurtag1','valeurtag2','valeurtag3']}
                rating={'logementData.rating'}
                description={'logementData.description'}
                equipments={['premiervalue', 'deuxiemevalue','troisiemevalue']}/> {/* obliger d'avoir un tableau car equipment utiliser .join */}
            <Collapse title={'titrecollapse'} description={'descriptioncollapse'}/>
            <BlocCollapse props={otherdata}/>
            <Card  title={'logement.title'} imageUrl={etoile} link={`/*`} />
        </div>
    )
}

export default Test