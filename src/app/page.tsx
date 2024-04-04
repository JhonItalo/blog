"use client";

import Card from "@/components/card/Card";
import { useState } from "react";
import Header from "@/components/header/Header";

export default function Home() {
  const [cardBoder, setCardBorder] = useState<number>(1);

  return (
    <>
      <Header />
      <main className="px-6 py-10 sm:px-8 sm:py-14 lg:px-0 lg:py-5 lg:w-4/5 lg:max-w-[1150px] lg:mx-auto ">
        <section className="px-6 py-8 space-y-10 sm:p-10 lg:px-0 ">
          <Card
            date="17 de ago, 2024"
            title="O que é linguagem de programação? Conheça as principais"
            description="Uma das mais populares vertentes da tecnologia da informação, a área de programação segue tendo muita demanda de trabalho justamente pela velocidade com que dispositivos tecnológicos vêm avançando."
            code={1}
            border={cardBoder}
            activeBorder={setCardBorder}
          />
          <Card
            date="12 de jul, 2024"
            title="GitHub agora permite fazer login sem precisar de senha"
            description=" O GitHub anunciou nesta quarta-feira (12) o acesso a partir das
            passkeys, método de autenticação sem senhas. A novidade está
            disponível em uma versão beta pública e pode substituir a
            autenticação em dois fatores."
            code={2}
            border={cardBoder}
            activeBorder={setCardBorder}
          />
          <Card
            date="21 de jun, 2024"
            title="Por que os hiperlinks são azuis em sua maioria?"
            description="Quem navega na internet, certamente já percebeu que ela conta
                com diversos recursos para tornar a nossa vida mais fácil. Entre
                essas opções podemos mencionar os hiperlinks – uma palavra ou
                termo clicável que direciona o leitor."
            code={3}
            border={cardBoder}
            activeBorder={setCardBorder}
          />
        </section>
      </main>
    </>
  );
}
