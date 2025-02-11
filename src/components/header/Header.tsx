import { AppBar, IconButton, Toolbar, Typography } from "@mui/material"
import logoSmall from '../../assets/logo-small.png'
import { useContext } from "react"
import { DarkModeContext } from "../../data/contexts/DarkMode.context"

interface HeaderProps {
  title: string
  onLogoClick?: () => void
}

export default function Header({ title, onLogoClick }: HeaderProps) {
  const darkMode = useContext(DarkModeContext)
  return <AppBar position="sticky" style={{ backgroundColor: darkMode ? "#222" : undefined }}>
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