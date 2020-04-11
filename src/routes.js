import React from 'react';
import {Switch,Route} from "react-router-dom";
import NotFound from "./components/not_found";
import Home from "./home";
import Helmet from "react-helmet";

const Routes = () => {
    const basUrl = window.location.href;
    return (
        <div>
            <Helmet>
                 <meta name="description" content="I am a conscientious person who works hard and pays attention to details."/>
                <meta name="keywords" content="developer,cv,portfolio"/>
                <meta name="author" content="Vahagn Ulikhanyan"/>
              <meta property="og:url"                content="https://vahagn85.github.io/potfolio/" />
                <meta property="og:type"               content="potfolio" />
               <meta property="og:title"              content="Vahagn Ulikhanyan - Portfolio" />
               <meta property="og:description"        content="I am a conscientious person who works hard and pays attention to details. I am flexible, quick to pick up new skills and eager to learn from others." />
                <meta property="og:image"              content={`${basUrl}logo-social.jpg`} />
                <title>Vahagn Ulikhanyan - Portfolio</title>
            </Helmet>
            <Switch>
                <Route exact path="/potfolio" component={Home} />
                <Route component={NotFound} />
            </Switch>
        </div>
    );
};

export default Routes;