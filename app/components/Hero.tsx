export default function Hero() {

  return (

    <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20">

      <div className="container mx-auto px-4 text-center">

        <h1 className="text-4xl md:text-6xl font-bold mb-4">Школа оклейки автомобилей</h1>

        <h2 className="text-2xl md:text-4xl mb-6">Екатеринбург</h2>

        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">

          Обучаем оклейке и детейлингу с нуля до профи. Онлайн и очное обучение.

          Многие наши выпускники зарабатывают от 150 000 рублей в месяц.

        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">

          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">

            Записаться на курс

          </button>

          <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition">

            Узнать больше

          </button>

        </div>

      </div>

      {/* Placeholder for image */}

      <div className="mt-10 bg-gray-300 h-64 w-full max-w-4xl mx-auto rounded-lg flex items-center justify-center text-gray-600">

        [Изображение процесса оклейки - заменить на реальное фото]

      </div>

    </section>

  )

}