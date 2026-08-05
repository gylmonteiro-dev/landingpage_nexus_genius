import { useState } from 'react'

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  institutionType: 'Escola Privada',
  notes: '',
}

const inputClasses =
  'border-0 border-b border-outline-variant focus:ring-0 focus:border-insight-orange py-2 px-0 bg-transparent transition-all'

export default function QuoteForm() {
  const [form, setForm] = useState(initialState)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      const response = await fetch('/api/submit-quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      if (!response.ok) throw new Error('Falha ao enviar')

      setSubmitted(true)
    } catch {
      setError('Não foi possível enviar. Tente novamente.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="quote" className="py-section-v-padding bg-surface-bright px-margin-mobile">
      <div className="max-w-3xl mx-auto border border-outline-variant p-margin-mobile md:p-16 bg-surface-container-lowest shadow-sm">
        <h2 className="font-headline-lg text-headline-lg text-center mb-stack-lg text-primary">
          Solicitar Orçamento
        </h2>

        {submitted ? (
          <p className="text-center font-body-lg text-body-lg text-on-surface-variant">
            Obrigado! Recebemos sua solicitação e entraremos em contato em breve.
          </p>
        ) : (
          <form className="space-y-stack-md" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-stack-md">
              <div className="flex flex-col gap-2">
                <label className="font-label-caps text-label-caps uppercase">Primeiro Nome *</label>
                <input
                  className={inputClasses}
                  required
                  type="text"
                  name="firstName"
                  value={form.firstName}
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-label-caps text-label-caps uppercase">Último Nome *</label>
                <input
                  className={inputClasses}
                  required
                  type="text"
                  name="lastName"
                  value={form.lastName}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-stack-md">
              <div className="flex flex-col gap-2">
                <label className="font-label-caps text-label-caps uppercase">
                  E-mail Corporativo *
                </label>
                <input
                  className={inputClasses}
                  required
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-label-caps text-label-caps uppercase">Telefone</label>
                <input
                  className={inputClasses}
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-label-caps text-label-caps uppercase">Tipo de Instituição</label>
              <select
                className={`${inputClasses} appearance-none cursor-pointer`}
                name="institutionType"
                value={form.institutionType}
                onChange={handleChange}
              >
                <option>Escola Privada</option>
                <option>Secretaria de Educação</option>
                <option>Ensino Superior</option>
                <option>Outros</option>
              </select>
            </div>

            <div className="flex flex-col gap-2 pt-4">
              <label className="font-label-caps text-label-caps uppercase">Notas Adicionais</label>
              <textarea
                className={`${inputClasses} resize-none`}
                rows="3"
                name="notes"
                value={form.notes}
                onChange={handleChange}
              />
            </div>

            {error && (
              <p className="text-center text-red-600 font-body-md">{error}</p>
            )}

            <div className="text-center pt-stack-lg">
              <button
                type="submit"
                disabled={loading}
                className="bg-primary text-on-primary px-16 py-4 font-button text-button uppercase tracking-[0.2em] hover:bg-insight-orange transition-colors duration-300 disabled:opacity-60"
              >
                {loading ? 'Enviando...' : 'Enviar Solicitação'}
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  )
}
