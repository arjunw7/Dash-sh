import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Menu } from 'antd';

import './index.scss';

import { icons } from '../../data/assets/assetsurl';
import { APP_PAGES, ROUTE_PATH } from '../../data/config/constants';

const SubMenu = Menu.SubMenu;

const { DashboardMeter, Conversation, History, BarChart } = icons;

export default class AppSider extends Component {
    render() {
        const { page_details, navigateTo, sider_collapsed } = this.props;

        return (
            <div className="ori-full-width ori-full-parent-height oriAppSiderContainer">
                <div className="ori-pad-10 ori-flex-column ori-flex-jc ori-b-mrgn-20 logoContainer">
                    {/* <img src={assets.oriLogo} alt="" className="ori-animated ori-zoom-in ori-full-width" /> */}
                </div>
                <Menu mode="inline" className="ori-full-width siderMenu">
                    <Menu.Item key={APP_PAGES.DASHBOARD} className={classNames("siderMenuItem", { "ori-animated ori-zoom-in": sider_collapsed })}>
                        <span className={classNames("menuIcon", { "activeMenu": sider_collapsed && page_details.current_page === APP_PAGES.DASHBOARD, "ori-font-primary ori-font-bold": !sider_collapsed && page_details.current_page === APP_PAGES.DASHBOARD })} onClick={() => { navigateTo(ROUTE_PATH.DASHBOARD); }}>
                            <span className="anticon">
                                <DashboardMeter size={20} />
                            </span>
                            <span className="ori-capitalize">{APP_PAGES.DASHBOARD}</span>
                        </span>
                    </Menu.Item>
                    <Menu.Item key={APP_PAGES.CONVERSATION} className={classNames("siderMenuItem", { "ori-animated ori-zoom-in": sider_collapsed })}>
                        <span className={classNames("menuIcon", { "activeMenu": sider_collapsed && page_details.current_page === APP_PAGES.CONVERSATION, "ori-font-primary ori-font-bold": !sider_collapsed && page_details.current_page === APP_PAGES.CONVERSATION })} onClick={() => { navigateTo(ROUTE_PATH.CONVERSATION); }}>
                            <span className="anticon">
                                <Conversation size={20} />
                            </span>
                            <span className="ori-capitalize">{APP_PAGES.CONVERSATION}</span>
                        </span>
                    </Menu.Item>
                </Menu>
            </div>
        );
    }
}

AppSider.propTypes = {
    page_details: PropTypes.object,
    navigateTo: PropTypes.func,
    sider_collapsed: PropTypes.bool,
};

