import Collapse from "./Collapse";
import text from '../../datas/texte_a_propos.json';

function BlocCollapse() {
    return (
        <section className="bloc-collapse">
            {text.map(text => (
                <Collapse title={text.title} description={text.description} key={text.title}/>
            ))}
        </section>
    );
}

export default BlocCollapse;
