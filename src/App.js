import 'materialize-css';
import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePageContainer from './containers/HomePageContainer'
import ProfilePageContainer from './containers/ProfilePageContainer'
import TimelineContainer from './containers/TimelineContainer'
import ProfileEditContainer from './containers/ProfileEditContainer'
import ConnectionsContainer from './containers/ConnectionsContainer'
import PrivateRoute from './containers/Auth/PrivateRoute'

function App() {
	return (
		<Fragment>
			<Switch>
				<Route exact path="/" component={HomePageContainer} /> 
				<PrivateRoute exact path="/user/:id" component={ProfilePageContainer} />
				<PrivateRoute exact path="/timeline" component={TimelineContainer} />
				<PrivateRoute exact path="/user/:id/edit" component={ProfileEditContainer} />
				<PrivateRoute exact path="/user/:id/connections" component={ConnectionsContainer}/>
			</Switch>
		</Fragment>
	);
}

export default App;
