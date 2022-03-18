export default function Error({ err }) {

    return (
        <li>
            <em><strong>{err.error}</strong></em>: {err.message}
            {err.invalidSymbols &&
                <ul>
                    {err.invalidSymbols.map((symb, i) => {
                        return <li>{symb}</li>
                    })}
                </ul>}
            {err.tooMany &&
                <ul>
                    {err.tooMany.map(symb => <li>{symb}</li>)}
                </ul>}
        </li>
    )
}