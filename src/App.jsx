import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  TrendingUp, Shield, Users, Award, PlayCircle, 
  ChevronRight, Check, Star, ArrowRight, Calculator,
  LineChart, DollarSign, Target, Zap, X, Menu
} from 'lucide-react'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [videoPlaying, setVideoPlaying] = useState(false)
  const [quizStep, setQuizStep] = useState(0)
  const [quizAnswers, setQuizAnswers] = useState([])
  const [calcAmount, setCalcAmount] = useState(1000)
  const [calcMonths, setCalcMonths] = useState(6)

  // Calculator logic
  const monthlyReturn = 0.15 // 15% per month
  const finalAmount = calcAmount * Math.pow(1 + monthlyReturn, calcMonths)
  const profit = finalAmount - calcAmount

  // Quiz questions
  const quizQuestions = [
    {
      question: "Какой у вас опыт в трейдинге?",
      options: ["Никогда не торговал", "Пробовал несколько раз", "Торгую регулярно"]
    },
    {
      question: "Сколько времени готовы уделять трейдингу?",
      options: ["1-2 часа в день", "3-5 часов в день", "Полный рабочий день"]
    },
    {
      question: "Какая ваша цель?",
      options: ["Дополнительный доход", "Основной доход", "Финансовая свобода"]
    }
  ]

  const handleQuizAnswer = (answer) => {
    setQuizAnswers([...quizAnswers, answer])
    if (quizStep < quizQuestions.length - 1) {
      setQuizStep(quizStep + 1)
    }
  }

  const resetQuiz = () => {
    setQuizStep(0)
    setQuizAnswers([])
  }

  const quizComplete = quizAnswers.length === quizQuestions.length

  return (
    <div className="min-h-screen bg-dark-bg text-white overflow-x-hidden">
      {/* HEADER */}
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 w-full bg-dark-bg/90 backdrop-blur-xl z-50 border-b border-accent-red/20"
      >
        <nav className="container mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <TrendingUp className="w-8 h-8 text-accent-red" />
            <span className="text-2xl font-black tracking-tight">TRADE<span className="text-accent-red">PRO</span></span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="text-gray-400 hover:text-accent-red transition-colors font-medium">О курсе</a>
            <a href="#pricing" className="text-gray-400 hover:text-accent-red transition-colors font-medium">Тарифы</a>
            <a href="#testimonials" className="text-gray-400 hover:text-accent-red transition-colors font-medium">Отзывы</a>
          </div>
          <button className="hidden md:block bg-accent-red hover:bg-red-600 text-white px-6 py-2.5 rounded-lg font-bold transition-all transform hover:scale-105 shadow-lg shadow-accent-red/30">
            Начать обучение
          </button>
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>
        
        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-dark-card border-t border-accent-red/20"
            >
              <div className="container mx-auto px-4 py-4 space-y-4">
                <a href="#about" onClick={() => setMenuOpen(false)} className="block text-gray-400 hover:text-accent-red transition-colors">О курсе</a>
                <a href="#pricing" onClick={() => setMenuOpen(false)} className="block text-gray-400 hover:text-accent-red transition-colors">Тарифы</a>
                <a href="#testimonials" onClick={() => setMenuOpen(false)} className="block text-gray-400 hover:text-accent-red transition-colors">Отзывы</a>
                <button className="w-full bg-accent-red text-white px-6 py-3 rounded-lg font-bold">
                  Начать обучение
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* HERO */}
      <section className="relative pt-32 pb-20 px-4 md:px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent-red/5 via-transparent to-transparent" />
        <div className="container mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="inline-block bg-accent-red/10 border border-accent-red/30 rounded-full px-6 py-2 mb-6"
            >
              <span className="text-accent-red font-bold">🔥 Более 5000 успешных учеников</span>
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tighter leading-none">
              Освой Трейдинг<br />
              <span className="text-accent-red">Зарабатывай</span> на Рынках
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-400 mb-8 leading-relaxed max-w-3xl mx-auto">
              Пошаговая система обучения от практикующего трейдера с 10-летним опытом. 
              От новичка до профессионала за 3 месяца.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <button className="bg-accent-red hover:bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-bold transition-all transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg shadow-accent-red/50 min-h-[56px]">
                Смотреть видео
                <PlayCircle className="w-6 h-6" />
              </button>
              <button className="bg-white/5 hover:bg-white/10 text-white px-8 py-4 rounded-lg text-lg font-bold transition-all backdrop-blur-sm border border-white/20 min-h-[56px]">
                Выбрать тариф
              </button>
            </div>

            {/* Video Section */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="relative rounded-2xl overflow-hidden border border-accent-red/30 shadow-2xl shadow-accent-red/20 max-w-4xl mx-auto"
            >
              <div className="aspect-video bg-gradient-to-br from-dark-card to-black flex items-center justify-center">
                {!videoPlaying ? (
                  <button 
                    onClick={() => setVideoPlaying(true)}
                    className="group"
                  >
                    <div className="w-20 h-20 bg-accent-red rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg shadow-accent-red/50">
                      <PlayCircle className="w-10 h-10 text-white" />
                    </div>
                  </button>
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-500">
                    <p>Видео будет здесь (замените на ваше видео)</p>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-12 px-4 md:px-6 border-y border-accent-red/20">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "5000+", label: "Учеников" },
              { value: "87%", label: "Успешных трейдеров" },
              { value: "10 лет", label: "Опыт наставника" },
              { value: "24/7", label: "Поддержка" }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-black text-accent-red mb-2">{stat.value}</div>
                <div className="text-gray-400 text-sm md:text-base">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CALCULATOR */}
      <section id="calculator" className="py-20 px-4 md:px-6 bg-gradient-to-b from-transparent to-accent-red/5">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Калькулятор <span className="text-accent-red">Доходности</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Посчитайте потенциальную прибыль при средней доходности 15% в месяц
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-dark-card to-black p-8 md:p-12 rounded-2xl border border-accent-red/30 shadow-xl"
          >
            <div className="space-y-8">
              <div>
                <label className="block text-gray-400 mb-3 text-sm font-medium">
                  Начальный капитал: <span className="text-white font-bold">${calcAmount.toLocaleString()}</span>
                </label>
                <input
                  type="range"
                  min="100"
                  max="10000"
                  step="100"
                  value={calcAmount}
                  onChange={(e) => setCalcAmount(Number(e.target.value))}
                  className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-accent-red"
                />
              </div>

              <div>
                <label className="block text-gray-400 mb-3 text-sm font-medium">
                  Период: <span className="text-white font-bold">{calcMonths} месяцев</span>
                </label>
                <input
                  type="range"
                  min="1"
                  max="12"
                  value={calcMonths}
                  onChange={(e) => setCalcMonths(Number(e.target.value))}
                  className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-accent-red"
                />
              </div>

              <div className="pt-8 border-t border-accent-red/20">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-gray-400 text-sm mb-2">Начальный капитал</div>
                    <div className="text-2xl font-bold">${calcAmount.toLocaleString()}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-gray-400 text-sm mb-2">Прибыль</div>
                    <div className="text-2xl font-bold text-green-500">+${profit.toFixed(0).toLocaleString()}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-gray-400 text-sm mb-2">Итого</div>
                    <div className="text-2xl font-bold text-accent-red">${finalAmount.toFixed(0).toLocaleString()}</div>
                  </div>
                </div>
              </div>

              <div className="bg-accent-red/10 border border-accent-red/30 rounded-lg p-4 text-center">
                <p className="text-sm text-gray-400">
                  💡 Это консервативный расчет. Наши топовые ученики показывают результаты в 20-30% в месяц
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* QUIZ */}
      <section id="quiz" className="py-20 px-4 md:px-6">
        <div className="container mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Подходит ли вам <span className="text-accent-red">Трейдинг?</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Пройдите короткий тест и узнайте свой потенциал
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-dark-card to-black p-8 md:p-12 rounded-2xl border border-accent-red/30 shadow-xl"
          >
            <AnimatePresence mode="wait">
              {!quizComplete ? (
                <motion.div
                  key={quizStep}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <div className="mb-8">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-sm text-gray-400">Вопрос {quizStep + 1} из {quizQuestions.length}</span>
                      <span className="text-sm text-accent-red font-bold">{Math.round(((quizStep) / quizQuestions.length) * 100)}%</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2">
                      <div 
                        className="bg-accent-red h-2 rounded-full transition-all duration-300"
                        style={{ width: `${((quizStep) / quizQuestions.length) * 100}%` }}
                      />
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold mb-6">{quizQuestions[quizStep].question}</h3>
                  
                  <div className="space-y-4">
                    {quizQuestions[quizStep].options.map((option, i) => (
                      <button
                        key={i}
                        onClick={() => handleQuizAnswer(option)}
                        className="w-full text-left p-4 bg-white/5 hover:bg-accent-red/20 border border-white/10 hover:border-accent-red/50 rounded-lg transition-all group"
                      >
                        <span className="group-hover:text-accent-red transition-colors">{option}</span>
                      </button>
                    ))}
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="result"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <div className="w-20 h-20 bg-accent-red/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Check className="w-10 h-10 text-accent-red" />
                  </div>
                  <h3 className="text-3xl font-black mb-4">Отличный результат!</h3>
                  <p className="text-gray-400 mb-8 text-lg leading-relaxed">
                    Вы идеально подходите для обучения трейдингу. Ваша мотивация и готовность учиться — 
                    ключ к успеху на финансовых рынках.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="bg-accent-red hover:bg-red-600 text-white px-8 py-4 rounded-lg font-bold transition-all transform hover:scale-105">
                      Выбрать тариф
                    </button>
                    <button 
                      onClick={resetQuiz}
                      className="text-gray-400 hover:text-white transition-colors font-medium"
                    >
                      Пройти заново
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="about" className="py-20 px-4 md:px-6 bg-gradient-to-b from-accent-red/5 to-transparent">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Почему выбирают <span className="text-accent-red">нас?</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                icon: Shield,
                title: "Проверенная методика",
                description: "10 лет успешной торговли и обучения. Более 5000 учеников уже зарабатывают на рынках."
              },
              {
                icon: Users,
                title: "Личный наставник",
                description: "Индивидуальное сопровождение на всех этапах обучения. Разбор ваших сделок и ошибок."
              },
              {
                icon: LineChart,
                title: "Реальные результаты",
                description: "Все графики и кейсы — из реальных сделок. Никакой теории без практики."
              },
              {
                icon: Target,
                title: "Пошаговая система",
                description: "От азов до продвинутых стратегий. Структурированная программа без воды."
              },
              {
                icon: Zap,
                title: "Быстрый старт",
                description: "Первые результаты уже через 2 недели обучения. Начните зарабатывать быстро."
              },
              {
                icon: Award,
                title: "Сообщество",
                description: "Закрытый клуб трейдеров для обмена опытом и совместного роста."
              }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-gradient-to-br from-dark-card to-black p-6 md:p-8 rounded-2xl border border-accent-red/20 hover:border-accent-red/50 transition-all transform hover:scale-105 hover:shadow-xl hover:shadow-accent-red/10"
              >
                <div className="bg-accent-red/10 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="w-7 h-7 text-accent-red" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-20 px-4 md:px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Выберите свой <span className="text-accent-red">тариф</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Инвестиция в образование — лучшее вложение
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Старт",
                price: "9 990",
                features: [
                  "Базовый курс (20 уроков)",
                  "Доступ к материалам 3 месяца",
                  "Общий чат поддержки",
                  "Сертификат об окончании"
                ],
                popular: false
              },
              {
                name: "Профи",
                price: "24 990",
                features: [
                  "Полный курс (50+ уроков)",
                  "Доступ к материалам навсегда",
                  "Личный наставник",
                  "Разбор ваших сделок",
                  "Закрытое сообщество",
                  "Продвинутые стратегии",
                  "Сертификат об окончании"
                ],
                popular: true
              },
              {
                name: "VIP",
                price: "49 990",
                features: [
                  "Все из тарифа Профи",
                  "Индивидуальные консультации",
                  "Персональная торговая стратегия",
                  "Доступ к закрытым сигналам",
                  "Приоритетная поддержка 24/7",
                  "Мастермайнды с автором",
                  "Lifetime обновления"
                ],
                popular: false
              }
            ].map((plan, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative bg-gradient-to-br from-dark-card to-black p-6 md:p-8 rounded-2xl border ${
                  plan.popular 
                    ? 'border-accent-red shadow-2xl shadow-accent-red/20 transform scale-105' 
                    : 'border-accent-red/20'
                } transition-all hover:scale-105 hover:shadow-xl`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-accent-red text-white px-4 py-1 rounded-full text-sm font-bold">
                      Популярный
                    </div>
                  </div>
                )}
                
                <h3 className="text-2xl md:text-3xl font-black mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl md:text-5xl font-black text-accent-red">{plan.price}</span>
                  <span className="text-gray-400 ml-2">₽</span>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-accent-red flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300 text-sm md:text-base">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-4 rounded-lg font-bold transition-all transform hover:scale-105 ${
                  plan.popular
                    ? 'bg-accent-red hover:bg-red-600 text-white shadow-lg shadow-accent-red/50'
                    : 'bg-white/5 hover:bg-white/10 text-white border border-accent-red/30'
                }`}>
                  Купить курс
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="py-20 px-4 md:px-6 bg-gradient-to-b from-accent-red/5 to-transparent">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Отзывы <span className="text-accent-red">учеников</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Реальные истории успеха наших студентов
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                name: "Алексей М.",
                role: "Начинающий трейдер",
                text: "За 2 месяца обучения я увеличил депозит на 45%. Раньше постоянно сливал счета, а теперь торгую стабильно в плюс. Спасибо за четкую систему!",
                profit: "+45%",
                avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
              },
              {
                name: "Мария К.",
                role: "Офисный работник",
                text: "Совмещаю работу и трейдинг. Уже через месяц вышла на стабильный дополнительный доход в 50-70 тысяч рублей. Курс окупился за неделю!",
                profit: "+67%",
                avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
              },
              {
                name: "Дмитрий П.",
                role: "Предприниматель",
                text: "Пробовал учиться самостоятельно — потерял много денег. Здесь же все по полочкам, без воды. За 3 месяца удвоил капитал и теперь это мой основной доход.",
                profit: "+103%",
                avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop"
              },
              {
                name: "Екатерина Л.",
                role: "Студентка",
                text: "Начала с 500 долларов. Сейчас на счету уже 1500$. Самое главное — научилась контролировать риски и не поддаваться эмоциям.",
                profit: "+200%",
                avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop"
              },
              {
                name: "Сергей Н.",
                role: "IT-специалист",
                text: "Аналитический подход и четкие правила входа/выхода — это то, чего мне не хватало. Теперь торгую как робот, без эмоций. Результат +58% за 2 месяца.",
                profit: "+58%",
                avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
              },
              {
                name: "Ольга В.",
                role: "Мама в декрете",
                text: "Никогда не думала, что смогу зарабатывать из дома. Сейчас трейдинг — мой основной доход, пока сижу с ребенком. Курс изменил мою жизнь!",
                profit: "+82%",
                avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop"
              }
            ].map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-gradient-to-br from-dark-card to-black p-6 md:p-8 rounded-2xl border border-accent-red/20 hover:border-accent-red/50 transition-all"
              >
                <div className="flex items-center gap-4 mb-6">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-accent-red/30"
                  />
                  <div>
                    <h4 className="font-bold text-lg">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  </div>
                  <div className="ml-auto bg-green-500/20 text-green-500 px-3 py-1 rounded-full text-sm font-bold">
                    {testimonial.profit}
                  </div>
                </div>
                
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-5 h-5 fill-accent-red text-accent-red" />
                  ))}
                </div>
                
                <p className="text-gray-300 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 md:px-6">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-accent-red to-red-700 p-8 md:p-16 rounded-3xl text-center shadow-2xl shadow-accent-red/30 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-black/10" />
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-black mb-6">
                Готовы начать зарабатывать?
              </h2>
              <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto leading-relaxed">
                Присоединяйтесь к 5000+ успешных трейдеров. Первые 100 студентов получают скидку 30%!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white hover:bg-gray-100 text-accent-red px-10 py-5 rounded-xl text-xl font-black transition-all transform hover:scale-105 shadow-lg min-h-[64px] flex items-center justify-center gap-2">
                  Выбрать тариф
                  <ArrowRight className="w-6 h-6" />
                </button>
              </div>
              <p className="text-white/70 text-sm mt-6">
                🔒 Безопасная оплата | 💳 Гарантия возврата 14 дней
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black border-t border-accent-red/20 py-12 px-4 md:px-6">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center space-x-2">
              <TrendingUp className="w-6 h-6 text-accent-red" />
              <span className="text-xl font-black">TRADE<span className="text-accent-red">PRO</span></span>
            </div>
            <div className="text-gray-500 text-sm text-center md:text-left">
              © 2024 TradePro. Все права защищены.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App