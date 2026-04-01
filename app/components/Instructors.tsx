export default function Instructors() {

  return (

    <section className="py-16">

      <div className="container mx-auto px-4">

        <h2 className="text-3xl font-bold text-center mb-12">Преподаватели курсов</h2>

        <div className="grid md:grid-cols-2 gap-8">

          <div className="text-center">

            <div className="bg-gray-300 rounded-full w-32 h-32 mx-auto mb-4 flex items-center justify-center text-gray-600">

              [Фото Ивана Петрова - заменить]

            </div>

            <h3 className="text-xl font-semibold">Иван Петров</h3>

            <p className="text-gray-600 mb-4">Основатель студии WrapEkb в Екатеринбурге</p>

            <p>Преподаватель школы оклейки WrapEkb School. Судья чемпионата по оклейке пленками. Стаж работы с пленками с 2010 года.</p>

            <div className="flex justify-center gap-4 mt-4">

              <a href="#" className="text-blue-600">WhatsApp</a>

              <a href="#" className="text-blue-600">Telegram</a>

              <a href="#" className="text-blue-600">Instagram</a>

            </div>

          </div>

          <div className="text-center">

            <div className="bg-gray-300 rounded-full w-32 h-32 mx-auto mb-4 flex items-center justify-center text-gray-600">

              [Фото Алексея Сидорова - заменить]

            </div>

            <h3 className="text-xl font-semibold">Алексей Сидоров</h3>

            <p className="text-gray-600 mb-4">Ведущий специалист по оклейке в студии WrapEkb</p>

            <p>Лучший специалист по оклейке автомобилей. Стаж работы в оклейке более 8 лет, в полировке более 15 лет.</p>

            <div className="flex justify-center gap-4 mt-4">

              <a href="#" className="text-blue-600">WhatsApp</a>

              <a href="#" className="text-blue-600">Telegram</a>

              <a href="#" className="text-blue-600">Instagram</a>

            </div>

          </div>

        </div>

      </div>

    </section>

  )

}