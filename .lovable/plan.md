# Ajuste de subtítulo na seção Cases

## Objetivo
Trocar o texto introdutório da seção "Cases selecionados" para deixar a palavra "diferentes" na mesma linha semântica de "contextos de negócio", mantendo o tom editorial do site.

## Alteração
- Arquivo: `src/components/portfolio/CasesSection.tsx`
- Linha do subtítulo (`h2` abaixo de `<p className="kicker">Cases selecionados</p>`):
  - **De:** `Quatro iniciativas, diferentes contextos de negócio.`
  - **Para:** `Quatro iniciativas em diferentes contextos de negócio.`

## Validação
- Build de produção (`build:prod` ou equivalente) deve passar sem erros.
- Visualizar a seção Cases no preview e confirmar que o novo texto aparece corretamente.
