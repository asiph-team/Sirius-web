import { combineReducers } from 'redux';
import App from '@sirius/redux/app/reducer';
import LanguageSwitcher from '@sirius/redux/languageSwitcher/reducer';
import ThemeSwitcher from '@sirius/redux/themeSwitcher/reducer';

export default combineReducers({
    App,
    LanguageSwitcher,
    ThemeSwitcher
});
