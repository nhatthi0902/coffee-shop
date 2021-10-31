import './button.scss';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
export default function Button({onClick,children, extendClass, isLink, to, disabled}){
    const classese  = classNames('btn',extendClass)
    
    if(isLink){
        return(<Link to={to} className={classese}>{children}</Link>)
    }

    return(<button onClick={onClick} className={classese} disabled={disabled?"disabled":""}>{children}</button>);
}