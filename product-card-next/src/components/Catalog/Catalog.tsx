import React from "react";
import "./catalog.css";
import CatalogItem from "../CatalogItem/CatalogItem";

export default function Catalog( ) {
  return (
    <section className="menu_section" id="menu_section">
      <div className="container">
        <h2>Для любых событий и дорогих вам людей</h2>
        <div className="menu_catalog">
          {/* {products.map((product) => (
            <CatalogItem product={product} />
          ))} */}
        </div>
      </div>
    </section>
  );
}
