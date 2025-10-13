import React from 'react'
import "./custom-footer.css"

export default function CustomFooter() {
  return (
    <footer className='footer'>
      <div className="container">
        <div className="footer_agreement">Согласие на обработку данных</div>
        <div className="footer_help">Служба поддержки</div>
        <div className="footer_politics">Политика конфиденциальности</div>
        <div className="footer_copyright">
          @nazvaniesaita.ru@2054 | Название компании или ИП ОГРН 000000000000
        </div>
      </div>
    </footer>
  )
}
