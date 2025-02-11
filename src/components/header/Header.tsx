import { AppBar, IconButton, Toolbar, Typography } from "@mui/material"
import logoSmall from '../../assets/logo-small.png'

interface HeaderProps {
  title: string
  onLogoClick?: () => void
}

export default function Header({ title, onLogoClick }: HeaderProps) {
  return <AppBar position="sticky">
    <Toolbar>
      <IconButton onClick={onLogoClick}>
        <img src={logoSmall} />
      </IconButton>
      <Typography
        variant="h6"
        noWrap
        component="div"
      >
        {title}
      </Typography>

    </Toolbar>
  </AppBar>
}