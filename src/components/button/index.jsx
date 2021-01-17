import './button.css';

const FlatButton = ({text, to}) => {
    return (
        <a href={to} target="_blank" rel="noreferrer" className="cta"> 
            {text}
        </a>
    )
}

export default FlatButton
