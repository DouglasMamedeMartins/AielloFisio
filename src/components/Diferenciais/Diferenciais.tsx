import { SectionTag, SectionTitle, SectionLine } from '../shared/SectionHeader';
import { Section, Grid, Item, Circle, ItemTitle, ItemDesc } from './Diferenciais.styles';

const diferenciais = [
  {
    icon: '🎯',
    title: 'Tratamento Personalizado',
    desc: 'Cada protocolo é desenvolvido exclusivamente para o seu caso.',
  },
  {
    icon: '🔬',
    title: 'Baseado em Evidências',
    desc: 'Técnicas modernas e comprovadas cientificamente.',
  },
  {
    icon: '🤝',
    title: 'Atendimento Humanizado',
    desc: 'Você é acolhido com respeito, atenção e cuidado em cada sessão.',
  },
  {
    icon: '📈',
    title: 'Resultados Reais',
    desc: 'Foco em soluções duradouras, não apenas no alívio temporário.',
  },
];

export function Diferenciais() {
  return (
    <Section id="diferenciais">
      <SectionTag>Por Que Nos Escolher</SectionTag>
      <SectionTitle>Nossos Diferenciais</SectionTitle>
      <SectionLine />
      <Grid>
        {diferenciais.map((d) => (
          <Item key={d.title}>
            <Circle>{d.icon}</Circle>
            <ItemTitle>{d.title}</ItemTitle>
            <ItemDesc>{d.desc}</ItemDesc>
          </Item>
        ))}
      </Grid>
    </Section>
  );
}
