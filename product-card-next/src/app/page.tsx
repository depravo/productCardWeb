import MainSection from "../components/MainSection/MainSection";
import ContactForm from "../components/ContactForm/ContactForm";
import CustomHeader from "@/components/Header/CustomHeader";
import CustomFooter from "@/components/Footer/CustomFooter";

export default async function Home() {
  return (
    <>
      <CustomHeader></CustomHeader>
      <MainSection />
      <ContactForm />
    </>
  );
}
