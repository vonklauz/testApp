import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import MoreIcon from '@material-ui/icons/MoreVert';
import { Box } from '@material-ui/core';

export default function HeaderUser({ user = {} }) {
    return (
        <Box className="header__user" display="flex">
            <Avatar src={user.avatar} />
            <div className="header__user__info">
                <p className="user-login">
                    {user.login || "user_login"}
                </p>
                <p className="user-role">
                    {user.role || "user_role"}
                </p>
            </div>
            <MoreIcon style={{color:'#7A7A7A'}}/>
        </Box>
    )
}