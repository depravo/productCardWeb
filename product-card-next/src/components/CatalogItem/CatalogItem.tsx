import React from "react";
import "./catalog-item.css";
import Image from "next/image";
import ArtItem from "@/types/ArtItem";
import Link from "next/link";

export default function CatalogItem({ item }: { item: ArtItem }) {
  return (
    <div className="card">
      <Link href={`/catalog/${item.id}`} className="card_link">
        <picture>
          <Image
            src={item.img}
            alt=""
            className="item_img"
            width={100}
            height={100}
          />
        </picture>
      </Link>
      <div className="card_body">
        <span className="item_title">{item.title}</span>
        <span className="item_author">{item.author}</span>
        <span className="item_department">{item.department}</span>
        <span className="item_year">{item.publish_year}</span>
      </div>
    </div>
  );
}
