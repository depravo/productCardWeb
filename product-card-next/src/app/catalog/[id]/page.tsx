import { getArtInfo } from "@/services/api";
import ArtItem from "@/types/ArtItem";
import Image from "next/image";
import styles from "./page.module.css";

export default async function CardPage({
  params,
}: {
  params: Promise<{ id: number }>;
}) {
  const { id } = await params;
  const itemJSON = await getArtInfo(id);
  const item = new ArtItem(
    itemJSON?.data.objectID,
    itemJSON?.data.primaryImageSmall,
    itemJSON?.data.objectName,
    itemJSON?.data.title,
    itemJSON?.data.department,
    itemJSON?.data.objectDate
  );
  return (
    <div className="container">
      <div className={styles.card_root}>
        <picture>
          <Image
            src={item.img}
            alt=""
            className="card-img"
            width={100}
            height={100}
          />
        </picture>
        <div className={styles.card_body}>
          <span className={styles.item_title}>{item.title}</span>
          <span className={styles.item_author}>{item.author}</span>
          <span className={styles.item_department}>{item.department}</span>
          <span className={styles.item_year}>{item.publish_year}</span>
        </div>
      </div>
    </div>
  );
}
