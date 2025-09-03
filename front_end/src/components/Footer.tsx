import {
  Footer,
  FooterBrand,
  FooterTitle,
  FooterLink,
  FooterLinkGroup,
  FooterDivider,
  FooterCopyright,
  FooterIcon,
} from "flowbite-react";
import { BsInstagram, BsFacebook } from "react-icons/bs";

export default function FooterComp() {
  return (
    <Footer container className="bg-gray-100">
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:items-center sm:justify-between">
          <FooterBrand href="/" name="Confeitaria" />
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            <div>
              <FooterTitle title="Sobre" />
              <FooterLinkGroup col>
                <FooterLink href="#">Nossa História</FooterLink>
                <FooterLink href="#">Equipe</FooterLink>
              </FooterLinkGroup>
            </div>
            <div>
              <FooterTitle title="Ajuda" />
              <FooterLinkGroup col>
                <FooterLink href="#">Contato</FooterLink>
                <FooterLink href="#">FAQ</FooterLink>
              </FooterLinkGroup>
            </div>
            <div>
              <FooterTitle title="Legal" />
              <FooterLinkGroup col>
                <FooterLink href="#">Privacidade</FooterLink>
                <FooterLink href="#">Termos</FooterLink>
              </FooterLinkGroup>
            </div>
          </div>
        </div>

        <FooterDivider />

        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <FooterCopyright href="#" by="Confeitaria" year={2025} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <FooterIcon href="#" icon={BsInstagram} />
            <FooterIcon href="#" icon={BsFacebook} />
          </div>
        </div>
      </div>
    </Footer>
  );
}
