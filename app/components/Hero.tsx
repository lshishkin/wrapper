export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-teal-500/10"></div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
          Школа оклейки автомобилей
        </h1>
        <h2 className="text-3xl md:text-5xl mb-8 text-slate-300">Екатеринбург</h2>
        <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-slate-400 leading-relaxed">
          Обучаем оклейке и детейлингу с нуля до профи. Онлайн и очное обучение.
          Многие наши выпускники зарабатывают от 150 000 рублей в месяц.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <button className="btn-primary">
            Записаться на курс
          </button>
          <button className="border-2 border-emerald-500 text-emerald-400 px-8 py-3 rounded-lg font-semibold hover:bg-emerald-500 hover:text-white transition-all duration-300">
            Узнать больше
          </button>
        </div>
      </div>
      {/* Modern geometric shapes */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-emerald-500/20 rounded-full blur-xl"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-teal-500/20 rounded-full blur-xl"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-slate-600 rounded-lg rotate-45"></div>
    </section>
  )
}