import Image from "next/image";
import composure from "../../public/images/composure.png"
const Dashboard = () => {
  return (
    <div className="bg-[#121212] rounded-r-xl hidden sm:flex justify-center items-center w-full  h-full text-white">
      <div>
        <Image src={composure} alt="chat home image" placeholder="blur" width={300} height={300} />
          <h1 className="text-white font-black text-3xl mt-4">
            <span className="text-yellow">M</span>ingle
          </h1>
          <p className="italic text-white opacity-40 mt-2">Stay connected with your friends and family</p>
      </div>
    </div>
  );
};

export default Dashboard;
