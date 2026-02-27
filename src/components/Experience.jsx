import useScrollReveal from '../hooks/useScrollReveal';

const experiences = [
    {
        role: 'Senior Application Developer',
        company: 'United Parcel Service (UPS)',
        location: 'Chennai',
        duration: 'Dec 2023 – Present',
        bullets: [
            'Developed the API HUB platform using Spotify\'s Backstage to govern and streamline API lifecycle management across the organization. Improved API governance folder creation efficiency by 30% using automated workflows.',
            'Integrated Swagger Editor for OpenAPI specification editing and validation, enhancing API documentation quality.',
            'Automated repository creation workflows, enabling seamless API lifecycle management. Saved 5+ hours/week in manual repository setup.',
            'Led initiatives to identify and resolve issues in OpenAPI specs, improving system reliability.',
        ],
        tech: ['Java', 'Node.js', 'React', 'GCP', 'Azure', 'Backstage', 'Swagger / OpenAPI'],
    },
    {
        role: 'Senior Full Stack Developer',
        company: 'Zumen Technologies',
        location: 'Chennai',
        duration: 'Nov 2019 – Dec 2023',
        bullets: [
            'Contributed to the development of a complete Procurement platform for manufacturing industries, comprising 100+ B2B software modules, from procurement to logistics and accounts payable. Boosted platform scalability to support 10K+ concurrent users.',
            'Joined as the first employee in 2019 and played a pivotal role in product development and growth. Delivered 20+ core feature enhancements within the first year.',
            'Trained and mentored 2 developers in front-end technologies, specifically React/Redux, fostering team growth.',
            'Developed and reviewed Java/JS code for full-stack applications using React and Spring Boot (REST APIs, GraphQL).',
            'Built Microservices using Spring Boot to ensure modular and scalable architecture.',
            'Integrated Material UI, AntD, and ag-grid libraries for enhanced UI/UX. Improved user engagement through optimized UI components.',
        ],
        tech: ['Java', 'Spring Boot', 'Node.js', 'React', 'Redux', 'MongoDB', 'PostgreSQL', 'AWS', 'GraphQL'],
    },
    {
        role: 'Full Stack Developer',
        company: 'Cognizant',
        location: 'Chennai',
        duration: 'Jun 2016 – Nov 2019',
        bullets: [
            'Developed a report-generating application enabling clients to upload PDF reports, provide comments, and review documents.',
            'Wrote code for Java/JS using React and Spring MVC for building REST APIs / RESTful Web Services, delivering robust full-stack solutions.',
            'Created a PDF renderer using PDF.js, enhancing document review functionality. Increased client satisfaction by 15% with seamless PDF rendering features.',
            'Integrated third-party libraries such as Material UI, AntD, and PDF.js to improve application usability.',
            'Implemented unit testing frameworks like JUnit, Mocha, and test cases to ensure code quality. Reduced production bugs through rigorous testing practices.',
        ],
        tech: ['Java', 'Spring MVC', 'React', 'Ibatis', 'PDF.js', 'JUnit', 'Mocha', 'Material UI'],
    },
];

export default function Experience() {
    const ref = useScrollReveal();

    return (
        <section id="experience" className="experience-section" ref={ref}>
            <div className="container">
                <div className="section-header fade-in">
                    <h2 className="section-title">Professional Experience</h2>
                    <div className="section-line" />
                </div>
                <div className="timeline">
                    {experiences.map((exp, i) => (
                        <div className="timeline-item fade-in" key={i} style={{ transitionDelay: `${i * 0.15}s` }}>
                            <div className="timeline-dot" />
                            <div className="exp-card">
                                <div className="exp-header">
                                    <div>
                                        <div className="exp-role">{exp.role}</div>
                                        <div className="exp-company">{exp.company}</div>
                                        <div className="exp-location">📍 {exp.location}</div>
                                    </div>
                                    <span className="exp-duration">{exp.duration}</span>
                                </div>
                                <ul className="exp-bullets">
                                    {exp.bullets.map((b, j) => (
                                        <li key={j}>{b}</li>
                                    ))}
                                </ul>
                                <div className="exp-tech">
                                    {exp.tech.map((t) => (
                                        <span key={t} className="tag">{t}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
