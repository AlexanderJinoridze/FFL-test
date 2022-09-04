export default function PageTitle(props) {
    return (
        <div className="page__title">
            <h1>{props.title}</h1>
            <span className="bigger-text">{props.subtitle}</span>
        </div>
    )
}