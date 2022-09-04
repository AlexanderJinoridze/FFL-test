import PageTitle from "./PageTitle";
import ErrorMessage from "./ErrorMessage";

export default function Age(props) {
    const { value, error, onInput } = props;

    return (
        <>
            <PageTitle title="Age" subtitle="How old are you?" />
            <div className="input-form">
                <div className="input">
                    <input
                        autoFocus
                        type="text"
                        id="age"
                        name="age"
                        pattern="[0-9]*"
                        onInput={onInput}
                        value={value}
                    />
                    <h3 className="input__suffix">YEARS</h3>
                </div>
            </div>
            <ErrorMessage message={error} />
        </>
    )
}