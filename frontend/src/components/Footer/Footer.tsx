import {
  FooterContainer,
  Info,
  Location,
  Social,
  Icons,
  Copy,
  Divider,
  SocialIcon
} from "./styleFooter";
import instagram from "../../assets/images/icons8-instagram.svg";
import facebook from "../../assets/images/icons8-facebook-novo.svg";
import whatsapp from "../../assets/images/icons8-whatsapp.svg";

export function Footer() {
  return (
    <FooterContainer>
      <Info>
        <h4>Informações</h4>
        <p><strong>Telefone:</strong> 35 99905-0029, 3214-7214</p>
        <p><strong>Horário:</strong> 8h às 20h seg a sáb, 8h às 12h dom</p>
        <p>
          <a href="#">Política de Privacidade</a> | <a href="#">Termos de Uso</a>
        </p>
      </Info>

      <Location>
        <h4>Localização</h4>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7421.782050016417!2d-45.431165!3d-21.551115999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ca928b2d89e2fd%3A0x5903a63559125668!2sMercearia%20Ferrari!5e0!3m2!1spt-BR!2sbr!4v1749569611897!5m2!1spt-BR!2sbr"
          width="300"
          height="200"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Mapa da Mercearia"
        ></iframe>
      </Location>

      <Social>
        <h4>Redes Sociais</h4>
        <Icons>
          <a href="#"><SocialIcon src={instagram} alt="Instagram" /></a>
          <a href="#"><SocialIcon src={facebook} alt="Facebook" /></a>
          <a href="#"><SocialIcon src={whatsapp} alt="WhatsApp" /></a>
        </Icons>
      </Social>

      <Divider />

      <Copy>
        <p>© 2025 Mercearia Ferrari.</p>
        <p>
          @Desenvolvido e Criado por <strong>Miguel Ferrari</strong> e <strong>Rafael Ponce</strong>
        </p>
      </Copy>
    </FooterContainer>
  );
}
