import './button.css';

const FlatButton = ({text}) => {
    return (
        <a target="_blank" rel="noreferrer" className="cta"> 
            {text}
        </a>
    )
}

export default FlatButton
