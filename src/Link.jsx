
// we can get properties directlly in function using {} braket 
function Link({ url, framework }) {
    return (
        <p>read more about <a href={url}>{framework}</a></p>
    );
}
export default Link;