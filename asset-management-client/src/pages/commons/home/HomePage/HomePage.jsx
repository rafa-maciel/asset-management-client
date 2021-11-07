import React from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { AssetCreate, AssetList } from '../../../assets';
import { LocationCreate, LocationDelete, LocationList, LocationUpdate } from '../../../locations';
import { ModelCreate, ModelDelete, ModelList, ModelUpdate } from '../../../models';
import { UserAccountCreate, UserAccountDelete, UserAccountList, UserAccountReset, UserAccountUpdate } from '../../../userAccounts';
import { UserCreate, UserDelete, UserImport, UserList, UserUpdate } from '../../../users';
import ResponsiveDrawer from '../../themes/MainLayout/ResponsiveDrawer';

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
                            <Route path="/accounts/update">
                                <UserAccountUpdate />
                            </Route>
                            <Route path="/accounts/reset">
                                <UserAccountReset />
                            </Route>
                            <Route path="/accounts/delete">
                                <UserAccountDelete />
                            </Route>
                            <Route path="/accounts/create">
                                <UserAccountCreate />
                            </Route>
                            <Route path="/accounts">
                                <UserAccountList />
                            </Route>
                            <Route path="/users/update">
                                <UserUpdate />
                            </Route>
                            <Route path="/users/delete">
                                <UserDelete />
                            </Route>
                            <Route path="/users/create">
                                <UserCreate />
                            </Route>
                            <Route path="/users/import">
                                <UserImport />
                            </Route>
                            <Route path="/users">
                                <UserList />
                            </Route>
                            <Route path="/models/update">
                                <ModelUpdate />
                            </Route>
                            <Route path="/models/delete">
                                <ModelDelete />
                            </Route>
                            <Route path="/models/create">
                                <ModelCreate />
                            </Route>
                            <Route path="/models">
                                <ModelList />
                            </Route>
                            <Route path="/locations/delete">
                                <LocationDelete />
                            </Route>
                            <Route path="/locations/update">
                                <LocationUpdate />
                            </Route>
                            <Route path="/locations/create">
                                <LocationCreate />
                            </Route>
                            <Route path="/locations">
                                <LocationList />
                            </Route>
                            <Route path="/assets/create">
                                <AssetCreate />
                            </Route>
                            <Route path="/assets">
                                <AssetList />
                            </Route>
                        </Switch>
                    </ResponsiveDrawer>
                </Router>
    )
}