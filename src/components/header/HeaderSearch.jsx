import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import { Box } from '@material-ui/core';

export default function HeaderSearch() {
    return (
        <Box className="header__search">
            <Button>
                <SearchIcon className="header__search__icon" />
                Поиск
            </Button>
        </Box>
    )
}