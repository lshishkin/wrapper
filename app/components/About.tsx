export default function About() {

  return (

    <section className="py-16 bg-gray-50">

      <div className="container mx-auto px-4">

        <h2 className="text-3xl font-bold text-center mb-8">О школе</h2>

        <p className="text-lg text-center mb-8 max-w-3xl mx-auto">

          Школа оклейки Екатеринбург — экспертный центр профессионального обучения оклейке и детейлингу,

          где мы развиваем культуру качественного мастерства и устанавливаем новые стандарты отрасли.

        </p>

        <p className="text-lg text-center mb-8">

          Наша миссия: Повышаем качество услуг в индустрии защиты и преображения автомобилей через

          системное обучение современным технологиям работы с защитными полиуретановыми пленками,

          цветными виниловыми пленками (брендирование и полная оклейка), комплексным детейлингом.

        </p>

        <div className="grid md:grid-cols-3 gap-8 text-center">

          <div>

            <div className="bg-blue-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">

              <span className="text-2xl">🏆</span>

            </div>

            <h3 className="text-xl font-semibold mb-2">Работают в ведущих студиях</h3>

            <p>Наши выпускники трудятся в лучших автосервисах Екатеринбурга и России.</p>

          </div>

          <div>

            <div className="bg-green-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">

              <span className="text-2xl">🚗</span>

            </div>

            <h3 className="text-xl font-semibold mb-2">Открыли свои студии</h3>

            <p>Многие стали владельцами успешных бизнесов в сфере оклейки.</p>

          </div>

          <div>

            <div className="bg-purple-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">

              <span className="text-2xl">⭐</span>

            </div>

            <h3 className="text-xl font-semibold mb-2">Стали мастерами премиум сегмента</h3>

            <p>Достигли высот в профессиональной оклейке автомобилей.</p>

          </div>

        </div>

      </div>

    </section>

  )

}