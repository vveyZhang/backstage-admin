import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'dva/router';
import { getRoutes } from '../../utils/utils';
export default class Coupon extends Component {
    render() {
        const { match, routerData, location } = this.props;
        const routes = getRoutes(match.path, routerData);

        return (
            <Switch>
                {routes.map(item => (
                    <Route key={item.key} path={item.path} component={item.component} exact={item.exact} />
                ))}
                <Redirect from={match.path} to={`${match.path}/list`} />
            </Switch>
        );
    }
}
