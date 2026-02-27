

const projects = [
    {
        icon: '🔗',
        title: 'API HUB Platform',
        company: 'United Parcel Service',
        description:
            'A central platform built using Spotify\'s Backstage to govern APIs across the organization, streamlining the full API lifecycle.',
        bullets: [
            'Automated repository creation workflows, saving 5+ hours/week in manual efforts.',
            'Integrated Swagger Editor for OpenAPI specification editing and validation, reducing validation errors by 25%.',
            'Improved API governance folder creation efficiency by 30% using automated workflows.',
        ],
        tech: ['Node.js', 'React', 'Backstage', 'GCP', 'Azure', 'OpenAPI'],
    },
    {
        icon: '🏭',
        title: 'Procurement Platform',
        company: 'Zumen Technologies',
        description:
            'A SaaS-based platform for manufacturing industries, encompassing procurement to logistics and accounts payable with 100+ B2B software modules.',
        bullets: [
            'Boosted platform scalability to support 10K+ concurrent users.',
            'Developed microservices using Spring Boot for modular, scalable architecture.',
            'Enhanced UI/UX with Material UI and AntD, improving user engagement by 20%.',
        ],
        tech: ['Java', 'Spring Boot', 'React', 'MongoDB', 'PostgreSQL', 'AWS'],
    },
    {
        icon: '📄',
        title: 'Report Generating Application',
        company: 'Cognizant',
        description:
            'A tool enabling clients to upload, comment, and review PDF reports seamlessly with an integrated review and annotation workflow.',
        bullets: [
            'Created PDF renderer using PDF.js, increasing client satisfaction by 15%.',
            'Optimized report generation backend, improving speed by 30%.',
            'Integrated Material UI for intuitive UI design, improving user adoption rate.',
        ],
        tech: ['Java', 'Spring MVC', 'React', 'PDF.js', 'Ibatis'],
    },
];

export default function Projects() {

    return (
        <section id="projects" className="projects-section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Featured Projects</h2>
                    <div className="section-line" />
                </div>
                <div className="projects-grid">
                    {projects.map((project) => (
                        <div
                            className="project-card"
                            key={project.title}
                        >
                            <div className="project-header">
                                <span className="project-icon">{project.icon}</span>
                            </div>
                            <div className="project-title">{project.title}</div>
                            <div className="project-company">{project.company}</div>
                            <p className="project-desc">{project.description}</p>
                            <ul className="project-bullets">
                                {project.bullets.map((b, j) => (
                                    <li key={j}>{b}</li>
                                ))}
                            </ul>
                            <div className="exp-tech">
                                {project.tech.map((t) => (
                                    <span key={t} className="tag green">{t}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
