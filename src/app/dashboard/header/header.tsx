import './header.scss';
import { CircleUser } from 'lucide-react';

const Header = () => {
    return (
        <header>
            {/* <SearchBar /> */}
            <input type='text' placeholder='Search...' />
            <button>
                <CircleUser />
            </button>
        </header>
    );
};

export default Header;
