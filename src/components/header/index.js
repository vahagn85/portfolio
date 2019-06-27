import React, {Component} from 'react';
import {scroller} from 'react-scroll'
import {LanguageConsumer, TranslatableText} from "../../home";
import './header.css'
import Logo from "../../resources/images/vahagn-logo.png";
import {CSSTransition} from 'react-transition-group';

class Header extends Component {
    state = {
        showBurger: false,
        offset:-150
    };
    scrollToElement = (element) => {
        scroller.scrollTo(element, {
            duration: 1000,
            delay: 100,
            smooth: true,
            offset: this.state.offset
        });
        this.setState({
            showBurger: false
        })
    };
    burgerHandler = () => {
        this.setState({
            showBurger: !this.state.showBurger
        })
    };
    changeOffset =()=>{
        let winWidth = window.innerWidth;
        if (winWidth<=992) {
            this.setState({
                offset:-20
            })
        }else {
            this.setState({
                offset:-150
            })
        }
    };
    componentDidMount() {
       this.changeOffset();
        window.onresize =  ()=> {
            this.changeOffset()
        }
    };

    componentDidUpdate() {
        if (this.state.showBurger) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'initial'
        }
    }

    render() {
        const clsBurger = ['burger'];
        const clsMenu = ['dev_menu'];
        if (this.state.showBurger) {
            clsBurger.push('active')
            clsMenu.push('opened')
        }
        return (
            <LanguageConsumer>
                {
                    ({language, updateLanguage}) => {
                        return (
                            <header id="header">
                                <div className="logo-burger">
                                    <img src={Logo} alt="logo" className="dev_logo"/>
                                    <div id="burger" className={clsBurger.join(' ')} onClick={this.burgerHandler}>
                                        <span id="sp1"/>
                                        <span id="sp2"/>
                                        <span id="sp3"/>
                                    </div>
                                </div>
                                <CSSTransition
                                    in={this.state.showBurger}
                                    timeout={3000}
                                    classNames="menuAnimate"
                                >
                                    <ul className={clsMenu.join(' ')}>
                                        <li>
                                    <span className="nav_link" onClick={() => this.scrollToElement('aboutMe')}>
                                         <TranslatableText
                                             dictionary={{
                                                 english: 'About me',
                                                 armenian: 'Իմ Մասին',
                                             }}
                                         />
                                    </span>
                                        </li>
                                        <li><span className="nav_link"
                                                  onClick={() => this.scrollToElement('education')}>
                                     <TranslatableText
                                         dictionary={{
                                             english: 'Education',
                                             armenian: 'Կրթություն',
                                         }}
                                     />
                                </span></li>
                                        <li><span className="nav_link" onClick={() => this.scrollToElement('works')}>
                                    <TranslatableText
                                        dictionary={{
                                            english: 'Work',
                                            armenian: 'Աշխատանք',
                                        }}
                                    />
                                </span></li>
                                        <li><span className="nav_link" onClick={() => this.scrollToElement('skills')}>
                                     <TranslatableText
                                         dictionary={{
                                             english: 'Skills',
                                             armenian: 'Հմտություններ',
                                         }}
                                     />
                                </span></li>
                                        <li><span className="nav_link"
                                                  onClick={() => this.scrollToElement('portfolio')}>
                                    <TranslatableText
                                        dictionary={{
                                            english: 'Portfolio',
                                            armenian: 'Պորտֆոլիո',
                                        }}
                                    />
                                </span></li>
                                        <li>
                                            {
                                                language === 'english' ?
                                                    <span className="nav_link"
                                                          onClick={() => updateLanguage('armenian')}>Հայ</span>
                                                    : <span className="nav_link"
                                                            onClick={() => updateLanguage('english')}>Eng</span>
                                            }

                                        </li>
                                    </ul>
                                </CSSTransition>
                            </header>
                        )
                    }
                }
            </LanguageConsumer>

        );
    }
}

export default Header;