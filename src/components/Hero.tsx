
import { Button } from "@/components/ui/button";
import { ArrowDown, CheckCircle } from "lucide-react";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-green-50 py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              🚀 Plataforma White-Label para Clínicas
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Transforme sua
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">
                {" "}clínica{" "}
              </span>
              em uma experiência digital completa
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Plataforma SaaS completa com app mobile para pacientes, painel web para gestão 
              e sistema multi-tenant. Tudo personalizado com sua marca.
            </p>

            {/* Benefits */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <div className="flex items-center gap-2">
                <CheckCircle className="text-green-500" size={20} />
                <span className="text-gray-700">Setup em 24h</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="text-green-500" size={20} />
                <span className="text-gray-700">100% White-Label</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="text-green-500" size={20} />
                <span className="text-gray-700">Suporte 24/7</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg">
                Começar Teste Grátis
              </Button>
              <Button size="lg" variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-4 text-lg">
                Ver Demonstração
              </Button>
            </div>

            <p className="text-sm text-gray-500 mt-4">
              ✨ Teste grátis por 14 dias • Sem cartão de crédito
            </p>
          </div>

          {/* Right Content - Mock Interface */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-6 transform rotate-2 hover:rotate-0 transition-transform duration-300">
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-4 mb-4">
                <div className="flex items-center justify-between text-white">
                  <h3 className="font-semibold">Painel da Clínica</h3>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm text-gray-600">Agendamentos Hoje</span>
                  <span className="font-bold text-blue-600">24</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm text-gray-600">Laudos Pendentes</span>
                  <span className="font-bold text-orange-600">7</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm text-gray-600">Pacientes Ativos</span>
                  <span className="font-bold text-green-600">1,247</span>
                </div>
              </div>
            </div>

            {/* Mobile App Preview */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4 w-32 transform -rotate-12 hover:rotate-0 transition-transform duration-300">
              <div className="bg-gradient-to-b from-blue-500 to-blue-600 rounded-lg p-2 mb-2">
                <div className="text-white text-xs font-medium text-center">App Paciente</div>
              </div>
              <div className="space-y-1">
                <div className="h-2 bg-gray-200 rounded"></div>
                <div className="h-2 bg-gray-200 rounded w-3/4"></div>
                <div className="h-2 bg-blue-200 rounded w-1/2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="flex justify-center mt-16">
        <ArrowDown className="text-gray-400 animate-bounce" size={24} />
      </div>
    </section>
  );
};

export default Hero;
