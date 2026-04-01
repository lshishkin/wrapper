export default function Contact() {

  return (

    <section className="section-bg-alt py-16">

      <div className="container mx-auto px-4">

        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
          Запишитесь на курс сейчас
        </h2>

        <div className="max-w-2xl mx-auto">

          <form className="card">

            <div className="mb-4">

              <label className="block text-gray-700 mb-2">Имя</label>

              <input type="text" className="w-full p-3 border border-gray-300 rounded-lg" />

            </div>

            <div className="mb-4">

              <label className="block text-gray-700 mb-2">Телефон</label>

              <input type="tel" className="w-full p-3 border border-gray-300 rounded-lg" />

            </div>

            <div className="mb-4">

              <label className="block text-gray-700 mb-2">Email</label>

              <input type="email" className="w-full p-3 border border-gray-300 rounded-lg" />

            </div>

            <div className="mb-6">

              <label className="block text-gray-700 mb-2">Сообщение</label>

              <textarea className="w-full p-3 border border-gray-300 rounded-lg h-32"></textarea>

            </div>

            <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition">

              Отправить заявку

            </button>

          </form>

          <div className="mt-8 text-center">

            <p className="mb-2">Или позвоните нам:</p>

            <p className="text-2xl font-bold text-blue-600">+7 (343) 123-45-67</p>

            <p className="mt-4">Email: info@wrap-ekb.ru</p>

            <p>Адрес: Екатеринбург, ул. Ленина, 10</p>

          </div>

        </div>

      </div>

    </section>

  )

}