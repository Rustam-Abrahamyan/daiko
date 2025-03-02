import { useState } from 'react';
import {
    IconDashboard,
    IconLogout,
    IconSettings,
    IconSwitchHorizontal,
} from '@tabler/icons-react';
import { Group } from '@mantine/core';
import classes from './navbar.module.css';
import { NavLink } from 'react-router-dom';

const data = [
    { link: '/', label: 'Dashboard', icon: IconDashboard },
    { link: '/settings', label: 'Settings', icon: IconSettings },
];

export function Navbar() {
    const [active, setActive] = useState('Billing');

    const links = data.map((item) => (
        <NavLink
            className={classes.link}
            data-active={item.label === active || undefined}
            to={item.link}
            key={item.label}
            onClick={() => {
                setActive(item.label);
            }}
        >
            <item.icon className={classes.linkIcon} stroke={1.5} />
            <span>{item.label}</span>
        </NavLink>
    ));

    return (
        <div className={classes.navbar}>
            <div className={classes.navbarMain}>
                <Group className={classes.header} justify="space-between" visibleFrom="sm">
                    Daiko
                </Group>
                {links}
            </div>

            <div className={classes.footer}>
                <a href="#" className={classes.link} onClick={(event) => event.preventDefault()}>
                    <IconSwitchHorizontal className={classes.linkIcon} stroke={1.5} />
                    <span>Change account</span>
                </a>

                <a href="#" className={classes.link} onClick={(event) => event.preventDefault()}>
                    <IconLogout className={classes.linkIcon} stroke={1.5} />
                    <span>Logout</span>
                </a>
            </div>
        </div>
    );
}