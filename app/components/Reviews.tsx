export default function Reviews() {
  return (
    <section className="section-bg py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
          Наши ученики
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="card text-center">
            <div className="bg-gradient-to-r from-slate-600 to-slate-500 rounded-lg w-full h-48 mb-4 flex items-center justify-center text-slate-300 text-lg">
              [Фото ученика 1 - заменить]
            </div>
            <p className="italic text-slate-300 mb-2">"Отличное обучение, много практики. Теперь зарабатываю в 2 раза больше!"</p>
            <p className="font-semibold text-emerald-400">Алексей, Екатеринбург</p>
          </div>
          <div className="card text-center">
            <div className="bg-gradient-to-r from-slate-600 to-slate-500 rounded-lg w-full h-48 mb-4 flex items-center justify-center text-slate-300 text-lg">
              [Фото ученика 2 - заменить]
            </div>
            <p className="italic text-slate-300 mb-2">"Преподаватели настоящие профессионалы. Рекомендую всем!"</p>
            <p className="font-semibold text-teal-400">Мария, Челябинск</p>
          </div>
          <div className="card text-center">
            <div className="bg-gradient-to-r from-slate-600 to-slate-500 rounded-lg w-full h-48 mb-4 flex items-center justify-center text-slate-300 text-lg">
              [Фото ученика 3 - заменить]
            </div>
            <p className="italic text-slate-300 mb-2">"Открыл свою студию благодаря этому курсу. Спасибо!"</p>
            <p className="font-semibold text-cyan-400">Дмитрий, Екатеринбург</p>
          </div>
        </div>
      </div>
    </section>
  )
}