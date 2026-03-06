import Timeline from '../Timeline';
import HeaderSection from '../HeaderSection';

const Experience = () => {
    const experienceData = [
        {
            degree: "HubSpot Developer",
            field: "",
            institution: "Uplers/Mavlers",
            startMonth: "Nov",
            startYear: "2024",
            endMonth: "Feb",
            endYear: "2026",
            description:"Work on HubSpot Websites, Migrations, GSAP Animtion HubDB etc.",
            tags: ["HubSpot","Hubl", "HubDB","Webflow", "JQuery", "Javascript"]
        }, {
            degree: "Website Developer",
            field: "",
            institution: "Prodigitas IT Services Pvt. Ltd",
            startMonth: "Nov",
            startYear: "2022",
            endMonth: "Nov",
            endYear: "2024",
            description: "Successfully contributed to diverse client projects in a supportive and dynamic environment. Expanded proficiency in HubSpot, including working on templates and email templates. Explored and implemented new content management systems (CMS) such as Marketo and WebFlow. Played a pivotal role in developing Marketo emails for a significant MNC project.",
            tags: ["HubSpot", "Hubl", "HubDB", "JQuery", "Javascript", "Marketo"]
        }, {
            degree: "HubSpot Developer",
            field: "",
            institution: "The Web Plant Pvt. Ltd",
            startMonth: "March",
            startYear: "2019",
            endMonth: "Nov",
            endYear: "2022",
            description: "Collaborated on multiple website development projects using HubSpot. Acquired expertise in HUBL code and various aspects of HubSpot development.",
            tags: ["HubSpot", "HubDB", "JQuery", "Javascript"]
        },{
            degree: "Web developer",
            field: "",
            institution: "IParable",
            startMonth: "Freelance",
            startYear: "",
            endMonth: "",
            endYear: "",
            description: "Contributed to the development of an HR portal, specialising in front-end development. Collaborated with the backend team utilising PHP.",
            tags: ["Javascript", "BootStrap", "JQuery"]
        }
    ]

    return (
        <>
            <HeaderSection
                prefix="Summary of my" titlestart="Work Experience" titleend="Background"
            />
            <div className="section-body">
                <Timeline items={experienceData} className="exp-timeline" />
            </div>

        </>
    )
}

export default Experience