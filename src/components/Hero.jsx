export default function Hero() {
    return (
        <section id="about" className="hero">
            <div className="container">
                <div className="hero-content">
                    <p className="hero-greeting">
                        <span>👋</span> Hi there, I&apos;m
                        <span className="dot">;</span>
                    </p>
                    <h1 className="hero-name">
                        <span className="gradient-text">Vasanth Kumar</span>
                    </h1>
                    <p className="hero-title">Full Stack Engineer</p>
                    <div className="hero-contacts">
                        <span className="hero-contact-link" id="contact-phone">
                            📞 +91 8122104260
                        </span>
                        <span className="hero-contact-link" id="contact-email">
                            ✉️ vas.metly@gmail.com
                        </span>
                        <a href="https://www.linkedin.com/in/vasanth-kumars/" target="_blank" rel="noreferrer" className="hero-contact-link" id="contact-linkedin">
                            🔗 LinkedIn
                        </a>
                        <a href="https://github.com/VasKumarSel" target="_blank" rel="noreferrer" className="hero-contact-link" id="contact-github">
                            💻 GitHub
                        </a>
                    </div>
                    <p className="hero-summary">
                        Experienced Full Stack Engineer with <strong>9+ years</strong> of experience designing and building
                        scalable microservices-based applications using Java, Spring Framework, React, Node.js, and Redux.
                        Strong foundation in SOLID principles, OOD, and microservices design patterns, with hands-on experience
                        in Docker, Kubernetes, and cloud-native environments (AWS &amp; GCP).
                    </p>
                    <div className="hero-cta">
                        <a href="#experience" className="btn btn-primary" id="cta-experience">View My Work</a>
                        <a href="#contact" className="btn btn-outline" id="cta-contact">Get In Touch</a>
                    </div>
                </div>
            </div>

            {/* Decorative floating orbs */}
            <div className="hero-orbs" aria-hidden="true">
                <div className="orb orb-1" />
                <div className="orb orb-2" />
                <div className="orb orb-3" />
            </div>
        </section>
    );
}
