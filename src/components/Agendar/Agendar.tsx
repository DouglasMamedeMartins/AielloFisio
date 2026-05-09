import { WhatsAppIcon } from '../icons/WhatsAppIcon';
import { Section, Title, Desc, WppBtn } from './Agendar.styles';

const WPP_LINK = 'https://wa.me/5561983654221?text=Ol%C3%A1%2C%20Dr.%20Kalleb!%20Gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o.';

export function Agendar() {
  return (
    <Section id="agendar">
      <Title>Pronto para viver sem dor?</Title>
      <Desc>
        Agende sua avaliação agora mesmo e dê o primeiro passo rumo à sua recuperação.
      </Desc>
      <WppBtn href={WPP_LINK} target="_blank">
        <WhatsAppIcon size={24} />
        Agendar Avaliação Gratuita
      </WppBtn>
    </Section>
  );
}
