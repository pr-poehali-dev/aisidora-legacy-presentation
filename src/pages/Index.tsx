import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const slides = [
  {
    id: 1,
    section: 'intro',
    title: 'Айседора Дункан',
    subtitle: 'Революция в танце и жизнь, ставшая легендой',
    content: '1877 - 1927'
  },
  {
    id: 2,
    section: 'biography',
    title: 'Ранние годы',
    subtitle: 'Детство в Сан-Франциско',
    content: 'Родилась 26 мая 1877 года в семье музыкантов. С детства отвергала классический балет, создавая собственный стиль движения.'
  },
  {
    id: 3,
    section: 'biography',
    title: 'Путь к славе',
    subtitle: 'Европейское признание',
    content: 'В 1899 году отправилась в Европу, где её свободный танец произвёл фурор. Выступала в Лондоне, Париже, Берлине.'
  },
  {
    id: 4,
    section: 'biography',
    title: 'Роман с Есениным',
    subtitle: 'Встреча двух гениев',
    content: 'В 1921 году в Москве встретила поэта Сергея Есенина. Ей было 43, ему — 26. Брак продлился всего два года, но оставил яркий след в истории.'
  },
  {
    id: 5,
    section: 'biography',
    title: 'Союз противоположностей',
    subtitle: 'Любовь и творчество',
    content: 'Их отношения были бурными — языковой барьер, разница в возрасте, творческие амбиции. Расстались в 1923 году.'
  },
  {
    id: 6,
    section: 'career',
    title: 'Начало карьеры',
    subtitle: 'Первые шаги в танце',
    content: 'Уже в детстве организовывала танцевальные классы. К 20 годам разработала философию естественного движения.'
  },
  {
    id: 7,
    section: 'career',
    title: 'Триумф в Европе',
    subtitle: 'Покорение старого света',
    content: 'Её выступления в Будапеште, Вене и Мюнхене стали сенсацией. Танцевала босиком в античных туниках под музыку Шопена и Вагнера.'
  },
  {
    id: 8,
    section: 'career',
    title: 'Создание школ',
    subtitle: 'Передача знаний',
    content: 'Основала танцевальные школы в Германии (1904), Франции (1914) и России (1921). Воспитала целое поколение танцовщиц.'
  },
  {
    id: 9,
    section: 'career',
    title: 'Мировое признание',
    subtitle: 'Икона современности',
    content: 'К 1910-м годам стала самой знаменитой танцовщицей мира. Влияла на моду, искусство и культуру эпохи модерн.'
  },
  {
    id: 10,
    section: 'career',
    title: 'Личные трагедии',
    subtitle: 'Испытания судьбы',
    content: 'В 1913 году потеряла двоих детей в автокатастрофе. Это событие навсегда изменило её танец, наполнив его трагизмом.'
  },
  {
    id: 11,
    section: 'style',
    title: 'Философия движения',
    subtitle: 'Свобода тела и духа',
    content: 'Отказалась от корсетов, пуантов и жёстких правил балета. Танцевала босиком, в свободных туниках, черпая вдохновение в античности.'
  },
  {
    id: 12,
    section: 'style',
    title: 'Естественность',
    subtitle: 'Движение как дыхание',
    content: 'Считала, что танец должен исходить из солнечного сплетения — центра энергии человека. Движения текучие, плавные, органичные.'
  },
  {
    id: 13,
    section: 'style',
    title: 'Импровизация',
    subtitle: 'Спонтанность творчества',
    content: 'Никогда не использовала заученные комбинации. Каждое выступление было уникальным откликом на музыку и эмоции момента.'
  },
  {
    id: 14,
    section: 'style',
    title: 'Влияние античности',
    subtitle: 'Возвращение к истокам',
    content: 'Изучала древнегреческие вазы и скульптуры, воссоздавая позы и жесты. Стремилась вернуть танцу его первоначальную сакральность.'
  },
  {
    id: 15,
    section: 'style',
    title: 'Музыкальность',
    subtitle: 'Единство звука и движения',
    content: 'Танцевала под серьёзную музыку — Бетховена, Шопена, Глюка. Каждое движение было визуализацией музыкальной фразы.'
  },
  {
    id: 16,
    section: 'russia',
    title: 'Приезд в Россию',
    subtitle: '1921 год, новая эпоха',
    content: 'Приехала по приглашению советского правительства. Планировала создать танцевальную школу для детей рабочих.'
  },
  {
    id: 17,
    section: 'russia',
    title: 'Школа в Москве',
    subtitle: 'Воспитание новых танцовщиц',
    content: 'Открыла школу в особняке на Пречистенке. Обучала детей бесплатно, мечтая создать "танец будущего" для нового общества.'
  },
  {
    id: 18,
    section: 'russia',
    title: 'Революционное искусство',
    subtitle: 'Танец для народа',
    content: 'Ставила массовые революционные спектакли. Танцевала "Интернационал" и "Славянский марш" перед тысячами зрителей.'
  },
  {
    id: 19,
    section: 'russia',
    title: 'Трудности',
    subtitle: 'Реальность и идеалы',
    content: 'Столкнулась с бытовыми проблемами послереволюционной России — голод, холод, отсутствие финансирования. В 1924 покинула СССР.'
  },
  {
    id: 20,
    section: 'russia',
    title: 'Наследие в России',
    subtitle: 'Влияние на советский танец',
    content: 'Её идеи повлияли на развитие пластического танца, художественной гимнастики и свободной пластики в СССР.'
  },
  {
    id: 21,
    section: 'followers',
    title: 'Айседорианки',
    subtitle: 'Шесть учениц',
    content: 'Ирма Дункан, Анна Дункан, Мария-Тереза, Лиза, Марго и Эрика — приёмные дочери, ставшие продолжательницами её дела.'
  },
  {
    id: 22,
    section: 'followers',
    title: 'Ирма Дункан',
    subtitle: 'Хранительница традиции',
    content: 'Осталась в СССР после отъезда Айседоры. Руководила школой до 1928 года, воспитала поколение советских танцовщиц.'
  },
  {
    id: 23,
    section: 'followers',
    title: 'Влияние на модерн',
    subtitle: 'Рождение нового танца',
    content: 'Марта Грэм, Дорис Хамфри, Рут Сен-Дени — все основательницы танца модерн находились под влиянием идей Дункан.'
  },
  {
    id: 24,
    section: 'followers',
    title: 'Современные последователи',
    subtitle: 'Живая традиция',
    content: 'Школы Дункан существуют в США, Германии, России. Техника преподаётся в танцевальных университетах по всему миру.'
  },
  {
    id: 25,
    section: 'conclusion',
    title: 'Трагический финал',
    subtitle: '14 сентября 1927',
    content: 'Погибла в Ницце — её шарф запутался в колесе автомобиля. Смерть оказалась такой же драматичной, как и жизнь.'
  },
  {
    id: 26,
    section: 'conclusion',
    title: 'Вечное наследие',
    subtitle: 'Революция, изменившая танец',
    content: 'Айседора Дункан освободила танец от академических рамок и открыла путь всему современному танцу XX века.'
  }
];

const sections = [
  { id: 'intro', name: 'Введение', range: [1, 1] },
  { id: 'biography', name: 'Биография', range: [2, 5] },
  { id: 'career', name: 'Карьера', range: [6, 10] },
  { id: 'style', name: 'Стиль танца', range: [11, 15] },
  { id: 'russia', name: 'Россия', range: [16, 20] },
  { id: 'followers', name: 'Последователи', range: [21, 24] },
  { id: 'conclusion', name: 'Заключение', range: [25, 26] }
];

export default function Index() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState<'forward' | 'backward'>('forward');

  const goToSlide = (index: number) => {
    if (index < 0 || index >= slides.length) return;
    setDirection(index > currentSlide ? 'forward' : 'backward');
    setCurrentSlide(index);
  };

  const nextSlide = () => goToSlide(currentSlide + 1);
  const prevSlide = () => goToSlide(currentSlide - 1);

  const currentSection = sections.find(
    section => currentSlide + 1 >= section.range[0] && currentSlide + 1 <= section.range[1]
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 text-white overflow-hidden">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-serif">Айседора Дункан</h1>
            <div className="flex items-center gap-6">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => goToSlide(section.range[0] - 1)}
                  className={`text-sm transition-all duration-300 hover:text-purple-300 ${
                    currentSection?.id === section.id
                      ? 'text-purple-300 font-semibold'
                      : 'text-white/60'
                  }`}
                >
                  {section.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-20 min-h-screen flex items-center justify-center relative">
        <div
          key={currentSlide}
          className={`container mx-auto px-6 max-w-4xl text-center ${
            direction === 'forward' ? 'animate-fade-in' : 'animate-scale-in'
          }`}
        >
          <div className="mb-8">
            <span className="inline-block px-4 py-2 bg-purple-500/30 backdrop-blur-sm rounded-full text-sm border border-purple-300/30">
              {currentSection?.name}
            </span>
          </div>

          <div className="space-y-6">
            <h2 className="text-6xl md:text-7xl font-serif font-bold leading-tight animate-fade-in">
              {slides[currentSlide].title}
            </h2>
            <p className="text-2xl md:text-3xl text-purple-200 font-light animate-fade-in">
              {slides[currentSlide].subtitle}
            </p>
            <div className="pt-8 max-w-2xl mx-auto">
              <p className="text-lg md:text-xl text-white/80 leading-relaxed animate-fade-in">
                {slides[currentSlide].content}
              </p>
            </div>
          </div>

          <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse pointer-events-none" />
          <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse pointer-events-none" />
        </div>
      </div>

      <div className="fixed bottom-8 left-0 right-0 z-50">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between max-w-4xl mx-auto">
            <Button
              onClick={prevSlide}
              disabled={currentSlide === 0}
              variant="ghost"
              size="lg"
              className="bg-white/10 backdrop-blur-md hover:bg-white/20 border border-white/20 disabled:opacity-30"
            >
              <Icon name="ChevronLeft" size={24} />
            </Button>

            <div className="flex items-center gap-4">
              <span className="text-sm text-white/60">
                {currentSlide + 1} / {slides.length}
              </span>
              <div className="w-64 h-1 bg-white/20 rounded-full overflow-hidden">
                <div
                  className="h-full bg-purple-400 transition-all duration-300 rounded-full"
                  style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
                />
              </div>
            </div>

            <Button
              onClick={nextSlide}
              disabled={currentSlide === slides.length - 1}
              variant="ghost"
              size="lg"
              className="bg-white/10 backdrop-blur-md hover:bg-white/20 border border-white/20 disabled:opacity-30"
            >
              <Icon name="ChevronRight" size={24} />
            </Button>
          </div>
        </div>
      </div>

      <div className="fixed bottom-24 left-1/2 -translate-x-1/2 z-40">
        <div className="flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentSlide
                  ? 'w-8 h-2 bg-purple-400'
                  : 'w-2 h-2 bg-white/30 hover:bg-white/50'
              }`}
              aria-label={`Перейти к слайду ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
