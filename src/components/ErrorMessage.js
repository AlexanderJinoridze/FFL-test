export default function ErrorMessage(props) {
    const { message, centered } = props;

    return (
        <>
            {
                message &&
                <div className={`error-text${centered ? " error-text--centered" : ""}`}>
                    <strong>{message}</strong>
                </div>
            }
        </>
    )
}