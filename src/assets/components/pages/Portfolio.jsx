import HeaderSection from '../HeaderSection';
import Projects from '../pages/Projects';
import Spur from '../../images/Spur.png';
import Newsroom from '../../images/Newsroom-Trinity-Energy-Discover.png';
import ProfessionalServices from '../../images/Professional-Services.png';
import Technotech from '../../images/technotech.png';
import Flavor from '../../images/Flavor.png';
import ShreeChitragupat from '../../images/Shree-Chitragupat-Ji.png';
import Hexagroup from '../../images/HexaGroup.png';
import Pricing from '../../images/Pricing-Plans-Facility-Visitor-Management.png';
import DareToBeDifirent from '../../images/Onze-verkooppunten-Dare-to-be-Different.png';
import Zipit from '../../images/Zipit.png';
import Sunsrise from '../../images/Sunrise-SESA.jpg';

const projectData = [
  {
    projectname:"Spur (Marketplace Theme)",
    cat: "HubSpot",
    websitelink: "https://themes.prodigitas.com/spur-home",
    imgSrc:Spur,
    description: {
      overview: "A premium HubSpot marketplace theme designed for businesses to showcase customizable service plans and marketing solutions.",
      role: "Work for Prodigitas | Website Developer",
      contributions: [
        "Developed reusable UI components",
        "Built responsive layouts using modern CSS practices",
        "Implemented dynamic content modules for HubSpot CMS",
        "Optimized theme performance and accessibility"
      ],
      techStack: ["HTML", "CSS", "JavaScript", "HubSpot CMS"]
    }
  },

  {
    projectname:"Flavor (Marketplace Theme)",
    cat: "HubSpot",
    websitelink: "https://themes.prodigitas.com/flavor-home",
    imgSrc:Flavor,
    description: {
      overview: "A visually engaging food and restaurant website focused on product presentation and user-friendly browsing experience.",
      role: "Work for Prodigitas | Website Developer",
      contributions: [
        "Designed responsive product grid layout",
        "Developed reusable card components",
        "Optimized images and performance",
        "Ensured cross-device compatibility"
      ],
      techStack: ["HTML", "CSS", "JavaScript", "HubSpot CMS"]
    }
  },

  {
    projectname:"Professional Services (Marketplace Theme)",
    cat: "HubSpot",
    websitelink:"https://www.prodigitas.com/professional-services-home-page",
    imgSrc:ProfessionalServices,
    description: {
      overview: "A corporate service platform built to showcase company expertise, projects, and client results.",
      role: "Work for Prodigitas | Website Developer",
      contributions: [
        "Implemented project filtering functionality",
        "Designed structured service sections",
        "Built responsive UI components",
        "Maintained clean and scalable code structure"
      ],
      techStack:["HTML", "CSS", "JavaScript", "HubSpot CMS"]
    }
  },

  {
    projectname:"Newsroom - Trinity Energy",
    cat: "Webflow",
    websitelink: "https://www.trinityenergy.com/newsroom",
    imgSrc:Newsroom,
    description: {
      overview: "An official newsroom platform developed for Trinity Energy to manage and publish company updates, images, and videos.",
      role: "Work for Mavlers | HubSpot Developer",
      contributions: [
        "Built media gallery (images & videos)",
        "Implemented dynamic content rendering",
        "Created reusable content cards",
        "Optimized UI for performance and usability"
      ],
      techStack: ["HTML", "CSS", "JavaScript", "Webflow", "Plugins"]
    }
  },

  {
    projectname:"Technotech (Marketplace Theme)",
    cat: "HubSpot",
    websitelink: "https://themes.prodigitas.com/home-page",
    imgSrc:Technotech,
    description: {
      overview: "A premium HubSpot marketplace theme designed for technology companies to highlight services, solutions, and digital products.",
      role: "Work for Prodigitas | Website Developer",
      contributions: [
        "Designed clean dashboard layout",
        "Developed analytics/statistics cards",
        "Built interactive UI components",
        "Ensured full responsiveness across devices"
      ],
      techStack:["HTML", "CSS", "JavaScript", "HubSpot CMS"]
    }
  },

  {
    projectname:"Collection app",
    cat: "React",
    websitelink: "https://shreechitragupat.vercel.app/",
    imgSrc:ShreeChitragupat,
    description: {
      overview: "A digital collection management platform created to organize and display categorized items in a structured interface.",
      role: "Learning website | Frontend Developer",
      contributions: [
        "Developed dynamic collection components",
        "Structured data presentation layout",
        "Implemented responsive design",
        "Enhanced user experience with clean UI"
      ],
      techStack: ["React.js", "Tailwind CSS", "MongoDB", "Node.js", "Express.js"]
    }
  },

  {
    projectname:"Zipit",
    cat: "HubSpot",
    websitelink: "https://www.zipitwireless.com/",
    imgSrc:Zipit,
    description: {
      overview: "A corporate website built for Zipit Wireless to showcase IoT messaging devices, communication solutions, and enterprise services.",
      role: "Work for Prodigitas | HubSpot Developer",
      contributions: [
        "Developed custom HubSpot modules",
        "Implemented responsive page layouts",
        "Optimized website performance",
        "Maintained CMS structure for easy content updates"
      ],
      techStack: ["HTML", "CSS", "JavaScript", "HubSpot CMS"]
    }
  },

  {
    projectname:"Hexagroup",
    cat: "HubSpot",
    websitelink: "https://www.hexagroup.com/",
    imgSrc:Hexagroup,
    description: {
      overview: "A marketing and growth consulting website designed to present services, strategies, and business solutions.",
      role: "Work for Mavlers | HubSpot Developer",
      contributions: [
        "Developed custom CMS modules",
        "Implemented responsive UI components",
        "Optimized website layout for performance",
        "Ensured consistent design across pages"
      ],
      techStack: ["HTML", "CSS", "JavaScript", "HubSpot CMS"]
    }
  },

  {
    projectname:"Pricing Plans Table",
    cat: "HubSpot",
    websitelink: "https://www.facilityos.com/pricing",
    imgSrc:Pricing,
    description: {
      overview: "A dynamic pricing comparison table designed to present subscription plans and feature comparisons clearly.",
      role: "Work for Prodigitas | HubSpot Developer",
      contributions: [
        "Built responsive pricing table layout",
        "Implemented feature comparison UI",
        "Ensured mobile-friendly table design",
        "Optimized code for maintainability"
      ],
      techStack: ["HTML", "CSS", "JavaScript", "HubSpot CMS"]
    }
  },

  {
    projectname:"Dare to be Different (Dynamic data using HubDB and location data)",
    cat: "HubSpot",
    websitelink: "https://www.dtbdoutdoor.eu/dealers",
    imgSrc:DareToBeDifirent,
    description: {
      overview: "A dealer locator platform that dynamically displays dealer locations using HubDB and location-based filtering.",
      role: "Work for Prodigitas | HubSpot Developer",
      contributions: [
        "Integrated HubDB dynamic data",
        "Developed dealer listing components",
        "Implemented location-based filtering",
        "Optimized UI for better user navigation"
      ],
      techStack: ["HTML", "CSS", "JavaScript", "HubL", "HubDB"]
    }
  },
  {
    projectname:"Sunrise SESA",
    cat: "HubSpot",
    websitelink: "https://www.sunrisesystems.com/",
    imgSrc:Sunsrise,
    description: {
      overview: "A corporate website for Sunrise Systems to present IT services, consulting solutions, and global operations.",
      role: "Work for Mavlers | HubSpot Developer",
      contributions: [
        "Developed responsive CMS templates",
        "Created reusable HubSpot modules",
        "Improved page performance and structure",
        "Ensured cross-browser compatibility"
      ],
      techStack: ["HTML", "CSS", "JavaScript", "HubSpot CMS"]
    }
  }
];
function Portfolio() {
  return (
    <>
      <HeaderSection 
      prefix="Projects" 
      titlestart="I am worked on these" 
      titleend="Projects"/>
      <Projects projects={projectData}/>
    </>
  )
}

export default Portfolio;
