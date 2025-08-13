import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Columna Logo y Lema */}
          <div>
            <h3 className="text-xl font-bold text-white mb-2">Moto<span className="text-cyan-400">Lease</span></h3>
            <p className="text-sm">Forjando leyendas, una ruta a la vez.</p>
          </div>
          
          {/* Columna Enlaces */}
          <div>
            <h4 className="font-semibold text-white mb-4">Navegación</h4>
            <ul>
              <li className="mb-2"><a href="/motos" className="hover:text-cyan-400">Catálogo</a></li>
              <li className="mb-2"><a href="#" className="hover:text-cyan-400">Términos y Condiciones</a></li>
              <li className="mb-2"><a href="#" className="hover:text-cyan-400">Política de Privacidad</a></li>
            </ul>
          </div>

          {/* Columna Contacto */}
          <div>
            <h4 className="font-semibold text-white mb-4">Contacto</h4>
            <p>info@motolease.com</p>
          </div>
          
          {/* Columna Redes Sociales */}
          <div>
            <h4 className="font-semibold text-white mb-4">Síguenos</h4>
            <div className="flex space-x-4">
              {/* Aquí irían los iconos SVG de las redes */}
              <a href="#" className="hover:text-cyan-400">Facebook</a>
              <a href="#" className="hover:text-cyan-400">Instagram</a>
            </div>
          </div>
        </div>
        <div className="text-center mt-10 pt-8 border-t border-slate-800">
          <p>&copy; {new Date().getFullYear()} MotoLease. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;