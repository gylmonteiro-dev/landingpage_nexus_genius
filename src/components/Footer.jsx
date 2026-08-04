export default function Footer() {
  return (
    <footer
      id="about"
      className="bg-surface border-t border-outline-variant py-section-v-padding px-margin-mobile md:px-margin-desktop"
    >
      <div className="max-w-container-max mx-auto flex flex-col md:flex-row justify-between gap-stack-lg">
        <div className="flex flex-col gap-4 max-w-sm">
          <div className="flex items-center gap-2 mb-2">
            <span
              className="material-symbols-outlined text-primary"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              info
            </span>
            <span className="font-label-caps text-label-caps uppercase text-primary">Sobre Nós</span>
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
          Acreditamos que a tecnologia só transforma o ensino quando acompanhada de um propósito pedagógico claro. 
          É por isso que a Nexus Genius funde a expertise em Computação e Informática com profissionais da Educação que possuem vivência real e acadêmica com titulações como:
          Licenciatura, especialização e mestrado. Garantindo a implementação de ferramentas digitais que resolvem desafios diários e geram 
          resultados práticos para gestores e alunos.
          </p>
          <div className="flex gap-4 mt-4">
            <a href="#" className="text-on-surface-variant hover:text-insight-orange transition-colors">
              <span className="material-symbols-outlined">share</span>
            </a>
            <a href="#" className="text-on-surface-variant hover:text-insight-orange transition-colors">
              <span className="material-symbols-outlined">public</span>
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="material-symbols-outlined text-primary">location_on</span>
            <span className="font-label-caps text-label-caps uppercase text-primary">Location</span>
          </div>
          <address className="font-body-md text-body-md text-on-surface-variant not-italic leading-relaxed">
            Rua Francisco Núzio de Medeiros, 34 - Dom Elizeu
            <br />
            Assú, RN - 59650-000
            <br />
            <a href="mailto:contato@nexusgenius.edu.br" className="text-insight-orange hover:underline">
            nexusgenius2026@gmail.com 
            </a>
          </address>
        </div>

        <div className="flex flex-col gap-4">
          <span className="font-label-caps text-label-caps uppercase text-primary mb-2">
            Quick Links
          </span>
          <nav className="flex flex-col gap-2">
            <a href="#" className="text-body-md text-on-surface-variant hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-body-md text-on-surface-variant hover:text-primary transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-body-md text-on-surface-variant hover:text-primary transition-colors">
              Accessibility
            </a>
            <a href="#" className="text-body-md text-on-surface-variant hover:text-primary transition-colors">
              MEC Compliance
            </a>
          </nav>
        </div>
      </div>

      <div className="max-w-container-max mx-auto mt-stack-lg pt-stack-md border-t border-outline-variant/30 flex flex-col md:flex-row justify-between items-center gap-4">
        <span className="font-label-caps text-label-caps text-on-surface-variant/70 uppercase">
          © {new Date().getFullYear()} Nexus Genius EdTech. Empowering Education Through Technology.
        </span>
        <div className="font-headline-md text-primary/30 select-none">Nexus Genius</div>
      </div>
    </footer>
  )
}
