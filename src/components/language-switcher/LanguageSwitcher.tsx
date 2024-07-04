import React from 'react';
import { useTranslation } from 'react-i18next';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import {Box} from "@mui/material";

const LanguageSwitcher = () => {
    const { i18n } = useTranslation();

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    };

    return (<Box>
            <Button onClick={() => changeLanguage('en')}>English</Button>
            <Button onClick={() => changeLanguage('mk')}>Македонски</Button>
        </Box>
    );
};

export default LanguageSwitcher;
