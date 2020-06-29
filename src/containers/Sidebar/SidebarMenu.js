import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import Menu from '@sirius/components/uielements/menu';

const stripTrailingSlash = str => {
    if (str.substr(-1) === '/') {
        return str.substr(0, str.length - 1);
    }

    return str;
};

export default React.memo(function SidebarMenu({
    singleOption,
    submenuStyle,
    submenuColor,
    ...rest
}) {
    let match = useRouteMatch();

    const { key, label, leftIcon } = singleOption;
    const url = stripTrailingSlash(match.url);

    return (
      <Menu.Item key={key} {...rest}>
        <Link to={`${url}/${key}`}>
          <span className="isoMenuHolder" style={submenuColor}>
            <i className={leftIcon} />
            <span className="nav-text">
              <p>{label}</p>
            </span>
          </span>
        </Link>
      </Menu.Item>
    );
  });