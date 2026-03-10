export default function Footer(props) {
    return (
        <footer className="card footer-container" style={{ gridArea: props.grid}}>
            <div className="title-container">
                <i className="bx bx-envelope-open icon" />
                <h3 className="footer-title">Reach me at</h3>
            </div>
            <div className="contact-card">
                <div className="contact-icon-container">
                    <a href="https://www.facebook.com/james.harvey.2123" className="contact-link" target="_blank">
                        <i className="contact-icon fab fa-facebook contact-icon"></i>
                    </a>
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=jamesharveydevera@gmail.com&su=Hello James Harvey&body=Message content..." className="contact-link" target="_blank">
                        <i className="contact-icon fa-solid fa-at contact-icon"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/jamesharveybaloto/" className="contact-link" target="_blank">
                        <i className="contact-icon fab fa-linkedin contact-icon"></i>
                    </a>
                    <a href="https://github.com/jmshrvy" className="contact-link" target="_blank">
                        <i className="contact-icon fab fa-github contact-icon"></i>
                    </a>
                    <a href="https://instagram.com/jms.hrvy/" className="contact-link" target="_blank">
                        <i className="contact-icon fab fa-instagram contact-icon"></i>
    
                    </a>
                    <a href="viber://contact?number=09158306417" className="contact-link" target="_blank">
                        <i className="contact-icon fab fa-viber contact-icon"></i>
                    </a>
                </div>
            </div>
            <p className="footer-txt">© 2026 James Harvey Baloto. All rights reserved.</p>
        </footer>
    )
}