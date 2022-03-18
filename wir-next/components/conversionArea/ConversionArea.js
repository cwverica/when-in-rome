
function ConversionArea({ toRoman,
    input,
    output,
    handleChange }) {


    return (
        <div className="conversion-area">
            <input
                type="text"
                className="conversion-textbox"
                value={input}
                placeholder={toRoman ? "Enter Arabic Numeral" : "Enter Roman Numeral"}
                onChange={handleChange} />

            <input
                type="text"
                className="conversion-textbox"
                value={output}
                placeholder={toRoman ? "Roman Numeral" : "Arabic Numeral"}
            />
        </div>
    )
}

export default ConversionArea;
