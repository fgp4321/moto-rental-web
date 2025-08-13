import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-slate-400 border-t border-gray-900">
      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Columna de Suscripción (más ancha) */}
          <div className="md:col-span-2 lg:col-span-1">
            <h3 className="text-lg font-heading font-semibold text-white mb-4">Únete a la Comunidad</h3>
            <p className="text-sm mb-4">Recibe noticias, ofertas especiales y las últimas incorporaciones a nuestro garaje directamente en tu email.</p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="tu.email@ejemplo.com" 
                className="w-full bg-gray-900 text-white px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-white/50 border border-gray-800"
              />
              <button type="submit" className="bg-white text-black font-bold px-4 py-2 rounded-r-md hover:bg-gray-300 transition-colors">
                Suscribirse
              </button>
            </form>
          </div>

          {/* Columna de Empresa */}
          <div>
            <h4 className="font-semibold text-white mb-4 font-heading">Empresa</h4>
            <ul>
              <li className="mb-2"><a href="#" className="hover:text-white transition-colors">Sobre Nosotros</a></li>
              <li className="mb-2"><a href="/motos" className="hover:text-white transition-colors">Catálogo</a></li>
              <li className="mb-2"><a href="#" className="hover:text-white transition-colors">Contacto</a></li>
            </ul>
          </div>

          {/* Columna Legal */}
          <div>
            <h4 className="font-semibold text-white mb-4 font-heading">Legal</h4>
            <ul>
              <li className="mb-2"><a href="#" className="hover:text-white transition-colors">Términos y Condiciones</a></li>
              <li className="mb-2"><a href="#" className="hover:text-white transition-colors">Política de Privacidad</a></li>
              <li className="mb-2"><a href="#" className="hover:text-white transition-colors">Política de Cookies</a></li>
            </ul>
          </div>
        </div>

        {/* Separador y sección inferior */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-10 pt-8 border-t border-gray-900">
          <p className="text-sm mb-4 md:mb-0">&copy; {new Date().getFullYear()} Rent a motorcycle. Todos los derechos reservados.</p>
          <div className="flex space-x-4">
            {/* Iconos SVG de redes sociales */}
            <a href="#" aria-label="Instagram" className="text-gray-500 hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664-4.771 4.919-4.919C8.416 2.175 8.796 2.163 12 2.163zm0 1.44c-3.117 0-3.486.01-4.697.065-2.61.12-3.876 1.39-3.999 3.999-.055 1.21-.065 1.578-.065 4.697s.01 3.487.065 4.697c.124 2.61 1.389 3.876 3.999 3.999 1.21.055 1.578.065 4.697.065s3.487-.01 4.697-.065c2.61-.12 3.876-1.39 3.999-3.999.055-1.21.065-1.578.065-4.697s-.01-3.487-.065-4.697c-.124-2.61-1.389-3.876-3.999-3.999-1.21-.055-1.578-.065-4.697-.065zm0 3.848c-2.404 0-4.35 1.946-4.35 4.35s1.946 4.35 4.35 4.35 4.35-1.946 4.35-4.35-1.946-4.35-4.35-4.35zm0 7.25c-1.597 0-2.9-1.303-2.9-2.9s1.303-2.9 2.9-2.9 2.9 1.303 2.9 2.9-1.303 2.9-2.9 2.9zm5.338-8.205c-.595 0-1.077.482-1.077 1.077s.482 1.077 1.077 1.077 1.077-.482 1.077-1.077-.482-1.077-1.077-1.077z" />
              </svg>
            </a>
            <a href="#" aria-label="X/Twitter" className="text-gray-500 hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;