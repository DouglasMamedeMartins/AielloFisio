import { SectionTag, SectionTitle, SectionLine } from "../shared/SectionHeader";
import {
  Section,
  Inner,
  Text,
  Creds,
  Cred,
  CredIcon,
  CredText,
  ImgWrap,
} from "./Sobre.styles";

const creds = [
  { icon: "🎓", text: "Graduado em Fisioterapia" },
  { icon: "🦴", text: "Pós-graduado em Quiropraxia" },
  { icon: "🎯", text: "Especialista em Tratamento da Dor" },
  { icon: "✅", text: "CREFITO Ativo — Atendimento Ético e Responsável" },
];

export function Sobre() {
  return (
    <Section id="sobre">
      <SectionTag>Conheça o Profissional</SectionTag>
      <SectionTitle>Dr. Kalleb Aiello</SectionTitle>
      <SectionLine />
      <Inner>
        <Text>
          <p>
            Com uma formação sólida e uma visão humanizada da saúde, o Dr.
            Kalleb Aiello une o melhor da fisioterapia moderna com técnicas de
            quiropraxia para oferecer tratamentos precisos e eficazes.
          </p>
          <p>
            Cada paciente é único. Por isso, Dr. Kalleb elabora protocolos
            individualizados, focados na causa da dor — não apenas nos sintomas
            — proporcionando resultados duradouros e qualidade de vida real.
          </p>
          <Creds>
            {creds.map((c) => (
              <Cred key={c.text}>
                <CredIcon>{c.icon}</CredIcon>
                <CredText>{c.text}</CredText>
              </Cred>
            ))}
          </Creds>
        </Text>
        <ImgWrap>
          <img src="/hero.jpeg" alt="Dr. Kalleb Aiello" />
        </ImgWrap>
      </Inner>
    </Section>
  );
}
