import Script from "next/script";

function Home() {
  return (
    <>
      <main>
        <h1>
          Quem encontra uma esposa encontra algo excelente; recebeu uma bênção
          do Senhor. Te Amo!!!
        </h1>

        <div
          className="tenor-gif-embed"
          data-postid="2714484565602153012"
          data-share-method="host"
          data-aspect-ratio="0.928571"
          data-width="180px"
        >
          <a href="https://tenor.com/pt-BR/view/bubu-bubu-dudu-love-cute-panda-gif-2714484565602153012">
            Fric Sticker
          </a>
        </div>
      </main>

      <Script src="https://tenor.com/embed.js" strategy="afterInteractive" />

      <style jsx>{`
        main {
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 20px;
          background-color: #fce4ec;
        }

        h1 {
          color: #8e244d;
          font-family: Georgia, "Times New Roman", serif;
          text-align: center;
          -webkit-text-stroke: 1px black;
        }
      `}</style>
    </>
  );
}

export default Home;
