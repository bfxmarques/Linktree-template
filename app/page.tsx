import CopyButton, { LinkButton } from "@/components/link-button/link-button";
import Image from "next/image";
import { FaInstagram } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";

export default function Home() {
  return (
    <main className="min-h-screen md:max-w-2xl flex flex-col justify-center mx-auto items-center p-7">
      <CopyButton />
      <Image
        src="/logo-elaine.jpg"
        alt="insta"
        width={256}
        height={256}
        className="object-fill mb-3 rounded-full"
        priority
      />
      <div className="flex my-3 pt-2">
        <FaInstagram className="text-zinc-950" size={32} />
        <h1 className="text-center font-bold text-2xl text-zinc-950">@elainecarrielbolosedoces</h1> {/* arroba do instagram  */}
      </div>
      <p className="bg-opacity-65 bg-zinc-950 border-pink-500 border-2 mb-6 rounded-3xl p-6 text-white"> {/* texto */}
        Especialista em Bolos e Doces para trazer para você momentos deliciosos sem ser enjoativos.
        Utilizamos somente produtos de qualidade para que sua degustação seja prazerosa✨
      </p>
      <LinkButton href="https://www.instagram.com/elainecarrielbolosedoces?igsh=c3pxMzM5Z3lrc2tl ">  {/* link instagram */}
        instagram
      </LinkButton>

      <LinkButton href="https://wa.me/15991210748"> {/* link whatsapp */}
        whatsapp
      </LinkButton>

      <LinkButton href="https://www.ifood.com.br/delivery/sorocaba-sp/elaine-carriel-bolos-e-doces-jardim-europa/873460d2-3629-4272-b3fe-d91593e47038?UTM_Medium=share&fbclid=PAY2xjawJOR2hleHRuA2FlbQIxMQABpmALeSkNKYKGES5QvEd82G6rX8Y71S24mbFQZ5Yo_3R4ORUMs3jBN_pTgw_aem_7G45lgxxIVIJB7vk5xeO0A ">
        ifood
      </LinkButton> {/* link Ifood */}

      <LinkButton href="https://drive.google.com/file/d/1Zu7Oc-6kmwJ8o6Jx57buTfOzBXjl0e1D/view">
        cardápio da páscoa
      </LinkButton> {/* link cardapio*/}
    </main>
  );
}
