'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import './sidenav.scss';
import {
    BarChart,
    CreditCard,
    Home,
    PieChart,
    Settings,
    Wallet,
} from 'lucide-react';
import clsx from 'clsx';

const SideNav = () => {
    const pathname = usePathname();

    return (
        <nav className='sidenav'>
            <div className='sidenav-header'>
                <div className='sidenav-header-branding'>
                    <Wallet />
                    <h1 className='sidenav-title'>MoneyMind</h1>
                </div>
            </div>
            <ul className='sidenav-list'>
                <li
                    className={clsx('sidenav-list-item', {
                        'sidenav-list-item-active': pathname === '/',
                    })}
                >
                    <Link href='/' className='nav-link'>
                        <Home className='sidenav-list-icon' />
                        Dashboard
                    </Link>
                </li>
                <li
                    className={clsx('sidenav-list-item', {
                        'sidenav-list-item-active': pathname === '/accounts',
                    })}
                >
                    <Link href='/accounts' className='nav-link'>
                        <CreditCard className='sidenav-list-icon' />
                        Accounts
                    </Link>
                </li>
                <li
                    className={clsx('sidenav-list-item', {
                        'sidenav-list-item-active':
                            pathname === '/transactions',
                    })}
                >
                    <Link href='/transactions' className='nav-link'>
                        <Wallet className='sidenav-list-icon' />
                        Transactions
                    </Link>
                </li>
                <li
                    className={clsx('sidenav-list-item', {
                        'sidenav-list-item-active': pathname === '/budgets',
                    })}
                >
                    <Link href='/budgets' className='nav-link'>
                        <PieChart className='sidenav-list-icon' />
                        Budgets
                    </Link>
                </li>
                <li
                    className={clsx('sidenav-list-item', {
                        'sidenav-list-item-active': pathname === '/reports',
                    })}
                >
                    <Link href='/reports' className='nav-link'>
                        <BarChart className='sidenav-list-icon' />
                        Reports
                    </Link>
                </li>
                {/* <li
                    className={clsx('sidenav-list-item', {
                        'sidenav-list-item-active': pathname === '/settings',
                    })}
                >
                    <Link href='/settings' className='nav-link'>
                        <Settings className='sidenav-list-icon' />
                        Settings
                    </Link>
                </li> */}
            </ul>
        </nav>
    );
};

export default SideNav;
