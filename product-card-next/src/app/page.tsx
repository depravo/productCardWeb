import MainSection from "../components/MainSection/MainSection";
import ContactForm from "../components/ContactForm/ContactForm";


export default async function Home() {

  return (
    <div className={"root"}>
      <MainSection />
      <ContactForm />
    </div>
  );
}
