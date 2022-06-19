import { useState } from "react";

import Image from "next/image";
import Link from "next/link";

import workerPicture from "@assets/images/workers.jpg";
import Logo from "@assets/rocketJobsBlack.png";
import { ArrowLeftIcon } from "@heroicons/react/solid";
import { handleOAuthSignIn, Provider } from "@services/auth";

export default function Worker() {
  const [isShowForm, setIsShowForm] = useState(false);
  const handleAuth = async (provider: Provider) => {
    try {
      const host = (window as any).location?.origin;

      const redirectTo = `${host}/feed`;

      await handleOAuthSignIn(provider, redirectTo);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex items-center h-screen">
      <div className="flex w-screen max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg lg:max-w-4xl">
        <div className="relative hidden bg-cover lg:block lg:w-1/2">
          <Image
            src={workerPicture}
            alt="Duas mulheres trabaladoras e um homem trabalhador"
            layout="fill"
          />
        </div>

        <div className="w-full p-8 lg:w-1/2">
          <h2 className="text-2xl font-semibold text-center text-gray-700">
            Trabalhador
          </h2>
          <div className="flex items-center justify-center my-5">
            <Image src={Logo} alt="logotipo" width={250} height={45} />
          </div>
          <p className="text-xl text-center text-gray-600">Bem vindo!</p>
          <button
            onClick={() => handleAuth("facebook")}
            type="button"
            className="flex items-center justify-center w-full mt-4 text-white rounded-lg shadow-md hover:bg-gray-100"
          >
            <div className="px-4 py-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z" />
              </svg>
            </div>
            <h1 className="w-5/6 px-4 py-3 font-bold text-center text-gray-600">
              Login pelo Facebook
            </h1>
          </button>
          <button
            onClick={() => handleAuth("linkedin")}
            type="button"
            className="flex items-center justify-center w-full mt-4 text-white rounded-lg shadow-md hover:bg-gray-100"
          >
            <div className="px-4 py-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                width="32px"
                height="32px"
              >
                <path
                  fill="#0288d1"
                  d="M24 4A20 20 0 1 0 24 44A20 20 0 1 0 24 4Z"
                />
                <path
                  fill="#fff"
                  d="M14 19H18V34H14zM15.988 17h-.022C14.772 17 14 16.11 14 14.999 14 13.864 14.796 13 16.011 13c1.217 0 1.966.864 1.989 1.999C18 16.11 17.228 17 15.988 17zM35 24.5c0-3.038-2.462-5.5-5.5-5.5-1.862 0-3.505.928-4.5 2.344V19h-4v15h4v-8c0-1.657 1.343-3 3-3s3 1.343 3 3v8h4C35 34 35 24.921 35 24.5z"
                />
              </svg>
            </div>
            <h1 className="w-5/6 px-4 py-3 font-bold text-center text-gray-600">
              Login pelo Linkedin
            </h1>
          </button>
          <div className="flex items-center justify-between mt-4">
            <span className="w-1/5 border-b lg:w-1/4"></span>

            <a
              href="#"
              className="text-xs text-center text-gray-500 uppercase hover:text-indigo-500"
              onClick={() => setIsShowForm((prev) => !prev)}
            >
              ou login pelo email
            </a>
            <span className="w-1/5 border-b lg:w-1/4"></span>
          </div>
          {isShowForm && (
            <form className="">
              <div className="mt-4">
                <label className="block mb-2 text-sm font-bold text-gray-700">
                  Seu email
                </label>
                <input
                  className="block w-full px-4 py-2 text-gray-700 bg-gray-200 border border-gray-300 rounded appearance-none focus:outline-none focus:shadow-outline"
                  type="email"
                />
              </div>
              <div className="mt-4">
                <div className="flex justify-between">
                  <label className="block mb-2 text-sm font-bold text-gray-700">
                    Sua senha
                  </label>
                  <a href="#" className="text-xs text-gray-500">
                    Esqueceu a senha?
                  </a>
                </div>
                <input
                  className="block w-full px-4 py-2 text-gray-700 bg-gray-200 border border-gray-300 rounded appearance-none focus:outline-none focus:shadow-outline"
                  type="password"
                />
              </div>
              <div className="mt-8">
                <button className="w-full px-4 py-2 font-bold text-white bg-gray-700 rounded hover:bg-gray-600">
                  Entrar
                </button>
              </div>
            </form>
          )}
          <div className="flex items-center justify-between mt-4">
            <span className="w-1/5 border-b md:w-1/4"></span>
            <a
              href="#"
              className="text-xs text-gray-500 uppercase hover:text-indigo-500"
            >
              ou registre-se
            </a>
            <span className="w-1/5 border-b md:w-1/4"></span>
          </div>
          <div className="w-full mt-4">
            <Link href="/">
              <a className="flex gap-2 text-sm text-gray-500 hover:text-indigo-500">
                <ArrowLeftIcon className="w-6 h-6" /> Voltar
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
