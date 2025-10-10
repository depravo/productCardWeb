import React from "react";
import "./catalog-item.css";
import CustomButton from "../UI/Button/CustomButton";
import Image from "next/image";
import { IButtonProps } from "@/types/IButtonProps";
import ArtItem from "@/types/ArtItem";

export default function CatalogItem({item} : {item: ArtItem;}) {
  return (
    <div className="menu_item">
      <Image src={item.img} alt="" className="item_img" width={100} height={100}/>
      <p className="item_title">{item.title}</p>
      <p className="item_author">{item.author}</p>
      <p className="item_department">{item.department}</p>
      <p className="item_year">{item.publish_year}</p>
    </div>
  );
}
