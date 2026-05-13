import { WhatsAppIcon } from "../icons/WhatsAppIcon";
import {
  Section,
  Inner,
  HeroText,
  Badge,
  H1,
  Desc,
  Btns,
  BtnPrimary,
  BtnSecondary,
  ImgWrap,
  Stats,
  Stat,
  StatNum,
  StatLabel,
} from "./Hero.styles";

const WPP_LINK =
  "https://wa.me/5561983654221?text=Ol%C3%A1%2C%20Dr.%20Kalleb!%20Gostaria%20de%20agendar%20uma%20consulta.";

export function Hero() {
  return (
    <Section id="hero">
      <Inner>
        <HeroText>
          <Badge>⚕️ Especialista em Dor &amp; Quiropraxia</Badge>
          <H1>
            Chega de dor.
            <br />
            Viva com <span>movimento</span>
            <br />e qualidade de vida.
          </H1>
          <Desc>
            Tratamentos personalizados com ciência e cuidado. Dr. Kalleb Aiello
            combina fisioterapia avançada e quiropraxia para devolver o que mais
            importa: o seu bem-estar.
          </Desc>
          <Btns>
            <BtnPrimary href={WPP_LINK} target="_blank">
              <WhatsAppIcon size={18} color="#0b1f33" />
              Agendar pelo WhatsApp
            </BtnPrimary>
            <BtnSecondary href="#servicos">Ver Serviços</BtnSecondary>
          </Btns>
          <Stats>
            <Stat>
              <StatNum>+300</StatNum>
              <StatLabel>Pacientes</StatLabel>
            </Stat>
            <Stat>
              <StatNum>3+</StatNum>
              <StatLabel>Anos de Exp.</StatLabel>
            </Stat>
            <Stat>
              <StatNum>2</StatNum>
              <StatLabel>Especializações</StatLabel>
            </Stat>
          </Stats>
        </HeroText>
        <ImgWrap>
          <img src="/hero.jpeg" alt="Dr. Kalleb Aiello" />
        </ImgWrap>
      </Inner>
    </Section>
  );
}
