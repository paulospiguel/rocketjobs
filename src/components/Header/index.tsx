import Image from "next/image";
import LogoRocketJobs from "@assets/logoRocketJobsWhite.png";

export function Header() {
  return (
    <div className="w-full h-20 bg-[#1d2b44] flex items-center justify-center px-2 z-50 fixed top-0">
      <Image
        width={180}
        height={40}
        src={LogoRocketJobs}
        alt="Logotipo da RocketJobs"
      />
    </div>
  );
}
