import TypeIt from "typeit-react";


export default function Hero() {
  return (
    <>
      <h1 className="judul">
        Stuff CSS
      </h1>
      <h2 className="subjudul">
        <TypeIt
          options={{
            strings: ["Make it easy to create responsive but minimalist web pages. "],
            speed: 40,
            waitUntilVisible: true,
          }}
        >
        </TypeIt>
      </h2>
    </>

  );
};