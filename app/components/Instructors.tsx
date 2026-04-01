export default function Instructors() {
  return (
    <section className="section-bg-alt py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
          Преподаватели курсов
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="card text-center">
            <div className="bg-gradient-to-r from-slate-600 to-slate-500 rounded-full w-32 h-32 mx-auto mb-4 flex items-center justify-center text-slate-300 text-4xl">
              👨‍🏫
            </div>
            <h3 className="text-2xl font-semibold text-emerald-400">Иван Петров</h3>
            <p className="text-slate-400 mb-4">Основатель студии WrapEkb в Екатеринбурге</p>
            <p className="text-slate-300 mb-4">Преподаватель школы оклейки WrapEkb School. Судья чемпионата по оклейке пленками. Стаж работы с пленками с 2010 года.</p>
            <div className="flex justify-center gap-4">
              <a href="#" className="text-emerald-400 hover:text-emerald-300 transition">WhatsApp</a>
              <a href="#" className="text-teal-400 hover:text-teal-300 transition">Telegram</a>
              <a href="#" className="text-cyan-400 hover:text-cyan-300 transition">Instagram</a>
            </div>
          </div>
          <div className="card text-center">
            <div className="bg-gradient-to-r from-slate-600 to-slate-500 rounded-full w-32 h-32 mx-auto mb-4 flex items-center justify-center text-slate-300 text-4xl">
              👨‍🔧
            </div>
            <h3 className="text-2xl font-semibold text-teal-400">Алексей Сидоров</h3>
            <p className="text-slate-400 mb-4">Ведущий специалист по оклейке в студии WrapEkb</p>
            <p className="text-slate-300 mb-4">Лучший специалист по оклейке автомобилей. Стаж работы в оклейке более 8 лет, в полировке более 15 лет.</p>
            <div className="flex justify-center gap-4">
              <a href="#" className="text-emerald-400 hover:text-emerald-300 transition">WhatsApp</a>
              <a href="#" className="text-teal-400 hover:text-teal-300 transition">Telegram</a>
              <a href="#" className="text-cyan-400 hover:text-cyan-300 transition">Instagram</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}