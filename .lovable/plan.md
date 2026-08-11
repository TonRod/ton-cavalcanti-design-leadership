# Análise do portfólio e plano de melhorias

Revisei a página inteira nos dois temas (claro e escuro), em desktop e mobile, além do conteúdo em `portfolio.ts`.

## O que já está muito bom

- Direção editorial consistente: Fraunces + Source Serif 4 + Inter, muito respiro, réguas finas entre seções.
- Tom de "prova, não afirmação": números concretos no hero, nos cards e nos modais.
- Tema claro/escuro sem flash, com opção "sistema".
- Estrutura de dados tipada e centralizada, fácil de evoluir.

## Observações e correções propostas

### 1. Inconsistências de conteúdo (prioridade alta — recrutador percebe)

- **"Liderança, em números" não tem números.** O subtítulo promete "o número que sustenta cada um", mas dois dos três cards trazem texto ("Multidisciplinar", "Redução no tempo de entrega"). Proposta: quantificar ("Times de até 5 pessoas", "−30% no tempo de entrega", "100+ designers") ou trocar o título/subtítulo da seção para algo compatível.
- **Case Globo:** o texto de estratégia diz "37 entrevistas" e a métrica diz "370". Números contraditórios precisam de decisão.
- **Case Globo:** o campo de cargo traz uma frase de decisão ("Decisão de conduzir o discovery completo…") em vez do papel exercido, quebrando o padrão dos outros três cases.
- **Case Livelo:** o destaque é "+3,3 → +6,7" de NPS, mas o bloco de Resultados não menciona esse ganho. Além disso, "Turnover 60%/ano" aparece como métrica de resultado quando é a linha de base do problema.
- **Hero desatualizado:** cita "Try, Bradesco, Motrix e Natura" e omite Globo e a posição atual na Porto Seguro.
- **Meta description da página** ainda fala em "times de até 25 designers" e "NPS 40→60", dados que não existem mais na página — isso é o texto que aparece no Google.
- **Nenhum case posterior a 2024.** Um recrutador vê o trabalho mais recente (Porto Seguro, jornada de investimentos) apenas como uma linha na trajetória. Vale um 5º case, mesmo curto.

### 2. Cases: o maior gap para um portfólio de design

- Os modais são 100% texto (7 a 8 blocos corridos). Faltam artefatos visuais — blueprint, wireframe, antes/depois, foto de workshop. Proposta: campo opcional de imagens por case, renderizado no modal.
- As capas têm tratamentos diferentes entre si: Natura é foto de fachada, Globo/Bradesco/Livelo são logos sobre fundos claros distintos. Isso cria ruído na grade. Proposta: padronizar (mesmo fundo neutro, logo em escala equivalente) ou migrar para imagens do próprio trabalho.
- No tema escuro, as capas de logo com fundo branco "furam" a página. Proposta: leve tonalização/fundo neutro nessas capas no dark.
- O ícone de seta diagonal sugere link externo; o card abre um modal. Trocar por um affordance de "ver case" (rótulo textual ou ícone de expandir).
- O modal não permite ir ao próximo case nem convida à ação no fim (ex: "Falar sobre este case").

### 3. Acessibilidade e usabilidade

- Itens de transição da trajetória usam `opacity-60`, deixando o texto abaixo do contraste mínimo (WCAG AA). Usar uma cor de texto mais suave em vez de opacidade sobre tudo.
- Botão do menu mobile sem `aria-expanded`/`aria-controls`, e o rótulo continua "Abrir menu" com o menu aberto.
- Falta link "Pular para o conteúdo" e indicação de seção ativa na navegação (scroll-spy).
- `scroll-behavior: smooth` e as animações de hover não respeitam `prefers-reduced-motion`.
- Kickers em 11px com espaçamento de 0,22em ficam no limite da legibilidade; subir para 12px.
- Contato só oferece links. Faltam sinalizações que aceleram a decisão: disponibilidade, modelo de trabalho (remoto/híbrido/PJ), cidade, e um botão de copiar e-mail.
- "Baixar CV" não informa formato/tamanho nem abre em nova aba.

### 4. Cor, contraste e ritmo visual

- O acento vinho aparece apenas nos pontos da timeline e nos ícones de formação. A página fica quase monocromática e os CTAs não usam a cor da marca. Proposta: aplicar o acento nos números de destaque ou no CTA primário — com moderação.
- Todas as seções seguem exatamente o mesmo padrão (kicker + título + parágrafo + grade), o que gera monotonia ao rolar. Alternar uma seção com fundo `surface-2` cria respiro e hierarquia.
- No hero, o bloco de três métricas fica com alturas de rótulo desiguais; alinhar rótulos na base resolve.
- Competências e idiomas em chips ficam com muita repetição visual (33 chips seguidos); considerar limitar as técnicas às mais estratégicas.

### 5. SEO e compartilhamento

- Não há `og:image`: ao compartilhar o link no LinkedIn ou WhatsApp aparece um card sem imagem. Usar o retrato (URL absoluta do CDN).
- Falta JSON-LD `Person` com cargo, links e formação — ajuda em busca por nome.
- O retrato é carregado nas duas versões (clara e escura) sempre; usar `<picture>` com `prefers-color-scheme` faz o navegador baixar só uma.

## Ordem de implementação sugerida

1. Correções de conteúdo e coerência (seção 1) — rápido e de maior impacto.
2. Acessibilidade e usabilidade (seção 3).
3. Cases: padronização de capas, affordance correta e suporte a imagens nos modais (seção 2).
4. Ritmo visual e uso do acento (seção 4).
5. SEO/compartilhamento e otimização do retrato (seção 5).

## Notas técnicas

- Conteúdo alterado em `src/data/portfolio.ts` (tipos `CaseStudy`, `LeadershipProof`); nada de layout muda por isso.
- Imagens de case exigem um campo opcional `gallery?: { src: string; caption: string }[]` e renderização no `DialogContent`.
- Contraste dos itens de transição: substituir `opacity-60` por classe de cor dedicada em `TimelineSection.tsx`.
- `prefers-reduced-motion`: bloco `@media` em `src/styles.css` neutralizando `scroll-behavior` e transformações de hover.
- `og:image`/`twitter:image` e JSON-LD entram no `head()` de `src/routes/index.tsx`, usando a URL absoluta do retrato no CDN.
- Decisões de conteúdo (números da Globo, quantificação da seção Liderança, 5º case da Porto Seguro) precisam da sua confirmação antes de eu escrever os textos.
