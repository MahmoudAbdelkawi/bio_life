import React from "react";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.footerCol}>
              <h4>بايولايف</h4>
              <ul>
                <li>
                  <Link to="/">الرئيسية</Link>
                </li>
                <li>
                  <Link to="/doctors">الاطباء</Link>
                </li>
                <li>
                  <Link to="/services">الخدمات</Link>
                </li>
                <li>
                  <Link to="/blogs">المدونة</Link>
                </li>
                <li>
                  <Link to="/blogs">العروض</Link>
                </li>
                <li>
                  <Link to="/about">من نحن</Link>
                </li>
              </ul>
            </div>
            <div className={styles.footerCol}>
              <h4>ساعات العمل</h4>
              <ul>
                <li>
                  <Link to="#">
                    السبت الى الخميس:
                    <br /> 10:00 - 22:00
                  </Link>
                </li>
                <li>
                  <Link to="#">الجمعة: مغلق</Link>
                </li>
              </ul>
            </div>
            <div className={styles.footerCol}>
              <h4>تواصل معنا </h4>
              <div className={styles.socialLinks}>
                <a href="https://biollife.herokuapp.com/"  style={{backgroundColor:'#fff'}}>
                  <i className="fa-solid fa-at" style={{color:'rgba(242, 34, 131, 0.4)'}} />
                </a>
                <a
                  href="https://wa.me/966539394004"
                  className="whatsapp_float"
                  target="_blank"
                  style={{backgroundColor:'#fff'}}
                >
                  <i className="fa-brands fa-whatsapp"    style={{color:'#1dbd47'}}></i>
                </a>
                <a href="tel:+966552304433" style={{backgroundColor:'#fff'}}>
                  <i className="fa-solid fa-phone"  style={{color:'#1dbd47'}}/>
                </a>
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3710.4658238950965!2d39.14575432114372!3d21.567732774606863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3dabd2632708b%3A0x585cda4866218f65!2z2LnZitin2K_Yp9iqINio2KfZitmI2YTYp9mK2YEgfCBCaW9MaWZlIENsaW5pY3MgfCDYp9iz2YbYp9mGIHwg2KzZhNiv2YrYqSB8INiq2KzZhdmK2YQgfCDYt9ioINmG2YHYs9mKIHwg2KzYsdin2K3YqSDYudi42KfZhSB8INis2LHYp9it2Kkg2KrYrNmF2YrZhCB8INi32Kgg2KPYs9ix2KkgfCDYqti62LDZitipIHwg2KfYqNiq2LPYp9mF2Kkg2YfZiNmE2YrZiNivIHwg2YHZhtmK2LEgfCDZg9mK2KrZiCB8INi52YTYp9isINit2KfZhNin2Kog2KfZhNil2K_Zhdin2YYg2YjYp9mE2LHZh9in2Kgg2KfZhNin2KzYqtmF2KfYudmKIHwg2KfZhNmE2YrYstix!5e0!3m2!1sar!2ssa!4v1663670202125!5m2!1sar!2ssa"
                className={styles.iframeMap}
                // loading="lazy"
                // referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className={styles.footerCol}>
              <h4>تابعنا على</h4>
              <div className={styles.socialLinks}>
                <a
                  href="https://www.snapchat.com/add/biolife.clinic"
                  target="_blank"
                  style={{backgroundColor:'#fff'}}
                >
                  <i className="fab fa-snapchat" style={{color:'#ebda0e'}}/>
                </a>
                <a href="https://twitter.com/biolife_clinics" style={{backgroundColor:'#fff'}}>
                  <i className="fab fa-twitter" style={{color:'#2b56e1'}}/>
                </a>
                <a
                  href="https://www.instagram.com/biolife.clinic/"
                  target="_blank"
                  style={{backgroundColor:'#fff'}}
                >
                  <i className="fab fa-instagram" style={{color:'#c13584'}} />
                </a>
                <a href="https://www.linkedin.com/in/biolife-clinics-a10a77230/" style={{backgroundColor:'#fff'}}>
                  <i className="fab fa-linkedin-in" style={{color:'#0529d7'}}/>
                </a>
                <a href="https://www.youtube.com/channel/UCmRo7yH-T6RRMwBU7ngCwww" style={{backgroundColor:'#fff'}}>
                  <i className="fab fa-youtube" style={{color:'#f10c0c'}}/>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.anchorTech}>
          <p>
            all rights reserved to <a> Sari tech</a> © 2022
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
