import React from 'react';
import logo from '../../logo.svg';
import HeaderMenu from './HeaderMenu';
import HeaderSearch from './HeaderSearch';
import { AppBar, Toolbar, Box, Link, Divider } from '@material-ui/core';
import HeaderUser from './HeaderUser';

const options = ["Главная", "Подборки", "Ипотечный калькулятор", "Сравнение", "Акции"]

export default function Header() {
    return (
        <AppBar className="header">
            <Toolbar className="header__content">
                <Link href="/" >
                    <img src={logo} alt="" />
                </Link>
                <HeaderMenu />
                <Box display="flex">
                    {options.map((option, index) => (
                        <>
                            <Link className="link" key={option} href="#">
                                {option}
                            </Link>
                            <Divider orientation="vertical" style={{ height: '24px' }} />
                        </>
                    ))}
                </Box>
                <HeaderSearch/>
                <HeaderUser/>
            </Toolbar>
        </AppBar>
    )
}