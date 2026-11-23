/*
  CONFIGURAÇÃO CENTRAL DO SITE
  -----------------------------------------------------------------------------
  Troque aqui nome, textos, imagens, vídeos, clientes, depoimentos e contatos.
  A estrutura visual é renderizada automaticamente pelos módulos em /modules.
*/

export const siteConfig = {
  // TODO [WHITE LABEL]: troque domínio, idioma e dados básicos do projeto.
  site: {
    language: 'pt-BR',
    url: 'https://seudominio.com.br',
    year: '2026',
  },

  // TODO [WHITE LABEL]: troque nome, slogan, logo e dados comerciais.
  brand: {
    name: 'Nome do Palestrante',
    shortName: 'Palestrante',
    businessName: 'Sua Empresa Palestras e Eventos',
    slogan: 'Palestras que prendem atenção, geram reflexão e transformam eventos.',
    logoUrl: 'https://placehold.co/320x96/111111/ffffff?text=SUA+LOGO',
    logoAlt: 'Logo do palestrante ou empresa',
    faviconUrl: 'https://placehold.co/192x192/111111/ffffff?text=WL',
  },

  // TODO [WHITE LABEL]: configure SEO real antes de publicar.
  seo: {
    title: 'Nome do Palestrante | Palestras Corporativas de Alto Impacto',
    description:
      'Palestras corporativas com conteúdo, emoção e interação para eventos empresariais, convenções, SIPATs, educação, vendas e liderança.',
    keywords: [
      'palestrante motivacional',
      'palestra corporativa',
      'palestra para empresas',
      'palestra vendas',
      'palestra liderança',
      'evento corporativo',
    ],
    image: 'https://placehold.co/1200x630/111111/ffffff?text=Palestra+Corporativa',
  },

  // TODO [WHITE LABEL]: ajuste cores para cada cliente.
  theme: {
    colorBackground: '#0d0d0f',
    colorSurface: '#17171b',
    colorSurfaceSoft: '#222229',
    colorText: '#f7f2eb',
    colorMuted: '#bbb3aa',
    colorPrimary: '#f26b21',
    colorPrimaryDark: '#c94f11',
    colorBorder: 'rgba(255,255,255,.14)',
  },

  navigation: [
    { label: 'Início', href: '#inicio' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Depoimentos', href: '#depoimentos' },
    { label: 'Palestras', href: '#palestras' },
    { label: 'Clientes', href: '#clientes' },
    { label: 'Contato', href: '#contato' },
  ],

  // TODO [WHITE LABEL]: substitua por links reais de imagem e vídeo do cliente.
  hero: {
    eyebrow: 'Palestras corporativas, eventos e convenções',
    title: 'Uma palestra para motivar. Um conteúdo para transformar.',
    highlight: 'Experiência ao vivo com impacto real.',
    description:
      'Em um cenário cheio de distrações, o desafio é manter a atenção do público. Esta apresentação une conteúdo, emoção, humor e interação para tornar seu evento memorável.',
    primaryCta: { label: 'Solicitar orçamento rápido', href: '#contato' },
    secondaryCta: { label: 'Conhecer temas', href: '#palestras' },
    imageUrl:
      'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Palestrante em evento corporativo com público atento',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    videoTitle: 'Vídeo de apresentação do palestrante',
  },

  stats: [
    { value: '+1.000', label: 'eventos realizados' },
    { value: '+10 anos', label: 'de experiência' },
    { value: '100%', label: 'conteúdo personalizável' },
  ],

  about: {
    eyebrow: 'O palestrante',
    title: 'Comunicação de alto impacto para empresas que querem marcar pessoas.',
    description: [
      'Use esta seção para apresentar a autoridade do palestrante, sua formação, experiência, prêmios e diferenciais. O texto deve ser direto, humano e orientado ao resultado do evento.',
      'O objetivo é mostrar por que a apresentação prende a atenção, conecta com a plateia e entrega uma mensagem aplicável ao dia a dia da empresa.',
    ],
    cards: [
      {
        title: 'Conteúdo aplicável',
        text: 'Palestra criada para conectar conceitos com situações reais do público.',
      },
      {
        title: 'Experiência envolvente',
        text: 'Dinâmica, interação, narrativa e recursos visuais para manter atenção.',
      },
      {
        title: 'Personalização',
        text: 'Tema, linguagem e exemplos podem ser ajustados ao contexto do evento.',
      },
    ],
    imageUrl:
      'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1100&q=80',
    imageAlt: 'Apresentação corporativa com palestrante no palco',
  },

  gallery: {
    eyebrow: 'Fotos e bastidores',
    title: 'Imagens que contam histórias.',
    description: 'Troque os links abaixo por fotos reais de eventos, palcos, público, bastidores e momentos de interação.',
    items: [
      {
        src: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=900&q=80',
        alt: 'Auditório cheio durante evento corporativo',
      },
      {
        src: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=900&q=80',
        alt: 'Palestrante no palco com telão ao fundo',
      },
      {
        src: 'https://images.unsplash.com/photo-1515169067865-5387ec356754?auto=format&fit=crop&w=900&q=80',
        alt: 'Público participando de palestra',
      },
      {
        src: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=900&q=80',
        alt: 'Equipe reunida em ambiente corporativo',
      },
    ],
  },

  testimonials: {
    eyebrow: 'Depoimentos',
    title: 'O que dizem depois da palestra.',
    items: [
      {
        quote: 'A apresentação superou as expectativas e conectou muito bem com a realidade da nossa equipe.',
        author: 'Nome do cliente',
        role: 'RH / Empresa',
      },
      {
        quote: 'Conteúdo claro, linguagem leve e uma condução que manteve todos atentos do início ao fim.',
        author: 'Nome do cliente',
        role: 'Gestor comercial',
      },
      {
        quote: 'Foi uma das melhores escolhas para o nosso evento. A equipe saiu comentando e aplicando as ideias.',
        author: 'Nome do cliente',
        role: 'Coordenação de eventos',
      },
    ],
  },

  topics: {
    eyebrow: 'Palestras',
    title: 'Temas que podem ser adaptados ao seu evento.',
    description:
      'Use esta seção para listar os principais temas comerciais. Cada item pode abrir uma descrição curta e objetiva.',
    items: [
      { title: 'Vendas', text: 'Atitude comercial, relacionamento, valor percebido e fechamento.' },
      { title: 'Liderança', text: 'Comunicação, tomada de decisão, cultura e influência positiva.' },
      { title: 'Motivação', text: 'Engajamento, propósito, resiliência e comportamento de alta performance.' },
      { title: 'SIPAT', text: 'Segurança, atenção, prevenção e responsabilidade coletiva.' },
      { title: 'Educação', text: 'Aprendizagem, criatividade, protagonismo e inovação em sala de aula.' },
      { title: 'Inovação', text: 'Mudança, tecnologia, mentalidade criativa e adaptação.' },
      { title: 'Soft skills', text: 'Comunicação, colaboração, empatia e inteligência emocional.' },
      { title: 'Tema customizado', text: 'Conteúdo criado sob medida para a campanha ou convenção.' },
    ],
  },

  method: {
    eyebrow: 'Metodologia',
    title: 'A emoção prende a atenção. O conteúdo entrega a transformação.',
    description:
      'Explique aqui o método do palestrante. Exemplo: narrativa, humor, recursos visuais, interação com a plateia, cases e fechamento prático.',
    steps: [
      { title: 'Atenção', text: 'Abertura forte para tirar o público do automático.' },
      { title: 'Conexão', text: 'Histórias e exemplos que aproximam a mensagem da vida real.' },
      { title: 'Aplicação', text: 'Ideias simples para transformar reflexão em comportamento.' },
    ],
    cta: { label: 'Quero uma proposta exclusiva', href: '#contato' },
  },

  socialProof: {
    eyebrow: 'Prova social',
    title: 'Eventos, empresas e públicos atendidos.',
    peopleIntro: 'Palestras e eventos ao lado de grandes nomes, lideranças e especialistas.',
    people: ['Nome referência 1', 'Nome referência 2', 'Nome referência 3', 'Nome referência 4'],
    clientsIntro: 'Alguns clientes e marcas atendidas.',
    clients: [
      {
        name: 'Cliente 1',
        logoUrl: 'https://placehold.co/220x100/ffffff/111111?text=CLIENTE+1',
      },
      {
        name: 'Cliente 2',
        logoUrl: 'https://placehold.co/220x100/ffffff/111111?text=CLIENTE+2',
      },
      {
        name: 'Cliente 3',
        logoUrl: 'https://placehold.co/220x100/ffffff/111111?text=CLIENTE+3',
      },
      {
        name: 'Cliente 4',
        logoUrl: 'https://placehold.co/220x100/ffffff/111111?text=CLIENTE+4',
      },
      {
        name: 'Cliente 5',
        logoUrl: 'https://placehold.co/220x100/ffffff/111111?text=CLIENTE+5',
      },
      {
        name: 'Cliente 6',
        logoUrl: 'https://placehold.co/220x100/ffffff/111111?text=CLIENTE+6',
      },
    ],
  },

  // TODO [WHITE LABEL]: configure contato real. WhatsApp deve ter DDI + DDD + número, apenas dígitos.
  contact: {
    eyebrow: 'Contato',
    title: 'Seu evento merece uma apresentação inesquecível.',
    description: 'Solicite um orçamento rápido. Retornaremos com disponibilidade, formato e proposta comercial.',
    email: 'contato@seudominio.com.br',
    phoneDisplay: '+55 (11) 99999-9999',
    whatsappNumber: '5511999999999',
    whatsappDefaultMessage: 'Olá! Quero solicitar uma proposta de palestra para meu evento.',
    fields: [
      { name: 'name', label: 'Nome', type: 'text', required: true, placeholder: 'Seu nome' },
      { name: 'company', label: 'Empresa', type: 'text', required: false, placeholder: 'Nome da empresa' },
      { name: 'email', label: 'E-mail', type: 'email', required: true, placeholder: 'seu@email.com' },
      { name: 'phone', label: 'Telefone/WhatsApp', type: 'tel', required: true, placeholder: '(00) 00000-0000' },
      { name: 'eventDate', label: 'Data do evento', type: 'date', required: false, placeholder: '' },
      { name: 'message', label: 'Mensagem', type: 'textarea', required: false, placeholder: 'Conte rapidamente o tipo de evento, cidade, público e tema desejado.' },
    ],
  },
};
