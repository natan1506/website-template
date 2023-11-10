import { ArrowRight } from "phosphor-react";

export default function Home() {
  return (
    <div>
      <section>
        <div className="grid grid-cols-2 w-full mx-auto mt-4 gap-2">
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
          <div></div>
        </div>
      </section>
    </div>
  )
}