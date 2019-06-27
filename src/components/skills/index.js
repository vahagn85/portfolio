import React, {Component} from 'react';
import ProgressBar from "../utils/progress_bar";
import Data from '../../data/alldata';
import Reveal from 'react-reveal/Reveal'
import {LanguageConsumer, TranslatableText} from "../../home";

class Skills extends Component {
    state = {
        maxpercent:0,
        skilldev: Data.skilldev,
        skilldesign: Data.skilldesign,
    }

    renderProgressBar = (skill) => {
        return (
            this.state[skill].map(item => {
                return (
                    <ProgressBar key={item.id} label={item.label} percent={item.startpercent}/>
                )
            })
        )

    }
    changPercent=()=>{
        const newDev=[...this.state.skilldev]
        const newDesign=[...this.state.skilldesign]
        // console.log(newArray);
        newDev.forEach(item=>{
            if(item.startpercent<item.endpercent){
                item.startpercent = item.startpercent+1
            }
        })
        newDesign.forEach(item=>{
            if(item.startpercent<item.endpercent){
                item.startpercent = item.startpercent+1
            }
        })
        // console.log(55);
        this.setState({
            skilldev:newDev,
            skilldesign:newDesign,
            maxpercent:this.state.maxpercent + 1
        })
    }
    componentDidUpdate(){
        if(this.state.maxpercent<100){
            setTimeout(()=>{
                this.changPercent()
            },25)
        }
    }
    renderTitle(title,secTitle){
        return(
            <h3>
                <span className="skills_wrapper_title">
                    <TranslatableText
                        dictionary={{
                            english: Data.skills.en[title],
                            armenian: Data.skills.am[title],
                        }}
                    />
                </span>
                <span className="font-normal skills_wrapper_second_title">
                            <TranslatableText
                                dictionary={{
                                    english: Data.skills.en[secTitle],
                                    armenian: Data.skills.am[secTitle],
                                }}
                            />
                </span>
            </h3>
        )
    }
    render() {
        return (
            <Reveal onReveal={() => this.changPercent() }>
            <div className="skills_wrapper">
                <div className="skills_left">
                    {this.renderTitle('title','devTitle')}
                    {this.renderProgressBar('skilldev')}
                </div>
                <div className="skills_right">
                    {this.renderTitle('title','desTitle')}
                    {this.renderProgressBar('skilldesign')}
                    <div className="skills_lang">
                        {this.renderTitle('title','langTitle')}
                        <LanguageConsumer>
                            {
                                ({language}) => {
                                    const lang = language === 'english' ? 'en' : 'am';
                                    // console.log(Data.lang[lang]);
                                    return (
                                        Data.lang[lang].lng.map(item => {
                                            return (
                                                <div key={item.id} className="skills_lang_single">
                                                    <span>{item.title}</span>
                                                    <span className="know">{item.know}</span>
                                                </div>
                                            )
                                        })
                                    )
                                }
                            }
                        </LanguageConsumer>
                    </div>
                </div>
            </div>
            </Reveal>
        );
    }
}

export default Skills;