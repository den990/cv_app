// app/page.js
export default function Home() {
  return (
      <div className="max-w-3xl mx-auto space-y-10">

        {/* ОБО МНЕ */}
        <section id="about" className="bg-white p-6 rounded-lg shadow">
          <h1 className="text-3xl font-bold">Колдырев Даниил</h1>
          <p className="text-gray-700 mt-2">
            Веб-разработчик с опытом создания веб-приложений(фронт) на React и мобильных приложений на Flutter, backend - yii2, laravel, wp, go
          </p>
        </section>

        {/* ОПЫТ РАБОТЫ */}
        <section id="experience" className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-bold">Опыт работы</h2>
          <ul className="list-disc pl-6 mt-2">
            <li><strong>Backend-разработчик</strong> – АйТиРезультат (2024 - 2025)</li>
          </ul>
        </section>

        {/* ОБРАЗОВАНИЕ */}
        <section id="education" className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-bold">Образование</h2>
          <p className="mt-2">Программная инженерия, Поволжский государственный технологочиский университет (2021 - 2025)</p>
        </section>

        {/* НАВЫКИ */}
        <section id="skills" className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-bold">Навыки</h2>
          <ul className="grid grid-cols-2 gap-2 mt-2">
            <li>✔️ Dart / Flutter</li>
            <li>✔️ C++</li>
            <li>✔️ React</li>
            <li>✔️ HTML / CSS</li>
            <li>✔️ JS</li>
            <li>✔️ Yii2</li>
            <li>✔️ Laravel</li>
            <li>✔️ Go</li>
          </ul>
        </section>

        {/* КОНТАКТЫ */}
        <section id="contact" className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-bold">Контакты</h2>
          <p>Email: kodyrev98@mail.ru</p>
          <p>Github: github.com/den990</p>
        </section>

      </div>
  );
}
  