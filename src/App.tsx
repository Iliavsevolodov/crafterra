import { ArrowRight, BadgeCheck, Megaphone, Search, Sparkles, Store, Tags } from 'lucide-react';

const categories = [
  'Мёд и продукты пасеки',
  'Чай и травяные сборы',
  'Мыло и натуральный уход',
  'Свечи и аромат для дома',
  'Ручная работа и декор',
  'Сладости и фермерское',
  'Украшения и аксессуары',
  'Подарочные наборы',
];

const tariffs = [
  {
    name: 'Старт',
    price: '390₽',
    description: 'Для мастеров и небольших производителей, которые хотят попробовать онлайн-витрину.',
    features: ['до 10 товаров', 'базовая страница бренда', 'заявки от покупателей', 'отзывы'],
  },
  {
    name: 'База',
    price: '990₽',
    description: 'Основной тариф для активных локальных брендов с регулярным ассортиментом.',
    features: ['до 50 товаров', 'расширенная витрина', 'статистика просмотров', 'акции и подборки'],
    highlighted: true,
  },
  {
    name: 'Бренд',
    price: '1990₽',
    description: 'Для производителей, которым нужна более сильная видимость и полноценная бренд-страница.',
    features: ['до 150 товаров', 'приоритет в каталоге', 'промокоды', 'расширенная аналитика'],
  },
];

const promoFormats = [
  'Место в подборке',
  'Товар в топе категории',
  'Баннер на главной',
  'Участие в сезонной коллекции',
  'Раздел «Бренд недели»',
  'Продвижение к праздникам',
];

export function App() {
  return (
    <main>
      <section className="hero">
        <nav className="nav">
          <div className="logo">Крафтерра</div>
          <div className="navLinks">
            <a href="#categories">Категории</a>
            <a href="#tariffs">Тарифы</a>
            <a href="#promo">Продвижение</a>
          </div>
          <a className="navButton" href="#seller">Стать продавцом</a>
        </nav>

        <div className="heroGrid">
          <div className="heroContent">
            <div className="eyebrow">
              <Sparkles size={18} /> территория крафта и локальных брендов
            </div>
            <h1>Онлайн-витрина крафтовых товаров от настоящих производителей</h1>
            <p>
              Крафтерра помогает пасечникам, мыловарам, рукодельницам, чайным мастерам,
              фермерам и малым брендам красиво представить товары онлайн и получать заявки от покупателей.
            </p>
            <div className="heroActions">
              <a className="primaryButton" href="#seller">
                Разместить бренд <ArrowRight size={18} />
              </a>
              <a className="secondaryButton" href="#categories">Смотреть категории</a>
            </div>
            <div className="trustBar">
              <span>30 дней бесплатно</span>
              <span>без комиссии с заказов</span>
              <span>доставка на стороне бренда</span>
            </div>
          </div>

          <div className="heroCard">
            <div className="productMock mainProduct">
              <span>Пасека Ивановых</span>
              <strong>Липовый мёд</strong>
              <em>Вологодская область</em>
            </div>
            <div className="productMock floating one">Свечи ручной работы</div>
            <div className="productMock floating two">Травяной чай</div>
            <div className="productMock floating three">Натуральное мыло</div>
          </div>
        </div>
      </section>

      <section className="section intro">
        <div>
          <div className="sectionLabel">Не Авито</div>
          <h2>Это не доска объявлений, а брендовая витрина</h2>
        </div>
        <p>
          На Крафтерре продавец выглядит не как случайное объявление, а как малый бренд:
          со страницей, историей, ассортиментом, карточками товаров, отзывами и продвижением внутри платформы.
        </p>
      </section>

      <section className="features">
        <div className="featureCard">
          <Store />
          <h3>Для продавцов</h3>
          <p>Страница бренда, каталог товаров, заявки покупателей, отзывы и статистика без сложной разработки сайта.</p>
        </div>
        <div className="featureCard">
          <Search />
          <h3>Для покупателей</h3>
          <p>Удобный поиск крафтовых товаров, локальных производителей и подарков напрямую от создателей.</p>
        </div>
        <div className="featureCard">
          <Megaphone />
          <h3>Для продвижения</h3>
          <p>Подборки, топ категорий, сезонные коллекции, баннеры и специальные рекламные места.</p>
        </div>
      </section>

      <section className="section" id="categories">
        <div className="sectionHeader">
          <div className="sectionLabel">Категории</div>
          <h2>С чего можно начать каталог</h2>
        </div>
        <div className="categoryGrid">
          {categories.map((category) => (
            <div className="categoryCard" key={category}>{category}</div>
          ))}
        </div>
      </section>

      <section className="section tariffs" id="tariffs">
        <div className="sectionHeader centered">
          <div className="sectionLabel">Монетизация</div>
          <h2>Тарифы для продавцов</h2>
          <p>Первые 30 дней бесплатно. Комиссии с заказов нет, потому что оплаты проходят напрямую между покупателем и продавцом.</p>
        </div>
        <div className="tariffGrid">
          {tariffs.map((tariff) => (
            <div className={`tariffCard ${tariff.highlighted ? 'highlighted' : ''}`} key={tariff.name}>
              {tariff.highlighted && <div className="badge">Основной тариф</div>}
              <h3>{tariff.name}</h3>
              <div className="price">{tariff.price}<span>/мес</span></div>
              <p>{tariff.description}</p>
              <ul>
                {tariff.features.map((feature) => (
                  <li key={feature}><BadgeCheck size={18} /> {feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="section promo" id="promo">
        <div className="sectionHeader">
          <div className="sectionLabel">Реклама внутри платформы</div>
          <h2>Платное продвижение для брендов</h2>
          <p>Отдельный источник дохода платформы — видимость в каталоге, подборках и сезонных разделах.</p>
        </div>
        <div className="promoGrid">
          {promoFormats.map((format) => (
            <div className="promoCard" key={format}>
              <Tags size={18} />
              <span>{format}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="seller" id="seller">
        <div>
          <div className="sectionLabel">Для брендов</div>
          <h2>Создайте витрину своего бренда на Крафтерре</h2>
          <p>
            Вы занимаетесь продуктом, клиентом, упаковкой и доставкой. Крафтерра даёт красивую онлайн-витрину,
            каталог, заявки и инструменты продвижения.
          </p>
        </div>
        <a className="primaryButton dark" href="#tariffs">
          Выбрать тариф <ArrowRight size={18} />
        </a>
      </section>
    </main>
  );
}
