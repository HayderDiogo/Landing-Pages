import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, CheckCircle, Star, Target, TrendingDown, Zap, Clock } from "lucide-react"
import Link from "next/link"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img src="/trilha-fitness-logo.png" alt="Trilha Fitness" className="w-12 h-12 object-contain" />
            <span className="text-xl font-bold text-gray-900">CarbCycling Pro</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#metodo" className="text-gray-600 hover:text-gray-900 transition-colors">
              O Método
            </a>
            <a href="#celebridades" className="text-gray-600 hover:text-gray-900 transition-colors">
              Celebridades
            </a>
            <a href="#resultados" className="text-gray-600 hover:text-gray-900 transition-colors">
              Resultados
            </a>
            <Link href="/quiz">
              <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                Começar Quiz
              </Button>
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <Badge className="mb-4 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 hover:from-purple-100 hover:to-pink-100 border-0">
          ⭐ EXCLUSIVO: O segredo das celebridades revelado
        </Badge>

        <div className="mb-8">
          <img
            src="/trilha-fitness-logo.png"
            alt="Trilha Fitness"
            className="w-32 h-32 md:w-40 md:h-40 object-contain mx-auto"
          />
        </div>

        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Carb Cycling
          </span>
          <br />A Dieta das Celebridades
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
          Descubra o método secreto usado por Jennifer Lopez, Chris Pratt, The Rock e outras celebridades de Hollywood
          para perder peso rapidamente e manter o corpo perfeito o ano todo.
        </p>

        <div className="relative mb-8">
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-75 animate-pulse"></div>
          <div className="relative bg-white rounded-lg p-6 border-2 border-dashed border-purple-300">
            <div className="flex items-center justify-center mb-4">
              <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-full p-3 mr-3">
                <Target className="w-8 h-8 text-purple-600" />
              </div>
              <div className="text-left">
                <h3 className="text-xl font-bold text-gray-900">QUIZ PERSONALIZADO</h3>
                <p className="text-sm text-gray-600">Descubra seu plano ideal em 2 minutos</p>
              </div>
            </div>
            <Link href="/quiz">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-xl px-12 py-6 shadow-2xl transform hover:scale-105 transition-all duration-300 animate-bounce"
              >
                🎯 COMEÇAR QUIZ AGORA
                <ArrowRight className="ml-3 w-6 h-6" />
              </Button>
            </Link>
            <p className="text-xs text-gray-500 mt-3">⚡ Mais de 10.000 pessoas já fizeram • ✅ 100% Gratuito</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="#testimonials">
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 bg-transparent border-2">
              Ver Transformações
            </Button>
          </a>
        </div>
        <p className="text-sm text-gray-500 mt-4">
          ✅ Usado por celebridades • ✅ Resultados em 15 dias • ✅ Sem efeito sanfona
        </p>
      </section>

      {/* Celebrity Section */}
      <section id="celebridades" className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Usado pelas maiores celebridades</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">O método que transformou os corpos de Hollywood</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-purple-500 rounded-full mx-auto mb-3 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                JL
              </div>
              <p className="font-semibold">Jennifer Lopez</p>
              <p className="text-sm text-gray-500">-15kg em 3 meses</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-500 rounded-full mx-auto mb-3 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                CP
              </div>
              <p className="font-semibold">Chris Pratt</p>
              <p className="text-sm text-gray-500">-27kg para filme</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-orange-500 rounded-full mx-auto mb-3 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                TR
              </div>
              <p className="font-semibold">The Rock</p>
              <p className="text-sm text-gray-500">Mantém 8% gordura</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-green-500 rounded-full mx-auto mb-3 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                SJ
              </div>
              <p className="font-semibold">Scarlett Johansson</p>
              <p className="text-sm text-gray-500">Forma perfeita</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
              50k+
            </div>
            <div className="text-gray-600">Pessoas transformadas</div>
          </div>
          <div>
            <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
              15 dias
            </div>
            <div className="text-gray-600">Para ver resultados</div>
          </div>
          <div>
            <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
              98%
            </div>
            <div className="text-gray-600">Taxa de sucesso</div>
          </div>
        </div>
      </section>

      {/* Method Section */}
      <section id="metodo" className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">O que é Carb Cycling?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            O método revolucionário que alterna dias de alto e baixo carboidrato para acelerar o metabolismo e queimar
            gordura de forma inteligente
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-br from-purple-50 to-white">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <CardTitle>Acelera o Metabolismo</CardTitle>
              <CardDescription>Mantém o corpo sempre "adivinhando" e queimando calorias</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-purple-500 mr-2" />
                  Evita adaptação metabólica
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-purple-500 mr-2" />
                  Queima gordura 24/7
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-purple-500 mr-2" />
                  Preserva massa muscular
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-br from-pink-50 to-white">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-white" />
              </div>
              <CardTitle>Flexibilidade Total</CardTitle>
              <CardDescription>Coma seus carboidratos favoritos nos dias certos</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-pink-500 mr-2" />
                  Dias de recarga com carbos
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-pink-500 mr-2" />
                  Sem restrições extremas
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-pink-500 mr-2" />
                  Sustentável a longo prazo
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-br from-blue-50 to-white">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                <TrendingDown className="w-6 h-6 text-white" />
              </div>
              <CardTitle>Resultados Rápidos</CardTitle>
              <CardDescription>Veja mudanças significativas em apenas 3 semanas</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-blue-500 mr-2" />
                  Perda de peso acelerada
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-blue-500 mr-2" />
                  Definição muscular
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-blue-500 mr-2" />
                  Mais energia e disposição
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Quiz CTA Section */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <img
                src="/trilha-fitness-logo.png"
                alt="Trilha Fitness - Método Aprovado"
                className="w-16 h-16 object-contain mr-3"
              />
              <div className="text-left">
                <p className="text-white font-semibold">Método Aprovado por</p>
                <p className="text-purple-100 text-sm">Trilha Fitness</p>
              </div>
            </div>
            <h2 className="text-4xl font-bold text-white mb-4">Descubra seu plano personalizado</h2>
            <p className="text-xl text-purple-100 mb-8">
              Responda 8 perguntas rápidas e receba seu protocolo de Carb Cycling personalizado, igual ao usado pelas
              celebridades de Hollywood
            </p>

            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-8 mb-8 border border-white/30">
              <div className="flex items-center justify-center space-x-4 text-white mb-4">
                <Clock className="w-8 h-8" />
                <span className="text-2xl font-bold">Apenas 2 minutos para completar</span>
              </div>
              <div className="flex items-center justify-center space-x-6 text-white/90 text-sm">
                <span>✅ Totalmente Gratuito</span>
                <span>✅ Resultado Instantâneo</span>
                <span>✅ Plano Personalizado</span>
              </div>
            </div>

            <Link href="/quiz">
              <Button
                size="lg"
                variant="secondary"
                className="text-xl px-16 py-6 bg-white text-purple-600 hover:bg-gray-100 shadow-2xl transform hover:scale-105 transition-all duration-300 font-bold"
              >
                🚀 FAZER MEU QUIZ PERSONALIZADO
                <ArrowRight className="ml-3 w-6 h-6" />
              </Button>
            </Link>
            <p className="text-white/80 text-sm mt-4">👆 Clique aqui para descobrir seu protocolo ideal</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Transformações reais</h2>
            <p className="text-xl text-gray-600">Pessoas comuns, resultados extraordinários</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "Incrível! Perdi 12kg em 6 semanas usando o mesmo método das celebridades. Nunca pensei que seria tão
                  fácil!"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white font-semibold mr-3 shadow-lg">
                    M
                  </div>
                  <div>
                    <div className="font-semibold">Marina Santos</div>
                    <div className="text-sm text-gray-500">Perdeu 12kg</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "O carb cycling mudou minha vida! Posso comer carboidratos e ainda assim emagrecer. Perdi 18kg!"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold mr-3 shadow-lg">
                    R
                  </div>
                  <div>
                    <div className="font-semibold">Rafael Lima</div>
                    <div className="text-sm text-gray-500">Perdeu 18kg</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "Finalmente um método que funciona! Me sinto como uma celebridade com meu novo corpo. 15kg a menos!"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-semibold mr-3 shadow-lg">
                    A
                  </div>
                  <div>
                    <div className="font-semibold">Ana Carolina</div>
                    <div className="text-sm text-gray-500">Perdeu 15kg</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img src="/trilha-fitness-logo.png" alt="Trilha Fitness" className="w-8 h-8 object-contain" />
                <span className="text-xl font-bold">CarbCycling Pro</span>
              </div>
              <p className="text-gray-400">O método das celebridades para transformar seu corpo.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Método</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Como Funciona
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Planos
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Resultados
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    App Mobile
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Celebridades</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Jennifer Lopez
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Chris Pratt
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    The Rock
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Mais Celebridades
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Suporte</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Central de Ajuda
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Comunidade
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contato
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 CarbCycling Pro. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
