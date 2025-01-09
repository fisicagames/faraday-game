# Faraday Game

## Descrição

**Faraday Game** é um jogo interativo inspirado na Lei de Faraday, que permite aos jogadores explorar o fenômeno da indução eletromagnética. O objetivo é movimentar um ímã para alterar o fluxo magnético em uma bobina, induzindo corrente elétrica e iluminando uma lâmpada. Teste suas habilidades para maximizar a intensidade da luz e aprenda sobre um dos princípios fundamentais do eletromagnetismo de forma lúdica e acessível!

---

## Funcionalidades

* **Interação Simples:** Controle o jogo com um único botão ou toques na tela, garantindo acessibilidade e diversão.
* **Dois Modos de Jogo:**
  * **Movimento Angular:** O ímã gira em frente à bobina.
  * **Movimento Linear:** O ímã faz um movimento vertical de vai e vem, passando por dentro da bobina.
* **Sistema de Pontuação:** A tensão gerada na bobina é convertida em pontuação:
  * 🥉 **Bronze:** 24 V ou mais.
  * 🥈 **Prata:** 60 V ou mais.
  * 🥇 **Ouro:** 110 V ou mais.
* **Idiomas Disponíveis:** Português e Inglês.
* **Easter Egg:** Use múltiplos toques (no celular) ou teclas (no teclado) para descobrir o "modo hack" e gerar tensões muito mais altas!

---

## Aprendizado com o Jogo

O **Faraday Game** demonstra de forma prática a  **Lei de Faraday da Indução Eletromagnética** , que afirma que a variação do fluxo magnético em uma bobina gera uma força eletromotriz (fem), responsável pela corrente elétrica. Quanto mais rápido o movimento do ímã, maior a variação do fluxo magnético, resultando em uma maior tensão na bobina.

---

## Como Jogar

1. **Objetivo:** Movimente o ímã o mais rápido possível para maximizar a tensão gerada e acender a lâmpada com a maior intensidade.
2. **Controles:** Pressione o botão na tela (ou use toques múltiplos no celular ou teclas no teclado para explorar o "modo hack").
3. **Modos de Jogo:**
   * **Angular:** Gire o ímã em frente à bobina.
   * **Linear:** Faça o ímã passar verticalmente por dentro da bobina.
4. **Pontuação:** Gere tensões acima de 24V para alcançar medalhas e desafiar seus limites!

---

## Telas do Jogo

![1736427437192](image/README/1736427437192.png)

![1736427290232](image/README/1736427290232.png)

![1736427372093](image/README/1736427372093.png)

---

## Aviso de Efeitos Visuais

Este jogo contém efeitos visuais rápidos, incluindo luzes piscando e mudanças bruscas de iluminação, que podem não ser adequados para pessoas com epilepsia fotossensível ou outras condições relacionadas à luz. Escolha a configuração que melhor se adapta a você:

* **Efeitos Intensos:** Experiência completa com efeitos visuais rápidos e intensos.
* **Efeitos Suaves:** Experiência adaptada com efeitos visuais mais leves.

---

## Tecnologias Utilizadas

* **TypeScript:** Linguagem de programação principal.
* **Babylon.js:** Motor gráfico para renderização 3D.
* **Vite.js:** Ferramenta para build e desenvolvimento.
* **Arquitetura MVC:** Organização baseada em eventos com callbacks.
* **GitHub:** Controle de versão e colaboração.
* **VS Code:** Editor de código.

---

## Instalação

### Pré-requisitos

Certifique-se de ter as seguintes ferramentas instaladas no seu sistema:

* [Node.js](https://nodejs.org)
* [npm](https://www.npmjs.com/)

### Passo a Passo

1. Clone este repositório ou faça o download dos arquivos.
2. Instale as dependências:
   <pre class="!overflow-visible"><div class="contain-inline-size rounded-md border-[0.5px] border-token-border-medium relative bg-token-sidebar-surface-primary dark:bg-gray-950"><div class="flex items-center text-token-text-secondary px-4 py-2 text-xs font-sans justify-between rounded-t-md h-9 bg-token-sidebar-surface-primary dark:bg-token-main-surface-secondary select-none">bash</div><div class="sticky top-9 md:top-[5.75rem]"><div class="absolute bottom-0 right-2 flex h-9 items-center"><div class="flex items-center rounded bg-token-sidebar-surface-primary px-2 font-sans text-xs text-token-text-secondary dark:bg-token-main-surface-secondary"><span class="" data-state="closed"><button class="flex gap-1 items-center select-none py-1" aria-label="Copiar"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon-sm"><path fill-rule="evenodd" clip-rule="evenodd" d="M7 5C7 3.34315 8.34315 2 10 2H19C20.6569 2 22 3.34315 22 5V14C22 15.6569 20.6569 17 19 17H17V19C17 20.6569 15.6569 22 14 22H5C3.34315 22 2 20.6569 2 19V10C2 8.34315 3.34315 7 5 7H7V5ZM9 7H14C15.6569 7 17 8.34315 17 10V15H19C19.5523 15 20 14.5523 20 14V5C20 4.44772 19.5523 4 19 4H10C9.44772 4 9 4.44772 9 5V7ZM5 9C4.44772 9 4 9.44772 4 10V19C4 19.5523 4.44772 20 5 20H14C14.5523 20 15 19.5523 15 19V10C15 9.44772 14.5523 9 14 9H5Z" fill="currentColor"></path></svg>Copiar código</button></span></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="!whitespace-pre hljs language-bash">npm install
   </code></div></div></pre>
3. Para iniciar o servidor de desenvolvimento:
   <pre class="!overflow-visible"><div class="contain-inline-size rounded-md border-[0.5px] border-token-border-medium relative bg-token-sidebar-surface-primary dark:bg-gray-950"><div class="flex items-center text-token-text-secondary px-4 py-2 text-xs font-sans justify-between rounded-t-md h-9 bg-token-sidebar-surface-primary dark:bg-token-main-surface-secondary select-none">bash</div><div class="sticky top-9 md:top-[5.75rem]"><div class="absolute bottom-0 right-2 flex h-9 items-center"><div class="flex items-center rounded bg-token-sidebar-surface-primary px-2 font-sans text-xs text-token-text-secondary dark:bg-token-main-surface-secondary"><span class="" data-state="closed"><button class="flex gap-1 items-center select-none py-1" aria-label="Copiar"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon-sm"><path fill-rule="evenodd" clip-rule="evenodd" d="M7 5C7 3.34315 8.34315 2 10 2H19C20.6569 2 22 3.34315 22 5V14C22 15.6569 20.6569 17 19 17H17V19C17 20.6569 15.6569 22 14 22H5C3.34315 22 2 20.6569 2 19V10C2 8.34315 3.34315 7 5 7H7V5ZM9 7H14C15.6569 7 17 8.34315 17 10V15H19C19.5523 15 20 14.5523 20 14V5C20 4.44772 19.5523 4 19 4H10C9.44772 4 9 4.44772 9 5V7ZM5 9C4.44772 9 4 9.44772 4 10V19C4 19.5523 4.44772 20 5 20H14C14.5523 20 15 19.5523 15 19V10C15 9.44772 14.5523 9 14 9H5Z" fill="currentColor"></path></svg>Copiar código</button></span></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="!whitespace-pre hljs language-bash">npm run dev
   </code></div></div></pre>
4. Para gerar os arquivos de distribuição:
   <pre class="!overflow-visible"><div class="contain-inline-size rounded-md border-[0.5px] border-token-border-medium relative bg-token-sidebar-surface-primary dark:bg-gray-950"><div class="flex items-center text-token-text-secondary px-4 py-2 text-xs font-sans justify-between rounded-t-md h-9 bg-token-sidebar-surface-primary dark:bg-token-main-surface-secondary select-none">bash</div><div class="sticky top-9 md:top-[5.75rem]"><div class="absolute bottom-0 right-2 flex h-9 items-center"><div class="flex items-center rounded bg-token-sidebar-surface-primary px-2 font-sans text-xs text-token-text-secondary dark:bg-token-main-surface-secondary"><span class="" data-state="closed"><button class="flex gap-1 items-center select-none py-1" aria-label="Copiar"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon-sm"><path fill-rule="evenodd" clip-rule="evenodd" d="M7 5C7 3.34315 8.34315 2 10 2H19C20.6569 2 22 3.34315 22 5V14C22 15.6569 20.6569 17 19 17H17V19C17 20.6569 15.6569 22 14 22H5C3.34315 22 2 20.6569 2 19V10C2 8.34315 3.34315 7 5 7H7V5ZM9 7H14C15.6569 7 17 8.34315 17 10V15H19C19.5523 15 20 14.5523 20 14V5C20 4.44772 19.5523 4 19 4H10C9.44772 4 9 4.44772 9 5V7ZM5 9C4.44772 9 4 9.44772 4 10V19C4 19.5523 4.44772 20 5 20H14C14.5523 20 15 19.5523 15 19V10C15 9.44772 14.5523 9 14 9H5Z" fill="currentColor"></path></svg>Copiar código</button></span></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="!whitespace-pre hljs language-bash">npm run build
   </code></div></div></pre>


---

## Contribuindo

Atualmente, este projeto é privado. No futuro, ao tornar o repositório público, você poderá contribuir seguindo estas etapas:

1. Faça o fork do repositório.
2. Crie uma nova branch:
   <pre class="!overflow-visible"><div class="contain-inline-size rounded-md border-[0.5px] border-token-border-medium relative bg-token-sidebar-surface-primary dark:bg-gray-950"><div class="flex items-center text-token-text-secondary px-4 py-2 text-xs font-sans justify-between rounded-t-md h-9 bg-token-sidebar-surface-primary dark:bg-token-main-surface-secondary select-none">bash</div><div class="sticky top-9 md:top-[5.75rem]"><div class="absolute bottom-0 right-2 flex h-9 items-center"><div class="flex items-center rounded bg-token-sidebar-surface-primary px-2 font-sans text-xs text-token-text-secondary dark:bg-token-main-surface-secondary"><span class="" data-state="closed"><button class="flex gap-1 items-center select-none py-1" aria-label="Copiar"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon-sm"><path fill-rule="evenodd" clip-rule="evenodd" d="M7 5C7 3.34315 8.34315 2 10 2H19C20.6569 2 22 3.34315 22 5V14C22 15.6569 20.6569 17 19 17H17V19C17 20.6569 15.6569 22 14 22H5C3.34315 22 2 20.6569 2 19V10C2 8.34315 3.34315 7 5 7H7V5ZM9 7H14C15.6569 7 17 8.34315 17 10V15H19C19.5523 15 20 14.5523 20 14V5C20 4.44772 19.5523 4 19 4H10C9.44772 4 9 4.44772 9 5V7ZM5 9C4.44772 9 4 9.44772 4 10V19C4 19.5523 4.44772 20 5 20H14C14.5523 20 15 19.5523 15 19V10C15 9.44772 14.5523 9 14 9H5Z" fill="currentColor"></path></svg>Copiar código</button></span></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="!whitespace-pre hljs language-bash">git checkout -b nome-da-sua-branch
   </code></div></div></pre>
3. Realize as alterações desejadas e envie um pull request para revisão.

---

## Licença de Uso e Distribuição do Faraday Game

Copyright (c) 2025 Rafael João Ribeiro

1. **Distribuição Permitida** :

* Este jogo, incluindo seus arquivos prontos para distribuição, pode ser compartilhado livremente em sua forma original.
* É permitido o uso comercial da versão publicada, desde que não sejam feitas alterações no conteúdo.

1. **Proibição de Modificação** :

* Nenhuma modificação nos arquivos de código-fonte ou nos arquivos prontos para distribuição é permitida sem a permissão explícita do autor.
* O código-fonte do jogo não pode ser redistribuído sob nenhuma forma.

1. **Uso Comercial da Versão Publicada** :

* Os arquivos prontos para distribuição podem ser utilizados comercialmente sem necessidade de permissão adicional, desde que os termos desta licença sejam respeitados.

1. **Créditos Obrigatórios** :

* Em qualquer redistribuição ou uso comercial, o autor original, Rafael João Ribeiro, deve ser creditado como criador do jogo.

1. **Proibição de Sub-licenciamento** :

* Esta licença não pode ser transferida ou sublicenciada para terceiros.

1. **Ausência de Garantias** :

* Este software é fornecido "como está", sem garantias de qualquer tipo, explícitas ou implícitas, incluindo, mas não se limitando, à garantia de comercialização ou adequação para um propósito específico.

---

## Aviso sobre Bibliotecas de Terceiros

Este projeto utiliza as seguintes bibliotecas de terceiros, cujas licenças devem ser respeitadas:

* **Babylon.js:** Licenciado sob a Licença Apache 2.0.
* **Vite.js:** Licenciado sob a Licença MIT.

Certifique-se de consultar as licenças dessas ferramentas para garantir conformidade com os termos de uso.

---

## Autor

Este projeto foi desenvolvido por:
**Prof. Dr. Rafael João Ribeiro**
Instituto Federal do Paraná (IFPR)
[www.fisicagames.com.br](http://www.fisicagames.com.br)
