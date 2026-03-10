
export default function Card(props) {

    const { children } = props;

    return (
        <div className={`card ${props.class}`} style={{ gridArea: props.grid}}>
            <div className="title-container">
                <i className={`icon ${props.icon}`}></i>
                <p className="card-title">{props.title}</p>
            </div>
            <div className="card-description-container">
                <span className="description">{props.description}</span>
            </div>

            { children }
        </div>
    )
}