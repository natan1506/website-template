import { ArrowRight } from "phosphor-react"

import lamp from "../../assets/lottie/lamp.json";
import Lottie from "lottie-react";

export default function Home() {
  return (
    <div className="container">
      <section className="py-8">
        <div className="flex sm:flex-col md:flex-row items-center w-full mx-auto mt-4 gap-2 max-w-[80%]">
          <div className="flex flex-col gap-3 items-start">
            <h1 className="text-4xl font-bold text-palette-gray">
              Combinamos estratégia, tecnologia e design para resolver problemas reais
            </h1>
            <span className="text-md text-zinc-400">
              Desenvolvemos aplicativos e sistemas para o seu negócio com metodologia inteligente e ágil. Melhore, escale ou crie o seu negócio com a Kafé!
            </span>
            <button className="flex px-4 py-3 rounded items-center gap-2 hover:gap-3 transition-all bg-palette-red w-auto hover:bg-palette-red/50">
              Comece agora
              <ArrowRight />
            </button>
          </div>
          <div>
            <Lottie animationData={lamp} />
          </div>
        </div>
      </section>
      <section className=" py-8 flex justify-center flex-col text-center gap-2 bg-white">
        <h2 className="text-3xl font-semibold">Somos diferentes de tudo que você já viu</h2>

        <span className="text-md text-zinc-500">Através de processos próprios e tecnologias ágeis conseguimos resultados incríveis com o seu projeto</span>

        <div className="flex justify-center gap-3 mt-12">
          <div className="h-16">
            <span>tes</span>
            {/* <Lottie animationData={lamp} /> */}
          </div>
          <div className="grid grid-cols-2 grid-rows-2 gap-2">
            <div className="flex flex-col max-w-xs">
              <span className="text-6xl font-bold">40%</span>
              <span className="text-md text-zinc-500 text-wrap">
                mais econômico *comparado
                ao desenvolvimento tradicional</span>
            </div>
            <div className="flex flex-col max-w-xs gap-3">
              <span className="text-6xl font-bold">10X__</span>
              <span className="text-md text-zinc-500 text-wrap">mais agilidade na construção</span>
            </div>
            <div className="flex flex-col max-w-xs gap-3">
              <span className="text-6xl font-bold">17x__</span>
              <span className="text-md text-zinc-500 text-wrap">mais aderência no mercado
                com o seu produto</span>
            </div>
            <div className="flex flex-col max-w-xs gap-3">
              <span className="text-6xl font-bold">100%</span>
              <span className="text-md text-zinc-500 text-wrap">de segurança de dados
                para o seu negócio</span>
            </div>
          </div>
        </div>
      </section>
      <section className="py-8 flex justify-center flex-col text-center gap-2">
        <h2 className="text-center text-3xl font-semibold">Nossos serviços</h2>
        <span className="text-md text-zinc-500">Ajudamos na transformação de diversos negócios com inteligência e tecnologia</span>
      </section>
    </div>
  )
}