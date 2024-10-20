 // Objeto que armazena os textos em diferentes idiomas
 const texts = {
    'pt': {
        'Entrar': 'Entrar',
        'title': 'Filmes, séries e muito mais, sem limites',
        'sub': 'Assista onde quiser. Cancele quando quiser.',
        'quest': 'Quer assistir? Informe seu email para criar ou reiniciar sua assinatura.',
        'button': 'Vamos lá',
        'tv': 'Aproveite na TV',
        'tv2': 'Assista em Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, aparelhos de Blu-ray e outros dispositivos.',
        'where': 'Assista onde quiser',
        'where1': 'Assista a quantos filmes e séries quiser no celular, tablet, laptop e TV.',
        'profile': 'Crie perfis para crianças',
        'profile1': 'Deixe as crianças se aventurarem com seus personagens favoritos em um espaço feito só para elas, sem pagar a mais por isso.',
        'download': 'Baixe séries para assistir offline',
        'download1': 'Assista em um avião, trem ou submarino...'
    },
    'en': {
        'Entrar': 'Sign in',
        'title': 'Unlimited movies, TV shows, and more',
        'sub': 'Watch anywhere. Cancel anytime.',
        'quest': 'Ready to watch? Enter your email to create or restart your membership.',
        'button': 'Get Started',
        'tv': 'Enjoy on your TV',
        'tv2': 'Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.',
        'where': 'Watch everywhere',
        'where1': 'Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.',
        'profile': 'Create profiles for kids',
        'profile1': 'Send kids on adventures with their favorite characters in a space made just for them—free with your membership.',
        'download': 'Download your shows to watch offline',
        'download1': 'Watch on a plane, train, or submarine...'
    }
  };

  function changeLanguage(lang) {
    // Para cada chave no objeto texts[lang], atualiza o conteúdo correspondente no HTML
    for (let key in texts[lang]) {
        let element = document.getElementById(key);
        if (element) {
            if (element.tagName === 'INPUT' && element.type === 'button') {
                element.value = texts[lang][key];
            } else {
                element.innerHTML = texts[lang][key];
            }
        }
    }
  }

  // Adiciona eventos de clique para trocar o idioma ao selecionar no dropdown
  document.querySelector('select').addEventListener('change', function() {
    changeLanguage(this.value === 'English' ? 'en' : 'pt');
  });

  // Define o idioma padrão como português ao carregar a página
  changeLanguage('pt');