<template>
    <main>

        <!-- Промо информация -->
        <section class="container-xxl container-fluid py-lg-5 py-sm-3 py-1">
          <div class="row align-items-center">
            <h1 class="font-weight-bold text-center text-uppercase h2 p-3">Добро пожаловать на сайт ООО "АНТЕЙ"</h1>

            <div class="col-xxl-4">
                <p class="container text-center text-uppercase p-3">
                    ООО “АНТЕЙ”<br>производит установку и&nbsp;обслуживание систем
                    видеонаблюдения, охранно&#8209;пожарной сигнализации, шлагбаумов,
                    распашных ворот, кондиционеров, телевидения и телефонии, а&nbsp; также систем “Умный&nbsp;Дом”.
                </p>
            </div>

            <div id="carouselCaptions" class="container-xl carousel carousel-fade slide col" data-bs-ride="carousel">
              <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
              </div>
              <div class="carousel-inner div-bottom">
                <div class="carousel-item active">
                  <img src="@/assets/slide-first.jpg" class="d-block w-100" alt="First image for slider">
                  <div class="carousel-caption">
                    <h5 class="white-text-shadow">Контроль и безопасность</h5>
                    <p class="white-text-shadow d-none d-sm-block">Весь спектр услуг для вашего спокойствия</p>
                  </div>
                </div>
                <div class="carousel-item">
                  <img src="@/assets/slide-second.jpg" class="d-block w-100" alt="Second image for slider">
                  <div class="carousel-caption">
                    <h5 class="white-text-shadow">Большой выбор технических решений</h5>
                    <p class="white-text-shadow d-none d-sm-block">Работаем с ведущими поставщиками оборудования на любой вкус и кошелек</p>
                  </div>
                </div>
                <div class="carousel-item">
                  <img src="@/assets/slide-fourth.jpg" class="d-block w-100" alt="Third image for slider">
                  <div class="carousel-caption">
                    <h5 class="white-text-shadow">Гарантия и приятные цены</h5>
                    <p class="white-text-shadow d-none d-sm-block">Рады предложить вам высокое качество оборудования и монтажа</p>
                  </div>
                </div>
              </div>
              <button class="carousel-control-prev" type="button" data-bs-target="#carouselCaptions"  data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Предыдущий</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#carouselCaptions"  data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Следующий</span>
              </button>
            </div>
          </div>
        </section>

        <!-- Информация об услугах -->
        <section id="services" class="main-services py-lg-5 py-sm-3 py-1">
            <div class="container-lg">
                <div class="row justify-content-around mb-3">
                    <div class="col-xxl-8 col-lg-8 row">
                      <h2 class="text-md-center h4 p-sm-3 p-2">{{ loadCurrentService.header }}</h2>

                        <div class="container-md">
                            <figure>
                                <img class="img-bottom" :src="loadCurrentService.imgURL" :alt="loadCurrentService.imgAlt" />
                            </figure>

                            <p class="service-text bg-secondary text-light rounded px-lg-5 px-sm-4 px-2">{{ loadCurrentService.description }}</p>
                        </div>

                        <div class="container-md">
                            <div class="row justify-content-around">
                                <ul class="service-list col-md-5 container-md px-md-3 px-5 text-light list-group list-group-flush">
                                  <li class="list-group-item" v-for="item in loadCurrentService.properties" :key="item">{{ item }}</li>
                                </ul>

                                <div class="col-md-6">
                                    <p class="p-sm-3">На странице услуги вы можете ознакомиться с техническими характеристиками
                                        оборудования, подобрать конфигурацию
                                        и рассчитать приблизительную стоимость наших услуг</p>
                                    <router-link :to="loadCurrentTarget" class="mb-2 btn btn-primary">На страницу услуги</router-link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="services col-xxl-3 col-lg-4 mb-5">
                        <h3 class="text-center p-2 mb-lg-5 mb-3">Другие услуги</h3>
                        <div id="carouselIndicators" class="carousel bg-light slide rounded border border-2" data-bs-ride="carousel">
                          <div class="carousel-inner">
                            <div class="carousel-item active">
                                <h3 class="text-center p-2">Сигнализация</h3>
                                <div class="description-wrapper px-5">
                                    <img class="px-2" src="@/assets/fire-signal-service.svg">
                                    <ul class="list-group list-group-flush">
                                        <li class="list-group-item">Пожарная сигнализация и оборудование</li>
                                        <li class="list-group-item">Охранные датчики</li>
                                        <li class="list-group-item">Решения на базе GSM</li>
                                    </ul>
                                </div>
                                <a href="#services" class="btn btn-primary" @click="currentService = 'signaling'">Узнать подробнее &gt;&gt;&gt;</a>
                            </div>
                            <div class="carousel-item">
                                <h3 class="text-center p-2">Телефония</h3>
                                <div class="description-wrapper px-5">
                                    <img class="px-2" src="@/assets/ip-phone.svg">
                                    <ul class="list-group list-group-flush">
                                        <li class="list-group-item">Аналоговые и SIP-телефоны</li>
                                        <li class="list-group-item">Приложения на смартфоне и компьютере</li>
                                        <li class="list-group-item">Станции АТС/МиниАТС</li>
                                    </ul>
                                </div>
                                <a href="#services" class="btn btn-primary" @click="currentService = 'phone'">Узнать подробнее &gt;&gt;&gt;</a>
                            </div>
                            <div class="carousel-item">
                                <h3 class="text-center p-2">Системы доступа</h3>
                                <div class="description-wrapper px-5">
                                    <img class="px-2" src="@/assets/barrier.svg">
                                    <ul class="list-group list-group-flush">
                                        <li class="list-group-item">Шлагбаумы и домофоны</li>
                                        <li class="list-group-item">Автоматика для ворот</li>
                                        <li class="list-group-item">Системы контроля и управления доступом</li>
                                    </ul>
                                </div>
                                <a href="#services" class="btn btn-primary" @click="currentService = 'barrier'">Узнать подробнее &gt;&gt;&gt;</a>
                            </div>
                            <div class="carousel-item">
                                <h3 class="text-center p-2">Сплит-системы</h3>
                                <div class="description-wrapper px-5">
                                    <img class="px-2" src="@/assets/split.svg">
                                    <ul class="list-group list-group-flush">
                                        <li class="list-group-item">Бытовые различной мощности</li>
                                        <li class="list-group-item">Капельного / кассетного типов</li>
                                        <li class="list-group-item">Напольно-потолочные</li>
                                    </ul>
                                </div>
                                <a href="#services" class="btn btn-primary" @click="currentService = 'split'">Узнать подробнее &gt;&gt;&gt;</a>
                            </div>
                            <div class="carousel-item">
                                <h3 class="text-center p-2">Спутниковое ТВ</h3>
                                <div class="description-wrapper px-5">
                                    <img class="px-2" src="@/assets/sputnik.svg">
                                    <ul class="list-group list-group-flush">
                                        <li class="list-group-item">7 основных операторов</li>
                                        <li class="list-group-item">До 350 каналов</li>
                                        <li class="list-group-item">Монтаж и настройка</li>
                                    </ul>
                                </div>
                                <a href="#services" class="btn btn-primary" @click="currentService = 'tv'">Узнать подробнее &gt;&gt;&gt;</a>
                            </div>
                            <div class="carousel-item">
                                <h3 class="text-center p-2">Умный Дом</h3>
                                <div class="description-wrapper px-5">
                                    <img class="px-2" src="@/assets/home.svg">
                                    <ul class="list-group list-group-flush">
                                        <li class="list-group-item">Дистанционное управление оборудованием</li>
                                        <li class="list-group-item">Полный контроль систем</li>
                                        <li class="list-group-item">Комплексные решения</li>
                                    </ul>
                                </div>
                                <a href="#services" class="btn btn-primary" @click="currentService = 'home'">Узнать подробнее &gt;&gt;&gt;</a>
                            </div>
                            <div class="carousel-item">
                                <h3 class="text-center p-2">Видеонаблюдение</h3>
                                <div class="description-wrapper px-5">
                                    <img class="px-2" src="@/assets/camera.svg">
                                    <ul class="list-group list-group-flush">
                                        <li class="list-group-item">Защита имущества</li>
                                        <li class="list-group-item">Контроль работы персонала</li>
                                        <li class="list-group-item">Доступ со смартфона</li>
                                    </ul>
                                </div>
                                <a href="#services" class="btn btn-primary" @click="currentService = 'video'">Узнать подробнее &gt;&gt;&gt;</a>
                            </div>
                          <button class="carousel-control-prev" type="button" data-bs-target="#carouselIndicators"  data-bs-slide="prev">
                            <span class="text-primary h1">&laquo;</span>
                          </button>
                          <button class="carousel-control-next" type="button" data-bs-target="#carouselIndicators"  data-bs-slide="next">
                            <span class="text-primary h1">&raquo;</span>
                          </button>
                          </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="slider bg-dark">
                <div class="slide-track">
                    <div class="slide"><a target="_blank" href="http://anmotorsshop.ru/"><img src="@/assets/anmotors.jpg" height="60" width="160" alt=""/></a></div>
                    <div class="slide"><a target="_blank" href="https://www.bft-automation.com/ru_RU/"><img src="@/assets/bft.jpg" height="60" width="160" alt=""/></a></div>
                    <div class="slide"><a target="_blank" href="https://niceforyou.ru/"><img src="@/assets/nice.jpg" height="60" width="160" alt=""/></a></div>
                    <div class="slide"><a target="_blank" href="https://www.commax.com/rus/"><img src="@/assets/commax.jpg" height="60" width="160" alt=""/></a></div>
                    <div class="slide"><a target="_blank" href="http://jsbsystems.ru/"><img src="@/assets/jsb.jpg" height="60" width="160" alt=""/></a></div>
                    <div class="slide"><a target="_blank" href="https://ltv-cctv.ru/"><img src="@/assets/ltv.jpg" height="60" width="160" alt=""/></a></div>
                    <div class="slide"><a target="_blank" href="http://ru.kocom.com/main/main.php"><img src="@/assets/kocom.jpg" height="60" width="160" alt=""/></a></div>
                    <div class="slide"><a target="_blank" href="https://paritet.su/"><img src="@/assets/paritet.jpg" height="60" width="160" alt=""/></a></div>
                    <div class="slide"><a target="_blank" href="https://www.proconnect.su/"><img src="@/assets/proconnect.jpg" height="60" width="160" alt=""/></a></div>
                    <div class="slide"><a target="_blank" href="https://luis.ru/"><img src="@/assets/luisf.jpg" height="60" width="160" alt=""/></a></div>
                    <div class="slide"><a target="_blank" href="https://trassir.ru/"><img src="@/assets/trassir.jpg" height="60" width="160" alt=""/></a></div>
                    <div class="slide"><a target="_blank" href="https://www.dahuasecurity.com/ru"><img src="@/assets/dahua.jpg" height="60" width="160" alt=""/></a></div>
                    <div class="slide"><a target="_blank" href="https://www.doorhan.ru/"><img src="@/assets/doorhan.jpg" height="60" width="160" alt="" /></a></div>
                    <div class="slide"><a target="_blank" href="https://hi.watch/"><img src="@/assets/hiwatch.jpg" height="60" width="160" alt=""/></a></div>
                    <div class="slide"><a target="_blank" href="https://bolid.ru/"><img src="@/assets/bolid.jpg" height="60" width="160" alt=""/></a></div>
                    <div class="slide"><a target="_blank" href="https://rubezh.ru/"><img src="@/assets/rubezh.jpg" height="60" width="160" alt=""/></a></div>
                    <div class="slide"><a target="_blank" href="https://argus-spectr.ru/"><img src="@/assets/strelets.jpg" height="60" width="160" alt=""/></a></div>
                    <div class="slide"><a target="_blank" href="https://www.rexant.ru/"><img src="@/assets/rexant.jpg" height="60" width="160" alt=""></a></div>
                    <div class="slide"><a target="_blank" href="https://netlancables.ru/"><img src="@/assets/netlan.jpg" height="60" width="160" alt=""/></a></div>
                    <div class="slide"><a target="_blank" href="https://www.polyvision.ru/"><img src="@/assets/polivision.jpg" height="60" width="160" alt=""/></a></div>
                    <div class="slide"><a target="_blank" href="http://ctvcctv.ru/"><img src="@/assets/ctv.jpg" height="60" width="160" alt=""/></a></div>
                    <div class="slide"><a target="_blank" href="https://arsenal-sib.ru/"><img src="@/assets/sibarsenal.jpg" height="60" width="160" alt=""/></a></div>
                    <div class="slide"><a target="_blank" href="https://hikvision.ru/"><img src="@/assets/hikvision.jpg" height="60" width="160" alt=""/></a></div>
                    <div class="slide"><a target="_blank" href="https://camerussia.com/"><img src="@/assets/came.jpg" height="60" width="160" alt=""/></a></div>
                    <div class="slide"><a target="_blank" href="http://anmotorsshop.ru/"><img src="@/assets/anmotors.jpg" height="60" width="160" alt=""/></a></div>
                    <div class="slide"><a target="_blank" href="https://www.bft-automation.com/ru_RU/"><img src="@/assets/bft.jpg" height="60" width="160" alt=""/></a></div>
                    <div class="slide"><a target="_blank" href="https://niceforyou.ru/"><img src="@/assets/nice.jpg" height="60" width="160" alt=""/></a></div>
                    <div class="slide"><a target="_blank" href="https://www.commax.com/rus/"><img src="@/assets/commax.jpg" height="60" width="160" alt=""/></a></div>
                    <div class="slide"><a target="_blank" href="http://jsbsystems.ru/"><img src="@/assets/jsb.jpg" height="60" width="160" alt=""/></a></div>
                    <div class="slide"><a target="_blank" href="https://ltv-cctv.ru/"><img src="@/assets/ltv.jpg" height="60" width="160" alt=""/></a></div>
                    <div class="slide"><a target="_blank" href="http://ru.kocom.com/main/main.php"><img src="@/assets/kocom.jpg" height="60" width="160" alt=""/></a></div>
                    <div class="slide"><a target="_blank" href="https://paritet.su/"><img src="@/assets/paritet.jpg" height="60" width="160" alt=""/></a></div>
                    <div class="slide"><a target="_blank" href="https://www.proconnect.su/"><img src="@/assets/proconnect.jpg" height="60" width="160" alt=""/></a></div>
                    <div class="slide"><a target="_blank" href="https://luis.ru/"><img src="@/assets/luisf.jpg" height="60" width="160" alt=""/></a></div>
                    <div class="slide"><a target="_blank" href="https://trassir.ru/"><img src="@/assets/trassir.jpg" height="60" width="160" alt=""/></a></div>
                    <div class="slide"><a target="_blank" href="https://www.dahuasecurity.com/ru"><img src="@/assets/dahua.jpg" height="60" width="160" alt=""/></a></div>
                    <div class="slide"><a target="_blank" href="https://www.doorhan.ru/"><img src="@/assets/doorhan.jpg" height="60" width="160" alt=""/></a></div>
                    <div class="slide"><a target="_blank" href="https://hi.watch/"><img src="@/assets/hiwatch.jpg" height="60" width="160" alt=""/></a></div>
                    <div class="slide"><a target="_blank" href="https://bolid.ru/"><img src="@/assets/bolid.jpg" height="60" width="160" alt=""/></a></div>
                    <div class="slide"><a target="_blank" href="https://rubezh.ru/"><img src="@/assets/rubezh.jpg" height="60" width="160" alt=""/></a></div>
                    <div class="slide"><a target="_blank" href="https://argus-spectr.ru/"><img src="@/assets/strelets.jpg" height="60" width="160" alt=""/></a></div>
                    <div class="slide"><a target="_blank" href="https://www.rexant.ru/"><img src="@/assets/rexant.jpg" height="60" width="160" alt=""/></a></div>
                    <div class="slide"><a target="_blank" href="https://netlancables.ru/"><img src="@/assets/netlan.jpg" height="60" width="160" alt=""/></a></div>
                    <div class="slide"><a target="_blank" href="https://www.polyvision.ru/"><img src="@/assets/polivision.jpg" height="60" width="160" alt=""/></a></div>
                    <div class="slide"><a target="_blank" href="http://ctvcctv.ru/"><img src="@/assets/ctv.jpg" height="60" width="160" alt=""/></a></div>
                    <div class="slide"><a target="_blank" href="https://arsenal-sib.ru/"><img src="@/assets/sibarsenal.jpg" height="60" width="160" alt=""/></a></div>
                    <div class="slide"><a target="_blank" href="https://hikvision.ru/"><img src="@/assets/hikvision.jpg" height="60" width="160" alt=""/></a></div>
                    <div class="slide"><a target="_blank" href="https://camerussia.com/"><img src="@/assets/came.jpg" height="60" width="160" alt=""/></a></div>
                </div>
            </div>
        </section>

        <!-- О компании -->
            <div class="company-info container p-4 bg-light rounded">
                <div class="row">
                        <div class="col-lg-8 p-3">

                            <p class="bg-dark text-light p-3"><span>Специалисты компании ООО "АНТЕЙ" имеют высокую квалификацию
                                и опыт установки самого разного оборудования. Мы работаем очень
                                аккуратно и не оставляем после себя строительный мусор. Выполненные работы
                                попадают в нашу фотогалерею. Посмотрите как мы трудимся
                                и каких результатов достигаем.</span></p>

                            <div id="slides">

                                <img id="example-1" src="@/assets/work-1.jpeg" alt="Пример работ №1" />
                                <img id="example-2" src="@/assets/work-2.jpeg" alt="Пример работ №2" />
                                <img id="example-3" src="@/assets/work-3.jpeg" alt="Пример работ №3" />
                                <img id="example-4" src="@/assets/work-4.jpeg" alt="Пример работ №4" />
                                <img id="example-5" src="@/assets/work-5.jpeg" alt="Пример работ №5" />
                                <img id="example-6" src="@/assets/work-6.jpeg" alt="Пример работ №6" />
                                <img id="example-7" src="@/assets/work-7.jpeg" alt="Пример работ №7" />

                            </div>

                            <router-link to="photo_gallery" class="btn btn-primary mb-4" title="Фотогалерея">Посмотреть &gt;&gt;&gt;</router-link>

                        </div>

                        <div class="col">
                            <h3 class="p-3">Некоторые наши клиенты</h3>
                            <div class="clients row row-cols-auto align-items-center justify-content-evenly">
                                <a target="_blank" href="http://xn-----8kcahqsfgkp0cbv.xn--p1ai/"><img src="@/assets/logo-plaza-web.png" /></a>
                                <a target="_blank" href="https://mirsud.krasnodar.ru/"><img src="@/assets/mirsud.png" /></a>
                                <a target="_blank" href="https://rosstalmet.ru/"><img src="@/assets/felan.png" /></a>
                                <a target="_blank" href="http://school15.tim.kubannet.ru/"><img src="@/assets/scool15shendrika.png" /></a>
                                <a target="_blank" href="https://dshiyasenskaya.krd.muzkult.ru/"><img src="@/assets/dshi-yasenskaya.png" /></a>
                                <a target="_blank" href="https://www.hotelbristol.ru/"><img src="@/assets/bristol-eysk.png" /></a>
                                <a target="_blank" href="https://odshi.krd.muzkult.ru/"><img src="@/assets/dshi-oktyabrsky.png" /></a>
                                <a target="_blank" href="https://instagramm.com/neiron.medik/"><img src="@/assets/neyro.png" /></a>
                                <a target="_blank" href="https://yeisk.info/organizations/elenawave-iskusstvennaya-volna-v-ejske"><img src="@/assets/elena-wave.png" /></a>
                                <a target="_blank" href="https://www.instagram.com/portkulinar/"><img src="@/assets/port.png" /></a>
                                <a target="_blank" href="https://mpr-shop.ru/"><img src="@/assets/mrp.png" /></a>
                                <a target="_blank" href="http://emuzey.krd.muzkult.ru/"><img src="@/assets/eysk-kray-museum.gif" /></a>
                            </div>
                        </div>
                </div>
            </div>
    </main>
</template>

<script>
export default {
  name: 'Home',
  components: {
  },
  props: ['current'],
  data () {
    return {
      barrier: {
        header: 'Современные системы доступа обеспечивают надежный контроль, комфорт и безопасность',
        description: 'Трудно представить себе предприятие без СКУД (Система контроля и управления доступом). Домофоны для подъездов и частных домов тоже широко используются. Шлагбаумы, турникеты, распашные и откатные ворота - важная составляющая таких систем. Наши специалисты имеют опыт установки и настройки СКУД любого масштаба и конфигурации. Мы поможем Вам сделать так, чтобы Вам было удобно контролировать:',
        imgURL: '../img/barrier-service.jpg',
        imgAlt: 'Доступ по ключу',
        properties: [
          'Приход/уход сотрудников',
          'Учет рабочего времени',
          'Доступ посторонних лиц',
          'Интеграция с видеонаблюдением и сигнализацией',
          'Передвижение транспорта',
          'И многое другое...'
        ]
      },
      home: {
        header: 'Умный Дом - удивительно удобное цифровое решение для дистанционного контроля систем',
        description: 'Неизбежная цифровизация всего и вся рано или поздно приведет тому, что даже утюг будет подключен к интернету. Роботы-пылесосы, умные чайники и лампы тому пример. Управлять такой электроникой можно уже сейчас со своего смартфона или голосом с помощью какой-нибудь Умной колонки. Это реальность, и это очень удобно. Вот некоторые возможности:',
        imgURL: '../img/home-service.jpg',
        imgAlt: 'Управление домом',
        properties: [
          'Включение и отключение устройств',
          'Управление аудиоаппаратурой',
          'Управление ТВ',
          'Контроль здоровья систем',
          'Управление системами безопасносности',
          'Автоматизация процессов'
        ]
      },
      phone: {
        header: 'Быстрая, надежная и стабильная связь для частных лиц и бизнеса любого масштаба',
        description: 'Есть немало технических, электронных и цифровых решений, которые смогут обеспечить качественную и бесперебойную связь в любых условиях. Физические/цифровые АТС, IP и SIP телефоны и телефония позволят вашему бизнесу максимально качественно работать с клиентами и сотрудниками. Мы проконсультируем Вас и поможем выбрать оптимальную конфигурацию. Возможности:',
        imgURL: '../img/phone-service.jpg',
        imgAlt: 'Телефон',
        properties: [
          'Недорогая связь',
          'Масштабируемые Call-центры',
          'Организация удаленной работы сотрудников',
          'Большой выбор провайдеров и тарифов',
          'Почта и конференц-связь'
        ]
      },
      signaling: {
        header: 'В наше неспокойное время сигнализация - не роскошь, а крайняя необходимость.',
        description: 'Люди пользуются сигнализацией с тех пор, как научились привязывать собаку во дворе. Сейчас же пожарная и охранная сигнализации - это прежде всего электроника, способная работать автономно, и нередко являющаяся частью целой системы безопасности. Другими составными частями которой могут быть СКУД и видеонаблюдение. У нас есть опыт и все необходимые разрешительные документы и лицензии. Обратившись к нам Вы получите:',
        imgURL: '../img/signaling-service.jpg',
        imgAlt: 'Пожарная сигнализация - колокол',
        properties: [
          'Проект системы пожарной сигнализации',
          'Расчет конфигурации любой сложности',
          'Качественный и быстрый монтаж',
          'Соблюдение всех норм и требований'
        ]
      },
      split: {
        header: 'Сплит-системы для дома и офиса по доступным ценам от надежных производителей',
        description: 'Скорее всего Вы хорошо знаете, что при выборе сплит-системы необходимо учитывать площадь помещений, характеристики и надежность оборудования, легкость эксплуатации, сложность проведения профилактических работ, например чистки фильтров и конденсатора. Мы готовы помочь Вам. И не только с выбором оборудования. Предлагаем полный спектр услуг:',
        imgURL: '../img/split-service.jpg',
        imgAlt: 'Сплит-системы',
        properties: [
          'Грамотный расчет',
          'Быстрый и качественный монтаж',
          'Выезд мастера для диагностики',
          'Устранение течи и дозаправка',
          'Гарантия на оборудование и работу'
        ]
      },
      tv: {
        header: 'Монтаж и настройка систем спутникового, кабельного и цифрового телевидения',
        description: 'Согласитесь, когда выбор слишком большой, легко запутаться. Так сейчас обстоит дело как с провайдерами кабельного и спутникового ТВ, так и с их тарифами. Слишком много. Ориентируясь на Ваши вкусы и предпочтения специалисты ООО АНТЕЙ подскажут, какие провайдеры и тарифы будут для Вас оптимальными. Кроме того, мы также оказываем ряд услуг в этом направлении:',
        imgURL: '../img/tv-service.jpg',
        imgAlt: 'Пульт дистанционного управления телевизором',
        properties: [
          '7 основных операторов',
          'Более 350 каналов',
          'Монтаж спутниковых антенн',
          'Прокладка ТВ-кабеля',
          'Настройка по силе сигнала',
          'Ну и наконец еще услуга'
        ]
      },
      video: {
        header: 'Установка систем видеонаблюдения является важным направлением деятельности нашей компании',
        description: 'Сегодня существует большое количество технических решений для визуального контроля. Это и автономные IP-камеры с доступом по сети, которые сами сохраняют запись на длительное время, и большие комплексы с централизованным управлением. Мы с удовольствием поможем вам подобрать наиболее подходящую конфигурацию для успешного решения любой из следующих задач:',
        imgURL: '../img/video-service.jpg',
        imgAlt: 'Видеокамеры',
        properties: [
          'Защита имущества',
          'Фиксация происшествий',
          'Наблюдение за посетителями',
          'Доступ со смартфона',
          'Оповещение о движении перед камерой',
          'Контроль работы персонала'
        ]
      },
      currentService: 'video'
    }
  },
  computed: {
    loadCurrentService () {
      return this.[this.currentService]
    },
    loadCurrentTarget () {
      return `/service/${this.currentService}`
    }
  },
  watch: {
    current (newCurrent, oldCurrent) {
      this.currentService = newCurrent === '' ? 'video' : newCurrent
    }
  }
}
</script>
