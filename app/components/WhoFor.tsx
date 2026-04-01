export default function WhoFor() {
  return (
    <section className="section-bg-alt py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Кому подойдет обучение
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="card text-center">
            <div className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center text-3xl">
              👨‍🎓
            </div>
            <h3 className="text-xl font-semibold mb-4 text-emerald-400">Новичкам</h3>
            <p className="text-slate-400">Обучение поможет освоить востребованную профессию, узнать теоретические основы и отработать полученные знания на практике.</p>
          </div>
          <div className="card text-center">
            <div className="bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center text-3xl">
              🔧
            </div>
            <h3 className="text-xl font-semibold mb-4 text-teal-400">Мастерам с опытом</h3>
            <p className="text-slate-400">Обучение поможет заполнить пробелы в знаниях, скорректировать технику процесса оклейки, повысить качество выполняемых работ.</p>
          </div>
          <div className="card text-center">
            <div className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center text-3xl">
              💼
            </div>
            <h3 className="text-xl font-semibold mb-4 text-cyan-400">Владельцам бизнеса</h3>
            <p className="text-slate-400">Вы научитесь лучше понимать процессы в вашей детейлинг студии и повысите качество выполнения работ вашими сотрудниками.</p>
          </div>
        </div>
      </div>
    </section>
  )
}