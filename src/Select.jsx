const Select = (props) => (
    <select>
        {props.items.map((item) => (
            <option key={item}>{item}</option>
        ))}
    </select>
)

export default Select;