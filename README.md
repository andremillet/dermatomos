# Dermatomes - Diagnóstico Diferencial

Este projeto é uma ferramenta interativa para diagnóstico diferencial entre lesões em nervos periféricos e raízes nervosas, baseada em regiões cutâneas afetadas e sintomas sensitivos.

## Funcionalidades

- Seleção de região da pele afetada
- Escolha do tipo de alteração sensitiva (dor, vibração ou ambas)
- Sugestões de testes em outras regiões do mesmo nervo ou raízes
- Diagnóstico dinâmico baseado nas regiões marcadas como afetadas
- Interface web simples e responsiva

## Como Executar

1. Abra o arquivo `index.html` em um navegador web moderno.
2. Selecione uma região da pele afetada no dropdown.
3. Escolha o sintoma (dor, vibração ou ambas).
4. Clique em "Analisar e Sugerir Testes".
5. Marque as regiões adicionais testadas e observe o diagnóstico atualizado.

## Arquivos

- `index.html`: Página principal com a interface e lógica JavaScript
- `cutaneous_fields.json`: Dados das regiões sensitivas, nervos periféricos e raízes nervosas

## Dados

Os dados são baseados em conhecimentos anatômicos de dermatomas e inervação periférica. O arquivo JSON contém mapeamentos de regiões cutâneas para nervos periféricos e raízes espinhais correspondentes.