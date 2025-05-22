
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Star } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Básico",
      price: "R$ 297",
      period: "/mês",
      description: "Ideal para clínicas pequenas iniciando a digitalização",
      features: [
        "App mobile personalizado",
        "Agendamento online",
        "Envio de laudos digitais",
        "Até 500 pacientes",
        "1 unidade",
        "Suporte por email"
      ],
      popular: false,
      buttonText: "Começar Básico"
    },
    {
      name: "Intermediário",
      price: "R$ 597",
      period: "/mês",
      description: "Para clínicas em crescimento que precisam de mais recursos",
      features: [
        "Tudo do plano Básico",
        "Notificações push ilimitadas",
        "Chat integrado",
        "Até 2.000 pacientes",
        "Até 3 unidades",
        "Personalização avançada",
        "Relatórios detalhados",
        "Suporte prioritário"
      ],
      popular: true,
      buttonText: "Mais Popular"
    },
    {
      name: "Avançado",
      price: "R$ 997",
      period: "/mês",
      description: "Solução completa para redes e clínicas de grande porte",
      features: [
        "Tudo do plano Intermediário",
        "Pacientes ilimitados",
        "Unidades ilimitadas",
        "API personalizada",
        "BI e analytics avançados",
        "White-label completo",
        "Integrações customizadas",
        "Suporte 24/7 + consultoria",
        "Gerente de conta dedicado"
      ],
      popular: false,
      buttonText: "Escolher Avançado"
    }
  ];

  return (
    <section id="planos" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            Planos que crescem
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">
              {" "}com sua clínica
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Escolha o plano ideal para o tamanho da sua operação. Todos incluem 14 dias de teste grátis.
          </p>
          
          <div className="inline-flex items-center bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
            ✨ Todos os planos incluem setup completo e migração gratuita
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${
                plan.popular 
                  ? 'bg-gradient-to-br from-blue-600 to-blue-700 text-white transform scale-105' 
                  : 'bg-white'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                    <Star size={14} fill="currentColor" />
                    Mais Escolhido
                  </div>
                </div>
              )}

              <CardHeader className="text-center pb-4">
                <CardTitle className={`text-2xl font-bold ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                  {plan.name}
                </CardTitle>
                <div className="mb-4">
                  <span className={`text-4xl font-bold ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                    {plan.price}
                  </span>
                  <span className={`text-lg ${plan.popular ? 'text-blue-100' : 'text-gray-600'}`}>
                    {plan.period}
                  </span>
                </div>
                <CardDescription className={`${plan.popular ? 'text-blue-100' : 'text-gray-600'}`}>
                  {plan.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle 
                        size={20} 
                        className={`mt-0.5 flex-shrink-0 ${plan.popular ? 'text-green-300' : 'text-green-500'}`}
                      />
                      <span className={`text-sm ${plan.popular ? 'text-white' : 'text-gray-700'}`}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <Button 
                  className={`w-full mt-6 ${
                    plan.popular 
                      ? 'bg-white text-blue-600 hover:bg-gray-100' 
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                  }`}
                  size="lg"
                >
                  {plan.buttonText}
                </Button>

                <p className={`text-xs text-center ${plan.popular ? 'text-blue-100' : 'text-gray-500'}`}>
                  Teste grátis por 14 dias
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Precisa de algo personalizado? Fale com nosso time comercial.
          </p>
          <Button variant="outline" size="lg" className="border-blue-200 text-blue-600 hover:bg-blue-50">
            Falar com Especialista
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
