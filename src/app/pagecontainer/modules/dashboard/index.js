import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import './index.scss';

import * as pageActions from '../../../../data/redux/page_details/actions';
import * as dashboardActions from '../../../../data/redux/dashboard_details/actions';
import { APP_PAGES } from '../../../../data/config/constants';
import { Dropdown, Menu, Avatar, Icon} from 'antd';
import PageHeader from '../../../../components/pageheader';
import PieChart from 'react-minimal-pie-chart';
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
const data = [
    {
      name: 'Jan', 
      jan: 4000, 
      feb:3000, 
      mar:9800, 
      apr:2780, 
      may:2780, 
      jun:5700,
      jul:8600,
      aug:5687,
      sep:3097,
      oct: 2400,
      nov: 4400,
      dec: 2900,
    }
  ];

function mapStateToProps(state) {
    return {
        page_details: state.page_details,
        dashboard_details: state.dashboard_details
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Object.assign({}, pageActions, dashboardActions), dispatch)
    };
}

class Dashboard extends Component {
    componentWillMount() {
        let { actions } = this.props;
        actions.pageChanged(APP_PAGES.DASHBOARD, APP_PAGES.DASHBOARD);
    }

    componentDidMount() {
    }

    render() {
        const {page_details } = this.props;

        return (
            <div className="oriDashboardContainer" >
                <div className="row">
                    <div className="col-md-2 col-md-offset-1">
                        <div className="cardHead">
                            Analytics Overview
                        </div>
                        <div className="card">
                            <div className="cardIcon">
                                <i class="fa fa-users" aria-hidden="true"></i>
                            </div>
                            <div className="cardText">
                                21.2k
                            </div>
                            <div className="cardSubtext">
                                Total Followers
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2 col-md-offset-7">
                        <div className="dropdown">
                        <Dropdown overlay={
                            <Menu className="dropdownMenuList">
                                <Menu.Item key="logout" className="ori-no-mrgn">
                                    <p>Last 30 days</p>
                                </Menu.Item>
                                <Menu.Item key="logout" className="ori-no-mrgn">
                                    <p>Last 7 days</p>
                                </Menu.Item>
                                <Menu.Item key="logout" className="ori-no-mrgn">
                                    <p>Last 24 hours</p>
                                </Menu.Item>
                            </Menu>
                        } placement="bottomRight" trigger={['click']} style={{ display: 'flex' }}>
                            <div>
                                <span className="ori-mobile-hidden ori-capitalize ori-l-pad-5 ori-font-medium"> Last 30 days <Icon type="down" className="ori-l-pad-5 ori-font-md" />
                                </span>
                            </div>
                        </Dropdown> 
                        </div>
                    </div>

                </div>
                
                <div className="row">
                    <div className="col-md-4 col-md-offset-1">
                    <div className="sortDropdown">
                    <div style={{"display":"inline-block"}}>
                        Most
                    </div>
                    <div style={{"display":"inline-block"}}>
                        <Dropdown overlay={
                            <Menu className="dropdownMenuList">
                                <Menu.Item key="logout" className="ori-no-mrgn">
                                    <p>Last 30 days</p>
                                </Menu.Item>
                                <Menu.Item key="logout" className="ori-no-mrgn">
                                    <p>Last 7 days</p>
                                </Menu.Item>
                                <Menu.Item key="logout" className="ori-no-mrgn">
                                    <p>Last 24 hours</p>
                                </Menu.Item>
                            </Menu>
                        } placement="bottomRight" trigger={['click']} style={{ display: 'inline-block' }}>
                            <div style={{display:'inline-block'}}>
                                <span className="ori-mobile-hidden ori-capitalize ori-l-pad-5 ori-font-medium mediaText"> Recent Media<Icon type="down" className="ori-l-pad-5 ori-font-md" />
                                </span>
                            </div>
                        </Dropdown> 
                        </div>
                </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-4 col-md-offset-1">
                    <div className="likesChart">
                        <div className="likesHead">
                            Get more likes this summer
                        </div>
                        <div className="moreIcon">
                            <i class="fa fa-ellipsis-h" aria-hidden="true"></i>
                        </div>
                        <div className="likesGraph">
                            <PieChart
                                data={[
                                    {
                                    value: 10,
                                    color: '#dd4e4e'
                                    },
                                ]}
                                totalValue={20}
                                lineWidth={12}
                                paddingAngle={0}
                                startAngle={-180}
                                rounded
                                />
                        </div>
                            <div className="likeContent">
                                <div className="likesIcon">
                                    <i class="fa fa-heart" aria-hidden="true"></i>
                                </div>
                                <div className="likesText">
                                    29.2k
                                </div>
                                <div className="likesPartition">

                                </div>
                                <div className="likesSubtext">
                                    You are at 77% of 36,000 likes
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                    
                        <div className="barChart">
                            <div className="likesHead">
                                Get more likes this summer
                            </div>
                            <div className="moreIcon">
                                <i class="fa fa-ellipsis-h" aria-hidden="true"></i>
                            </div>
                                <div className="barGraph">
                                <BarChart
                                    width={650}
                                    height={400}
                                    data={data}
                                    margin={{
                                    top: 5, right: 30, left: 20, bottom: 5,
                                    }}
                                >
                                    <CartesianGrid strokeDasharray="5 5" />
                                    <XAxis dataKey="" />
                                    <YAxis />
                                    <Bar dataKey="jan" fill="#d6d6d6" barSize={30}/>
                                    <Bar dataKey="feb" fill="#d6d6d6" barSize={30}/>
                                    <Bar dataKey="mar" fill="#039fdb" barSize={30}/>
                                    <Bar dataKey="apr" fill="#d6d6d6" barSize={30}/>
                                    <Bar dataKey="may" fill="#d6d6d6" barSize={30}/>
                                    <Bar dataKey="jun" fill="#d6d6d6" barSize={30}/>
                                    <Bar dataKey="jul" fill="#039fdb" barSize={30}/>
                                    <Bar dataKey="aug" fill="#d6d6d6" barSize={30}/>
                                    <Bar dataKey="sep" fill="#d6d6d6" barSize={30}/>
                                    <Bar dataKey="oct" fill="#d6d6d6" barSize={30}/>
                                    <Bar dataKey="nov" fill="#d6d6d6" barSize={30}/>
                                    <Bar dataKey="dec" fill="#d6d6d6" barSize={30}/>
                                    
                                </BarChart>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Dashboard.propTypes = {
    actions: PropTypes.object,
    page_details: PropTypes.object,
    dashboard_details: PropTypes.object,
    history: PropTypes.object,
    match: PropTypes.object,
};

export default connect(mapStateToProps, mapDispatchToProps, null, { withRef: true })(Dashboard);

