import React from 'react';
import Fade from 'react-reveal/Fade'
import {TranslatableText} from "../../home";
import {Link} from "react-router-dom";

const Portfolio =(props)=> {
    const renderPortfolio = () => {
        return (
            <div className="portfolio_wrap">
                {props.data.web.map(item => {
                    return (
                        <div className="col_6" key={item.id}>
                            <Link to={{
                                pathname:item.url
                            }} className="portfolio_single" target="_blank">
                                <img src={`/${item.photo}-web.jpg`} alt={`${item.name}-web`} className="portfolio_web_photo"/>
                                <div className="portfolio_inner">
                                    <span className="portfolio_web_name font-bold">{item.name}</span>
                                </div>
                            </Link>
                        </div>
                    )
                })}
            </div>
        )
    };
        return (
            <Fade>
                <div className="portfolio_wrapper">
                    <h2>
                        <TranslatableText
                            dictionary={{
                                english: props.data.en.title,
                                armenian: props.data.am.title,
                            }}
                        />
                    </h2>
                    {renderPortfolio()}
                </div>
            </Fade>
        );
};

export default Portfolio;