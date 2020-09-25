import React, { useState } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import '../styles/cart.css';
import CartItem from './CartItem';

const Cart = (props) => {
	return ( <>
		<div className='backgroundCart' onClick={props.cerrar} style={props.show ? {} : {display: 'none', opacity: 0}}>
		</div>
		<div className='drawerCart' style={props.show ? {right: 0} : {}}>
			<span onClick={props.cerrar} className='close'>X Cerrar</span>
			<div className='title'>Mi pedido</div>
			<div className='items'>
				{props.cart.length === 0
				? 'No hay items en el carrito'
				:props.cart.map(product => {
					return <CartItem data={product} />
				})}
				<div></div>
			</div>
			<div className='buttons'>
				<button className='btnPrimary'>Finalizar compra</button>
				<button className='btnSecondary'>Ver pedido</button>
			</div>
		</div>
	</> );
}
 
const mapStateToProps = state => {
    return {
		cart: state.userReducer.cart
    }
}

const mapDispatchToProps = {
	
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);