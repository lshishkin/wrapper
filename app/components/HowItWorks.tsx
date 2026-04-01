export default function HowItWorks() {
  return (
    <section className="section-bg py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
          Как проходит обучение
        </h2>
        <div className="grid md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center text-2xl font-bold">1</div>
            <h3 className="text-xl font-semibold mb-2 text-emerald-400">Онлайн занятия</h3>
            <p className="text-slate-400">Смотрите онлайн лекции и материалы в удобное для вас время, по 2 часа в течение 10 дней.</p>
          </div>
          <div>
            <div className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center text-2xl font-bold">2</div>
            <h3 className="text-xl font-semibold mb-2 text-teal-400">Практика</h3>
            <p className="text-slate-400">Приезжаете в студию оклейки на 5 дней для интенсивной практики на клиентском автомобиле.</p>
          </div>
          <div>
            <div className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center text-2xl font-bold">3</div>
            <h3 className="text-xl font-semibold mb-2 text-cyan-400">Сертификация</h3>
            <p className="text-slate-400">Получаете сертификат подтверждающий вашу квалификацию.</p>
          </div>
          <div>
            <div className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center text-2xl font-bold">4</div>
            <h3 className="text-xl font-semibold mb-2 text-blue-400">Поддержка</h3>
            <p className="text-slate-400">Бессрочная поддержка от преподавателей и доступ в закрытый чат мастеров.</p>
          </div>
        </div>
      </div>
    </section>
  )
}