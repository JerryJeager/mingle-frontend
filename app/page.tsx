import Image from "next/image";
import Header from "./components/layout/Header";

import humans from "../public/images/Frame_1-removebg-preview.png";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header />
      <main className="bg-dark1 h-screen px-[10%] lg:px-[20%]">
        <section className="flex flex-col-reverse lg:flex-row items-center justify-between gap-2  lg:pt-12 text-white">
          <div className="lg:w-[50%]">
            <h2 className="text-2xl font-bold">
              Connect, Chat, and Collaborate Effortlessly
            </h2>
            <p className="lg:pt-8 mb-2">
              Mingle is your go-to platform for real-time messaging, video
              calls, and file sharing. Whether you're catching up with loved
              ones or working on a team project, Mingle provides a secure and
              intuitive space for all your conversations.
            </p>
            <Link href={"/auth/signup"}>
              <button className="py-2 px-4 rounded-md bg-yellow text-white font-bold">
                Get Started
              </button>
            </Link>
          </div>
          <div>
            <Image
              src={humans}
              alt="users image"
              placeholder="blur"
              width={500}
            />
          </div>
        </section>
      </main>
    </>
  );
}
