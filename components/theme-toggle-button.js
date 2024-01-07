import { Icon, IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react'
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';

const ThemeToggleButton = () => {
    const { toggleColorMode } = useColorMode()

    return (
        <IconButton aria-label="Toggle theme"
        colorScheme={useColorModeValue('purple','orange')}
        icon={useColorModeValue(<DarkModeRoundedIcon />, <LightModeRoundedIcon />)}
        onClick={toggleColorMode}></IconButton>
    )
}

export default ThemeToggleButton