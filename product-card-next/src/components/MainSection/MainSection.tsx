import React from "react";
import "./main-section.css";
import CustomButton from "../UI/Button/CustomButton";
import bg from "@/../public/images/back1.png"
import Image from "next/image";
import {IButtonProps} from "@/types/IButtonProps";

export default function MainSection() {
  const btnCatalog: IButtonProps = {
    text: "Перейти в каталог",
    link: "menu_section",
  };
  const btnYummy: IButtonProps = {
    text: "ВКУСНЕЙШИЙ",
    link:"",
    variant:"secondary"
  }
  return (
    <section className="main_section">
      <Image src={bg} className="section_background" alt="background" />
      <div className="container">
        <CustomButton buttonProps={btnYummy} />
        <h1>
          Пирожные и капкейки от 150 &#8381;/шт. С доставкой по Санкт-Петербургу
        </h1>
        <p className="main_info">
          Приготовим за 3 часа в день заказа.
          <br />
          Доставка на авто в холодильнике
        </p>
        <div className="main_button">
          <CustomButton buttonProps={btnCatalog} />
          <span>9 различных видов на выбор</span>
        </div>
      </div>
    </section>
  );
}
