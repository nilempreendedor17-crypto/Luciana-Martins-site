import React from "react";
import { motion } from "framer-motion";
import { Heart, MessageCircle, ShieldCheck, Sparkles, CalendarCheck, Award, CheckCircle, Instagram, Mail, Phone, MapPin } from "lucide-react";

const whatsappNumber = "55639985134894";
const whatsappMessage = encodeURIComponent("Olá, Luciana! Vim pelo site e gostaria de saber mais sobre o atendimento terapêutico.");
const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
const serviceMode = "Atendimento online";
const officeAddress = "Rua 3, Setor Monte Sinai, CEP 77814-816, Araguaína - TO";

const specialties = [
  "Autoestima feminina",
  "Ansiedade e sobrecarga emocional",
  "Dependência emocional",
  "Relacionamentos",
  "Autoconhecimento",
  "Amor-próprio",
  "Inteligência emocional",
  "Recomeços e fortalecimento pessoal",
];

const benefits = [
  "Acolhimento respeitoso e escuta humanizada",
  "Processo voltado para mulheres que desejam se reconectar consigo mesmas",
  "Atendimento com foco em equilíbrio emocional, clareza e fortalecimento interior",
  "Ambiente seguro para falar sobre sentimentos, dores e desafios da vida feminina",
];

const faqs = [
  {
    question: "Para quem é indicado o atendimento?",
    answer:
      "Para mulheres que desejam cuidar da saúde emocional, melhorar a autoestima, lidar com ansiedade, relacionamentos, inseguranças, ciclos difíceis e processos de autoconhecimento.",
  },
  {
    question: "O atendimento pode ser online?",
    answer:
      "Sim. O atendimento informado para este site é online, oferecendo praticidade, acolhimento e flexibilidade para mulheres que desejam iniciar seu processo terapêutico.",
  },
  {
    question: "Como faço para agendar?",
    answer:
      "Basta clicar no botão de WhatsApp e enviar uma mensagem para iniciar o contato e verificar horários disponíveis.",
  },
];

export default function App() {
  return (
    <div className="min-h-screen bg-[#fbf7f2] text-[#3b2f2f]">
      <header className="sticky top-0 z-50 border-b border-[#eadfd3] bg-[#fbf7f2]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <div>
            <p className="text-xl font-semibold tracking-wide text-[#7a4e4e]">Luciana Martins</p>
            <p className="text-xs uppercase tracking-[0.25em] text-[#9b7a6f]">Terapeuta Feminina</p>
          </div>
          <nav className="hidden items-center gap-8 text-sm font-medium text-[#6f5a55] md:flex">
            <a href="#sobre" className="hover:text-[#9d665d]">Sobre</a>
            <a href="#especialidades" className="hover:text-[#9d665d]">Especialidades</a>
            <a href="#formacoes" className="hover:text-[#9d665d]">Formações</a>
            <a href="#contato" className="hover:text-[#9d665d]">Contato</a>
          </nav>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="rounded-full bg-[#8f5f57] px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-[#744a44]">
            Agendar conversa
          </a>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden px-5 py-20 md:py-28">
          <div className="absolute left-[-120px] top-[-120px] h-80 w-80 rounded-full bg-[#e8cfc2]/60 blur-3xl" />
          <div className="absolute bottom-[-160px] right-[-140px] h-96 w-96 rounded-full bg-[#d9b8a8]/50 blur-3xl" />
          <div className="relative mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#e5d5c8] bg-white/70 px-4 py-2 text-sm text-[#8b655d] shadow-sm">
                <Heart size={16} /> Acolhimento emocional para mulheres
              </div>
              <h1 className="max-w-2xl text-4xl font-bold leading-tight text-[#3b2f2f] md:text-6xl">
                Terapia para mulheres que desejam se reconectar com sua força interior.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-[#6f5a55]">
                Um espaço seguro, acolhedor e humanizado para cuidar da autoestima, ansiedade, relacionamentos, dependência emocional e do seu processo de transformação pessoal.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#8f5f57] px-7 py-4 font-semibold text-white shadow-xl transition hover:bg-[#744a44]">
                  <MessageCircle size={20} /> Falar pelo WhatsApp
                </a>
                <a href="#especialidades" className="inline-flex items-center justify-center rounded-full border border-[#cdb7a9] bg-white/70 px-7 py-4 font-semibold text-[#7a4e4e] transition hover:bg-white">
                  Conhecer atendimentos
                </a>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.15 }} className="relative">
              <div className="rounded-[2rem] border border-[#eadfd3] bg-white p-5 shadow-2xl">
                <div className="flex min-h-[430px] items-center justify-center rounded-[1.5rem] bg-gradient-to-br from-[#ead6c9] via-[#f6eee8] to-[#d4aa98] p-8 text-center">
                  <div>
                    <Sparkles className="mx-auto mb-5 text-[#8f5f57]" size={46} />
                    <p className="text-3xl font-semibold text-[#5e3f3a]">Luciana Martins</p>
                    <p className="mt-3 text-lg text-[#7b5e58]">Especialista em cuidado emocional feminino</p>
                    <div className="mx-auto mt-6 max-w-sm rounded-2xl border border-dashed border-[#b98d7d] bg-white/40 p-5 text-sm leading-7 text-[#755d57]">
                      Espaço reservado para foto profissional da terapeuta. Depois, você poderá substituir por uma imagem real da Luciana Martins.
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="sobre" className="px-5 py-20">
          <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-[2rem] bg-[#8f5f57] p-8 text-white shadow-xl">
              <ShieldCheck className="mb-6" size={42} />
              <h2 className="text-3xl font-bold">Um espaço seguro para você se ouvir.</h2>
              <p className="mt-5 leading-8 text-[#f7e9e2]">
                A terapia é um convite para olhar para dentro, compreender emoções e construir uma relação mais leve consigo mesma.
              </p>
            </div>
            <div className="rounded-[2rem] border border-[#eadfd3] bg-white p-8 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#9b7a6f]">Sobre</p>
              <h2 className="mt-3 text-3xl font-bold text-[#3b2f2f]">Luciana Martins</h2>
              <p className="mt-5 leading-8 text-[#6f5a55]">
                Luciana Martins atua com atendimento terapêutico voltado ao público feminino, oferecendo acolhimento, escuta e orientação para mulheres que desejam fortalecer sua autoestima, lidar melhor com emoções, superar ciclos difíceis e viver com mais equilíbrio.
              </p>
              <p className="mt-4 leading-8 text-[#6f5a55]">
                Seu trabalho é pensado para mulheres que buscam autoconhecimento, clareza emocional e um caminho mais saudável para suas relações, escolhas e recomeços.
              </p>
              <div className="mt-6 grid gap-3 rounded-3xl bg-[#fbf7f2] p-5 text-[#6f5a55]">
                <p><strong className="text-[#4a3836]">Modalidade:</strong> {serviceMode}</p>
                <p><strong className="text-[#4a3836]">Endereço de referência:</strong> {officeAddress}</p>
              </div>
            </div>
          </div>
        </section>

        <section id="especialidades" className="bg-white px-5 py-20">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#9b7a6f]">Especialidades</p>
              <h2 className="mt-3 text-4xl font-bold text-[#3b2f2f]">Áreas de cuidado emocional feminino</h2>
              <p className="mt-5 leading-8 text-[#6f5a55]">
                O atendimento é direcionado para mulheres que desejam compreender seus sentimentos, fortalecer sua identidade e desenvolver uma vida emocional mais equilibrada.
              </p>
            </div>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {specialties.map((item) => (
                <div key={item} className="rounded-3xl border border-[#eadfd3] bg-[#fbf7f2] p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                  <CheckCircle className="mb-4 text-[#8f5f57]" size={26} />
                  <p className="font-semibold text-[#4a3836]">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 py-20">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-6 md:grid-cols-4">
              {benefits.map((item) => (
                <div key={item} className="rounded-[1.5rem] bg-white p-6 shadow-sm">
                  <Heart className="mb-4 text-[#8f5f57]" size={24} />
                  <p className="leading-7 text-[#6f5a55]">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="formacoes" className="bg-[#f3e7de] px-5 py-20">
          <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#9b7a6f]">Autoridade</p>
              <h2 className="mt-3 text-4xl font-bold text-[#3b2f2f]">Formações e Certificações</h2>
              <p className="mt-5 leading-8 text-[#6f5a55]">
                Esta seção foi preparada para inserir diplomas, cursos, certificados, especializações e registros profissionais. Depois, basta substituir os campos pelas informações reais.
              </p>
            </div>
            <div className="grid gap-4">
              {["Formação principal", "Especialização em terapia feminina", "Curso de inteligência emocional", "Certificações complementares"].map((item) => (
                <div key={item} className="flex items-center gap-4 rounded-3xl bg-white p-5 shadow-sm">
                  <Award className="text-[#8f5f57]" size={28} />
                  <div>
                    <p className="font-semibold text-[#4a3836]">{item}</p>
                    <p className="text-sm text-[#7b6a65]">Adicionar instituição, carga horária e ano.</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white px-5 py-20">
          <div className="mx-auto max-w-5xl text-center">
            <CalendarCheck className="mx-auto mb-5 text-[#8f5f57]" size={44} />
            <h2 className="text-4xl font-bold text-[#3b2f2f]">Como funciona o atendimento?</h2>
            <p className="mx-auto mt-5 max-w-3xl leading-8 text-[#6f5a55]">
              O primeiro contato acontece pelo WhatsApp. Nesse momento, é possível tirar dúvidas, entender a necessidade da paciente e verificar disponibilidade de horários para iniciar o processo terapêutico online.
            </p>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-[#8f5f57] px-8 py-4 font-semibold text-white shadow-xl transition hover:bg-[#744a44]">
              <MessageCircle size={20} /> Quero agendar meu atendimento
            </a>
          </div>
        </section>

        <section className="px-5 py-20">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-center text-4xl font-bold text-[#3b2f2f]">Perguntas frequentes</h2>
            <div className="mx-auto mt-10 grid max-w-4xl gap-5">
              {faqs.map((faq) => (
                <div key={faq.question} className="rounded-3xl border border-[#eadfd3] bg-white p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-[#4a3836]">{faq.question}</h3>
                  <p className="mt-3 leading-7 text-[#6f5a55]">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contato" className="px-5 pb-20">
          <div className="mx-auto max-w-7xl rounded-[2rem] bg-[#3b2f2f] p-8 text-white shadow-2xl md:p-12">
            <div className="grid gap-10 md:grid-cols-2">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#d8b5a7]">Contato</p>
                <h2 className="mt-3 text-4xl font-bold">Dê o primeiro passo para cuidar de você.</h2>
                <p className="mt-5 leading-8 text-[#f1dfd5]">
                  Entre em contato pelo WhatsApp e converse com Luciana Martins para saber mais sobre o atendimento terapêutico.
                </p>
              </div>
              <div className="space-y-4">
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 rounded-3xl bg-white/10 p-5 transition hover:bg-white/15">
                  <Phone className="text-[#d8b5a7]" /> <span>WhatsApp: (63) 99851-34894</span>
                </a>
                <div className="flex items-center gap-4 rounded-3xl bg-white/10 p-5">
                  <Instagram className="text-[#d8b5a7]" /> <span>Instagram: adicionar posteriormente</span>
                </div>
                <div className="flex items-center gap-4 rounded-3xl bg-white/10 p-5">
                  <Mail className="text-[#d8b5a7]" /> <span>E-mail: adicionar posteriormente</span>
                </div>
                <div className="flex gap-4 rounded-3xl bg-white/10 p-5 text-[#f1dfd5]">
                  <MapPin className="mt-1 shrink-0 text-[#d8b5a7]" />
                  <div>
                    <p className="font-semibold text-white">Endereço de referência</p>
                    <p className="mt-2">{officeAddress}</p>
                    <p className="mt-2 text-sm text-[#d8b5a7]">Atendimento informado: online</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#eadfd3] px-5 py-8 text-center text-sm text-[#7b6a65]">
        <p>© {new Date().getFullYear()} Luciana Martins Terapeuta. Todos os direitos reservados.</p>
        <p className="mt-2">lucianamartinsterapeuta.com.br</p>
      </footer>
    </div>
  );
}
