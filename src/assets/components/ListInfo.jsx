import React from 'react';
import { fadeInUp } from "./animations/customAnimation";
import { Reveal } from "react-awesome-reveal";

const ListInfo = ({ title, items }) => {
    return (
        <article className="article article-spacing-default article-info-list">
            <h4 className="article-title text-4xl mb-8">
                <span className="article-title-prefix eq-h3 ms-1 me-2 pe-1">|</span>
                <span className="article-title-text mb-0">
                    {title?.normal} <span style={{ color: "var(--primary-color)" }}>{title?.highlight}</span>
                </span>
            </h4>

            <div className="article-content text-4">
                <div className="article-info-list-items flex flex-1/2 flex-wrap gap-6" id="article-4-section-about">
                    {items.map((item, index) => (
                        <Reveal keyframes={fadeInUp} duration={1000} delay={200} triggerOnce key={index}>
                            <div className="article-info-list-item" key={index}>
                                <div className="avatar-view article-info-list-item-avatar">
                                    <div className="avatar-icon-view">
                                        <i className={item.icon}></i>
                                    </div>
                                </div>
                                <div className="article-info-list-item-content">
                                    <div className="article-info-list-item-info-title text-4 font-bold">
                                        {item.titleNormal}{" "}
                                        <span style={{ color: "var(--primary-color)" }}>{item.titleHighlight}</span>
                                    </div>
                                    <p className="article-info-list-item-info-text text-3">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </article>
    )
}

export default ListInfo