import React, { useState } from 'react';
import './nav-item-styles.scss';

const NavItem = props => {
	const { icon } = props;
	const [open, setOpen] = useState(false);

	const dropodownClickHandler = () => setOpen(!open);
	return (
		<li className='nav-item'>
			<a href='#' className='icon-button' onClick={dropodownClickHandler}>
				{icon}
			</a>

			{open && props.children}
		</li>
	);
};

export default NavItem;
