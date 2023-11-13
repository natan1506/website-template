import { CaretRight } from "phosphor-react"

import lamp from "../../assets/lottie/lamp.json";
import Lottie from "lottie-react";
import About from "./sections/about";

export default function Home() {
  return (
    <div className="">
      <section className="py-8">
        <div className="flex sm:flex-col md:flex-row items-center w-full mx-auto pt-4 gap-2 max-w-[80%]">
          <div className="flex flex-col gap-3 items-start">
            <h1 className="text-4xl font-bold text-palette-gray">
              Combinamos estratégia, tecnologia e design para resolver problemas reais
            </h1>
            <span className="text-md text-zinc-400">
              Desenvolvemos aplicativos e sistemas para o seu negócio com metodologia inteligente e ágil. Melhore, escale ou crie o seu negócio com a Kafé!
            </span>
            <button className="flex px-4 py-3 rounded items-center gap-2 hover:gap-3 transition-all bg-palette-red w-auto hover:bg-palette-red/50">
              Começar um projeto agora
              <CaretRight />
            </button>
          </div>
          <div>
            <Lottie animationData={lamp} />
          </div>
        </div>
      </section>
      <About />
      <section className="py-8 flex justify-center flex-col text-center gap-2">
        <h2 className="text-center text-3xl font-semibold">Nossos serviços</h2>
        <span className="text-md text-zinc-500">Ajudamos na transformação de diversos negócios com inteligência e tecnologia</span>
      </section>
    </div>
  )
}