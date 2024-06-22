import Image from "next/image";
import Header from "../components/layout/Header";
import auth from "../../public/images/auth.svg";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <section className="bg-dark1 h-screen px-[10%] lg:px-[20%]">
        <div className="flex justify-between items-center">
          <div className="w-1/2">
            <Image className="blur-sm lg:blur-0" alt="authentication illustration image" src={auth} />
          </div>
          <div className="w-1/2 z-20 flex justify-end">{children}</div>
        </div>
      </section>
    </>
  );
}
