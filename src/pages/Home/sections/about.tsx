import rocket from "../../../assets/lottie/rocket.json";
import Lottie from "lottie-react";

export default function About() {
  return (
    <section className="py-8 flex justify-center flex-col text-center gap-2 bg-white">
      <h2 className="text-3xl font-semibold">Somos diferentes de tudo que você já viu</h2>

      <span className="text-md text-zinc-500">Através de processos próprios e tecnologias ágeis conseguimos resultados incríveis com o seu projeto</span>

      <div className="flex justify-center gap-3 mt-12">
        <div className="h-16">
          <Lottie animationData={rocket} />
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
  )
}