import {
  ArrowRight,
  BadgeCheck,
  Heart,
  MapPin,
  Search,
  ShoppingBag,
  Sparkles,
  Star,
  Store,
} from 'lucide-react';

const categories = [
  {
    name: 'Мёд и пасека',
    description: 'Мёд, крем-мёд, воск, свечи, подарочные наборы от пасечников.',
  },
  {
    name: 'Чай и травы',
    description: 'Авторские чайные сборы, травы, напитки и локальные вкусы.',
  },
  {
    name: 'Мыло и уход',
    description: 'Натуральное мыло, косметика, уходовые средства ручной работы.',
  },
  {
    name: 'Свечи и уют',
    description: 'Свечи, ароматы, декор и товары для атмосферного дома.',
  },
  {
    name: 'Сладости',
    description: 'Домашние десерты, конфеты, пастила, варенье и крафтовые лакомства.',
  },
  {
    name: 'Ручная работа',
    description: 'Украшения, текстиль, игрушки, керамика, декор и авторские изделия.',
  },
];

const products = [
  {
    title: 'Липовый мёд в стекле',
    brand: 'Пасека Ивановых',
    city: 'Вологодская область',
    price: 'от 690₽',
    tag: 'Хит сезона',
  },
  {
    title: 'Травяной чай «Северный вечер»',
    brand: 'Травы Севера',
    city: 'Вологда',
    price: 'от 420₽',
    tag: 'К чаю',
  },
  {
    title: 'Натуральное мыло с лавандой',
    brand: 'Мыльная мастерская',
    city: 'Ярославль',
    price: 'от 280₽',
    tag: 'Ручная работа',
  },
  {
    title: 'Подарочный набор свечей',
    brand: 'Тёплый дом',
    city: 'Кострома',
    price: 'от 1490₽',
    tag: 'Подарок',
  },
];

const brands = [
  {
    name: 'Пасека Ивановых',
    category: 'Мёд и продукты пасеки',
    city: 'Вологодская область',
    text: 'Семейная пасека с натуральным мёдом, восковыми свечами и подарочными наборами.',
  },
  {
    name: 'Травы Севера',
    category: 'Чай и травяные сборы',
    city: 'Вологда',
    text: 'Авторские чайные сборы, созданные из северных трав и ягод.',
  },
  {
    name: 'Тёплый дом',
    category: 'Свечи и декор',
    city: 'Кострома',
    text: 'Свечи ручной работы, ароматы для дома и уютные подарочные наборы.',
  },
];

const steps = [
  'Выберите категорию или найдите товар через поиск.',
  'Изучите карточку товара и страницу бренда.',
  'Свяжитесь с продавцом напрямую удобным способом.',
  'Оплату, упаковку и доставку согласуйте с продавцом.',
];

export function App() {
  return (
    <main>
      <section className="hero buyerHero">
        <nav className="nav">
          <a className="logo" href="#top" aria-label="Крафтерра">
            Крафтерра
          </a>
          <div className="navLinks">
            <a href="#catalog">Каталог</a>
            <a href="#brands">Бренды</a>
            <a href="#how">Как купить</a>
            <a href="#seller-coming">Продавцам</a>
          </div>
          <a className="navButton" href="#catalog">
            Смотреть товары
          </a>
        </nav>

        <div className="heroGrid" id="top">
          <div className="heroContent">
            <div className="eyebrow">
              <Sparkles size={18} /> витрина крафтовых товаров
            </div>
            <h1>Найдите товары с душой от локальных производителей</h1>
            <p>
              Крафтерра собирает в одном месте мёд, чай, мыло, свечи, сладости,
              подарки, декор и ручную работу от настоящих мастеров и малых брендов.
            </p>

            <div className="searchPanel" role="search">
              <Search size={20} />
              <span>Что ищем? Например: мёд, свечи, чай, подарок</span>
              <button type="button">Найти</button>
            </div>

            <div className="heroActions">
              <a className="primaryButton" href="#catalog">
                Перейти в каталог <ArrowRight size={18} />
              </a>
              <a className="secondaryButton" href="#brands">
                Смотреть бренды
              </a>
            </div>

            <div className="trustBar">
              <span>локальные бренды</span>
              <span>крафтовые товары</span>
              <span>связь напрямую с продавцом</span>
            </div>
          </div>

          <div className="heroShowcase" aria-label="Примеры товаров">
            <div className="showcaseBadge">Подборка недели</div>
            <div className="showcaseProduct large">
              <span>Пасека Ивановых</span>
              <strong>Липовый мёд</strong>
              <em>от 690₽</em>
            </div>
            <div className="showcaseProduct small top">
              <span>Травяной чай</span>
              <strong>Северный вечер</strong>
            </div>
            <div className="showcaseProduct small bottom">
              <span>Подарок</span>
              <strong>Свечи ручной работы</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="section intro buyerIntro">
        <div>
          <div className="sectionLabel">Для покупателей</div>
          <h2>Это не доска объявлений, а красивая витрина брендов</h2>
        </div>
        <p>
          Здесь покупатель видит не случайное объявление, а товар, производителя,
          город, историю бренда, ассортимент и понятный способ связаться с продавцом.
        </p>
      </section>

      <section className="section" id="catalog">
        <div className="sectionHeader">
          <div>
            <div className="sectionLabel">Каталог</div>
            <h2>Категории для первого запуска</h2>
          </div>
          <p>
            Стартуем с понятных крафтовых направлений, где важны качество, доверие,
            история производителя и красивая подача.
          </p>
        </div>
        <div className="categoryGrid buyerCategoryGrid">
          {categories.map((category) => (
            <article className="categoryCard buyerCategoryCard" key={category.name}>
              <ShoppingBag size={24} />
              <h3>{category.name}</h3>
              <p>{category.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section featuredProducts">
        <div className="sectionHeader">
          <div>
            <div className="sectionLabel">Витрина</div>
            <h2>Пример карточек товаров</h2>
          </div>
          <p>
            На первом этапе это демонстрационные карточки, чтобы сразу собрать структуру будущего каталога.
          </p>
        </div>
        <div className="productGrid">
          {products.map((product) => (
            <article className="productCard" key={product.title}>
              <div className="productImage">
                <span>{product.tag}</span>
              </div>
              <div className="productBody">
                <h3>{product.title}</h3>
                <div className="productMeta">
                  <Store size={16} /> {product.brand}
                </div>
                <div className="productMeta">
                  <MapPin size={16} /> {product.city}
                </div>
                <div className="productFooter">
                  <strong>{product.price}</strong>
                  <button type="button">Связаться</button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="brands">
        <div className="sectionHeader">
          <div>
            <div className="sectionLabel">Бренды</div>
            <h2>Покупатель выбирает не только товар, но и производителя</h2>
          </div>
          <p>
            У каждого продавца должна быть отдельная страница бренда: кто он, где находится,
            что производит и как с ним связаться.
          </p>
        </div>
        <div className="brandGrid">
          {brands.map((brand) => (
            <article className="brandCard" key={brand.name}>
              <div className="brandAvatar">{brand.name.slice(0, 1)}</div>
              <div>
                <div className="brandCategory">{brand.category}</div>
                <h3>{brand.name}</h3>
                <p>{brand.text}</p>
                <div className="productMeta">
                  <MapPin size={16} /> {brand.city}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section how" id="how">
        <div className="sectionHeader centered">
          <div className="sectionLabel">Сценарий покупки</div>
          <h2>Как покупатель будет пользоваться Крафтеррой</h2>
          <p>
            Крафтерра помогает найти товар и продавца. Оплата, упаковка и доставка остаются на стороне бренда.
          </p>
        </div>
        <div className="stepsGrid">
          {steps.map((step, index) => (
            <div className="stepCard" key={step}>
              <span>{index + 1}</span>
              <p>{step}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section trustSection">
        <div className="trustCard">
          <Heart size={34} />
          <h3>Товары с историей</h3>
          <p>Покупатель понимает, кто создал продукт, где он сделан и почему ему можно доверять.</p>
        </div>
        <div className="trustCard">
          <Star size={34} />
          <h3>Отбор и эстетика</h3>
          <p>Платформа не должна выглядеть как хаотичная лента объявлений: важны модерация и единый стиль.</p>
        </div>
        <div className="trustCard">
          <BadgeCheck size={34} />
          <h3>Прямой контакт</h3>
          <p>Покупатель связывается с брендом напрямую и сам согласует оплату, получение или доставку.</p>
        </div>
      </section>

      <section className="seller" id="seller-coming">
        <div>
          <div className="sectionLabel">Вторая часть проекта</div>
          <h2>После покупательской витрины создадим кабинет продавца</h2>
          <p>
            Там продавцы смогут добавлять бренд, товары, контакты, условия доставки, управлять заявками,
            подключать тариф и покупать продвижение внутри Крафтерры.
          </p>
        </div>
        <a className="primaryButton dark" href="#catalog">
          Вернуться к витрине <ArrowRight size={18} />
        </a>
      </section>
    </main>
  );
}
