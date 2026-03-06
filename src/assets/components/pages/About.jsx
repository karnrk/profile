import { Link } from 'react-router-dom';
import ProfileImage from "../../images/RK.png";
import HeaderSection from '../HeaderSection';
import ListInfo from '../ListInfo';
import { fadeInUp } from "../animations/customAnimation";
import { Reveal } from "react-awesome-reveal";
import ProjectSlider from "../ProjectSlider";
import Spur from '../../images/Spur.png';
import Newsroom from '../../images/Newsroom-Trinity-Energy-Discover.png';
import ProfessionalServices from '../../images/Professional-Services.png';
import Technotech from '../../images/technotech.png';
import Flavor from '../../images/Flavor.png';
import Aersale from '../../images/aersale.jpg';


const About = () => {
  const interestsData = {
    title: {
      normal: "Personal",
      highlight: "Interests"
    },
    items: [
      {
        icon: "fa-solid fa-hexagon-nodes",
        titleNormal: "AI",
        titleHighlight: "Tools",
        description: "Learning to use AI tools to enhance my skill and knowledge. ChatGPT, Claude, Cursor etc."
      },
      {
        icon: "fa-solid fa-baseball-bat-ball",
        titleNormal: "Playing",
        titleHighlight: "Cricket",
        description: "Playing whenever I get time."
      },
      {
        icon: "fa-solid fa-bicycle",
        titleNormal: "Travelling",
        titleHighlight: "World",
        description: "Historical and regional places."
      }
    ]
  };
  const sectionTitle = {
    title: {
      normal: "Feature",
      highlight: "Project"
    }
  }

  const projectData = [
  {
    projectname: "Spur Marketplace Theme",
    websitelink: "https://themes.prodigitas.com/spur-home",
    imgSrc:Spur
  },
  {
    projectname: "Flavor Marketplace Theme",
    websitelink: "https://themes.prodigitas.com/flavor-home",
    imgSrc:Flavor
  },
  {
    projectname: "Professional Services Theme",
    websitelink: "https://www.prodigitas.com/professional-services-home-page",
    imgSrc:ProfessionalServices
  },
    {
    projectname: "Newsroom - Trinity Energy",
    websitelink: "https://www.trinityenergy.com/newsroom",
    imgSrc: Newsroom
  },
    {
    projectname: "Technotech (Marketplace Theme)",
    websitelink: "https://themes.prodigitas.com/home-page",
    imgSrc:Technotech
  },
  {
    projectname: "Aersale",
    websitelink: "https://www.aersale.com/",
    imgSrc:Aersale
  }
];
  return (
    <>
      <HeaderSection 
        prefix="Hello..." titlestart="I'm" titleend="Rahul Kumar!"
      />
      
        <div className='section-body'>
          <Reveal keyframes={fadeInUp} duration={1000} delay={200} triggerOnce>
            <article className='article article-spacing-small article-inline-list'>
              <div className='article-content'>
                <ul className="article-inline-list-items flex-wrap">
                  <li className="article-inline-list-item text-1xl">
                    <Link to="" className="link-no-href cursor-default" draggable="false" style={{ color: 'var(--tertiary-color)' }}>
                      <i className="article-inline-list-item-icon fa-solid fa-location-dot"></i>
                      <span className="article-inline-list-item-label">India – Bihar</span>
                    </Link>
                  </li>
                  <li className="article-inline-list-item text-1xl">
                    <Link to="mailto:mark.choi@dev.com" data-tooltip="E-mail Me" draggable="false">
                      <i className="article-inline-list-item-icon fa-regular fa-envelope"></i>
                      <span className="article-inline-list-item-label">karnrk5@gmail.com</span>
                    </Link>
                  </li>
                  <li className="article-inline-list-item text-1xl">
                    <Link to="https://github.com/karnrk" data-tooltip="See on GitHub" draggable="false"
                      target='_blank' >
                      <i className="article-inline-list-item-icon fa-brands fa-github"></i>
                      <span className="article-inline-list-item-label">@karnrk</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </article>
          </Reveal>
          <Reveal keyframes={fadeInUp} duration={1000} delay={200} triggerOnce>
              <article className="article article-spacing-default article-text">
                <h4 className="article-title text-4xl mb-8">
                  <span className="article-title-prefix eq-h3 ms-1 me-2 pe-1">|</span>
                  <span className="article-title-text mb-0">
                    <span style={{ color: "var(--primary-color)" }}>A little bit</span> about me...</span>
                </h4>
                <div className="article-content text-4">
                  <div className="article-text-items">
                    <div className="article-text-item flex justify-between align-middle items-center gap-15">
                      <div className="article-text-avatar-view-wrapper w-full sm:w-1/2 lg:w-1/3">
                        <div className="article-text-avatar-view">
                          <div className="image-view avatar-view-image-view">
                            <img alt="item-1" className="image-view-img visible image-view-img image-view-img-loaded"
                              src={ProfileImage} />
                          </div>
                        </div>
                      </div>
                      <div className="article-text-excerpt last-p-no-margin text-gray-300">
                        <p>I’m a <span style={{ color: "var(--primary-color)" }} className='font-bold'>Website Developer</span> with strong expertise in <span className='font-bold' style={{ color: "var(--primary-color)" }}>HTML5, CSS3, JavaScript, jQuery, React and HubL</span> — the templating language used in HubSpot. Over the years, I’ve built a variety of websites, implementing interactive features.</p>
                        <p>
                          My background in both front-end development and HubSpot CMS customization enables me to create responsive, high-performance websites tailored to unique business needs.</p>
                        <p>I look forward to bringing your vision to life!</p>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
            
            <Reveal keyframes={fadeInUp} duration={1000} delay={200} triggerOnce>
              <ProjectSlider projects={projectData} title={sectionTitle.title}/>
            </Reveal>
          <ListInfo title={interestsData.title} items={interestsData.items} />
        </div>
    </>
  )
}

export default About