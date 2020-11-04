import { useState } from 'react'
import Link from 'next/link'
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';
import { MenuBg, ItemText } from '../styles/menuStyling'


export default function Home() {

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };

    return (
        <div>
            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
              <MenuIcon style={{ color: '#f6f3e0' }} />
            </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}>
                    <MenuBg>
                        <MenuItem onClick={handleClose}>
                            <Link as="../pages/index.js/" href="/">
                                <ItemText>Home</ItemText>
                            </Link>
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                            <Link as="../pages/about.js/" href="/about">
                                <ItemText>About</ItemText>
                            </Link>
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                            <Link as="../pages/contact.js/" href="/contact">
                                <ItemText>Contact</ItemText>
                            </Link>
                        </MenuItem> 
                    </MenuBg>
            </Menu>
        </div>
    );
}