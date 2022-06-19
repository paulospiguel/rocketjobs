import { ReactElement } from "react";

import Image from "next/image";
import Link from "next/link";

import Workers from "@assets/images/workers.jpg";
import Cookies from "@components/Cookies";
import HorizontalLayout from "@components/Layouts/Horizontal";
import SEO from "@components/SEO";

function Home() {
  return (
    <HorizontalLayout>
      <SEO
        title="Home"
        description="Página inicial da rocketJobs | Frellas for you"
      />
      <section className="relative grid h-screen grid-cols-2">
        <section className="flex items-center justify-center">
          <div className="p-5 sm:text-center lg:text-left">
            <h1 className="flex flex-col text-4xl font-extrabold tracking-tight text-zinc-50 sm:text-5xl md:text-6xl">
              <span className="block xl:inline">
                Procuras um trabalho rápido?
              </span>
              <p className="block pb-4 text-6xl font-extrabold text-transparent xl:inline bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 ">
                Aqui é o lugar
              </p>
            </h1>
            <p className="mt-3 text-base text-zinc-100 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              Na RocketJobs você encontra aquele
              <span className="text-emphasis">trabalho rápido,</span>onde
              consegue dinheiro para sua necessidade,{" "}
              <span className="text-emphasis">sem burocracia.</span>O que
              precisas é cadastrar-se, escolher seu trabalho, compareça a seu
              lugar escolhido e pronto. O{" "}
              <span className="text-emphasis">recebimento será tão fácil</span>{" "}
              igual.
            </p>
            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md shadow">
                <Link href="/login?brand">
                  <a className="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                    Quero oferecer trabalho
                  </a>
                </Link>
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <Link href="/login?worker">
                  <a className="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-indigo-700 bg-indigo-100 border border-transparent rounded-md hover:bg-indigo-200 md:py-4 md:text-lg md:px-10">
                    Sou um trabalhador
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="relative">
          <Image
            layout="fill"
            alt=""
            className="mask mask-triangle"
            src={Workers}
          />
        </section>
      </section>

      <Cookies />
    </HorizontalLayout>
  );
}

export const getServerSideProps = async (ctx: any) => {
  return {
    props: {},
  };
};

export default Home;
