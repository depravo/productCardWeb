import { loadArts } from "@/services/api";
import Catalog from "@/components/Catalog/Catalog";
import CustomHeader from "@/components/Header/CustomHeader";

export default async function CatalogPage() {
  const artItems = await loadArts();

  return (
    <>
      {/* <CustomHeader pageType={"catalog-page"}></CustomHeader> */}
      <Catalog items={artItems} />
    </>
  );
}
