
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    razaoSocial: "",
    cnpj: "",
    email: "",
    endereco: "",
    contato: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const formatCNPJ = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    return numbers.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');
  };

  const handleCNPJChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatCNPJ(e.target.value);
    setFormData(prev => ({
      ...prev,
      cnpj: formatted
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Validação básica
    if (!formData.razaoSocial || !formData.cnpj || !formData.email || !formData.endereco || !formData.contato) {
      toast({
        title: "Erro no cadastro",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive",
      });
      setIsLoading(false);
      return;
    }

    // Simulação de envio
    setTimeout(() => {
      toast({
        title: "Cadastro realizado com sucesso!",
        description: "Entraremos em contato em breve para finalizar sua assinatura.",
      });
      setIsLoading(false);
      // Reset form
      setFormData({
        razaoSocial: "",
        cnpj: "",
        email: "",
        endereco: "",
        contato: ""
      });
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header simples */}
      <header className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-[#5f4dd0] to-purple-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">L</span>
              </div>
              <span className="text-xl font-bold text-gray-900">Lumina</span>
            </Link>
            <Link to="/" className="text-[#5f4dd0] hover:text-purple-700 font-medium">
              ← Voltar ao início
            </Link>
          </div>
        </div>
      </header>

      {/* Formulário de cadastro */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Cadastre sua Empresa
              </h1>
              <p className="text-gray-600">
                Preencha os dados abaixo para começar a usar o Lumina
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="razaoSocial" className="text-gray-700 font-medium">
                  Razão Social *
                </Label>
                <Input
                  id="razaoSocial"
                  name="razaoSocial"
                  type="text"
                  value={formData.razaoSocial}
                  onChange={handleInputChange}
                  placeholder="Digite a razão social da empresa"
                  className="mt-1"
                  required
                />
              </div>

              <div>
                <Label htmlFor="cnpj" className="text-gray-700 font-medium">
                  CNPJ *
                </Label>
                <Input
                  id="cnpj"
                  name="cnpj"
                  type="text"
                  value={formData.cnpj}
                  onChange={handleCNPJChange}
                  placeholder="00.000.000/0000-00"
                  className="mt-1"
                  maxLength={18}
                  required
                />
              </div>

              <div>
                <Label htmlFor="email" className="text-gray-700 font-medium">
                  E-mail *
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="contato@empresa.com"
                  className="mt-1"
                  required
                />
              </div>

              <div>
                <Label htmlFor="endereco" className="text-gray-700 font-medium">
                  Endereço Completo *
                </Label>
                <Input
                  id="endereco"
                  name="endereco"
                  type="text"
                  value={formData.endereco}
                  onChange={handleInputChange}
                  placeholder="Rua, número, bairro, cidade - UF"
                  className="mt-1"
                  required
                />
              </div>

              <div>
                <Label htmlFor="contato" className="text-gray-700 font-medium">
                  Número de Contato *
                </Label>
                <Input
                  id="contato"
                  name="contato"
                  type="tel"
                  value={formData.contato}
                  onChange={handleInputChange}
                  placeholder="(00) 00000-0000"
                  className="mt-1"
                  required
                />
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-[#5f4dd0] hover:bg-purple-700 text-white font-semibold py-3 text-lg"
              >
                {isLoading ? "Enviando..." : "Enviar"}
              </Button>
            </form>

            <div className="mt-6 text-center text-sm text-gray-500">
              Ao se cadastrar, você concorda com nossos{" "}
              <a href="#" className="text-[#5f4dd0] hover:underline">
                Termos de Uso
              </a>{" "}
              e{" "}
              <a href="#" className="text-[#5f4dd0] hover:underline">
                Política de Privacidade
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Register;
