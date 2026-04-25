import React, { useContext, useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { ThemeContext } from './contexts/ThemeContext';
import { Main, BlogPage, ProjectPage } from './pages'
import { BackToTop } from './components'
import ScrollToTop from './utils/ScrollToTop'
import CustomCursor from './components/CustomCursor/CustomCursor'
import LoadingScreen from './components/LoadingScreen/LoadingScreen'
import './App.css'

function App() {
    const { theme } = useContext(ThemeContext);
    const [loading, setLoading] = useState(true);

    console.log("%cDEVELOPER PORTFOLIO", `color:${theme.primary}; font-size:50px`);
    console.log("%chttps://github.com/hhhrrrttt222111/developer-portfolio", `color:${theme.tertiary}; font-size:20px`);

    return (
        <div className="app">
            {loading && (
                <LoadingScreen onComplete={() => setLoading(false)} />
            )}
            <CustomCursor />
            <Router>
                <ScrollToTop />
                <Switch>
                    <Route path="/" exact component={Main} />
                    <Route path="/blog" exact component={BlogPage} />
                    <Route path="/projects" exact component={ProjectPage} />
                    <Redirect to="/" />
                </Switch>
            </Router>
            <BackToTop />
        </div>
    );
}

export default App;