import Head from "next/head";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";

export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y overflow-y-scroll overflow-x-hidden z-0  scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-darkGreen/80">
       
     {/* */}
      <Head>
        <title>Vitus | Portfolio</title>
      </Head>

      <Header />

      {/* Hero */}
      <section id='hero' className='snap-start'>
        <Hero />
      </section>

      {/* About */}
      <section id='about' className='snap-center'>
        <About />
      </section>
      {/* Experience */}
    
      {/* Skills */}

      {/* Projects */}

      {/* contact me */}
    </div>
  );
}
