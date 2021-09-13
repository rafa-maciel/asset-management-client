import React from 'react'
import ResponsiveDrawer from '../../themes/MainLayout/ResponsiveDrawer'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import UserAccountPage from '../../UserAccountPage/UserAccountPage';

export default function HomePage() {
    return (
        <Router >
                    <ResponsiveDrawer>    
                        <Switch>
                            <Route path="/app" exact={true}>
                                {/* <AssetList /> */}
                            </Route>
                            <Route path="/app/assets/add">
                                {/* <AssetCreate /> */}
                            </Route>
                            <Route path="/app/assets/update/:serialNumber">
                                {/* <AssetUpdate /> */}
                            </Route>
                            <Route path="/app/assets/:serialNumber">
                                {/* <AssetDetails /> */}
                            </Route>
                            <Route path="/app/users/:re">
                                {/* <UserDetails /> */}
                            </Route>
                            <Route path="/app/users">
                                {/* <UserDashboard /> */}
                            </Route>
                            <Route path="/app/locations">
                                <h1>Locations</h1>
                                {/* <LocationDashboard /> */}
                            </Route>
                            <Route path="/app/models">
                                {/* <ModelDashboard /> */}
                            </Route>
                            <Route path="/userAccounts">
                                <UserAccountPage />
                            </Route>
                        </Switch>
                    </ResponsiveDrawer>
                </Router>
    )
}