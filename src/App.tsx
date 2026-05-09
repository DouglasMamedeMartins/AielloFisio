import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/GlobalStyle';
import { theme } from './styles/theme';
import { Navbar } from './components/Navbar/Navbar';
import { Hero } from './components/Hero/Hero';
import { Sobre } from './components/Sobre/Sobre';
import { Servicos } from './components/Servicos/Servicos';
import { Diferenciais } from './components/Diferenciais/Diferenciais';
import { Agendar } from './components/Agendar/Agendar';
import { Footer } from './components/Footer/Footer';
import { WhatsAppFloat } from './components/WhatsAppFloat/WhatsAppFloat';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Navbar />
      <Hero />
      <Sobre />
      <Servicos />
      <Diferenciais />
      <Agendar />
      <Footer />
      <WhatsAppFloat />
    </ThemeProvider>
  );
}

export default App;
