export default function Reviews() {

  return (

    <section className="py-16">

      <div className="container mx-auto px-4">

        <h2 className="text-3xl font-bold text-center mb-12">Наши ученики</h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="text-center">

            <div className="bg-gray-300 rounded-lg w-full h-48 mb-4 flex items-center justify-center text-gray-600">

              [Фото ученика 1 - заменить]

            </div>

            <p className="italic">"Отличное обучение, много практики. Теперь зарабатываю в 2 раза больше!"</p>

            <p className="font-semibold mt-2">Алексей, Екатеринбург</p>

          </div>

          <div className="text-center">

            <div className="bg-gray-300 rounded-lg w-full h-48 mb-4 flex items-center justify-center text-gray-600">

              [Фото ученика 2 - заменить]

            </div>

            <p className="italic">"Преподаватели настоящие профессионалы. Рекомендую всем!"</p>

            <p className="font-semibold mt-2">Мария, Челябинск</p>

          </div>

          <div className="text-center">

            <div className="bg-gray-300 rounded-lg w-full h-48 mb-4 flex items-center justify-center text-gray-600">

              [Фото ученика 3 - заменить]

            </div>

            <p className="italic">"Открыл свою студию благодаря этому курсу. Спасибо!"</p>

            <p className="font-semibold mt-2">Дмитрий, Екатеринбург</p>

          </div>

        </div>

      </div>

    </section>

  )

}