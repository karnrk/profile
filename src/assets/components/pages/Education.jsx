import HeaderSection from '../HeaderSection';
import SkillCard from '../SkillCard';
import Timeline from '../Timeline';
import Ducat from '../../images/ducat.png';
import IGNOU from '../../images/IGNOU-Symbol.png';

const Education = () => {
    const currentYear = new Date().getFullYear();
    const cmsPlatform = [
        {
            name: "HubSpot (CMS)",
            icon: "fa-brands fa-hubspot",
            color: "rgb(240, 80, 50)",
            percentage: 80,
            experience: `${currentYear - 2019}`
        },
        {
            name: "Webflow",
            icon: "fa-brands fa-webflow",
            color: "rgb(71, 162, 72)",
            percentage: 70,
            experience: 1
        }
    ];
    const skillsData = [
        {
            name: "HTML 5",
            icon: "fa-brands fa-html5",
            color: "rgb(227, 79, 38)",
            percentage: 95,
            description: "I am proficient in HTML5 for building structured web pages.",
            experience: `${currentYear - 2019}`
        },
        {
            name: "CSS 3",
            icon: "fa-brands fa-css3-alt",
            color: "rgb(21, 114, 182)",
            description: "I can create responsive and visually appealing designs using CSS3.",
            percentage: 90,
            experience: `${currentYear - 2019}`
        },
        {
            name: "JavaScript ES6+",
            icon: "fa-brands fa-js",
            color: "rgb(247, 223, 30)",
            percentage: 85,
            experience: `${currentYear - 2019}`,
            description: "Mastered JavaScript ES6+ for dynamic and interactive web applications."
        },
        {
            name: "React",
            icon: "fa-brands fa-react",
            color: "rgb(97, 218, 251)",
            percentage: 75,
            experience: 2,
            description: "Complete understanding of React for building modern web applications.",
        },
        {
            name: "Bootstrap 5+",
            icon: "fa-brands fa-bootstrap",
            color: "rgb(121, 82, 179)",
            percentage: 50,
            experience: 2,
            description: "Good understanding of Bootstrap for responsive design.",
        }
    ];
    const backend = [
        {
            name: "Git",
            icon: "fa-brands fa-git",
            color: "rgb(240, 80, 50)",
            percentage: 50,
            experience: 1
        },
        {
            name: "MongoDB",
            icon: "fa-solid fa-server",
            color: "rgb(71, 162, 72)",
            percentage: 50,
            experience: 1
        },
        {
            name: "Node js",
            icon: "fa-brands fa-node-js",
            color: "rgb(247, 223, 30)",
            percentage: 50,
            experience: 1
        }
    ];
    const educationData = [
        {
            avatar: `${Ducat}`,
            avatarAlt: "Ducat",
            degree: "Mern Stack",
            field: "Front-end development",
            institution: "Ducat",
            startMonth: "Sep",
            startYear: "2022",
            endMonth: "Jan",
            endYear: "2023",
            description:
                "The coursework includes Software Learning, deep learning designing, languages etc.",
            tags: ["MongoDB", "Express JS", "React JS", "Node JS"]
        },
        {
            avatar: `${Ducat}`,
            avatarAlt: "Ducat",
            degree: "Website Designer",
            field: "Front-end development",
            institution: "Ducat",
            startMonth: "Feb",
            startYear: "2018",
            endMonth: "May",
            endYear: "2018",
            tags: ["HTML, HTML5", "CSS, CSS3", "Javascript", "Jquery"]
        },
        {
            avatar: `${IGNOU}`,
            avatarAlt: "IGNOU",
            degree: "MCA",
            field: "in Computer Science",
            institution: "IGNOU (Indira Gandhi National Open University)",
            description:
                "The coursework includes Software Learning, deep learning designing, languages, flow charts etc."
        },
        {
            avatar: `${IGNOU}`,
            avatarAlt: "IGNOU",
            degree: "BCA",
            field: "in Computer Science",
            institution: "IGNOU (Indira Gandhi National Open University)",
            description:
                "Completed a comprehensive Bachelor's program focused on cutting-edge topics."
        }
    ];
    return (
        <>
            <HeaderSection prefix="This is my" titlestart="Skills and Education" titleend="Background"/>
            <div className="section-body">
                <SkillCard mainHeading="Skills"  title="CMS Platform" skills={cmsPlatform} />
                <SkillCard title="Frontend Stack" skills={skillsData} />
                <SkillCard title="Backend Stack" skills={backend} />
                <Timeline mainHeading="Educations" items={educationData} />
            </div>

        </>
    )
}

export default Education