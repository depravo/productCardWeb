import React from "react";
import "./catalog-item.css";
import CustomButton from "../UI/Button/CustomButton";
import Image from "next/image";
import { IButtonProps } from "@/types/IButtonProps";

export default function CatalogItem() {
  const btnItemOrder: IButtonProps = {
    text: "Заказать",
    link: "form_section",
  };

  return (
    <div className="menu_item">
      <Image src={""} alt="" className="item_img" />
      <p className="item_title"></p>
      <p></p>
      <p className="item_price"></p>
      <CustomButton buttonProps={btnItemOrder} />
    </div>
  );
}
