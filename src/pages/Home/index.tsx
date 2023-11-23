import { CaretRight } from "phosphor-react"

import lamp from "../../assets/lottie/lamp.json";
import Lottie from "lottie-react";
import About from "./sections/about";

import Design from '../../assets/svg/design.svg'

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
        <div className="my-3 mx-12 bg-white rounded-lg p-14 gap-5 flex justify-around">
          <img src={Design} className="min-h-[21rem]" />
          <div className="flex flex-col gap-2 max-w-[50%]">
            <h2 className="text-4xl font-semibold text-orange-500">OnDemand™</h2>
            <span className="text-left">O OnDemand é um serviço para transformar suas ideias em sistemas ou aplicativos. Desenvolvemos projetos personalizados através de tecnologias ágeis de acordo com suas necessidades e escopo pré-estabelecido.</span>
            <div className="text-left flex flex-col gap-9 mt-2 justify-between">
              <div>
                <span className="text-2xl text-orange-500">
                  <span className="pt-0 pl-2 pr-0 pb-1 rounded-full bg-orange-200">
                    0
                  </span>
                  1
                </span>
                <span>Definição de Escopo</span>
              </div>
              <div>
                <span className="text-2xl text-orange-500">
                  <span className="pt-0 pl-2 pr-0 pb-1 rounded-full bg-orange-200">
                    0
                  </span>
                  2
                </span>
                <span>Definição de Escopo</span>
              </div>
              <div>
                <span className="text-2xl text-orange-500">
                  <span className="pt-0 pl-2 pr-0 pb-1 rounded-full bg-orange-200">
                    0
                  </span>
                  3
                </span>
                <span>Definição de Escopo</span>
              </div>
              <button className="border rounded border-orange-600 py-2 bg-orange-100 text-orange-600 hover:bg-orange-600 hover:text-orange-200 transition-colors">Contratar OnDemand</button>
            </div>
          </div>
        </div>

        <div className="my-3 mx-12 bg-white rounded-lg p-14 gap-5 flex justify-around">
          <div className="flex flex-col gap-2 max-w-[50%]">
            <h2 className="text-4xl font-semibold text-purple-500">OnGoing™</h2>
            <span className="text-left">Ongoing é um serviço de Squad as a Service com equipes de engenheiros Bubble e designers especializados em criação de produtos. Crie e aprimore seu produto constantemente com uma equipe dedicada.</span>
            <div className="text-left flex flex-col gap-9 mt-2 justify-between">
              <div>
                <span className="text-2xl text-purple-500">
                  <span className="pt-0 pl-2 pr-0 pb-1 rounded-full bg-purple-200">
                    0
                  </span>
                  1
                </span>
                <span>Definir o plano que se adeque ao seu objetivo</span>
              </div>
              <div>
                <span className="text-2xl text-purple-500">
                  <span className="pt-0 pl-2 pr-0 pb-1 rounded-full bg-purple-200">
                    0
                  </span>
                  2
                </span>
                <span>Levantamento de demandas mensais</span>
              </div>
              <div>
                <span className="text-2xl text-purple-500">
                  <span className="pt-0 pl-2 pr-0 pb-1 rounded-full bg-purple-200">
                    0
                  </span>
                  3
                </span>
                <span>Desenvolvimento e entregas constantes</span>
              </div>
              <button className="border rounded border-purple-600 py-2 bg-purple-100 text-purple-600 hover:bg-purple-600 hover:text-purple-200 transition-colors">Contratar OnDemand</button>
            </div>
          </div>
          <img src={Design} className="min-h-[21rem]" />
        </div>
      </section>
      <section className="py-8 flex justify-center flex-col text-center gap-2">
        <h2 className="text-center text-3xl font-semibold">O que fazemos</h2>
        <span className="text-md text-zinc-500">Juntamos várias técnicas para ajudar o seu projeto a ter o sucesso que merece</span>
        <div>

        </div>
      </section>
    </div>
  )
}