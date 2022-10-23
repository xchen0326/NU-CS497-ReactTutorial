import TermButton from "./TermButton";

const TermSelector = ({
    term,
    setTerm,
}) => {
    let terms = ['Fall', 'Winter', 'Spring'];
    return (
        <div className="btn-group">
            {
                terms.map(value => (
                <TermButton key={value} term={value} setTerm={setTerm} checked={value === term} />
                ))
            }
        </div>
    )
}

export default TermSelector;