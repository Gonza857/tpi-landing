import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Logo and description */}
            <div className="md:col-span-2 space-y-4">
              <Image
                src="/assets/logo.png"
                alt="NeoCivita Logo"
                width={200}
                height={80}
              />
              <p className="text-background/80 max-w-md">
                Transformando la educación ambiental a través del gaming.
                Construye ciudades sustentables mientras aprendes sobre el
                cuidado del planeta.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold mb-4 text-primary">
                Enlaces Rápidos
              </h3>
              <ul className="space-y-2 text-background/80">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Jugar Ahora
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Sobre Nosotros
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Educadores
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Contacto
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-semibold mb-4 text-secondary">Contacto</h3>
              <ul className="space-y-2 text-background/80">
                <li>📧 info@neocivita.com</li>
                <li>🌐 www.neocivita.com</li>
                <li>
                  <a
                    href="https://www.instagram.com/neo.civita/"
                    className="hover:text-primary transition-colors"
                  >
                    📱 @neo.civita
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-background/20 mt-12 pt-8 text-center text-background/60">
            <p>
              &copy; 2025 NeoCivita. Todos los derechos reservados. Construyendo
              un futuro sustentable, un juego a la vez.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
