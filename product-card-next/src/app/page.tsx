import MainSection from "../components/MainSection/MainSection";
import Catalog from "../components/Catalog/Catalog";
import ContactForm from "../components/ContactForm/ContactForm";
import { loadArts } from "@/lib/api";


export default async function Home() {
  const artItems = await loadArts();

  return (
    <div className={"root"}>
      <MainSection />
      <Catalog items={artItems}/>
      <ContactForm />
    </div>
  );
}
