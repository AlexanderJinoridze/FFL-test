import PageTitle from "./PageTitle";
import ErrorMessage from "./ErrorMessage";

export default function BMI(props) {
    const { values, errors, onInput } = props;

    const { height: heightValue, weight: weightValue } = values;
    const { height: heightError, weight: weightError } = errors;

    return (
        <>
            <PageTitle title="Body Mass Index" subtitle="Enter your height and weight to calculate your body mass index" />
            <div className="input-form">
                <label htmlFor="height">
                    <h3>Height</h3>
                    <span className="larger-text">What is your height in centimeters?</span>
                </label>
                <div className="input">
                    <input
                        autoFocus
                        type="text"
                        id="height"
                        name="height"
                        pattern="[0-9]*"
                        onInput={onInput}
                        value={heightValue}
                    />
                    <h3 className="input__suffix">CM</h3>
                </div>
                <ErrorMessage message={heightError} />
            </div>
            <div className="input-form">
                <label htmlFor="weight">
                    <h3>Weight</h3>
                    <span className="larger-text">What is your weight in kilograms?</span>
                </label>
                <div className="input">
                    <input
                        type="text"
                        id="weight"
                        name="weight"
                        pattern="[0-9]*"
                        onInput={onInput}
                        value={weightValue}
                    />
                    <h3 className="input__suffix">KG</h3>
                </div>
                <ErrorMessage message={weightError} />
            </div>
        </>
    )
}