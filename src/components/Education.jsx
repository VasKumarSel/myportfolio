import useScrollReveal from '../hooks/useScrollReveal';

export default function Education() {
    const ref = useScrollReveal();

    return (
        <section id="education" className="education-section" ref={ref}>
            <div className="container">
                <div className="section-header fade-in">
                    <h2 className="section-title">Education</h2>
                    <div className="section-line" />
                </div>
                <div className="edu-card fade-in">
                    <div className="edu-icon">🎓</div>
                    <div>
                        <div className="edu-degree">BE in Metallurgy</div>
                        <div className="edu-college">PSG College of Technology</div>
                        <div className="edu-year">📍 Coimbatore, TN &nbsp;|&nbsp; 🗓️ Graduated March 2016</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
