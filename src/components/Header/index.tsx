import Image from "next/image";
import Link from "next/link";

import LogoRocketJobs from "@assets/rocketJobs.png";
import { LogoutIcon } from "@heroicons/react/outline";
import { useAuth } from "@hooks/auth";

export function Header() {
  const { user, signOut, session } = useAuth();
  return (
    <div className="w-full h-20 bg-[#1d2b44] flex items-center justify-center px-2 z-50 fixed top-0 shadow-lg">
      <Image
        width={180}
        height={40}
        src={LogoRocketJobs}
        alt="Logotipo da RocketJobs"
      />

      {!!user && (
        <div className="absolute flex items-center right-2">
          <Link href="/feed" className="">
            <img
              src={user?.avatar || ""}
              alt=""
              className="w-10 h-10 border-2 border-white rounded-full cursor-pointer"
            />
          </Link>
          <div className="divider divider-horizontal" />

          <button className="" onClick={signOut}>
            <LogoutIcon className="w-8 h-8" />
          </button>
        </div>
      )}
    </div>
  );
}
