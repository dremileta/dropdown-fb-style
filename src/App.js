import React from 'react';
import NavBar from './components/navbar/Navbar';
import NavItem from './components/nav-item/NavItem';

import { ReactComponent as BellIcon } from './icons/bell.svg';
import { ReactComponent as MessengerIcon } from './icons/messenger.svg';
import { ReactComponent as CaretIcon } from './icons/caret.svg';
import { ReactComponent as PlusIcon } from './icons/plus.svg';

import { ReactComponent as BoltIcon } from './icons/bolt.svg';
import DropdownMenu from './components/dropdown-menu/DropdownMenu';

function App() {
	return (
		<NavBar>
			<NavItem icon={<PlusIcon />} />
			<NavItem icon={<BellIcon />} />
			<NavItem icon={<MessengerIcon />} />

			<NavItem icon={<CaretIcon />}>
				<DropdownMenu></DropdownMenu>
			</NavItem>
		</NavBar>
	);
}

export default App;
