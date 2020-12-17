import React from 'react'
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { ContextProvider } from "./context/GamestashContext";
import LandingPage from './routes/LandingPage/LandingPage'
import Dashboard from './routes/Dashboard/Dashboard'
import ConsolePage from './routes/ConsolePage/ConsolePage'
import Header from './components/Header/Header'

const App = () => {
    return (
        <ContextProvider>
        <div>
            <Header />
            <Router>
                <Switch>
                    <Route exact path="/" component={LandingPage} />
                    <Route exact path="/dashboard" component={Dashboard} />
                    <Route exact path="/consoles/:id" component={ConsolePage} />
                </Switch>
            </Router>
        </div>
        </ContextProvider>
    )
}

export default App;