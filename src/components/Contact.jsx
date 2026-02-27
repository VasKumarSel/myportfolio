import useScrollReveal from '../hooks/useScrollReveal';

const contactLinks = [
    {
        id: 'contact-email-card',
        icon: '✉️',
        label: 'Email',
        value: 'vas.metly@gmail.com',
        href: null,
    },
    {
        id: 'contact-phone-card',
        icon: '📞',
        label: 'Phone',
        value: '+91 8122104260',
        href: null,
    },
    {
        id: 'contact-linkedin-card',
        icon: '🔗',
        label: 'LinkedIn',
        value: 'linkedin.com/in/vasanth-kumars',
        href: 'https://www.linkedin.com/in/vasanth-kumars/',
    },
    {
        id: 'contact-github-card',
        icon: '💻',
        label: 'GitHub',
        value: 'github.com/VasKumarSel',
        href: 'https://github.com/VasKumarSel',
    },
];

export default function Contact() {
    const ref = useScrollReveal();

    return (
        <section id="contact" className="contact-section" ref={ref}>
            <div className="container">
                <div className="section-header fade-in">
                    <h2 className="section-title">Get In Touch</h2>
                    <div className="section-line" />
                </div>
                <div className="contact-wrapper">
                    <p className="contact-intro fade-in">
                        I&apos;m open to new opportunities, collaborations, and interesting conversations.
                        Whether you have a project in mind or just want to say hi, my inbox is always open!
                    </p>
                    <div className="contact-links fade-in">
                        {contactLinks.map((link) => {
                            const inner = (
                                <>
                                    <span className="contact-link-icon">{link.icon}</span>
                                    <span className="contact-link-label">{link.label}</span>
                                    <span className="contact-link-value">{link.value}</span>
                                </>
                            );
                            if (!link.href) {
                                return (
                                    <div key={link.id} id={link.id} className="contact-link-card no-link">
                                        {inner}
                                    </div>
                                );
                            }
                            return (
                                <a
                                    key={link.id}
                                    id={link.id}
                                    className="contact-link-card"
                                    href={link.href}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    {inner}
                                </a>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
