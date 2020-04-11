import React from 'react';
import Fade from 'react-reveal/Fade'
import {TranslatableText} from "../../home";
import {Link} from "react-router-dom";

const Portfolio =(props)=> {
    function importAll(r) {
        return r.keys().map(r);
    }
    const images = importAll(require.context('../../resources/images/portfolio/', false, /\.(png|jpe?g|svg)$/));
    const renderPortfolio = () => {
        return (
            <div className="portfolio_wrap">
                {props.data.web.map(item => {
                    let photoName = '';
                    for (let i=0;i<images.length;i++){
                        if(images[i].includes(item.photo)){
                            photoName = images[i]
                        }
                    }
                    return (
                        <div className="col_6" key={item.id}>
                            <Link to={{
                                pathname:item.url
                            }} className="portfolio_single" target="_blank">
                                <img src={photoName} alt={`${item.name}-web`} className="portfolio_web_photo"/>
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