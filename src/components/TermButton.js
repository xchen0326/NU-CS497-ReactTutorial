const TermButton = ({term, setTerm, checked}) => {
    return (
        <>
            <input type="radio" id={term} className="btn-check" checked={checked} autoComplete="off"
                onChange={() => setTerm(term)} />
            <label class="btn btn-success m-1 p-2" htmlFor={term}>
                { term }
            </label>
        </>
    )
}

export default TermButton;