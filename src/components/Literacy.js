import PageTitle from "./PageTitle";
import ErrorMessage from "./ErrorMessage";

export default function Literacy(props) {
    const { onChange, error } = props;

    return (
        <>
            <PageTitle title="Literacy" subtitle="Are you able to read and write on your native language?" />
            <div className="radio-form" onChange={onChange}>
                <div className="radio-panel">
                    <input autoFocus type="radio" id="yes" value="yes" name="literacy" />
                    <label htmlFor="yes">
                        <div className="radio-panel__front">
                            <h2 className="radio-panel__title">Yes</h2>
                        </div>
                    </label>
                </div>
                <div className="radio-panel">
                    <input type="radio" id="no" value="no" name="literacy" />
                    <label htmlFor="no">
                        <div className="radio-panel__front">
                            <h2 className="radio-panel__title">No</h2>
                        </div>
                    </label>
                </div>
            </div>
            <ErrorMessage message={error} centered={true} />
        </>
    )
}