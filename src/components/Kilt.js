import React from 'react';
import PropTypes from 'prop-types';


function Kilt(props){

  function handleClick() {
    return props.onBuyKilt(props.id);
    // call a function that we write in the KiltControl
    // props.onBuyAKilt
    // function in KiltControl with decrement the quantity of each kilt in our list in state
  }

  function handleSubmit(event) {
    event.preventDefault();
    return props.onRestockKilts(props.id, parseInt(event.target.quantity.value));
  }

  let kiltDisplay = null;
  if (props.quantity <= 0) {
    kiltDisplay = <h3>{props.name} is <strong>Out of Stock</strong></h3>
  } else {
    kiltDisplay =
    <>
    <h3>{props.name}: {props.color}</h3>
    <li>Number of Pockets: {props.pockets}</li>
    <li>Size: {props.size}</li>
    <li>$ {props.price}</li>
    <li>Rating: {props.popularity}</li>
    <li> Quantity Available: {props.quantity}</li>
    <button className="btn btn-block btn-lg btn-dark" onClick={handleClick}>Buy</button>
    </>
  }
  


  return (
    <React.Fragment>
      <div onClick={() => props.onKiltSelect(props.id)}>
      {kiltDisplay}
      <form onSubmit={handleSubmit}>
        <input type="number" min="1" max="100" name="quantity" className="form-control"/>
      <button>Restock</button>
      </form>
      </div>
    </React.Fragment>
  );
}

Kilt.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  pockets: PropTypes.number.isRequired,
  size: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
  popularity: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  onBuyKilt: PropTypes.func,
  onRestockKilts: PropTypes.func,
  onKiltSelect: PropTypes.func
}

export default Kilt;