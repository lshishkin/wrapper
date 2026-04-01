export default function Packages() {

  return (

    <section className="py-16 bg-gray-50">

      <div className="container mx-auto px-4">

        <h2 className="text-3xl font-bold text-center mb-12">Выберите пакет обучения</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          <div className="bg-white p-6 rounded-lg shadow-md">

            <h3 className="text-xl font-semibold mb-4">Онлайн обучение Стандарт</h3>

            <p className="mb-4">Обучение оклейке полиуретановыми и виниловыми пленками.</p>

            <ul className="mb-6 space-y-2">

              <li>• Более 20 часов учебных материалов</li>

              <li>• Обучение работе с пленками</li>

              <li>• Скидки на материалы</li>

              <li>• Доступ в учебный чат</li>

            </ul>

            <p className="text-2xl font-bold text-green-600 mb-4">25 000 ₽</p>

            <button className="w-full bg-blue-600 text-white py-2 rounded-lg">Выбрать пакет</button>

          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border-2 border-blue-500">

            <h3 className="text-xl font-semibold mb-4">Стандарт</h3>

            <p className="mb-4">5 дней интенсивного тренинга + онлайн теория.</p>

            <ul className="mb-6 space-y-2">

              <li>• 5 дней практики</li>

              <li>• Сертификат</li>

              <li>• Онлайн поддержка</li>

              <li>• Скидки на материалы</li>

            </ul>

            <p className="text-2xl font-bold text-green-600 mb-4">65 000 ₽</p>

            <button className="w-full bg-blue-600 text-white py-2 rounded-lg">Выбрать пакет</button>

          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">

            <h3 className="text-xl font-semibold mb-4">Премиум</h3>

            <p className="mb-4">Расширенный курс с дополнительными материалами.</p>

            <ul className="mb-6 space-y-2">

              <li>• Все из Стандарт</li>

              <li>• Расширенный набор инструментов</li>

              <li>• Доступ ко всем обновлениям</li>

            </ul>

            <p className="text-2xl font-bold text-green-600 mb-4">85 000 ₽</p>

            <button className="w-full bg-blue-600 text-white py-2 rounded-lg">Выбрать пакет</button>

          </div>

        </div>

        <div className="text-center mt-8">

          <p className="mb-4">Нужна помощь с выбором пакета?</p>

          <p>Позвоните нам или напишите в мессенджеры. Мы проконсультируем и ответим на все ваши вопросы.</p>

          <p className="font-semibold">+7 (343) 123-45-67</p>

        </div>

      </div>

    </section>

  )

}