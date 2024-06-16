import './header.scss';
import { CircleUser } from 'lucide-react';
import SearchBar from '../searchbar/searchBar';

const Header = () => {
    return (
        <header>
            <SearchBar />
            <button className='account-btn'>
                <CircleUser className='account-icon' />
            </button>
        </header>
    );
};

export default Header;
