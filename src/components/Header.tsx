
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-blue-100 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">S</span>
            </div>
            <span className="text-xl font-bold text-gray-900">SaúdeSaaS</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#funcionalidades" className="text-gray-600 hover:text-blue-600 transition-colors">
              Funcionalidades
            </a>
            <a href="#planos" className="text-gray-600 hover:text-blue-600 transition-colors">
              Planos
            </a>
            <a href="#sobre" className="text-gray-600 hover:text-blue-600 transition-colors">
              Sobre
            </a>
            <a href="#contato" className="text-gray-600 hover:text-blue-600 transition-colors">
              Contato
            </a>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" className="border-blue-200 text-blue-600 hover:bg-blue-50">
              Fazer Login
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              Teste Grátis
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-4 mt-4">
              <a href="#funcionalidades" className="text-gray-600 hover:text-blue-600 transition-colors">
                Funcionalidades
              </a>
              <a href="#planos" className="text-gray-600 hover:text-blue-600 transition-colors">
                Planos
              </a>
              <a href="#sobre" className="text-gray-600 hover:text-blue-600 transition-colors">
                Sobre
              </a>
              <a href="#contato" className="text-gray-600 hover:text-blue-600 transition-colors">
                Contato
              </a>
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="outline" className="border-blue-200 text-blue-600 hover:bg-blue-50">
                  Fazer Login
                </Button>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                  Teste Grátis
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
