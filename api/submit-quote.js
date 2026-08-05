export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { firstName, lastName, email, phone, institutionType, notes } = req.body

  if (!firstName || !lastName || !email) {
    return res.status(400).json({ error: 'Campos obrigatórios faltando' })
  }

  const message = `
📩 Nova solicitação de orçamento

👤 Nome: ${firstName} ${lastName}
📧 E-mail: ${email}
📱 Telefone: ${phone || 'Não informado'}
🏫 Instituição: ${institutionType}
📝 Notas: ${notes || 'Nenhuma'}
  `.trim()

  const response = await fetch(
    `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: process.env.TELEGRAM_CHAT_ID,
        text: message,
      }),
    }
  )

  if (!response.ok) {
    return res.status(500).json({ error: 'Falha ao enviar mensagem' })
  }

  return res.status(200).json({ success: true })
}
