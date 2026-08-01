export default function Testimonial() {
  return (
    <section id="testimonials" className="py-section-v-padding px-margin-mobile bg-surface">
      <div className="max-w-container-max mx-auto text-center">
        <span className="font-label-caps text-label-caps text-insight-orange uppercase tracking-[0.2em] mb-stack-md block">
          O Que Nossos Clientes Dizem
        </span>
        <div className="text-insight-orange text-6xl font-headline-lg mb-4">&ldquo;</div>
        <blockquote className="max-w-4xl mx-auto">
          <p className="font-headline-md text-headline-md italic leading-tight text-primary mb-stack-md">
            Não consigo expressar o quanto a Nexus Genius transformou nossa secretaria. O suporte é
            impecável e as soluções tecnológicas elevaram o nível do nosso ensino para um patamar
            de excelência que nunca havíamos alcançado.
          </p>
          <cite className="font-label-caps text-label-caps uppercase tracking-widest text-on-surface-variant not-italic">
            — Dr. Roberto Santos, Diretor Institucional
          </cite>
        </blockquote>
      </div>
    </section>
  )
}
