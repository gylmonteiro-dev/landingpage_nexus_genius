import services from '../data/services'
import useScrollReveal from '../hooks/useScrollReveal'

function ServiceRow({ title, description, image, alt, imageSide }) {
  const textBlock = (
    <div
      className={`text-left md:pl-16 flex flex-col items-start ${
        imageSide === 'right' ? 'order-2 md:order-1 text-right pr-0 md:pr-16 items-end' : 'order-2'
      }`}
    >
      <h3 className="font-headline-md text-headline-md text-primary mb-4">{title}</h3>
      <p className="font-body-md text-body-md text-on-surface-variant max-w-md">{description}</p>
      <a
        href="#quote"
        className="mt-6 border-b border-insight-orange text-insight-orange font-label-caps text-label-caps uppercase pb-1 hover:text-primary hover:border-primary transition-all"
      >
        Solicitar Proposta
      </a>
    </div>
  )

  const imageBlock = (
    <div
      className={`flex relative ${
        imageSide === 'right'
          ? 'order-1 md:order-2 justify-start md:pl-16'
          : 'order-1 justify-end md:pr-16'
      }`}
    >
      <div
        className={`absolute top-1/2 -translate-y-1/2 w-8 h-8 bg-surface border-4 border-outline-variant rounded-full z-10 hidden md:block ${
          imageSide === 'right' ? 'left-[-20px] md:left-[-4px]' : 'right-[-4px]'
        }`}
      />
      <img
        className="w-full h-80 object-cover grayscale hover:grayscale-0 transition-all duration-500 rounded shadow-sm"
        alt={alt}
        src={image}
      />
    </div>
  )

  return (
    <div className="reveal relative grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      {imageSide === 'right' ? (
        <>
          {textBlock}
          {imageBlock}
        </>
      ) : (
        <>
          {imageBlock}
          {textBlock}
        </>
      )}
    </div>
  )
}

export default function ServicesTimeline() {
  const timelineRef = useScrollReveal()

  return (
    <section
      id="services"
      className="py-section-v-padding px-margin-mobile md:px-margin-desktop bg-surface"
    >
      <div className="max-w-container-max mx-auto">
        <div className="text-center mb-section-v-padding">
          <span className="font-label-caps text-label-caps text-insight-orange uppercase tracking-[0.2em] mb-4 block">
            Nossa Expertise
          </span>
          <h2 className="font-headline-lg text-headline-lg text-primary">
            Soluções Digitais para Educação
          </h2>
        </div>

        <div ref={timelineRef} className="relative timeline-line space-y-32">
          {services.map((service) => (
            <ServiceRow key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  )
}
