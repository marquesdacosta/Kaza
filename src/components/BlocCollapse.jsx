import Collapse from "@components/Collapse";

function BlocCollapse({ props }) {
    return (
        <section className="bloc-collapse">
            {props.map((item, index) => (
                <Collapse title={item.title} description={item.description} key={index} />
            ))}
        </section>
    );
}

export default BlocCollapse;
