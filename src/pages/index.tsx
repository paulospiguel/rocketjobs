import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div className="background-radial-gradient w-full h-screen">
      <Head>
        <title>RocketJobs</title>
        <meta name="description" content="RocketJobs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-full h-full flex flex-col items-center justify-center">
        <h1 className="text-5xl text-white">RocketJobs</h1>
        <p className="text-2xl text-white">Em breve</p>
      </main>
    </div>
  );
};

export default Home;
