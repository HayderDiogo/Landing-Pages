"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Crown, Star, Clock, Gift, Zap, Target, Shield } from "lucide-react"

export default function ResultadoPage() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59,
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 }
        }
        return prev
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
              <Crown className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">CarbCycling Pro</span>
          </div>
        </div>
      </header>

      {/* Result Section */}
      <section className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <img
            src="/trilha-fitness-logo.png"
            alt="Trilha Fitness"
            className="w-48 h-48 md:w-56 md:h-56 object-contain mx-auto mb-4"
          />
          <p className="text-lg font-semibold text-gray-700">Método Aprovado e Recomendado</p>
        </div>

        <div className="max-w-4xl mx-auto text-center mb-12">
          <Badge className="mb-4 bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 border-0 text-lg px-4 py-2">
            ✅ Quiz Completo - Resultado Personalizado
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Seu Plano de{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Carb Cycling
            </span>{" "}
            Está Pronto!
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Com base nas suas respostas, criamos um protocolo personalizado de Carb Cycling que vai acelerar sua perda
            de peso em até 300% comparado às dietas tradicionais.
          </p>
        </div>

        {/* Product Showcase */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Product Image */}
          <div className="relative">
            <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl p-8 shadow-2xl">
              <img
                src="/carb-cycling-ebook-cover.png"
                alt="Carb Cycling - A Dieta das Celebridades"
                className="w-full max-w-md mx-auto rounded-lg shadow-lg"
              />
            </div>
            <div className="absolute -top-4 -right-4 bg-gradient-to-r from-red-500 to-pink-500 text-white px-4 py-2 rounded-full font-bold text-sm transform rotate-12">
              EXCLUSIVO!
            </div>
          </div>

          {/* Product Details */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Carb Cycling: A Dieta das Celebridades</h2>
            <p className="text-lg text-gray-600 mb-8">
              O guia completo com o método exato usado por Jennifer Lopez, Chris Pratt, The Rock e outras celebridades
              de Hollywood para manter o corpo perfeito.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-green-500" />
                <span className="text-gray-700">Protocolo completo de 21 dias</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-green-500" />
                <span className="text-gray-700">150+ receitas de carb cycling</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-green-500" />
                <span className="text-gray-700">Planos personalizados por biotipo</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-green-500" />
                <span className="text-gray-700">Segredos das celebridades revelados</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-green-500" />
                <span className="text-gray-700">Suporte 24/7 por 30 dias</span>
              </div>
            </div>

            {/* Bonus Items */}
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <Gift className="w-6 h-6 text-yellow-600 mr-2" />
                Bônus Exclusivos (Valor: 500 MT)
              </h3>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <Star className="w-4 h-4 text-yellow-500" />
                  <span className="text-sm">Guia de suplementação para carb cycling</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Star className="w-4 h-4 text-yellow-500" />
                  <span className="text-sm">Plano de treinos complementar</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Star className="w-4 h-4 text-yellow-500" />
                  <span className="text-sm">E-book de receitas fit exclusivas</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Timer and Offer */}
        <div className="max-w-4xl mx-auto">
          <Card className="border-0 shadow-2xl bg-gradient-to-r from-red-500 to-pink-500 text-white overflow-hidden">
            <CardHeader className="text-center pb-4">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <Clock className="w-8 h-8" />
                <span className="text-2xl font-bold">OFERTA RELÂMPAGO</span>
              </div>
              <CardTitle className="text-3xl md:text-4xl font-bold mb-2">Esta oferta expira em:</CardTitle>
            </CardHeader>

            <CardContent className="text-center">
              {/* Countdown Timer */}
              <div className="flex justify-center space-x-4 mb-8">
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 min-w-[80px]">
                  <div className="text-3xl font-bold">{String(timeLeft.hours).padStart(2, "0")}</div>
                  <div className="text-sm opacity-90">HORAS</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 min-w-[80px]">
                  <div className="text-3xl font-bold">{String(timeLeft.minutes).padStart(2, "0")}</div>
                  <div className="text-sm opacity-90">MINUTOS</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 min-w-[80px]">
                  <div className="text-3xl font-bold">{String(timeLeft.seconds).padStart(2, "0")}</div>
                  <div className="text-sm opacity-90">SEGUNDOS</div>
                </div>
              </div>

              {/* Pricing */}
              <div className="mb-8">
                <div className="text-lg opacity-90 line-through mb-2">De: 650 MT</div>
                <div className="text-5xl font-bold mb-2">150 MT</div>
                <div className="text-xl opacity-90">ou 3x de 50 MT</div>
                <Badge className="mt-4 bg-yellow-400 text-yellow-900 text-lg px-4 py-2 border-0">77% DE DESCONTO</Badge>
              </div>

              {/* CTA Button */}
              <Button
                size="lg"
                className="bg-white text-red-600 hover:bg-gray-100 text-xl px-12 py-6 font-bold shadow-lg transform hover:scale-105 transition-all duration-200 mb-6"
                onClick={() =>
                  window.open(
                    "https://wa.me/258863002377?text=Olá! Quero garantir minha cópia do Carb Cycling - A Dieta das Celebridades por 150 MT. Acabei de fazer o quiz!",
                    "_blank",
                  )
                }
              >
                <Zap className="w-6 h-6 mr-2" />
                QUERO GARANTIR MINHA CÓPIA AGORA
              </Button>

              <div className="flex items-center justify-center space-x-6 text-sm opacity-90">
                <div className="flex items-center space-x-1">
                  <Shield className="w-4 h-4" />
                  <span>Garantia 30 dias</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Target className="w-4 h-4" />
                  <span>Acesso imediato</span>
                </div>
                <div className="flex items-center space-x-1">
                  <CheckCircle className="w-4 h-4" />
                  <span>Compra segura</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Testimonials */}
        <div className="max-w-6xl mx-auto mt-16">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Veja o que dizem quem já transformou o corpo
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "Incrível! Segui exatamente o protocolo e perdi 8kg em 3 semanas. Nunca imaginei que seria tão fácil!"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white font-semibold mr-3 shadow-lg">
                    L
                  </div>
                  <div>
                    <div className="font-semibold">Larissa Oliveira</div>
                    <div className="text-sm text-gray-500">Perdeu 8kg em 21 dias</div>
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
                  "O método das celebridades realmente funciona! Estou com o corpo que sempre sonhei. Vale cada
                  centavo!"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold mr-3 shadow-lg">
                    T
                  </div>
                  <div>
                    <div className="font-semibold">Thiago Mendes</div>
                    <div className="text-sm text-gray-500">Perdeu 15kg</div>
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
                  "Finalmente um método que não me deixa com fome! Emagreci 12kg comendo carboidratos. Surreal!"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-semibold mr-3 shadow-lg">
                    C
                  </div>
                  <div>
                    <div className="font-semibold">Camila Santos</div>
                    <div className="text-sm text-gray-500">Perdeu 12kg</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Final CTA */}
        <div className="max-w-4xl mx-auto mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">Não perca esta oportunidade única!</h3>
            <p className="text-xl mb-6 opacity-90">
              Apenas hoje você tem acesso ao método das celebridades por este preço especial.
            </p>
            <Button
              size="lg"
              className="bg-white text-purple-600 hover:bg-gray-100 text-xl px-12 py-6 font-bold shadow-lg transform hover:scale-105 transition-all duration-200"
              onClick={() =>
                window.open(
                  "https://wa.me/258863002377?text=Olá! Quero garantir minha cópia do Carb Cycling - A Dieta das Celebridades por 150 MT. Acabei de fazer o quiz!",
                  "_blank",
                )
              }
            >
              <Crown className="w-6 h-6 mr-2" />
              GARANTIR ACESSO AGORA - 150 MT
            </Button>
            <p className="text-sm mt-4 opacity-75">🔒 Pagamento 100% seguro • ✅ Garantia incondicional de 30 dias</p>
          </div>
        </div>
      </section>
    </div>
  )
}
