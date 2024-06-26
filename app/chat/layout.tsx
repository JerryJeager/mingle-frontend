import type { Metadata } from "next";
import SideBar from "../components/layout/SideBar";

export const metadata: Metadata = {
  title: "Mingle | Chat",
  description: "Chat with friends",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="bg-dark1 flex gap-8 h-screen p-4 sm:p-10">
      <div className="w-full sm:w-[30%] h-full">
        <SideBar />
      </div>
      <div className="h-full sm:block sm:w-[70%]">{children}</div>
    </section>
  );
}
