import Link from 'next/link'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import { FunctionComponent, useState, MouseEvent } from 'react'
import { Props } from './header.container'
import { Menu, MenuItem } from '@mui/material'

export const Header: FunctionComponent<Props> = (props) => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null)
  const open = Boolean(anchorEl)

  const handleMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleMenu}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={open}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>
              <Link href="/">
                <a>Home</a>
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link href="/hook-form">
                <a>hook form</a>
              </Link>
            </MenuItem>
          </Menu>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Test Next App
          </Typography>
          {props.mode ? (
            <IconButton color="inherit" onClick={props.handler}>
              <Brightness7Icon />
            </IconButton>
          ) : (
            <IconButton color="inherit" onClick={props.handler}>
              <Brightness4Icon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  )
}
