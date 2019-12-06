import React from 'react';
import ReactDOM from 'react-dom';
import {Route, BrowserRouter as Router, Switch, Redirect} from 'react-router-dom'
import App from './views/App';
import Categorie from './views/Categorie';
import Profil from './views/Profil';
import Help from './views/Help';
import Notfound from "./views/NotFound";

import './css/index.css';

import * as serviceWorker from './services/serviceWorker';

import UserAuth from "./services/UserAuth";

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
        UserAuth.isAuthenticated === 'true'
            ? <Component {...props} />
            : <Redirect to={{
                pathname: '/login',
                state: { from: props.location }
            }} />
    )} />
);

class Index extends React.Component {
    render () {
        return (
            <Router>
                <div className={"container"}>
                    <Switch>
                        {/*<PrivateRoute exact activeClassName="active" path="/???" component={???}/>*/}
                        <Route exact activeClassName="active" path="/" component={App}/>
                        <Route exact activeClassName="active" path="/categorie" component={Categorie}/>
                        <Route exact activeClassName="active" path="/profil" component={Profil}/>
                        <Route exact activeClassName="active" path="/help" component={Help}/>
                        {/*<Route activeClassName="active" path="/login" component={Login}/>*/}
                        {/*<Route activeClassName="active" path="/register" component={Register}/>*/}
                        <Route activeClassName="active" component={Notfound}/>
                    </Switch>
                </div>
            </Router>
        );
    }
}

ReactDOM.render(<Index/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
