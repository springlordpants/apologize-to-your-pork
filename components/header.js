import {useState} from 'react'
import Link from 'next/link'
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';


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
              <MenuIcon />
            </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}>
                    <MenuItem onClick={handleClose}>
                        <Link as="../pages/index.js/" href="/">
                            <a>Home</a>
                        </Link>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <Link as="../pages/about.js/" href="/about">
                            <a>About</a>
                        </Link>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <Link as="../pages/contact.js/" href="/contact">
                            <a>Contact</a>
                        </Link>
                    </MenuItem> 

            </Menu>
        </div>
    );
}