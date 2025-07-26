import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-warm-cream">
      {/* Navigation */}
      <nav className="bg-white/90 backdrop-blur-sm shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-display text-2xl font-bold text-elegant-navy">
              Petite Élégance
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-elegant-navy hover:text-luxury-brown transition-colors">Главная</a>
              <a href="#collections" className="text-elegant-navy hover:text-luxury-brown transition-colors">Коллекции</a>
              <a href="#about" className="text-elegant-navy hover:text-luxury-brown transition-colors">О бренде</a>
              <a href="#contact" className="text-elegant-navy hover:text-luxury-brown transition-colors">Контакты</a>
            </div>
            <Button variant="outline" className="border-elegant-navy text-elegant-navy hover:bg-elegant-navy hover:text-white">
              <Icon name="Menu" size={20} />
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-luxury-brown text-white font-medium">Премиум коллекция</Badge>
                <h1 className="font-display text-5xl lg:text-6xl font-bold text-elegant-navy leading-tight">
                  Эксклюзивная детская мода
                </h1>
                <p className="text-xl text-gray-700 leading-relaxed">
                  Уникальные дизайны, созданные с любовью к деталям. 
                  Каждое изделие — произведение искусства для вашего малыша.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-elegant-navy hover:bg-luxury-brown text-white font-medium">
                  Смотреть коллекцию
                  <Icon name="ArrowRight" size={20} />
                </Button>
                <Button variant="outline" size="lg" className="border-elegant-navy text-elegant-navy hover:bg-elegant-navy hover:text-white">
                  Гид по размерам
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/img/ac857a81-e89b-486d-aed6-3d6832f07d49.jpg" 
                  alt="Премиум детская одежда"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <Icon name="Crown" size={24} className="text-luxury-brown" />
                  <div>
                    <p className="font-medium text-elegant-navy">Премиум качество</p>
                    <p className="text-sm text-gray-600">Европейские ткани</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Collections with Size Guide */}
      <section id="collections" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold text-elegant-navy mb-4">
              Наши коллекции
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              От новорожденных до юных модников — у нас есть идеальный наряд для каждого возраста
            </p>
          </div>

          {/* Age Categories */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 mx-auto bg-elegant-navy rounded-full flex items-center justify-center">
                    <Icon name="Baby" size={32} className="text-white" />
                  </div>
                  <h3 className="font-display text-2xl font-semibold text-elegant-navy">0-2 года</h3>
                  <p className="text-gray-600">Нежные ткани для самых маленьких</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>56-62 см</span>
                      <span>0-3 мес</span>
                    </div>
                    <div className="flex justify-between">
                      <span>68-74 см</span>
                      <span>6-12 мес</span>
                    </div>
                    <div className="flex justify-between">
                      <span>80-92 см</span>
                      <span>1-2 года</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 mx-auto bg-luxury-brown rounded-full flex items-center justify-center">
                    <Icon name="Heart" size={32} className="text-white" />
                  </div>
                  <h3 className="font-display text-2xl font-semibold text-elegant-navy">3-6 лет</h3>
                  <p className="text-gray-600">Игривые дизайны для активных малышей</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>98-104 см</span>
                      <span>3-4 года</span>
                    </div>
                    <div className="flex justify-between">
                      <span>110-116 см</span>
                      <span>5-6 лет</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 mx-auto bg-elegant-navy rounded-full flex items-center justify-center">
                    <Icon name="Star" size={32} className="text-white" />
                  </div>
                  <h3 className="font-display text-2xl font-semibold text-elegant-navy">7-12 лет</h3>
                  <p className="text-gray-600">Стильные решения для юных личностей</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>122-128 см</span>
                      <span>7-8 лет</span>
                    </div>
                    <div className="flex justify-between">
                      <span>134-146 см</span>
                      <span>9-12 лет</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Size Guide Section */}
          <div className="bg-warm-cream rounded-2xl p-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="font-display text-3xl font-bold text-elegant-navy mb-6">
                  Полный гид по размерам
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Icon name="Ruler" size={20} className="text-luxury-brown mt-1" />
                    <div>
                      <h4 className="font-semibold text-elegant-navy">Как измерить ребенка</h4>
                      <p className="text-gray-600">Подробные инструкции для точного определения размера</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Icon name="TrendingUp" size={20} className="text-luxury-brown mt-1" />
                    <div>
                      <h4 className="font-semibold text-elegant-navy">Таблица роста</h4>
                      <p className="text-gray-600">Соответствие размеров возрасту и росту ребенка</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Icon name="Shield" size={20} className="text-luxury-brown mt-1" />
                    <div>
                      <h4 className="font-semibold text-elegant-navy">Гарантия размера</h4>
                      <p className="text-gray-600">Бесплатный обмен в случае неподходящего размера</p>
                    </div>
                  </div>
                </div>
                <Button className="mt-6 bg-luxury-brown hover:bg-elegant-navy">
                  Скачать полный гид
                  <Icon name="Download" size={16} />
                </Button>
              </div>
              <div className="aspect-square rounded-xl overflow-hidden">
                <img 
                  src="/img/35fc9d7f-3fc5-4698-a588-fe721cd9b0de.jpg"
                  alt="Гид по размерам детской одежды"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Brand */}
      <section id="about" className="py-20 px-4 bg-elegant-navy text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="font-display text-4xl font-bold mb-6">О бренде Petite Élégance</h2>
                <div className="space-y-6 text-lg leading-relaxed">
                  <p>
                    Мы создаем не просто одежду — мы воплощаем мечты в ткани. 
                    Каждое изделие рождается из любви к красоте и понимания того, 
                    что дети заслуживают самого лучшего.
                  </p>
                  <p>
                    Наши дизайнеры черпают вдохновение в европейских традициях кутюр, 
                    адаптируя высокую моду для самых маленьких ценителей стиля.
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-display font-bold text-warm-cream">5+</div>
                  <div className="text-sm">лет опыта</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-display font-bold text-warm-cream">100%</div>
                  <div className="text-sm">натуральные ткани</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-display font-bold text-warm-cream">50+</div>
                  <div className="text-sm">уникальных моделей</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-display font-bold text-warm-cream">1000+</div>
                  <div className="text-sm">довольных семей</div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Icon name="Sparkles" size={24} className="text-warm-cream" />
                    <div>
                      <h4 className="font-semibold mb-2">Премиум материалы</h4>
                      <p className="text-white/80">Органический хлопок, бамбуковое волокно, мериносовая шерсть</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Icon name="Scissors" size={24} className="text-warm-cream" />
                    <div>
                      <h4 className="font-semibold mb-2">Ручная работа</h4>
                      <p className="text-white/80">Каждое изделие проходит финальную обработку вручную</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Icon name="Leaf" size={24} className="text-warm-cream" />
                    <div>
                      <h4 className="font-semibold mb-2">Эко-дружелюбность</h4>
                      <p className="text-white/80">Безопасные красители, экологичная упаковка</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-4xl font-bold text-elegant-navy mb-8">
            Свяжитесь с нами
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Готовы создать уникальный гардероб для вашего малыша? Мы всегда рады помочь!
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Icon name="Phone" size={32} className="text-luxury-brown mx-auto mb-4" />
                <h4 className="font-semibold text-elegant-navy mb-2">Телефон</h4>
                <p className="text-gray-600">+7 (495) 123-45-67</p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Icon name="Mail" size={32} className="text-luxury-brown mx-auto mb-4" />
                <h4 className="font-semibold text-elegant-navy mb-2">Email</h4>
                <p className="text-gray-600">hello@petite-elegance.ru</p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Icon name="MapPin" size={32} className="text-luxury-brown mx-auto mb-4" />
                <h4 className="font-semibold text-elegant-navy mb-2">Адрес</h4>
                <p className="text-gray-600">Москва, ул. Петровка, 25</p>
              </CardContent>
            </Card>
          </div>
          
          <Button size="lg" className="bg-elegant-navy hover:bg-luxury-brown text-white font-medium">
            Записаться на консультацию
            <Icon name="Calendar" size={20} />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-elegant-navy text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="font-display text-2xl font-bold mb-4">Petite Élégance</div>
              <p className="text-white/80">Премиум детская мода с душой</p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Коллекции</h4>
              <ul className="space-y-2 text-white/80">
                <li>Новорожденные</li>
                <li>Малыши</li>
                <li>Дети</li>
                <li>Аксессуары</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Помощь</h4>
              <ul className="space-y-2 text-white/80">
                <li>Гид по размерам</li>
                <li>Доставка</li>
                <li>Возврат</li>
                <li>FAQ</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Социальные сети</h4>
              <div className="flex space-x-4">
                <Icon name="Instagram" size={24} className="text-white/80 hover:text-warm-cream cursor-pointer" />
                <Icon name="Facebook" size={24} className="text-white/80 hover:text-warm-cream cursor-pointer" />
                <Icon name="Twitter" size={24} className="text-white/80 hover:text-warm-cream cursor-pointer" />
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60">
            <p>&copy; 2024 Petite Élégance. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;