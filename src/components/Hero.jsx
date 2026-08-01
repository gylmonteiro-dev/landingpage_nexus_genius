export default function Hero() {
  return (
    <section className="relative min-h-[80vh] flex flex-col items-center justify-center text-center px-margin-mobile md:px-margin-desktop bg-surface-bright overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-outline-variant/30 to-transparent" />
        <img
          className="w-full h-full object-cover"
          alt="Interior minimalista e sofisticado de uma biblioteca universitária moderna, com luz suave e texturas claras de madeira."
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBYszrjmvXqtURJb8DjqrIcCzKBQfVgMofIlBAWXwm8GcHsXuh1OdwuXOL5P0Zsw_NH-lmxm0G6R7_kjZHJKadH_nRoeHS2IKrzyUEzQE3u5JtuhWBW_epf-yAzkgxVo0vreNA3O3X3zXgY83bf5h5f82y7JtDeG-tvECBWiIW-mhppnvUcV61prLXHVeYbNQqNAW34BYkkmDzeEpS9Wu2NA1SxkmcBCA3Zx6N9epm0R1iQHk3tKvD5Ag"
        />
      </div>

      <div className="relative z-10 max-w-3xl flex flex-col gap-stack-md">
        <h1 className="font-display-lg text-display-lg text-primary">
          Tecnologia Educacional Acessível para o Futuro do Ensino
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
          Capacitando instituições, secretarias e escolas com soluções tecnológicas sob medida e
          alinhadas às exigências do MEC.
        </p>
        <div className="mt-stack-md">
          <a
            href="#services"
            className="inline-block border border-primary text-primary px-10 py-4 font-button text-button uppercase tracking-widest hover:bg-primary hover:text-on-primary transition-all duration-300"
          >
            Saiba Mais
          </a>
        </div>
      </div>
    </section>
  )
}
