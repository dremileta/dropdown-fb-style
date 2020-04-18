import React, { useState, useEffect, useRef } from 'react';
import DropdownItem from '../dropdown-item/DropdownItem';
import { ReactComponent as CogIcon } from '../../icons/cog.svg';
import { ReactComponent as ChevronIcon } from '../../icons/chevron.svg';
import { ReactComponent as ArrowIcon } from '../../icons/arrow.svg';

import { CSSTransition } from 'react-transition-group';

import './dropdown-menu-styles.scss';

const DropdownMenu = () => {
	const [activeMenu, setActiveMenu] = useState('main');
	const [menuHeight, setMenuHeight] = useState(null);
	const dropdownRef = useRef(null);

	useEffect(() => {
		setMenuHeight(dropdownRef.current?.firstChild.offsetHeight);
	}, []);

	const calculateHeight = el => {
		const height = el.offsetHeight;

		setMenuHeight(height);
	};

	return (
		<div
			className='dropdown'
			style={{ height: menuHeight }}
			ref={dropdownRef}
		>
			<CSSTransition
				in={activeMenu === 'main'}
				unmountOnExit
				timeout={500}
				classNames='menu-primary'
				onEnter={calculateHeight}
			>
				<div className='menu'>
					<DropdownItem>My Profile</DropdownItem>
					<DropdownItem
						leftIcon={<CogIcon />}
						rightIcon={<ChevronIcon />}
						goToMenu='settings'
						setActiveMenu={setActiveMenu}
					>
						Settings
					</DropdownItem>
				</div>
			</CSSTransition>

			<CSSTransition
				in={activeMenu === 'settings'}
				unmountOnExit
				timeout={500}
				classNames='menu-secondary'
				onEnter={calculateHeight}
			>
				<div className='menu'>
					<DropdownItem
						leftIcon={<ArrowIcon />}
						goToMenu='main'
						setActiveMenu={setActiveMenu}
					/>
					<DropdownItem>Settings</DropdownItem>
					<DropdownItem>Settings</DropdownItem>
					<DropdownItem>Settings</DropdownItem>
					<DropdownItem>Settings</DropdownItem>
					<DropdownItem>Settings</DropdownItem>
					<DropdownItem>Settings</DropdownItem>
				</div>
			</CSSTransition>
		</div>
	);
};

export default DropdownMenu;
