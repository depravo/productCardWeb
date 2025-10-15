import CustomHeader from "@/components/Header/CustomHeader";
import CustomFooter from "@/components/Footer/CustomFooter";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <>
        <CustomHeader pageType={"catalog-page"}></CustomHeader>
        {children}
    </>
  );
}