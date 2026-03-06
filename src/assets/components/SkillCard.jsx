import { fadeInUp } from "./animations/customAnimation";
import { Reveal } from "react-awesome-reveal";

const SkillCard = ({ title,mainHeading, skills }) => {
  return (
    <article className="article article-spacing-default article-skills">
      {mainHeading && (
        <h4 className="article-title text-4xl mb-8">
          <span className="article-title-prefix eq-h3 ms-1 me-2 pe-1">|</span>
          <span className="article-title-text mb-0">{mainHeading}</span>
        </h4>
      )}
      <h4 className="article-title text-2xl mb-8 ml-3 latter-spacing-0" style={{ color: 'var(--primary-color)' }}>
        <span className="article-title-prefix eq-h3 ms-1 me-2 pe-1">|</span>
        <span className="article-title-text mb-0">{title}</span>
      </h4>

      <div className="article-content text-4x1">
        <div className="collapsable">
          <div className="collapsable-content article-skills-items article-skills-items-3-per-row">
            {skills.map((skill, index) => (
              <Reveal key={index} keyframes={fadeInUp} duration={1000} delay={200} triggerOnce>
                <div className="collapsable-item" key={index}>
                  <div className="article-skills-item">
                    {/* Avatar / Icon */}
                    <div className="article-skills-item-avatar-wrapper">
                      <div
                        className="avatar-view article-skills-item-avatar"
                        style={{ color: skill.color }}
                      >
                        <div className="avatar-icon-view">
                          <i className={skill.icon}></i>
                        </div>
                      </div>
                    </div>

                    {/* Skill Info */}
                    <div className="article-skills-item-info">
                      <div className="article-skills-item-title text-5">
                        <div className="article-skills-item-title-left-column">
                          <span className="article-skills-item-title-main">
                            {skill.name}
                          </span>
                        </div>
                        <div className="article-skills-item-title-right-column">
                          <span className="number-animation article-skills-item-title-percentage text-3">
                            {skill.percentage}%
                          </span>
                        </div>
                      </div>

                      {/* Progress Bar */}
                      <div className="article-skills-item-progress progress">
                        <div
                          className="progress-bar rounded-full transition-all duration-1 ease-out"
                          role="progressbar" 
                          aria-valuemin="0" 
                          aria-valuemax="100"
                          aria-valuenow={skill.percentage} style={{ width: `${skill.percentage}%` }}
                        ></div>
                      </div>

                      {/* Experience */}
                      <div className="article-skills-item-experience text-2">
                        <span>
                          <strong>{skill.experience}+</strong> years experience
                        </span>
                      </div>

                      {/* Description */}
                      <div className="article-skills-item-description text-2">
                        {skill.description}
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
};

export default SkillCard;
