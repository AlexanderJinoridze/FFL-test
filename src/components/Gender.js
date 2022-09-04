import PageTitle from "./PageTitle";
import ErrorMessage from "./ErrorMessage";

export default function Gender(props) {
    const { onChange, error } = props;

    return (
        <>
            <PageTitle title="Gender" subtitle="Select your sex" />
            <div className="radio-form" onChange={onChange}>
                <div className="radio-panel">
                    <input autoFocus type="radio" id="male" value="male" name="gender" />
                    <label htmlFor="male">
                        <div className="radio-panel__front gender-button">
                            <div className="gender-button__icon gender-button__icon--male"></div>
                            <h2 className="radio-panel__title">Male</h2>
                        </div>
                    </label>
                </div>
                <div className="radio-panel">
                    <input type="radio" id="female" value="female" name="gender" />
                    <label htmlFor="female">
                        <div className="radio-panel__front gender-button">
                            <div className="gender-button__icon gender-button__icon--female"></div>
                            <h2 className="radio-panel__title">Female</h2>
                        </div>
                    </label>
                </div>
            </div>
            <ErrorMessage message={error} centered={true} />
        </>
    )
}