import React, {Component} from 'react';
import Me from "../../resources/images/men.png";

import IconDownload from "../../resources/images/download-icon.png";
import IconDown from '../../resources/images/arrow-down-icon.png'
import Header from "../header";
import {LanguageConsumer, TranslatableText} from "../../home";
import {Link} from 'react-router-dom'
import cvAm from '../../resources/cv/vahagn-am.pdf'
import cvEn from '../../resources/cv/vahagn-en.pdf'

class Developer extends Component {
    state = {
        open: false
    }
    handlerOpen = (ev) => {
        this.setState({
            open: !this.state.open
        })
    }

    renderContactInfo() {
        return(
            <div className="dev_contact_info">
                <div className="dev_contact_single">
                    <TranslatableText
                        dictionary={{
                            english: this.props.data.en.tel,
                            armenian: this.props.data.am.tel,
                        }}
                    />
                </div>
                <div className="dev_contact_single">
                    <TranslatableText
                        dictionary={{
                            english: this.props.data.en.email,
                            armenian: this.props.data.am.email,
                        }}
                    />
                    : <a href="mailto:v.ulikhanyan@yandex.com">V.Ulikhanyan@yandex.com</a>
                </div>
                <div className="dev_contact_single">
                    <TranslatableText
                        dictionary={{
                            english: this.props.data.en.social,
                            armenian: this.props.data.am.social,
                        }}
                    />

                    : <Link to={{
                    pathname:"https://web.facebook.com/vahagn.ulikhanyan"
                }} target={'_blank'} >
                    Facebook</Link>
                </div>
            </div>
        )
    }

    render() {
        const {open} = this.state
        const {data} = this.props
        const contactInfo = open
            ? this.renderContactInfo()
            : null;
        const styleInfo = open ? 'dev_info opened' : 'dev_info';
        const contacts = open ? <img src={IconDown} alt="icon"/>
            : <TranslatableText
                dictionary={{
                    english: data.en.contactMe,
                    armenian: data.am.contactMe,
                }}
            />;

        return (
            <div className="dev_wrapper" style={{
                background: `url(${Me}) no-repeat`,
                backgroundSize: 'cover',
                backgroundPosition: 'top'

            }}>

                <Header/>
                <div className={styleInfo}>
                    <h1 className="font-bold">
                        <TranslatableText
                            dictionary={{
                                english: data.en.firstName,
                                armenian: data.am.firstName,
                            }}
                        />
                        <br/>
                        <TranslatableText
                            dictionary={{
                                english: data.en.lastName,
                                armenian: data.am.lastName,
                            }}
                        />
                    </h1>

                    <div className="dev_prof font-bold">
                        <TranslatableText
                            dictionary={{
                                english: data.en.dev,
                                armenian: data.am.dev,
                            }}
                        />
                    </div>
                    <div className="dev_contact_cv">
                        <div className="dev_btn btn_contact" onClick={this.handlerOpen}>{contacts}</div>
                        <LanguageConsumer>
                            {
                                ({language}) => {
                                    const langCv = language === 'english'? cvEn:cvAm;
                                    const nameCv = language === 'english'? 'en':'am';
                                    return(
                                        <a href={langCv} download={'Vahagn-Ulikhanyan-cv-'+nameCv} className="dev_btn btn_cv">
                                            <span><img src={IconDownload} alt="icon-download"/></span>
                                            <TranslatableText
                                                dictionary={{
                                                    english: data.en.cv,
                                                    armenian: data.am.cv,
                                                }}
                                            />
                                        </a>
                                    )
                                }

                            }
                        </LanguageConsumer>
                    </div>
                </div>
                {contactInfo}
            </div>
        );
    }
}

export default Developer;