"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { ArrowLeft, ArrowRight, Crown, Target, Scale, Clock } from "lucide-react"
import { useRouter } from "next/navigation"
import { QuizTimer } from "@/components/quiz-timer"

const questions = [
  {
    id: 1,
    title: "Qual é seu objetivo principal?",
    subtitle: "Escolha sua meta principal com o Carb Cycling",
    options: [
      { value: "perder_peso", label: "Perder peso rapidamente", icon: Scale },
      { value: "definir_corpo", label: "Definir e tonificar o corpo", icon: Target },
      { value: "manter_peso", label: "Manter o peso atual", icon: Crown },
      { value: "ganhar_massa", label: "Ganhar massa muscular", icon: Target },
    ],
  },
  {
    id: 2,
    title: "Quanto peso você quer perder?",
    subtitle: "Defina sua meta de emagrecimento",
    options: [
      { value: "5_10kg", label: "5 a 10kg", icon: Scale },
      { value: "10_20kg", label: "10 a 20kg", icon: Scale },
      { value: "20_30kg", label: "20 a 30kg", icon: Scale },
      { value: "mais_30kg", label: "Mais de 30kg", icon: Scale },
    ],
  },
  {
    id: 3,
    title: "Qual seu nível de atividade física?",
    subtitle: "Isso nos ajuda a personalizar seu plano",
    options: [
      { value: "sedentario", label: "Sedentário (pouco ou nenhum exercício)", icon: Clock },
      { value: "leve", label: "Leve (1-3 dias por semana)", icon: Clock },
      { value: "moderado", label: "Moderado (3-5 dias por semana)", icon: Clock },
      { value: "intenso", label: "Intenso (6-7 dias por semana)", icon: Clock },
    ],
  },
  {
    id: 4,
    title: "Qual sua experiência com dietas?",
    subtitle: "Conhecer seu histórico nos ajuda a criar o melhor plano",
    options: [
      { value: "primeira_vez", label: "Esta é minha primeira dieta", icon: Target },
      { value: "algumas_tentativas", label: "Já tentei algumas dietas", icon: Target },
      { value: "muitas_tentativas", label: "Já tentei muitas dietas", icon: Target },
      { value: "efeito_sanfona", label: "Sofro com efeito sanfona", icon: Target },
    ],
  },
  {
    id: 5,
    title: "Qual seu maior desafio com alimentação?",
    subtitle: "Identifique seu principal obstáculo",
    options: [
      { value: "compulsao", label: "Compulsão por doces/carboidratos", icon: Target },
      { value: "tempo", label: "Falta de tempo para cozinhar", icon: Clock },
      { value: "motivacao", label: "Falta de motivação/disciplina", icon: Crown },
      { value: "conhecimento", label: "Não sei o que comer", icon: Target },
    ],
  },
  {
    id: 6,
    title: "Em quanto tempo quer ver resultados?",
    subtitle: "Defina seu prazo para a transformação",
    options: [
      { value: "1_mes", label: "1 mês (resultados rápidos)", icon: Clock },
      { value: "3_meses", label: "3 meses (transformação sólida)", icon: Clock },
      { value: "6_meses", label: "6 meses (mudança completa)", icon: Clock },
      { value: "1_ano", label: "1 ano (transformação total)", icon: Clock },
    ],
  },
  {
    id: 7,
    title: "Qual sua idade?",
    subtitle: "Isso nos ajuda a ajustar o metabolismo",
    options: [
      { value: "18_25", label: "18-25 anos", icon: Target },
      { value: "26_35", label: "26-35 anos", icon: Target },
      { value: "36_45", label: "36-45 anos", icon: Target },
      { value: "46_mais", label: "46+ anos", icon: Target },
    ],
  },
  {
    id: 8,
    title: "Qual seu gênero?",
    subtitle: "Para personalizar completamente seu plano",
    options: [
      { value: "feminino", label: "Feminino", icon: Crown },
      { value: "masculino", label: "Masculino", icon: Crown },
      { value: "prefiro_nao_dizer", label: "Prefiro não dizer", icon: Crown },
    ],
  },
]

export default function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [selectedOption, setSelectedOption] = useState<string>("")
  const router = useRouter()

  const progress = ((currentQuestion + 1) / questions.length) * 100

  const handleAnswer = (value: string) => {
    setSelectedOption(value)
  }

  const handleNext = () => {
    if (selectedOption) {
      setAnswers((prev) => ({ ...prev, [questions[currentQuestion].id]: selectedOption }))

      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion((prev) => prev + 1)
        setSelectedOption("")
      } else {
        // Quiz finalizado, redirecionar para página de promoção
        router.push("/resultado")
      }
    }
  }

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1)
      setSelectedOption(answers[questions[currentQuestion - 1].id] || "")
    }
  }

  const handleTimeUp = () => {
    router.push("/resultado")
  }

  const currentQ = questions[currentQuestion]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
              <Crown className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">CarbCycling Pro</span>
          </div>
          <div className="flex items-center space-x-4">
            <Badge className="bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 border-0">
              Quiz Personalizado
            </Badge>
            <QuizTimer onTimeUp={handleTimeUp} />
          </div>
        </div>
      </header>

      {/* Progress Bar */}
      <div className="container mx-auto px-4 mb-8">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-600">
              Pergunta {currentQuestion + 1} de {questions.length}
            </span>
            <span className="text-sm font-medium text-purple-600">{Math.round(progress)}% completo</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>
      </div>

      {/* Question */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
            <CardHeader className="text-center pb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">{currentQuestion + 1}</span>
              </div>
              <CardTitle className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{currentQ.title}</CardTitle>
              <p className="text-gray-600 text-lg">{currentQ.subtitle}</p>
            </CardHeader>

            <CardContent className="space-y-4">
              {currentQ.options.map((option) => {
                const IconComponent = option.icon
                return (
                  <button
                    key={option.value}
                    onClick={() => handleAnswer(option.value)}
                    className={`w-full p-4 rounded-lg border-2 transition-all duration-200 text-left hover:shadow-md ${
                      selectedOption === option.value
                        ? "border-purple-500 bg-gradient-to-r from-purple-50 to-pink-50 shadow-md"
                        : "border-gray-200 bg-white hover:border-purple-300"
                    }`}
                  >
                    <div className="flex items-center space-x-4">
                      <div
                        className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                          selectedOption === option.value
                            ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                            : "bg-gray-100 text-gray-600"
                        }`}
                      >
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <span
                        className={`font-medium ${
                          selectedOption === option.value ? "text-purple-700" : "text-gray-700"
                        }`}
                      >
                        {option.label}
                      </span>
                    </div>
                  </button>
                )
              })}
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            <Button
              variant="outline"
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
              className="flex items-center space-x-2 bg-transparent"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Anterior</span>
            </Button>

            <Button
              onClick={handleNext}
              disabled={!selectedOption}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 flex items-center space-x-2"
            >
              <span>{currentQuestion === questions.length - 1 ? "Ver Resultado" : "Próxima"}</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Footer Info */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-sm text-gray-500">🔒 Suas informações são 100% seguras e privadas</p>
        </div>
      </div>
    </div>
  )
}
