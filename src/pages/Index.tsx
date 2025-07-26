import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cream-white via-soft-lavender to-mint-green relative overflow-hidden">
      {/* Floating Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-bubble-pink/20 rounded-full animate-bounce" style={{animationDelay: '0s', animationDuration: '3s'}}></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-sunshine-yellow/30 rounded-full animate-bounce" style={{animationDelay: '1s', animationDuration: '4s'}}></div>
        <div className="absolute bottom-40 left-1/4 w-12 h-12 bg-powder-blue/25 rounded-full animate-bounce" style={{animationDelay: '2s', animationDuration: '5s'}}></div>
        <div className="absolute top-1/3 right-1/3 w-8 h-8 bg-coral-orange/20 rounded-full animate-bounce" style={{animationDelay: '0.5s', animationDuration: '3.5s'}}></div>
        <div className="absolute bottom-20 right-10 w-14 h-14 bg-deep-purple/15 rounded-full animate-bounce" style={{animationDelay: '1.5s', animationDuration: '4.5s'}}></div>
      </div>

      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-lg shadow-lg sticky top-0 z-50 border-b border-bubble-pink/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="font-display text-3xl font-bold bg-gradient-to-r from-bubble-pink to-deep-purple bg-clip-text text-transparent">
              🌈 KidStyle
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-deep-purple hover:text-bubble-pink transition-colors font-medium">Главная</a>
              <a href="#products" className="text-deep-purple hover:text-bubble-pink transition-colors font-medium">Коллекция</a>
              <a href="#about" className="text-deep-purple hover:text-bubble-pink transition-colors font-medium">О нас</a>
              <a href="#contact" className="text-deep-purple hover:text-bubble-pink transition-colors font-medium">Контакты</a>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" className="border-bubble-pink text-bubble-pink hover:bg-bubble-pink hover:text-white rounded-full">
                <Icon name="ShoppingBag" size={20} />
              </Button>
              <Button variant="outline" className="border-deep-purple text-deep-purple hover:bg-deep-purple hover:text-white rounded-full md:hidden">
                <Icon name="Menu" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="py-20 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-pulse">
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <Badge className="bg-gradient-to-r from-bubble-pink to-coral-orange text-white font-medium text-lg px-4 py-2 rounded-full animate-pulse">
                    ✨ Новая коллекция
                  </Badge>
                  <div className="text-2xl animate-bounce">🚀</div>
                </div>
                <h1 className="font-display text-6xl lg:text-7xl font-bold bg-gradient-to-r from-deep-purple via-bubble-pink to-mint-green bg-clip-text text-transparent leading-tight">
                  Стильная одежда для маленьких мечтателей
                </h1>
                <p className="text-xl text-warm-gray leading-relaxed">
                  Яркие цвета, удобные фасоны и волшебные принты. 
                  Каждая вещь создана с любовью к детям и их безграничной фантазии! 🎨
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-bubble-pink to-coral-orange hover:from-coral-orange hover:to-bubble-pink text-white font-semibold rounded-full shadow-xl transform hover:scale-105 transition-all">
                  Смотреть коллекцию ✨
                  <Icon name="Sparkles" size={20} />
                </Button>
                <Button variant="outline" size="lg" className="border-2 border-deep-purple text-deep-purple hover:bg-deep-purple hover:text-white rounded-full font-semibold">
                  Гид по размерам 📏
                </Button>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-display font-bold text-bubble-pink">500+</div>
                  <div className="text-sm text-warm-gray">счастливых детей</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-display font-bold text-mint-green">50+</div>
                  <div className="text-sm text-warm-gray">уникальных моделей</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-display font-bold text-sunshine-yellow">100%</div>
                  <div className="text-sm text-warm-gray">качество</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative z-10">
                <img 
                  src="/img/d89fba29-d085-4b40-87f1-61d1863c72ff.jpg" 
                  alt="Детская мода KidStyle"
                  className="w-full rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-sunshine-yellow to-coral-orange rounded-full shadow-lg animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-bubble-pink to-deep-purple rounded-full shadow-lg animate-pulse" style={{animationDelay: '1s'}}></div>
              
              {/* Feature badges */}
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-4 rounded-2xl shadow-lg">
                <div className="flex items-center space-x-2">
                  <Icon name="Shield" size={24} className="text-mint-green" />
                  <div>
                    <p className="font-semibold text-deep-purple text-sm">Безопасно</p>
                    <p className="text-xs text-warm-gray">Гипоаллергенно</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Showcase */}
      <section id="products" className="py-20 px-4 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-5xl font-bold bg-gradient-to-r from-deep-purple to-bubble-pink bg-clip-text text-transparent mb-6">
              🌟 Наша волшебная коллекция
            </h2>
            <p className="text-xl text-warm-gray max-w-3xl mx-auto">
              От 0 до 12 лет — у нас есть идеальный наряд для каждого маленького модника и модницы!
            </p>
          </div>

          {/* Age Categories with Products */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* Babies 0-2 */}
            <Card className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-gradient-to-br from-soft-lavender/30 to-mint-green/30 border-0">
              <CardContent className="p-8">
                <div className="text-center space-y-6">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-br from-bubble-pink to-coral-orange rounded-full flex items-center justify-center text-4xl animate-bounce">
                    👶
                  </div>
                  <h3 className="font-display text-3xl font-bold text-deep-purple">0-2 года</h3>
                  <p className="text-warm-gray">Нежность и комфорт для самых маленьких</p>
                  
                  {/* Mini product preview */}
                  <div className="grid grid-cols-2 gap-2 mt-4">
                    <div className="aspect-square bg-gradient-to-br from-powder-blue/50 to-mint-green/50 rounded-xl flex items-center justify-center text-2xl hover:scale-110 transition-transform">👕</div>
                    <div className="aspect-square bg-gradient-to-br from-sunshine-yellow/50 to-coral-orange/50 rounded-xl flex items-center justify-center text-2xl hover:scale-110 transition-transform">👖</div>
                  </div>
                  
                  <Button className="w-full bg-gradient-to-r from-bubble-pink to-coral-orange text-white rounded-full font-semibold group-hover:shadow-lg transform hover:scale-105 transition-all">
                    Смотреть все ✨
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Kids 3-6 */}
            <Card className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-gradient-to-br from-sunshine-yellow/30 to-coral-orange/30 border-0">
              <CardContent className="p-8">
                <div className="text-center space-y-6">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-br from-mint-green to-soft-lavender rounded-full flex items-center justify-center text-4xl animate-bounce" style={{animationDelay: '0.5s'}}>
                    🧒
                  </div>
                  <h3 className="font-display text-3xl font-bold text-deep-purple">3-6 лет</h3>
                  <p className="text-warm-gray">Яркие приключения каждый день</p>
                  
                  <div className="grid grid-cols-2 gap-2 mt-4">
                    <div className="aspect-square bg-gradient-to-br from-bubble-pink/50 to-deep-purple/50 rounded-xl flex items-center justify-center text-2xl hover:scale-110 transition-transform">👗</div>
                    <div className="aspect-square bg-gradient-to-br from-mint-green/50 to-powder-blue/50 rounded-xl flex items-center justify-center text-2xl hover:scale-110 transition-transform">🩳</div>
                  </div>
                  
                  <Button className="w-full bg-gradient-to-r from-mint-green to-soft-lavender text-white rounded-full font-semibold group-hover:shadow-lg transform hover:scale-105 transition-all">
                    Смотреть все 🌈
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Bigger Kids 7-12 */}
            <Card className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-gradient-to-br from-deep-purple/30 to-bubble-pink/30 border-0">
              <CardContent className="p-8">
                <div className="text-center space-y-6">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-br from-sunshine-yellow to-mint-green rounded-full flex items-center justify-center text-4xl animate-bounce" style={{animationDelay: '1s'}}>
                    🧑
                  </div>
                  <h3 className="font-display text-3xl font-bold text-deep-purple">7-12 лет</h3>
                  <p className="text-warm-gray">Стиль для будущих звезд</p>
                  
                  <div className="grid grid-cols-2 gap-2 mt-4">
                    <div className="aspect-square bg-gradient-to-br from-deep-purple/50 to-bubble-pink/50 rounded-xl flex items-center justify-center text-2xl hover:scale-110 transition-transform">👔</div>
                    <div className="aspect-square bg-gradient-to-br from-coral-orange/50 to-sunshine-yellow/50 rounded-xl flex items-center justify-center text-2xl hover:scale-110 transition-transform">👟</div>
                  </div>
                  
                  <Button className="w-full bg-gradient-to-r from-deep-purple to-bubble-pink text-white rounded-full font-semibold group-hover:shadow-lg transform hover:scale-105 transition-all">
                    Смотреть все 🌟
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Featured Products Grid */}
          <div className="bg-gradient-to-r from-cream-white to-soft-lavender/50 rounded-3xl p-8">
            <h3 className="font-display text-4xl font-bold text-center text-deep-purple mb-8">
              🎨 Хиты продаж
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { emoji: "🦄", name: "Платье Единорог", price: "2,500₽", color: "from-bubble-pink to-soft-lavender" },
                { emoji: "🚀", name: "Костюм Космонавт", price: "3,200₽", color: "from-deep-purple to-powder-blue" },
                { emoji: "🌈", name: "Худи Радуга", price: "1,800₽", color: "from-mint-green to-sunshine-yellow" },
                { emoji: "🦋", name: "Юбка Бабочка", price: "1,600₽", color: "from-coral-orange to-bubble-pink" }
              ].map((product, index) => (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-white border-0">
                  <CardContent className="p-6">
                    <div className={`aspect-square bg-gradient-to-br ${product.color} rounded-2xl flex items-center justify-center text-6xl mb-4 group-hover:scale-110 transition-transform cursor-pointer`}>
                      {product.emoji}
                    </div>
                    <h4 className="font-display text-lg font-semibold text-deep-purple mb-2">{product.name}</h4>
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold bg-gradient-to-r from-bubble-pink to-coral-orange bg-clip-text text-transparent">
                        {product.price}
                      </span>
                      <Button size="sm" className="bg-gradient-to-r from-mint-green to-soft-lavender text-white rounded-full hover:scale-110 transition-transform">
                        <Icon name="Plus" size={16} />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Brand */}
      <section id="about" className="py-20 px-4 bg-gradient-to-br from-deep-purple via-bubble-pink to-coral-orange text-white relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="font-display text-5xl font-bold mb-6">🌟 О бренде KidStyle</h2>
                <div className="space-y-6 text-lg leading-relaxed text-white/90">
                  <p>
                    Мы верим, что детство — это время чудес и открытий! 
                    Каждая наша вещь создается с мыслью о том, чтобы дети чувствовали себя 
                    особенными и уверенными в себе. ✨
                  </p>
                  <p>
                    Наша команда дизайнеров — это бывшие дети, которые помнят, 
                    как важно было иметь любимую футболку или платье, в котором ты чувствуешь себя супергероем! 🦸‍♀️
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:scale-105 transition-transform">
                  <div className="text-4xl mb-2">🌍</div>
                  <div className="text-2xl font-display font-bold">Эко-френдли</div>
                  <div className="text-sm text-white/80">100% натуральные материалы</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:scale-105 transition-transform">
                  <div className="text-4xl mb-2">❤️</div>
                  <div className="text-2xl font-display font-bold">С любовью</div>
                  <div className="text-sm text-white/80">Каждое изделие уникально</div>
                </div>
              </div>

              <div className="space-y-4">
                {[
                  { icon: "🧵", title: "Качество Premium", desc: "Европейские ткани и фурнитура" },
                  { icon: "🎨", title: "Уникальные принты", desc: "Эксклюзивные дизайны от наших художников" },
                  { icon: "🌿", title: "Безопасность", desc: "Гипоаллергенные красители и материалы" }
                ].map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4 bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-colors">
                    <div className="text-2xl">{feature.icon}</div>
                    <div>
                      <h4 className="font-semibold mb-1">{feature.title}</h4>
                      <p className="text-white/80 text-sm">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="/img/704817b6-0c27-4867-84d3-5e1bdda9fddc.jpg"
                alt="О бренде KidStyle"
                className="w-full rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-sunshine-yellow to-coral-orange p-6 rounded-2xl shadow-xl animate-pulse">
                <div className="text-center">
                  <div className="text-3xl font-display font-bold">2024</div>
                  <div className="text-sm">Год основания</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-4 bg-gradient-to-br from-cream-white to-mint-green/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-5xl font-bold bg-gradient-to-r from-deep-purple to-bubble-pink bg-clip-text text-transparent mb-8">
            💌 Давайте дружить!
          </h2>
          <p className="text-xl text-warm-gray mb-12 max-w-2xl mx-auto">
            Готовы создать волшебный гардероб для вашего малыша? 
            Мы всегда рады новым друзьям! 🌈
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              { icon: "Phone", emoji: "📞", title: "Позвонить", info: "+7 (495) 123-45-67", color: "from-bubble-pink to-coral-orange" },
              { icon: "Mail", emoji: "✉️", title: "Написать", info: "hello@kidstyle.ru", color: "from-mint-green to-soft-lavender" },
              { icon: "MapPin", emoji: "📍", title: "Приехать", info: "Москва, ул. Радужная, 25", color: "from-deep-purple to-bubble-pink" }
            ].map((contact, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white border-0">
                <CardContent className="p-8 text-center">
                  <div className={`w-16 h-16 mx-auto bg-gradient-to-br ${contact.color} rounded-full flex items-center justify-center text-2xl text-white mb-4 group-hover:scale-110 transition-transform`}>
                    {contact.emoji}
                  </div>
                  <h4 className="font-display text-xl font-bold text-deep-purple mb-2">{contact.title}</h4>
                  <p className="text-warm-gray">{contact.info}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <Button size="lg" className="bg-gradient-to-r from-deep-purple to-bubble-pink hover:from-bubble-pink hover:to-deep-purple text-white font-bold text-lg px-8 py-4 rounded-full shadow-2xl transform hover:scale-105 transition-all">
            Записаться на шоппинг 🛍️
            <Icon name="Calendar" size={24} />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-deep-purple to-warm-gray text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="space-y-4">
              <div className="font-display text-3xl font-bold bg-gradient-to-r from-bubble-pink to-sunshine-yellow bg-clip-text text-transparent">
                🌈 KidStyle
              </div>
              <p className="text-white/80">Создаем радость в каждом наряде! ✨</p>
              <div className="flex space-x-4">
                {["Instagram", "Facebook", "Twitter"].map((social, index) => (
                  <div key={index} className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-bubble-pink/50 transition-colors cursor-pointer transform hover:scale-110">
                    <Icon name={social as any} size={20} />
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-display text-lg font-semibold mb-4">🛍️ Коллекции</h4>
              <ul className="space-y-2 text-white/80">
                <li className="hover:text-bubble-pink transition-colors cursor-pointer">Малыши 0-2</li>
                <li className="hover:text-bubble-pink transition-colors cursor-pointer">Дети 3-6</li>
                <li className="hover:text-bubble-pink transition-colors cursor-pointer">Подростки 7-12</li>
                <li className="hover:text-bubble-pink transition-colors cursor-pointer">Аксессуары</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-display text-lg font-semibold mb-4">💝 Помощь</h4>
              <ul className="space-y-2 text-white/80">
                <li className="hover:text-bubble-pink transition-colors cursor-pointer">Гид по размерам</li>
                <li className="hover:text-bubble-pink transition-colors cursor-pointer">Доставка</li>
                <li className="hover:text-bubble-pink transition-colors cursor-pointer">Возврат</li>
                <li className="hover:text-bubble-pink transition-colors cursor-pointer">FAQ</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-display text-lg font-semibold mb-4">📧 Подписка</h4>
              <p className="text-white/80 text-sm mb-4">Узнавайте первыми о новинках и скидках!</p>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Ваш email"
                  className="flex-1 px-3 py-2 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-bubble-pink"
                />
                <Button size="sm" className="bg-gradient-to-r from-bubble-pink to-coral-orange rounded-full hover:scale-110 transition-transform">
                  <Icon name="Send" size={16} />
                </Button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/20 pt-8 text-center text-white/60">
            <p>&copy; 2024 KidStyle. Все права защищены. Создано с 💖 для детей и их родителей!</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;