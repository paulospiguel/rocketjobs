import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Header } from "@components/Header";

import Workers from "@assets/workers.jpg";
import Footer from "@app/components/Footer";

const Home: NextPage = () => {
  
  return (
    <div className="background-radial-gradient w-full h-screen">
      <Head>
        <title>RocketJobs</title>
        <meta name="description" content="RocketJobs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="background-radial-gradient overflow-hidden">
        <div className="mx-auto">
          <Header />

          <main className="grid grid-cols-2 pt-20 h-screen relative">
            <section className="flex items-center justify-center">
              <div className="sm:text-center lg:text-left p-5">
                <h1 className="text-4xl tracking-tight font-extrabold text-zinc-50 sm:text-5xl md:text-6xl flex flex-col">
                  <span className="block xl:inline">
                    Procuras um trabalho rápido?
                  </span>
                  <p className="block xl:inline pb-4 font-extrabold text-transparent text-6xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 ">
                    Aqui é o lugar
                  </p>
                </h1>
                <p className="mt-3 text-base text-zinc-100 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Na RocketJobs você encontra aquele
                  <span className="text-emphasis">
                    trabalho rápido,
                  </span>onde consegue dinheiro para sua necessidade, <span className="text-emphasis">sem burocracia.</span>
                  O que precisas é cadastrar-se, escolher seu trabalho,
                  compareça a seu lugar escolhido e pronto. O <span className="text-emphasis">recebimento será
                  tão fácil</span> igual.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <a
                      href="#"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                    >
                      Quero oferecer trabalho
                    </a>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <a
                      href="#"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                    >
                      Sou um trabalhador
                    </a>
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
          </main>

          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
