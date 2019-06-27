import React from 'react';
import {LanguageConsumer, TranslatableText} from "../../home";
const Education =(props)=> {
    const renderEdu =()=> {
        return (
            <div className="edu_work_wrapper edu_wrap">
                <LanguageConsumer>
                    {
                        ({language}) => {
                            const lang = language === 'english' ? 'en' : 'am';
                            return (
                                props.data[lang].edu.map(item => {
                                    return (
                                        <div className="edu_work_single" key={item.id}>
                                            <span className="edu_work_title txt-cl-green">{item.title}</span>
                                            <p className="edu_work_info">{item.info}</p>
                                        </div>
                                    )
                                })
                            )
                        }
                    }
                </LanguageConsumer>
            </div>
        )
    }
        return (
            <div className="edu_wrapper">
                <h2>
                    <TranslatableText
                        dictionary={{
                            english: props.data.en.title,
                            armenian: props.data.am.title,
                        }}
                    />
                </h2>
                {renderEdu()}
            </div>
        );

}

export default Education;
