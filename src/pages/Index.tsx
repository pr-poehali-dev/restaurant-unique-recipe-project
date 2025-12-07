import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [formData, setFormData] = useState({
    occasion: '',
    restrictions: '',
    budget: '',
    taste: '',
    exclusions: '',
    mainIngredient: '',
    texture: '',
    category: '',
    mood: '',
    cuisine: '',
  });

  const sections = [
    {
      title: '1. Ситуация и ограничения',
      fields: [
        {
          name: 'occasion',
          label: '1.1. Основной повод',
          type: 'radio',
          options: ['Праздник / Особая дата', 'Ежедневное меню / Будни', 'Просто вкусно поесть без повода']
        },
        {
          name: 'restrictions',
          label: '1.2. Ключевые ограничения',
          type: 'radio',
          options: ['Без мяса (вегетарианское)', 'Без молочных продуктов', 'Без глютена', 'Нет серьёзных ограничений']
        },
        {
          name: 'budget',
          label: '1.4. Уровень бюджета',
          type: 'radio',
          options: ['Экономный', 'Стандартный', 'Не жалеем на ингредиенты']
        }
      ]
    },
    {
      title: '2. Вкус и основа блюда',
      fields: [
        {
          name: 'taste',
          label: '2.1. Ведущий вкус',
          type: 'radio',
          options: ['Сливочный, насыщенный', 'Свежий, кислый, яркий', 'Пряный, согревающий', 'Глубокий, дымный или умами', 'Сладкий, хрустящий']
        },
        {
          name: 'exclusions',
          label: '2.2. Исключения (что точно не должно быть)',
          type: 'text',
          placeholder: 'Например: кинза, сырой лук, анис'
        },
        {
          name: 'mainIngredient',
          label: '2.3. Центр тарелки — главный ингредиент',
          type: 'radio',
          options: ['Птица (курица, индейка)', 'Красное мясо (говядина, свинина)', 'Рыба или морепродукты', 'Овощи / Грибы / Растительный белок', 'Что-то из выпечки']
        },
        {
          name: 'texture',
          label: '2.4. Желаемая текстура',
          type: 'radio',
          options: ['Нежная, тающая', 'Хрустящая снаружи / сочная внутри', 'Плотная, сытная']
        }
      ]
    },
    {
      title: '3. Тип и уровень сложности',
      fields: [
        {
          name: 'category',
          label: '3.1. Категория блюда',
          type: 'radio',
          options: ['Закуска или салат', 'Суп', 'Основное блюдо (с гарниром)', 'Десерт']
        }
      ]
    },
    {
      title: '4. Идея и вдохновение',
      fields: [
        {
          name: 'mood',
          label: '4.1. Ключевой образ или настроение',
          type: 'text',
          placeholder: 'Например: Домашний уют, Летнее море, Праздничный шик'
        },
        {
          name: 'cuisine',
          label: '4.2. Кулинарное направление',
          type: 'radio',
          options: ['Европейская кухня (итальянская, французская)', 'Азиатская кухня (японская, тайская, паназиатская)', 'Авторский микс / Фьюжн', 'Без конкретной географии']
        }
      ]
    }
  ];

  const handleChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleNext = () => {
    if (currentSection < sections.length - 1) {
      setCurrentSection(currentSection + 1);
    } else {
      setShowResult(true);
    }
  };

  const handlePrev = () => {
    if (currentSection > 0) {
      setCurrentSection(currentSection - 1);
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  if (showResult) {
    return (
      <div className="min-h-screen bg-white">
        <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm border-b border-gray-200 z-50">
          <div className="container mx-auto px-6 py-4">
            <div className="flex justify-between items-center">
              <h1 className="text-3xl font-bold text-primary">На ваш вкус</h1>
            </div>
          </div>
        </nav>

        <div className="pt-24 pb-16">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-5xl font-bold mb-4">Ваше блюдо готово!</h2>
              <p className="text-lg text-gray-600">На основе ваших предпочтений мы подготовили идеальный рецепт</p>
            </div>

            <div className="mb-12 animate-fade-in">
              <img 
                src="https://cdn.poehali.dev/files/IMG_9625.jpeg" 
                alt="Ваше блюдо" 
                className="w-full rounded-lg shadow-lg"
              />
            </div>

            <Card className="mb-8 animate-fade-in">
              <CardContent className="p-8">
                <h3 className="text-3xl font-bold mb-4">Ассорти авторских тарталеток</h3>
                <p className="text-gray-600 mb-6">
                  Пять изысканных мини-пирогов с разными начинками: с яблоком и брусникой, вишней, творогом и чёрной смородиной, черникой и шоколадным брауни с грецким орехом. Идеальное сочетание хрустящей корочки и нежных начинок.
                </p>

                <div className="border-t pt-6 mb-6">
                  <h4 className="text-xl font-semibold mb-4">Детали заказа</h4>
                  <div className="space-y-3 text-gray-600">
                    <p>• Время приготовления: 45-60 минут</p>
                    <p>• Количество порций: 5 тарталеток</p>
                    <p>• Стоимость: 1 200 ₽</p>
                    <p>• Доставка по Краснодару: бесплатно при заказе от 1 500 ₽</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button className="flex-1" size="lg">
                    <Icon name="Truck" className="mr-2" size={20} />
                    Заказать блюдо с доставкой
                  </Button>
                  <Button variant="outline" className="flex-1" size="lg">
                    <Icon name="ChefHat" className="mr-2" size={20} />
                    Забронировать в ресторане
                  </Button>
                </div>
              </CardContent>
            </Card>

            <div className="text-center">
              <Button variant="outline" onClick={() => setShowResult(false)}>
                <Icon name="ArrowLeft" className="mr-2" size={20} />
                Заполнить анкету заново
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-primary">На ваш вкус</h1>
            <div className="hidden md:flex gap-8">
              <button onClick={() => scrollToSection('about')} className="hover:text-primary transition">О ресторане</button>
              <button onClick={() => scrollToSection('how-it-works')} className="hover:text-primary transition">Как это работает</button>
              <button onClick={() => scrollToSection('questionnaire')} className="hover:text-primary transition">Анкета</button>
              <button onClick={() => scrollToSection('reviews')} className="hover:text-primary transition">Отзывы</button>
              <button onClick={() => scrollToSection('contacts')} className="hover:text-primary transition">Контакты</button>
            </div>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center max-w-5xl">
          <h2 className="text-7xl md:text-8xl font-bold mb-8 animate-fade-in">
            На ваш вкус
          </h2>
          <p className="text-2xl text-gray-600 mb-4 animate-fade-in">
            Ресторан персонализированной кухни
          </p>
          <p className="text-lg text-gray-500 mb-10 animate-fade-in max-w-3xl mx-auto">
            Заполните анкету, чтобы получить уникальную идею для блюда, рецепт и возможность заказать его с доставкой по Краснодару
          </p>
          <Button size="lg" onClick={() => scrollToSection('questionnaire')} className="animate-fade-in">
            Начать подбор блюда
            <Icon name="ChevronDown" className="ml-2" size={20} />
          </Button>
        </div>
      </section>

      <section id="about" className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <div className="w-16 h-px bg-primary mb-6 mx-auto"></div>
          <h2 className="text-5xl font-bold text-center mb-8">О ресторане</h2>
          <p className="text-lg text-gray-600 text-center leading-relaxed max-w-3xl mx-auto">
            «На ваш вкус» — это не просто ресторан. Это место, где каждое блюдо создается с учетом ваших предпочтений, настроения и желаний. Мы верим, что кулинария — это искусство персонализации. Наша команда шеф-поваров готова воплотить в жизнь ваши гастрономические мечты, предложив уникальные рецепты и помогая с подбором ингредиентов.
          </p>
        </div>
      </section>

      <section id="how-it-works" className="py-20 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="w-16 h-px bg-primary mb-6 mx-auto"></div>
          <h2 className="text-5xl font-bold text-center mb-16">Как это работает</h2>
          <div className="grid md:grid-cols-2 gap-16 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="ClipboardList" size={32} className="text-primary" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">1. Заполните анкету</h3>
              <p className="text-gray-600">Ответьте на вопросы о ваших предпочтениях, ограничениях и желаемом настроении блюда</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="ChefHat" size={32} className="text-primary" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">2. Получите своё блюдо</h3>
              <p className="text-gray-600">Мы создадим уникальное блюдо по вашему запросу и доставим его вам в Краснодаре</p>
            </div>
          </div>
        </div>
      </section>

      <section id="questionnaire" className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <div className="w-16 h-px bg-primary mb-6 mx-auto"></div>
          <h2 className="text-5xl font-bold text-center mb-4">Анкета для подбора блюда</h2>
          <p className="text-center text-gray-600 mb-8">Ответьте на несколько вопросов, чтобы мы создали идеальное блюдо для вас</p>

          <div className="flex gap-2 justify-center mb-12">
            {sections.map((_, index) => (
              <div 
                key={index} 
                className={`h-2 rounded-full transition-all ${
                  index === currentSection ? 'w-12 bg-primary' : index < currentSection ? 'w-12 bg-primary/50' : 'w-12 bg-gray-300'
                }`}
              />
            ))}
          </div>

          <Card className="mb-8 shadow-lg">
            <CardContent className="p-10">
              <div className="mb-6">
                <p className="text-sm text-gray-500 mb-2">Шаг {currentSection + 1} из {sections.length}</p>
                <h3 className="text-3xl font-bold">{sections[currentSection].title}</h3>
              </div>
              
              <div className="space-y-10">
                {sections[currentSection].fields.map((field) => (
                  <div key={field.name} className="space-y-4">
                    <Label className="text-xl font-semibold block">{field.label}</Label>
                    
                    {field.type === 'radio' && field.options && (
                      <RadioGroup value={formData[field.name as keyof typeof formData]} onValueChange={(value) => handleChange(field.name, value)}>
                        <div className="grid md:grid-cols-2 gap-3">
                          {field.options.map((option) => (
                            <div key={option} className="flex items-center space-x-3 p-4 hover:bg-white rounded-lg transition border-2 border-transparent hover:border-primary/20">
                              <RadioGroupItem value={option} id={`${field.name}-${option}`} />
                              <Label htmlFor={`${field.name}-${option}`} className="flex-1 cursor-pointer text-base">{option}</Label>
                            </div>
                          ))}
                        </div>
                      </RadioGroup>
                    )}
                    
                    {field.type === 'text' && (
                      <Input 
                        placeholder={field.placeholder}
                        value={formData[field.name as keyof typeof formData]}
                        onChange={(e) => handleChange(field.name, e.target.value)}
                        className="text-base p-6"
                      />
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="flex gap-4">
            {currentSection > 0 && (
              <Button variant="outline" onClick={handlePrev} size="lg" className="flex-1">
                <Icon name="ArrowLeft" className="mr-2" size={20} />
                Назад
              </Button>
            )}
            <Button onClick={handleNext} size="lg" className="flex-1">
              {currentSection < sections.length - 1 ? 'Далее' : 'Получить своё блюдо'}
              <Icon name="ArrowRight" className="ml-2" size={20} />
            </Button>
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="w-16 h-px bg-primary mb-6 mx-auto"></div>
          <h2 className="text-5xl font-bold text-center mb-16">Отзывы посетителей</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Анна Петрова', text: 'Невероятно! Получила рецепт идеального десерта для семейного ужина. Все ингредиенты были доставлены на следующий день.', rating: 5 },
              { name: 'Михаил Соколов', text: 'Анкета помогла мне открыть новые вкусы. Шеф-повара учли все мои предпочтения, блюдо получилось изумительным!', rating: 5 },
              { name: 'Елена Морозова', text: 'Отличная идея для тех, кто не знает, что приготовить. Персонализированный подход — это будущее кулинарии!', rating: 5 }
            ].map((review, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex mb-3">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{review.text}"</p>
                  <p className="font-semibold">{review.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <div className="w-16 h-px bg-primary mb-6 mx-auto"></div>
          <h2 className="text-5xl font-bold text-center mb-12">Контакты и бронирование</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Свяжитесь с нами</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Icon name="MapPin" size={24} className="text-primary mt-1" />
                  <div>
                    <p className="font-semibold">Адрес</p>
                    <p className="text-gray-600">г. Москва, ул. Гастрономическая, д. 15</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Icon name="Phone" size={24} className="text-primary mt-1" />
                  <div>
                    <p className="font-semibold">Телефон</p>
                    <p className="text-gray-600">+7 (495) 123-45-67</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Icon name="Mail" size={24} className="text-primary mt-1" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-gray-600">info@navashvkus.ru</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Icon name="Clock" size={24} className="text-primary mt-1" />
                  <div>
                    <p className="font-semibold">Часы работы</p>
                    <p className="text-gray-600">Пн-Вс: 10:00 - 22:00</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-6">Забронировать стол</h3>
              <div className="space-y-4">
                <Input placeholder="Ваше имя" />
                <Input type="tel" placeholder="Телефон" />
                <Input type="date" />
                <Input type="time" />
                <Textarea placeholder="Комментарий к заказу" />
                <Button className="w-full" size="lg">
                  Забронировать
                  <Icon name="Send" className="ml-2" size={20} />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">На ваш вкус</h2>
          <p className="text-gray-400 mb-6">Блюдо, созданное специально для вас</p>
          <div className="flex justify-center gap-6">
            <Icon name="Instagram" size={24} className="cursor-pointer hover:text-primary transition" />
            <Icon name="Facebook" size={24} className="cursor-pointer hover:text-primary transition" />
            <Icon name="Twitter" size={24} className="cursor-pointer hover:text-primary transition" />
          </div>
          <p className="text-gray-500 text-sm mt-8">© 2024 На ваш вкус. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;