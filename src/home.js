import React, {Component} from 'react';
import AboutMe from "./components/about_me";
import Developer from "./components/developer";
import Education from "./components/education";
import Works from "./components/works";
import Portfolio from "./components/portfolio";
import Skills from "./components/skills";
import {Element} from 'react-scroll'
import Data from "./data/alldata";
const LanguageContext = React.createContext();
export const LanguageConsumer = LanguageContext.Consumer;

class LanguageProvider extends Component {
    state = {
        language: "english"
    };
    updateLanguage = lang => {
        this.setState({ language: lang });
    };
    render() {
        return (
            <LanguageContext.Provider
                value={{
                    language: this.state.language,
                    updateLanguage: this.updateLanguage
                }}
            >
                {this.props.children}
            </LanguageContext.Provider>
        );
    }
}
export const TranslatableText = props => {
    return(
    <LanguageConsumer>
        {
            ({ language }) => props.dictionary[language]
        }
    </LanguageConsumer>
)};
const Home =()=> {
        return (
            <LanguageProvider>
                <div className="main_content">
                    <div className="left_content">
                        <div className="main_info">
                            <Element name="aboutMe">
                                <AboutMe data={Data.aboutMe}/>
                            </Element>
                            <Element name="education">
                                <Education data={Data.education}/>
                            </Element>
                            <Element name="works">
                                <Works data={Data.works}/>
                            </Element>
                            <Element name="skills">
                                <Skills/>
                            </Element>
                            <Element name="portfolio">
                                <Portfolio data={Data.portfolio}/>
                            </Element>
                        </div>
                    </div>
                    <div className="right_content">
                        <Developer data={Data.development}/>
                    </div>
                </div>
            </LanguageProvider>
        );
};

export default Home;
