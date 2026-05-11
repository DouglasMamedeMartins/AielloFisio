import { SectionTag, SectionTitle, SectionLine } from "../shared/SectionHeader";
import {
  Section,
  Cards,
  Card,
  CardIcon,
  CardTitle,
  CardDesc,
} from "./Servicos.styles";
import { SpineIcon } from "../icons/SpineIcon";

const services = [
  {
    icon: null,
    title: "Quiropraxia",
    desc: "Ajustes vertebrais precisos para aliviar dores na coluna, pescoço e articulações, restaurando o alinhamento e a função do sistema nervoso.",
  },
  {
    icon: "🎯",
    title: "Tratamento da Dor",
    desc: "Abordagem especializada para dores crônicas e agudas, identificando a raiz do problema com protocolos baseados em evidências científicas.",
  },
  {
    icon: "🏃",
    title: "Fisioterapia Ortopédica",
    desc: "Reabilitação de lesões musculoesqueléticas, pós-operatório e recuperação funcional para retorno seguro às atividades.",
  },
  {
    icon: "🧘",
    title: "Fisioterapia Postural",
    desc: "Correção postural e reequilíbrio muscular para prevenir lesões, aliviar tensões e melhorar a postura no dia a dia.",
  },
  {
    icon: "⚡",
    title: "Eletroterapia",
    desc: "Recursos como TENS, ultrassom e correntes analgésicas para potencializar o alívio da dor e acelerar a recuperação.",
  },
  {
    icon: "💆",
    title: "RPG e Pilates Clínico",
    desc: "Técnicas globais de reequilíbrio corporal para tratar dores crônicas, melhorar a flexibilidade e o controle motor.",
  },
];

export function Servicos() {
  return (
    <Section id="servicos">
      <SectionTag $light>O Que Oferecemos</SectionTag>
      <SectionTitle $light>Nossos Serviços</SectionTitle>
      <SectionLine />
      <Cards>
        {services.map((s) => (
          <Card key={s.title}>
            <CardIcon>
              {s.icon === null ? (
                <SpineIcon size={38} color="#d4af37" />
              ) : (
                s.icon
              )}
            </CardIcon>
            <CardTitle>{s.title}</CardTitle>
            <CardDesc>{s.desc}</CardDesc>
          </Card>
        ))}
      </Cards>
    </Section>
  );
}
