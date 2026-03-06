import React from "react";
import { fadeInUp } from "./animations/customAnimation";
import { Reveal } from "react-awesome-reveal";

const Timeline = ({ items, mainHeading, className }) => {
  return (
    <>
      <article className={`article article-spacing-default article-timeline ${className || ""}`}>
        {mainHeading && (
          <>
            <h4 className="article-title text-4xl mb-8">
              <span className="article-title-prefix eq-h3 ms-1 me-2 pe-1">|</span>
              <span className="article-title-text mb-0">{mainHeading}</span>
            </h4>
          </>
        )}
        <div className="article-content text-4x1">
          <ul className="article-timeline-items">
            {items.map((item, index) => (
              <Reveal key={index} keyframes={fadeInUp} duration={1000} delay={200} triggerOnce>
                <li className="article-timeline-item " key={index}>
                  {/* Avatar */}
                  {item.avatar && (
                    <>
                      <div className="avatar-view article-timeline-item-avatar">
                        <div className="image-view avatar-view-image-view">
                          <img
                            className="image-view-img visible image-view-img image-view-img-loaded"
                            src={item.avatar}
                            alt={item.avatarAlt}
                          />
                        </div>
                      </div>
                    </>
                  )}
                  {/* Timeline Content */}
                  <div className="article-timeline-item-info-for-timelines article-timeline-item-content">
                    <div className="article-timeline-item-info-for-timelines-header">
                      <div className="article-timeline-item-info-for-timelines-header-title">
                        <h5>
                          <span style={{ color: "var(--primary-color)" }}>
                            {item.degree}
                          </span>{" "}
                          {item.field}
                        </h5>

                        {/* Date Badge */}
                        <div className="date-badge-wrapper date-badge-wrapper-default article-timeline-item-info-for-timelines-header-date-badge">
                          <div className="info-badge date-badge w-100">
                            {(item.startMonth || item.startYear) && (
                              <>
                                <i className="fa-regular fa-calendar fa-icon"></i>
                                <span>
                                  {item.startMonth} <strong>{item.startYear}</strong>
                                </span>
                              </>
                            )}

                            {(item.endMonth || item.endYear) && (
                              <>
                                <i className="fa-solid fa-arrow-right-long mx-2 opacity-75"></i>
                                <span>
                                  {item.endMonth} <strong>{item.endYear}</strong>
                                </span>
                              </>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* University / Org */}
                      <ul className="prop-list prop-list-inline article-timeline-item-info-for-timelines-header-prop-list text-1">
                        <li className="prop-list-item font-italic text-gray-400">
                          <i
                            className="fa-icon fa-regular fa-building"
                            style={{ minWidth: "30px" }}
                          ></i>
                          <span>{item.institution}</span>
                        </li>
                      </ul>
                    </div>

                    {/* Body */}
                    <div className="article-timeline-item-info-for-timelines-body">
                      <div className="article-timeline-item-info-for-timelines-body-text text-3">
                        {item.description}
                      </div>
                    </div>

                    {/* Tags */}
                    {item.tags && item.tags.length > 0 && (
                      <div className="article-timeline-item-info-for-timelines-tags-footer">
                        <ul className="tags article-timeline-item-info-for-timelines-tags-footer-tag-list">
                          {item.tags.map((tag, i) => (
                            <li
                              key={i}
                              className="tag article-timeline-item-info-for-timelines-tags-footer-tag text-1 tag-default"
                            >
                              {tag}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </li>
              </Reveal>
            ))}
            <Reveal className="article-timeline-item article-timeline-item-trailing" keyframes={fadeInUp} duration={1000} delay={200} triggerOnce>
              <div className="avatar-view article-timeline-item-avatar">
                <div className="avatar-icon-view">
                  <i className=""></i>
                </div>
              </div>
            </Reveal>
          </ul>
        </div>
      </article>
    </>
  );
};

export default Timeline;
