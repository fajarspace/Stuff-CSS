import TypeIt from "typeit-react";


export default function Hero() {
  return (
    <>
      <h1 className="judul">
        Stuff CSS
      </h1>
      <h2 className="subjudul" >
        <TypeIt
          options={{
            speed: 40,
            loop: true,
            loopDelay: 3000,
            waitUntilVisible: true,
          }}
          getBeforeInit={(instance) => {
            instance.type("Makes it easy to create responsive but minimalist Web pages.").pause(750).delete(10).pause(600).type("Class!");

            // Remember to return it!
            return instance;
          }}
        />
      </h2>

      {/* <h2 className="subjudul">
        <TypeIt
          options={{
            strings: ["Make it easy to create responsive but minimalist web pages. "],
            speed: 40,
            loop: true,
            loopDelay: 4000,
            waitUntilVisible: true,
          }}
        >
        </TypeIt>
      </h2> */}
    </>

  );
};