import Link from 'next/link';
import './sidenav.scss';
import {
    BarChart,
    CreditCard,
    Home,
    PieChart,
    Settings,
    Wallet,
} from 'lucide-react';
const SideNav = () => {
    return (
        <nav className='sidenav'>
            <div className='sidenav-header'>
                <div className='sidenav-header-branding'>
                    <Wallet />
                    <h1 className='sidenav-title'>MoneyMind</h1>
                </div>
            </div>
            <ul className='sidenav-list'>
                <li>
                    <Home className='sidenav-list-icon' />
                    <Link href='/dashboard'>Dashboard</Link>
                </li>
                <li>
                    <CreditCard className='sidenav-list-icon' />
                    <Link href='/'>Accounts</Link>
                </li>
                <li>
                    <Wallet className='sidenav-list-icon' />
                    <Link href='/'>Transactions</Link>
                </li>
                <li>
                    <PieChart className='sidenav-list-icon' />
                    <Link href='/'>Budgets</Link>
                </li>
                <li>
                    <BarChart className='sidenav-list-icon' />
                    <Link href='/'>Reports</Link>
                </li>
                <li>
                    <Settings className='sidenav-list-icon' />
                    <Link href='/'>Settings</Link>
                </li>
            </ul>
        </nav>
    );
};

export default SideNav;
