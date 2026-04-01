export default function WhoFor() {

  return (

    <section className="py-16 bg-gray-50">

      <div className="container mx-auto px-4">

        <h2 className="text-3xl font-bold text-center mb-12">Кому подойдет обучение</h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="text-center">

            <div className="bg-blue-100 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">

              <span className="text-3xl">👨‍🎓</span>

            </div>

            <h3 className="text-xl font-semibold mb-4">Новичкам</h3>

            <p>Обучение поможет освоить востребованную профессию, узнать теоретические основы и отработать полученные знания на практике.</p>

          </div>

          <div className="text-center">

            <div className="bg-green-100 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">

              <span className="text-3xl">🔧</span>

            </div>

            <h3 className="text-xl font-semibold mb-4">Мастерам с опытом</h3>

            <p>Обучение поможет заполнить пробелы в знаниях, скорректировать технику процесса оклейки, повысить качество выполняемых работ.</p>

          </div>

          <div className="text-center">

            <div className="bg-purple-100 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">

              <span className="text-3xl">💼</span>

            </div>

            <h3 className="text-xl font-semibold mb-4">Владельцам бизнеса</h3>

            <p>Вы научитесь лучше понимать процессы в вашей детейлинг студии и повысите качество выполнения работ вашими сотрудниками.</p>

          </div>

        </div>

      </div>

    </section>

  )

}