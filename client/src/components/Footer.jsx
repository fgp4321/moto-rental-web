// ... (imports sin cambios)

const Footer = () => {
  return (
    <footer className="bg-black text-slate-400 border-t border-gray-900"> {/* Fondo negro y borde más sutil */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-white mb-2 tracking-wider">Rent a motorcycle</h3> {/* Título actualizado */}
            <p className="text-sm">Elige, reserva y disfruta.</p>
          </div>
          {/* ... Resto de las columnas sin cambios de color, ya que encajan bien */}
        </div>
        <div className="text-center mt-10 pt-8 border-t border-gray-900">
          <p>&copy; {new Date().getFullYear()} Rent a motorcycle. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;