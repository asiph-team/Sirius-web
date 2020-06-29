import React, {useCallback} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { Layout } from 'antd';
import appActions from '@sirius/redux/app/actions';
import TopbarUser from './TopbarUser';
import TopbarWrapper from './Topbar.styles';

const { Header } = Layout;
const { toggleCollapsed } = appActions;

export default function Topbar() {
    // const [selectedItem, setSelectedItem] = useState('');
    const customizedTheme = useSelector(state => state.ThemeSwitcher.topbarTheme);
    const { collapsed, openDrawer } = useSelector(state => state.App);
    const dispatch = useDispatch();
    const handleToggle = useCallback(() => dispatch(toggleCollapsed()), [
        dispatch,
    ]);
    const isCollapsed = collapsed && !openDrawer;
    const styling = {
      background: customizedTheme.backgroundColor,
      position: 'fixed',
      width: '100%',
      height: 70,
    };

    return(
        <TopbarWrapper>
            <Header style={styling} className={isCollapsed ? 'isomorphicTopbar collapsed' : 'isomorphicTopbar'}>
                <div className="isoLeft">
                    <button
                        className={
                        isCollapsed ? 'triggerBtn menuCollapsed' : 'triggerBtn menuOpen'
                        }
                        style={{ color: customizedTheme.textColor }}
                        onClick={handleToggle}
                    />
                </div>
                <ul className="isoRight">
                    {/* <li onClick={() => setSelectedItem('user')} className="isoUser">
                        <TopbarUser />
                    </li> */}
                    <li className="isoUser">
                        <TopbarUser />
                    </li>
                </ul>
            </Header>
        </TopbarWrapper>
    )

}