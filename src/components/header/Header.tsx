import LanguageSwitcher from "../language-switcher/LanguageSwitcher";
import {Box} from "@mui/material";
import Logo from '../../shared/styles/images/logo.png'
import './header.scss'

export const Header = () => {
  return <Box id='header-container'>
    tekst
    <img src={Logo} className='logo'/>
  <LanguageSwitcher/>
  </Box>
}
