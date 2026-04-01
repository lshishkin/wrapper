export default function Packages() {
  return (
    <section className="section-bg py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
          Выберите пакет обучения
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="card">
            <h3 className="text-2xl font-semibold mb-4 text-emerald-400">Онлайн обучение Стандарт</h3>
            <p className="mb-4 text-slate-300">Обучение оклейке полиуретановыми и виниловыми пленками.</p>
            <ul className="mb-6 space-y-2 text-slate-400">
              <li>• Более 20 часов учебных материалов</li>
              <li>• Обучение работе с пленками</li>
              <li>• Скидки на материалы</li>
              <li>• Доступ в учебный чат</li>
            </ul>
            <p className="text-3xl font-bold text-emerald-400 mb-4">25 000 ₽</p>
            <button className="btn-primary w-full hover:scale-105 transition-transform duration-300">Выбрать пакет</button>
          </div>
          <div className="card border-2 border-emerald-500 relative">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-emerald-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
              Популярный
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-teal-400">Стандарт</h3>
            <p className="mb-4 text-slate-300">5 дней интенсивного тренинга + онлайн теория.</p>
            <ul className="mb-6 space-y-2 text-slate-400">
              <li>• 5 дней практики</li>
              <li>• Сертификат</li>
              <li>• Онлайн поддержка</li>
              <li>• Скидки на материалы</li>
            </ul>
            <p className="text-3xl font-bold text-teal-400 mb-4">65 000 ₽</p>
            <button className="btn-primary w-full hover:scale-105 transition-transform duration-300">Выбрать пакет</button>
          </div>
          <div className="card">
            <h3 className="text-2xl font-semibold mb-4 text-cyan-400">Премиум</h3>
            <p className="mb-4 text-slate-300">Расширенный курс с дополнительными материалами.</p>
            <ul className="mb-6 space-y-2 text-slate-400">
              <li>• Все из Стандарт</li>
              <li>• Расширенный набор инструментов</li>
              <li>• Доступ ко всем обновлениям</li>
            </ul>
            <p className="text-3xl font-bold text-cyan-400 mb-4">85 000 ₽</p>
            <button className="btn-primary w-full hover:scale-105 transition-transform duration-300">Выбрать пакет</button>
          </div>
        </div>
        <div className="text-center mt-12">
          <p className="mb-4 text-slate-300">Нужна помощь с выбором пакета?</p>
          <p className="text-slate-400">Позвоните нам или напишите в мессенджеры. Мы проконсультируем и ответим на все ваши вопросы.</p>
          <p className="text-lg text-emerald-400 font-semibold">+7 (343) 123-45-67</p>
        </div>
      </div>
    </section>
  )
}