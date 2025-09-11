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
    <Footer container className="bg-amber-50 border-t border-amber-200">
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:items-start sm:justify-between py-6">
          <FooterBrand
            href="/"
            name="Confeitaria"
            src="/logo.png"
            className="text-amber-900 font-serif text-xl md:text-2xl"
          />
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 mt-4 sm:mt-0">
            <div>
              <FooterTitle title="Sobre" className="text-amber-900 font-serif" />
              <FooterLinkGroup col>
                <FooterLink href="#" className="text-amber-800 hover:text-amber-600">
                  Nossa História
                </FooterLink>
                <FooterLink href="#" className="text-amber-800 hover:text-amber-600">
                  Equipe
                </FooterLink>
              </FooterLinkGroup>
            </div>
            <div>
              <FooterTitle title="Ajuda" className="text-amber-900 font-serif" />
              <FooterLinkGroup col>
                <FooterLink href="#" className="text-amber-800 hover:text-amber-600">
                  Contato
                </FooterLink>
                <FooterLink href="#" className="text-amber-800 hover:text-amber-600">
                  FAQ
                </FooterLink>
              </FooterLinkGroup>
            </div>
            <div>
              <FooterTitle title="Legal" className="text-amber-900 font-serif" />
              <FooterLinkGroup col>
                <FooterLink href="#" className="text-amber-800 hover:text-amber-600">
                  Privacidade
                </FooterLink>
                <FooterLink href="#" className="text-amber-800 hover:text-amber-600">
                  Termos
                </FooterLink>
              </FooterLinkGroup>
            </div>
          </div>
        </div>

        <FooterDivider />

        <div className="w-full sm:flex sm:items-center sm:justify-between py-4">
          <FooterCopyright href="#" by="Confeitaria" year={2025} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <FooterIcon
              href="#"
              icon={BsInstagram}
              className="text-amber-900 hover:text-amber-700 transition"
            />
            <FooterIcon
              href="#"
              icon={BsFacebook}
              className="text-amber-900 hover:text-amber-700 transition"
            />
          </div>
        </div>
      </div>
    </Footer>
  );
}
