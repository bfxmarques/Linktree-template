import CopyButton, { LinkButton } from "@/components/link-button/link-button";
import Image from "next/image";
import { FaInstagram } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";

export default function Home() {
  return (
    <main className="min-h-screen md:max-w-2xl flex flex-col justify-center mx-auto items-center p-10">
      <CopyButton />
      <Image
        src=""
        alt="insta"
        width={256}
        height={256}
        className="object-fill mb-3 rounded-full"
        priority
      /> {/* imagem perfil */}
      <div className="flex items-center mb-16 justify-center gap-2">
        <FaInstagram className="text-white" size={32} />
        <h1 className="text-center text-white">paulohenrik84</h1>
      </div>
      <p className="border-white border-2 mb-6 rounded-3xl p-6 text-white">
        
      </p> {/* sobre a tsm */}
      <LinkButton href="https://www.instagram.com/paulohenrik84?igsh=cms1c3p6Y21kejBz&utm_source=qr">  {/* link instagram */}
        Instagram
      </LinkButton>

      <LinkButton href="https://wa.me/5515991156279?text=Ol%C3%A1,%20tudo%20bem%20?%20Gostaria%20de%20saber%20mais%20sobre%20a%20venda%20de%20energia."> {/* link whatsapp */}
        Whatsapp
      </LinkButton>

      <LinkButton href="https://ineer.com.br/"> {/* site tsm  */}
        Conheça mais sobre a ineer {<GoArrowUpRight />}
      </LinkButton>
    </main>
  );
}
