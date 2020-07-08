import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Layout} from 'antd';
import Scrollbars from '@sirius/components/utility/customScrollBar';
import Menu from '@sirius/components/uielements/menu';
import appActions from '@sirius/redux/app/actions';
import Logo from '@sirius/components/utility/logo';
import SidebarWrapper from './Siderbar.styles';
import SidebarMenu from './SidebarMenu';
const { Sider } = Layout;

const {
    changeOpenKeys,
    changeCurrent,
    toggleCollapsed,
} = appActions;

export default function Sidebar(props) {
    const dispatch = useDispatch();
    const {
        view,
        openKeys,
        collapsed,
        openDrawer,
        current,
        height,
    } = useSelector(state => state.App);

    const customizedTheme = useSelector(
        state => state.ThemeSwitcher.sidebarTheme
    );

    function handleClick(e) {
        dispatch(changeCurrent([e.key]));
        if (view === 'MobileView') {
            setTimeout(() => {
                dispatch(toggleCollapsed());
            }, 100);
        }
    }

    function onOpenChange(newOpenKeys) {
        const latestOpenKey = newOpenKeys.find(
            key => !(openKeys.indexOf(key) > -1)
        );

        const latestCloseKey = openKeys.find(
            key => !(newOpenKeys.indexOf(key) > -1)
        );

        let nextOpenKeys = [];
        if (latestCloseKey) {
            nextOpenKeys = getAncestorKeys(latestOpenKey).concat(latestOpenKey);
        }

        if (latestCloseKey) {
            nextOpenKeys = getAncestorKeys(latestCloseKey);
        }

        dispatch(changeOpenKeys(nextOpenKeys));
    }

    const getAncestorKeys = key => {
        const map = {
          sub3: ['sub2'],
        };
        return map[key] || [];
    };

    const isCollapsed = collapsed && !openDrawer;
    const mode = isCollapsed === true ? 'vertical' : 'inline';

    const styling = {
        backgroundColor: customizedTheme.backgroundColor,
      };

    const submenuStyle = {
        backgroundColor: 'rgba(0,0,0,0.3)',
        color: customizedTheme.textColor,
    };

    const submenuColor = {
        color: customizedTheme.textColor,
    };

    return (
        <SidebarWrapper>
            <Sider
                trigger={null}
                collapsible={true}
                collapsed={isCollapsed}
                width={240}
                className="isomorphicSidebar"
                style={styling}
            >
                <Logo collapsed={isCollapsed} />
                <Scrollbars style={{ height: height - 70 }}>
                    <Menu
                        onClick={handleClick}
                        theme="dark"
                        className="isoDashboardMenu"
                        mode={mode}
                        openKeys={isCollapsed ? [] : openKeys}
                        selectedKeys={!current.length ? '/' : current}
                        onOpenChange={onOpenChange}
                        >
                        {props.options.map(singleOption => (
                        <SidebarMenu
                            key={singleOption.key}
                            submenuStyle={submenuStyle}
                            submenuColor={submenuColor}
                            singleOption={singleOption}
                        />
                        ))}
                    </Menu>
                </Scrollbars>
            </Sider>
        </SidebarWrapper>
    );
}