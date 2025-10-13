import React from "react";
import "./catalog.css";
import CatalogItem from "../CatalogItem/CatalogItem";
import ArtItem from "@/types/ArtItem";

export default function Catalog({items}:{items: ArtItem[] }) {
  return (
    <section className="menu_section" id="menu_section">
      <div className="container">
        <h2>Для любых событий и дорогих вам людей</h2>
        <div className="menu_catalog">
          {items.map((artItem, index) => (
            <CatalogItem key={index} item={artItem} />
          ))}
        </div>
      </div>
    </section>
  );
}
