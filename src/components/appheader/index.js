import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Menu, Dropdown, Avatar, Badge, Icon, Switch, Input } from 'antd';

import './index.scss';

// import { refreshPage } from '../../data/config/utils';

const Search = Input.Search;

class AppHeader extends Component {
    render() {
        const { admin_details, actions } = this.props;
        const admin_fname = admin_details.user_info && admin_details.user_info.firstName ? admin_details.user_info.firstName : "unknown";

        return (
            <div className={classNames("ori-full-width ori-full-parent-height ori-flex-row ori-flex-jsb oriAppHeaderContainer")}>
                <div className="headerContentContainer">
                    <ul className="ori-no-b-mrgn ori-no-l-pad ori-flex navList ori-flex-jsb">
                        <li className={classNames("searchContainer navItem")}>
                            <Search placeholder="Search Instagram" className="searchBox" />
                        </li>
                        <li className="instagramIcons">
                            <div className="mainIcon">
                            
                            </div>
                        </li>
                        <li className={classNames("navItem settings")}>
                            <Badge className="badgeAlign">
                                <i className="material-icons ori-font-lg">settings</i>
                            </Badge>
                        </li>
                        {/*<li className={classNames("navItem")}>
                             <Dropdown overlay={
                                <Menu className="dropdownMenuList">
                                    <Menu.Item key="logout" className="ori-no-mrgn">
                                        <p onClick={() => actions.logoutUser()}>Log out</p>
                                    </Menu.Item>
                                </Menu>
                            } placement="bottomRight" trigger={['click']} style={{ display: 'flex' }}>
                                <div>
                                    <Avatar className="ori-bg-primary ori-capitalize" >{admin_fname.charAt(0)}</Avatar>
                                    <span className="ori-mobile-hidden ori-capitalize ori-l-pad-5 ori-font-medium"> {admin_fname} <Icon type="down" className="ori-l-pad-5 ori-font-md" />
                                    </span>
                                </div>
                            </Dropdown> 
                        </li>*/}
                    </ul>
                </div>
            </div>
        );
    }
}

AppHeader.propTypes = {
    page_details: PropTypes.object,
    admin_details: PropTypes.object,
    actions: PropTypes.object,
};

export default AppHeader;
