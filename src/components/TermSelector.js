const TermSelector = ({
    term,
    setTerm,
}) => {
    return (
        <div>
            <input type="radio" id="Fall" value="Fall" checked={term==="Fall"} onChange={() => setTerm("Fall")} />
            <label htmlFor="Fall">Fall</label>
            <input type="radio" id="Winter" value="Winter" checked={term==="Winter"} onChange={() => setTerm("Winter")} />
            <label htmlFor="Winter">Winter</label>
            <input type="radio" id="Spring" value="Spring" checked={term==="Spring"} onChange={() => setTerm("Spring")} />
            <label htmlFor="Spring">Spring</label>
        </div>
    )
}

export default TermSelector;