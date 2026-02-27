

const skillGroups = [
    {
        icon: '☕',
        category: 'backend',
        title: 'Backend Engineering',
        tags: ['Java 8/11/17', 'Spring Boot', 'Spring Framework', 'Kotlin', 'Node.js', 'GraphQL'],
        color: '',
    },
    {
        icon: '⚛️',
        category: 'frontend',
        title: 'Frontend Engineering',
        tags: ['React', 'Next.js', 'TypeScript', 'Redux', 'Material UI', 'Ant Design', 'ag-grid'],
        color: 'purple',
    },
    {
        icon: '🔌',
        category: 'api',
        title: 'API Design & Integration',
        tags: ['RESTful APIs', 'Distributed Systems', 'Event-Driven Architecture', 'OpenAPI / Swagger'],
        color: '',
    },
    {
        icon: '📨',
        category: 'messaging',
        title: 'Messaging & Streaming',
        tags: ['Apache Kafka'],
        color: 'green',
    },
    {
        icon: '🗄️',
        category: 'database',
        title: 'Database Management',
        tags: ['MongoDB', 'PostgreSQL', 'Alloy DB', 'Ibatis'],
        color: '',
    },
    {
        icon: '🐳',
        category: 'devops',
        title: 'Containerization & CI/CD',
        tags: ['Docker', 'Kubernetes', 'Azure Pipelines', 'Azure Repos', 'GitHub Actions'],
        color: 'green',
    },
    {
        icon: '☁️',
        category: 'cloud',
        title: 'Cloud Platforms',
        tags: ['AWS (S3, Lambda, ALB)', 'GCP (GKE, Cloud Storage)', 'Azure Boards'],
        color: 'purple',
    },
    {
        icon: '🧪',
        category: 'testing',
        title: 'Testing & Code Quality',
        tags: ['JUnit', 'Mockito', 'Mocha'],
        color: '',
    },
    {
        icon: '🤖',
        category: 'ai',
        title: 'AI & Developer Productivity',
        tags: ['GitHub Copilot', 'MCP Integrations', 'Lovable', 'Firebase Studio', 'Antigravity'],
        color: 'purple',
    },
    {
        icon: '📊',
        category: 'monitoring',
        title: 'Monitoring & Observability',
        tags: ['Grafana Loki', 'CloudWatch', 'Jaeger'],
        color: 'green',
    },
    {
        icon: '🔧',
        category: 'tools',
        title: 'Developer Tools',
        tags: ['GitHub', 'Postman', 'IntelliJ IDEA', 'VS Code', 'Backstage'],
        color: '',
    },
    {
        icon: '🏃',
        category: 'agile',
        title: 'Delivery & Methodologies',
        tags: ['Agile', 'Scrum', 'Microservices Design Patterns', 'SOLID Principles', 'OOD'],
        color: 'green',
    },
];

export default function Skills() {

    return (
        <section id="skills" className="skills-section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Technical Skills</h2>
                    <div className="section-line" />
                </div>
                <div className="skills-grid">
                    {skillGroups.map((group) => (
                        <div
                            className="skill-card"
                            key={group.category}
                        >
                            <div className="skill-icon">{group.icon}</div>
                            <div className="skill-category">{group.category}</div>
                            <h3>{group.title}</h3>
                            <div className="skill-tags">
                                {group.tags.map((tag) => (
                                    <span key={tag} className={`tag ${group.color}`}>{tag}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
