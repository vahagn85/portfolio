import React from 'react';
import {LanguageConsumer, TranslatableText} from "../../home";

const Works = (props) => {
    const {data} =props
    const renderWork=()=> {
        return (
            <div className="edu_work_wrapper works_wrap">
                <LanguageConsumer>
                    {
                        ({language}) => {
                            const lang = language === 'english' ? 'en' : 'am';
                            return (
                                data[lang].work.map(item => {
                                    return (
                                        <div className="edu_work_single" key={item.id}>
                                            <span className="edu_work_title txt-cl-green">{item.title}</span>
                                            <p className="edu_work_info">{item.info}</p>
                                            {item.content!==''?<p className="text_info">{item.content}</p>:null}
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
            <div className="works_wrapper">
                <h2>
                    <TranslatableText
                        dictionary={{
                            english: data.en.title,
                            armenian: data.am.title,
                        }}
                    />
                </h2>
                {renderWork()}
            </div>
        );
}

export default Works;