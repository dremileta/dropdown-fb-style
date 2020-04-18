import React from 'react';
import './dropdown-item-styles.scss';

const DropdownItem = ({
	leftIcon,
	rightIcon,
	goToMenu,
	children,
	setActiveMenu,
}) => {
	const itemClickHandler = () => {
		goToMenu && setActiveMenu(goToMenu);
	};

	return (
		<a href='#' className='menu-item' onClick={itemClickHandler}>
			<span className='icon-button'>{leftIcon}</span>
			{children}
			<span className='icon-right'>{rightIcon}</span>
		</a>
	);
};

export default DropdownItem;
