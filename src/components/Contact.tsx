import { MdArrowOutward, MdCopyright } from "react-icons/md";
import { SiGmail, SiWhatsapp } from "react-icons/si";
import { FaGithub, FaFacebook } from "react-icons/fa6";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:utsogharami5@gmail.com" data-cursor="disable">
                utsogharami5@gmail.com
              </a>
            </p>
            <h4>WhatsApp & Telegram</h4>
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginBottom: "8px" }}>
              <a
                href="https://wa.me/8801965551368"
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="disable"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  background: "#25D366",
                  color: "#fff",
                  padding: "6px 14px",
                  borderRadius: "20px",
                  fontWeight: 600,
                  fontSize: "0.85rem",
                  textDecoration: "none",
                }}
              >
                <svg width="16" height="16" fill="white" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.523 5.851L0 24l6.332-1.507A11.944 11.944 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.725 9.725 0 0 1-4.965-1.363l-.355-.212-3.757.895.946-3.656-.233-.376A9.71 9.71 0 0 1 2.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z"/></svg>
                WhatsApp
              </a>
              <a
                href="https://t.me/+8801965551368"
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="disable"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  background: "#229ED9",
                  color: "#fff",
                  padding: "6px 14px",
                  borderRadius: "20px",
                  fontWeight: 600,
                  fontSize: "0.85rem",
                  textDecoration: "none",
                }}
              >
                <svg width="16" height="16" fill="white" viewBox="0 0 24 24"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
                Telegram
              </a>
            </div>
            <h4>Location</h4>
            <p>Khulna, Bangladesh</p>
            <h4>Education</h4>
            <p>BBA Honours, Management (3rd Year)</p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="mailto:utsogharami5@gmail.com"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              <SiGmail /> Gmail <MdArrowOutward />
            </a>
            <a
              href="https://wa.me/8801965551368"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              <SiWhatsapp /> WhatsApp <MdArrowOutward />
            </a>
            <a
              href="https://github.com/utsogharami5-source"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              <FaGithub /> Github <MdArrowOutward />
            </a>
            <a
              href="https://www.facebook.com/Utso.Py"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              <FaFacebook /> Facebook <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Utso Gharami</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
