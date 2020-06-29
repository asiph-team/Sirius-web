import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Popover from '@sirius/components/uielements/popover';
import IntlMessages from '@sirius/components/utility/intlMessages';
import userpic from '@sirius/assets/images/avatar.png';
import TopbarDropdownWrapper from './TopbarDropdown.styles';

export default function TopbarUser() {
    const [visible, setVisibility] = useState(false);
    function handleVisibleChange() {
        setVisibility(visible => !visible);
    }

    const content = (
        <TopbarDropdownWrapper className="isoUserDropdown">
          <Link className="isoDropdownLink" to={'/dashboard/my-profile'}>
            <IntlMessages id="topbar.myprofile" />
          </Link>
          <a className="isoDropdownLink" href="# ">
            <IntlMessages id="themeSwitcher.settings" />
          </a>
          <a className="isoDropdownLink" href="# ">
            <IntlMessages id="topbar.help" />
          </a>
          <div className="isoDropdownLink">
            <IntlMessages id="topbar.logout" />
          </div>
        </TopbarDropdownWrapper>
    );

    return (
        <Popover
            content={content}
            trigger="click"
            visible={visible}
            onVisibleChange={handleVisibleChange}
            arrowPointAtCenter={true}
            placement="bottomLeft"
        >
            <div className="isoImgWrapper">
                <img alt="user" src={userpic} />
                <span className="userActivity online" />
            </div>
        </Popover>
    )
}
