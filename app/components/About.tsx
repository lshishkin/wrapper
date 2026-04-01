export default function About() {
  return (
    <section className="section-bg py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
          О школе
        </h2>
        <div className="max-w-4xl mx-auto text-center mb-12">
          <p className="text-xl mb-6 text-slate-300">
            Школа оклейки Екатеринбург — экспертный центр профессионального обучения оклейке и детейлингу,
            где мы развиваем культуру качественного мастерства и устанавливаем новые стандарты отрасли.
          </p>
          <p className="text-lg text-slate-400">
            Наша миссия: Повышаем качество услуг в индустрии защиты и преображения автомобилей через
            системное обучение современным технологиям работы с защитными полиуретановыми пленками,
            цветными виниловыми пленками (брендирование и полная оклейка), комплексным детейлингом.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="card text-center">
            <div className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center text-2xl">
              🏆
            </div>
            <h3 className="text-xl font-semibold mb-2 text-emerald-400">Работают в ведущих студиях</h3>
            <p className="text-slate-400">Наши выпускники трудятся в лучших автосервисах Екатеринбурга и России.</p>
          </div>
          <div className="card text-center">
            <div className="bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center text-2xl">
              🚗
            </div>
            <h3 className="text-xl font-semibold mb-2 text-teal-400">Открыли свои студии</h3>
            <p className="text-slate-400">Многие стали владельцами успешных бизнесов в сфере оклейки.</p>
          </div>
          <div className="card text-center">
            <div className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center text-2xl">
              ⭐
            </div>
            <h3 className="text-xl font-semibold mb-2 text-cyan-400">Стали мастерами премиум сегмента</h3>
            <p className="text-slate-400">Достигли высот в профессиональной оклейке автомобилей.</p>
          </div>
        </div>
      </div>
    </section>
  )
}