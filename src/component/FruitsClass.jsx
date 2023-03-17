import React from 'react';
import './FruitsClass.css';

class FruitsClass extends React.Component {
    render() {
        const {picture, title,description, price} = this.props;
        return (
                <div className='fruit'>
                    <div className='fruit-picture'><img src={picture} alt='fruit'></img></div>
                    <div className='fruit-title'>{title}</div><hr/>
                    <div className='fruit-description'>{description}</div>
                    <div className='fruit-price'><p>{price}</p></div>
                    <div className='fruit-buy'><button>КУПИТЬ</button></div>
                </div>
        )
    }
}

export default FruitsClass;