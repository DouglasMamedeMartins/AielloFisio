import { WhatsAppIcon } from '../icons/WhatsAppIcon';
import { FloatLink } from './WhatsAppFloat.styles';

const WPP_LINK = 'https://wa.me/5561983654221?text=Ol%C3%A1%2C%20Dr.%20Kalleb!%20Gostaria%20de%20agendar%20uma%20consulta.';

export function WhatsAppFloat() {
  return (
    <FloatLink href={WPP_LINK} target="_blank" title="Fale pelo WhatsApp">
      <WhatsAppIcon size={30} />
    </FloatLink>
  );
}
