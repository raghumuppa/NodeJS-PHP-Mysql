import React from 'react';
import { Route, Switch } from 'react-router-dom';
import TestIfRoutesWorks from './components/TestIfRoutesWorks';
import Homepage from './components/Homepage';

const App: React.FC = () => {
    return (
        <div>
            <Switch>
                <Route path="/testIfRoutesWorks" exact component={TestIfRoutesWorks} />
                <Route path="/" exact component={Homepage} />
            </Switch>
        </div>
    );
};

export default App;
