import React from 'react';
import {TranslatableText} from "../../home";

const AboutMe =(props)=> {
        const {data} = props;
    return (
            <div className="about_me">
                <h2>
                    <TranslatableText
                    dictionary={{
                        english: data.en.title,
                        armenian: data.am.title,
                    }}
                />
                </h2>
                <p className="text_info">
                    <TranslatableText
                        dictionary={{
                            english: data.en.desc,
                            armenian: data.am.desc,
                        }}
                    />
                </p>
            </div>
        );
};
export default AboutMe;