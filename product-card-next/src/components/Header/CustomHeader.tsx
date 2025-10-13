import React from "react";
import "./custom-header.css";
import Link from "next/link";

export default function CustomHeader() {
  return (
    <header className="header">
      <div className="container">
        <span className="header_title"><Link className="header_link" href={"/"}>Сладкий сундук</Link></span>
        <div className="header_contacts">
          <div className="header_geo">
            <svg>
              <use href="#geo"></use>
            </svg>
            <p>
              г. Санкт Петербург,
              <br />
              ул. Куйбышева 31
            </p>
          </div>
          <div className="header_phone">
            <svg>
              <use href="#phone"></use>
            </svg>
            <p>
              <a href="tel:8-812-844-95-49" className="phone_link">
                8 (812) 844-95-49
              </a>
              <br />
              Ежедневно с 9:00 до 20:00
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
