
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Smartphone, Monitor, Users, Settings, BarChart, Shield } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Smartphone className="text-blue-600" size={32} />,
      title: "App Mobile para Pacientes",
      description: "Interface intuitiva para agendamentos, visualização de laudos e comunicação direta com a clínica.",
      highlights: ["Notificações Push", "Chat Integrado", "Laudos Digitais"]
    },
    {
      icon: <Monitor className="text-green-600" size={32} />,
      title: "Painel Web Completo",
      description: "Dashboard administrativo com gestão de agendas, médicos, pacientes e relatórios detalhados.",
      highlights: ["Multi-unidade", "Relatórios Avançados", "Gestão de Equipe"]
    },
    {
      icon: <Users className="text-purple-600" size={32} />,
      title: "Sistema Multi-Tenant",
      description: "Arquitetura escalável que isola dados de cada clínica com total segurança e personalização.",
      highlights: ["Dados Isolados", "Subdomínio Próprio", "Backup Automático"]
    },
    {
      icon: <Settings className="text-orange-600" size={32} />,
      title: "Configurador Drag & Drop",
      description: "Personalize o app do paciente arrastando módulos, alterando cores e testando no ambiente sandbox.",
      highlights: ["Visual Customizado", "Teste Sandbox", "Deploy Instantâneo"]
    },
    {
      icon: <BarChart className="text-indigo-600" size={32} />,
      title: "Analytics e Relatórios",
      description: "Métricas detalhadas de agendamentos, presença, cancelamentos e performance da clínica.",
      highlights: ["Dashboard BI", "Exportação Excel", "Alertas Automáticos"]
    },
    {
      icon: <Shield className="text-red-600" size={32} />,
      title: "Segurança LGPD",
      description: "Conformidade total com LGPD, criptografia de dados e controle de acesso por níveis.",
      highlights: ["Criptografia", "Auditoria", "Controle de Acesso"]
    }
  ];

  return (
    <section id="funcionalidades" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            Tudo que sua clínica precisa
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">
              {" "}em uma plataforma
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Solução completa que conecta pacientes, profissionais e gestores através de tecnologia 
            avançada e interface intuitiva.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-white to-gray-50">
              <CardHeader className="pb-4">
                <div className="mb-4">
                  {feature.icon}
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">
                  {feature.title}
                </CardTitle>
                <CardDescription className="text-gray-600 leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {feature.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span className="text-sm text-gray-700">{highlight}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
