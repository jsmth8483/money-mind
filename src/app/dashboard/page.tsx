import './page.scss';
import SideNav from './sidenav/sidenav';
import Header from './header/header';

export default function Home() {
    return (
        <div className='container max-w-full'>
            <SideNav />
        </div>
    );
}
