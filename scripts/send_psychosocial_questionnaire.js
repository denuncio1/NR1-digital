// Exemplo de script Node.js para enviar o link do questionário psicossocial por e-mail
// Requer: npm install @supabase/supabase-js nodemailer

const { createClient } = require('@supabase/supabase-js');
const nodemailer = require('nodemailer');

const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_KEY;
const EMAIL_API_KEY = process.env.EMAIL_API_KEY; // Exemplo: senha do Gmail App ou API Key do serviço de e-mail
const QUESTIONNAIRE_LINK = 'https://seusite.com/psicossocial'; // Altere para o link real do seu questionário

if (!SUPABASE_URL || !SUPABASE_KEY || !EMAIL_API_KEY) {
  console.error('Configure SUPABASE_URL, SUPABASE_KEY e EMAIL_API_KEY nas variáveis de ambiente!');
  process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

async function main() {
  // Exemplo: buscar todos os e-mails dos funcionários
  const { data: users, error } = await supabase.from('users').select('email, nome, setor');
  if (error) {
    console.error('Erro ao buscar usuários:', error);
    process.exit(1);
  }

  // Configuração do transporte de e-mail (exemplo com Gmail, pode usar outro serviço)
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'seu-email@gmail.com', // Altere para o e-mail remetente
      pass: EMAIL_API_KEY,
    },
  });

  for (const user of users) {
    if (!user.email) continue;
    const mailOptions = {
      from: 'seu-email@gmail.com', // Altere para o e-mail remetente
      to: user.email,
      subject: 'Questionário Psicossocial Anual',
      text: `Olá ${user.nome || ''},\n\nPor favor, responda ao questionário psicossocial anual: ${QUESTIONNAIRE_LINK}\n\nObrigado!`,
    };
    try {
      await transporter.sendMail(mailOptions);
      console.log(`E-mail enviado para ${user.email}`);
    } catch (err) {
      console.error(`Erro ao enviar para ${user.email}:`, err);
    }
  }
}

main();
