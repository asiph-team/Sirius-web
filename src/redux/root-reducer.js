import { combineReducers } from 'redux';
import App from '@sirius/redux/app/reducer';
import Auth from '@sirius/redux/auth/reducer';
import LanguageSwitcher from '@sirius/redux/languageSwitcher/reducer';
import ThemeSwitcher from '@sirius/redux/themeSwitcher/reducer';

export default combineReducers({
    App,
    Auth,
    LanguageSwitcher,
    ThemeSwitcher
});
