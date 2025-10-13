"use client";

import React, { useState } from "react";
import "./contact-form.css";
import CustomButton from "../UI/Button/CustomButton";
import Image from "next/image";
import bg from "../../../public/images/back2.png";
import leaf from "../../../public/images/leaf.png";
import berry from "../../../public/images/berry.png";
import { IButtonProps } from "@/types/IButtonProps";

export default function ContactForm() {
  const [phoneNumber, setPhoneNumber] = useState("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setPhoneNumber(e.target.value);
  }

  const btnOrder: IButtonProps = {
    text: "Сделать заказ",
    link: "",
    type: "submit",
  };

  return (
    <section className="form_section" id="form_section">
      <Image src={bg} className="section_background" alt="background" />
      <div className="container">
        <form action="">
          <Image src={leaf} alt="" className="form_leaf_lt" />
          <Image src={leaf} alt="" className="form_leaf_rb" />
          <Image src={berry} alt="" className="form_berry_lb" />
          <Image src={berry} alt="" className="form_berry_rt" />
          <h2>Чтобы сделать заказ, укажите ваш телефон</h2>
          <span className="form_notice">
            Мы перезвоним вам в течение 15 минут, чтобы уточнить ваши пожелания
          </span>
          <div className="form_input">
            <input
              type="text"
              name="phone-number"
              id="phone-number"
              placeholder="Номер телефона"
              required
              value={phoneNumber}
              onChange={handleChange}
            />
            <CustomButton buttonProps={btnOrder} />
          </div>
          <div className="form_checkbox">
            <input
              className="checkbox_input"
              type="checkbox"
              id="confirm_conditions"
              name="conditions"
            />
            <label htmlFor="confirm_conditions">
              Нажимая на кнопку, вы соглашаетесь с{" "}
              <u>условиями обработки персональных данных</u>
            </label>
          </div>
        </form>
      </div>
    </section>
  );
}
