import { loadArts } from "@/lib/api";
import Catalog from "@/components/Catalog/Catalog";
import "./page.module.css";

export default async function Home() {
  const artItems = await loadArts();

  return (
    <div className={"root"}>
      <Catalog items={artItems}/>
    </div>
  );
}
