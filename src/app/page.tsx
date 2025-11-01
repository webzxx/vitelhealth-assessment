"use client";

import Image from "next/image";
import { useState } from "react";
import { CirclePlus, CircleX } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function About() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="fluid-container">
      <div className="flex flex-col-reverse lg:flex-row gap-6 justify-between">
        <div className="w-full lg:w-2/5 relative z-10">
          <h1 className="text-current font-bold text-6xl lg:text-8xl xl:text-[9rem] leading-none tracking-tighter mb-3">
            US
          </h1>

          <div className="lg:px-8 xl:px-22">
            <h2 className="text-current font-headline text-5xl lg:text-6xl xl:text-7xl tracking-tight mb-3 leading-none">
              Glory of God. Radical Grace. Extravagant Worship.
            </h2>

            <p className="text-gray-800 leading-snug text-lg tracking-tighter mt-0 mb-8 last:mb-0 max-w-full lg:max-w-sm">
              We are a Jesus Church. A small tribe of His followers connected by
              our common faith and a deep desire to see our city [and the world]
              come to know His power and beauty. We are not perfect. But Jesus
              is. Thankfully, we are a Jesus Church.
            </p>
          </div>
        </div>

        <div className="w-full h-80 md:h-144 lg:w-3/5 lg:min-h-lgplus relative overflow-hidden rounded-xl flex items-center justify-center">
          <div className="relative w-full h-full overflow-hidden rounded-lg flex items-center justify-center">
            <div className="absolute inset-0 w-full h-full">
              <Image
                src="/about-img.jpg"
                alt="About Banner"
                fill
                className="absolute inset-0 w-full h-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      <main className="pt-20 sm:pt-24 xl:pt-32 pb-20 sm:pb-24 xl:pb-32 relative w-full grid gap-y-20 -mb-px">
        <section>
          <div className="flex flex-col gap-8 lg:gap-16 lg:flex-row items-start lg:items-center">
            <div className="relative w-full overflow-hidden rounded-xl lg:w-9/20 aspect-square">
              <div className="absolute inset-0 w-full h-full">
                <Image
                  src="/about-2nd.jpg"
                  alt="About"
                  fill
                  className="absolute inset-0 w-full h-full object-cover"
                  priority
                />
              </div>
            </div>

            <div className="relative space-y-6 lg:w-11/20">
              <p className="text-current text-lg lg:text-xl tracking-tighter leading-none mb-4">
                Our Theological Truths
              </p>

              <p className="text-current font-bold text-5xl lg:text-6xl xl:text-[5rem] tracking-tight xl:tracking-tighter mb-5 leading-none">
                What We Believe
              </p>

              <p className="text-charcoal leading-normal text-base tracking-wide max-w-lg"></p>

              <p className="text-charcoal text-base tracking-tighter">
                We live in shifting times but are rooted in eternal truths, the
                teachings of Holy Scripture. Here at Bible Baptist Church we are
                guided by certain foundational beliefs and shaping values.
              </p>

              <div className="relative inline-flex">
                <Button
                  variant="default"
                  className=" inline-flex bg-sky-400 text-black hover:bg-[#e2e3da] py-3 px-6 hover:text-blue-500 font-mono leading-none uppercase text-sm rounded-3xl items-center justify-center transition whitespace-nowrap group select-none cursor-pointer "
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-20 sm:pb-24 xl:pb-32">
          <div className="flex flex-col gap-8 lg:gap-16 items-start md:items-center md:flex-row-reverse">
            <div className="w-full md:w-1/2 aspect-square">
              <p className="text-current font-bold text-5xl lg:text-6xl xl:text-[5rem] tracking-tight xl:tracking-tighter mb-5 leading-normal">
                Our History
              </p>

              <div className="relative overflow-hidden rounded-xl w-full min-h-[300px] sm:min-h-[400px] md:min-h-[500px] mt-2 md:mt-12">
                <div className="absolute inset-0 w-full h-full">
                  <Image
                    src="/history-img.jpg"
                    alt="About History"
                    fill
                    className="absolute inset-0 w-full h-full object-cover"
                    priority
                  />
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/2 space-y-8 md:space-y-16">
              <div className="max-w-2xl text-base tracking-tighter text-charcoal space-y-4">
                <h4 className="text-current font-semibold text-2xl lg:text-3xl xl:text-4xl tracking-tighter leading-snug md:pt-36">
                  We are: For God. For people. For the city. For the world.
                </h4>
                <p>
                  Bible Baptist Church began with a stirring in the heart of
                  Pastor Mar Arias for the local church. Born out of the Passion
                  Movement (a decades-old movement among the collegiate
                  generation), they sought to plant a local community of faith
                  impacted and informed by the DNA of Passion.
                </p>
                <p>
                  With a small team of people, that vision took flight in 1970,
                  as small gatherings began in homes throughout Philippines. The
                  desire was to foster a family of believers connected by a
                  common faith, on mission in the city and the world to amplify
                  the name of Jesus.
                </p>
                <p>
                  Through the years, we have seen lives changed, families
                  strengthened, and souls saved through the preaching of the
                  Gospel. We continue to stand as a beacon of hope — a church
                  where the Bible is preached, Christ is exalted, and people are
                  loved.
                </p>
                <p>
                  Bible Baptist Church remains a place where the gospel is
                  central and Jesus is always the lead story. We are a Jesus
                  church and want to gather in worship and scatter to shine His
                  light and love throughout the city and beyond.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="relative">
            <div className="px-10 pb-24 rounded-3xl bg-[#e2e3da]">
              <p className="text-black font-headline text-lg lg:text-xl tracking-tighter leading-none opacity-60 py-8">
                This is How We Describe Us...
              </p>

              {/* Accordion 01 */}
              <div className="border-b-[1.5px] border-black border-t-[1.5px]">
                <button
                  onClick={() => toggleAccordion(1)}
                  className="flex justify-between items-center w-full cursor-pointer select-none sm:px-3 pt-8 pb-6"
                >
                  <div className="flex items-center gap-4 text-left flex-1">
                    <h2 className="text-black font-headline text-4xl lg:text-5xl mr-4 md:mr-10 -mt-1 -mb-3 opacity-40 tracking-tighter leading-normal">
                      01
                    </h2>
                    <p className="text-black font-headline-sans font-bold text-xl lg:text-2xl tracking-tighter leading-tight transition duration-200 hover:text-blue-500">
                      Jesus is Our Lead Story
                    </p>
                  </div>
                  <div className="flex items-center ml-10">
                    {activeIndex === 1 ? (
                      <CircleX className="w-8 h-8 text-black" />
                    ) : (
                      <CirclePlus className="w-8 h-8 text-black" />
                    )}
                  </div>
                </button>

                <div
                  style={{
                    height: activeIndex === 1 ? "448px" : "0px",
                    overflow: "hidden",
                    transitionProperty: "height",
                    transitionDuration: "300ms",
                    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                  }}
                >
                  <div className="flex flex-col lg:flex-row items-stretch justify-start gap-6 sm:px-3">
                    <div className="flex-1 lg:w-1/2">
                      <div className="pb-6">
                        <p className="text-black leading-normal text-base tracking-tighter mt-0 mb-8 last:mb-0 ">
                          In fact, Jesus is our only story. He is preeminent in
                          our hearts and central in all we do.
                          <br />
                          <br />
                          We believe Jesus is unrivaled in history and eternity.
                          He is God and He is good; glorious both now and
                          forever. His Name is the only name that saves. His
                          power is the only power that can raise us from the
                          dead.
                          <br />
                          <br />
                          Our goal is not just to get people to church.
                          Ultimately, we want people to meet Jesus. That’s why
                          we say we are a Jesus church. We really don’t want to
                          be identified by any other name.
                        </p>
                      </div>
                    </div>

                    <div className="relative w-1/2 min-h-112 h-auto rounded-tr-xl rounded-tl-xl overflow-hidden">
                      <div className="absolute inset-0 w-full h-full ">
                        <Image
                          src="/accord-01.jpg"
                          alt="Accordion 01"
                          fill
                          className="absolute inset-0 w-full h-full object-cover object-top"
                          priority
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Accordion 02 */}
              <div className="border-b-[1.5px] border-black">
                <button
                  onClick={() => toggleAccordion(2)}
                  className="flex justify-between items-center w-full cursor-pointer select-none sm:px-3 pt-8 pb-6"
                >
                  <div className="flex items-center gap-4 text-left flex-1">
                    <h2 className="text-black font-headline text-4xl lg:text-5xl mr-4 md:mr-10 -mt-1 -mb-3 opacity-40 tracking-tighter leading-normal">
                      02
                    </h2>
                    <p className="text-black font-headline-sans font-bold text-xl lg:text-2xl tracking-tighter leading-tight transition duration-200 hover:text-blue-500">
                      The Gospel is Central
                    </p>
                  </div>
                  <div className="flex items-center ml-10">
                    {activeIndex === 2 ? (
                      <CircleX className="w-8 h-8 text-black" />
                    ) : (
                      <CirclePlus className="w-8 h-8 text-black" />
                    )}
                  </div>
                </button>

                <div
                  style={{
                    height: activeIndex === 2 ? "448px" : "0px",
                    overflow: "hidden",
                    transitionProperty: "height",
                    transitionDuration: "300ms",
                    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                  }}
                >
                  <div className="flex flex-col lg:flex-row items-stretch justify-start gap-6 sm:px-3">
                    <div className="flex-1 lg:w-1/2">
                      <div className="pb-6">
                        <p className="text-black leading-normal text-base tracking-tighter mt-0 mb-8 last:mb-0 ">
                          Everything we do is because of what Jesus has already
                          done.
                          <br />
                          <br />
                          We believe that Jesus, who was God in human flesh,
                          erased our debt on the cross and lives to be our life.
                          Jesus did what we could never do to allow us to
                          experience what we could never have apart from Him.
                          <br />
                          <br />
                          The gospel we celebrate is not that our sin made us
                          bad people and somehow Jesus makes us better. We
                          believe our situation was far worse than that. Our sin
                          left us spiritually dead and separated us from the
                          perfect Father.
                          <br />
                          <br />
                          Our good news is this: Jesus didn’t just come to make
                          us better versions of ourselves. Jesus came to bring
                          us from death to life.
                          <br />
                          <br />
                          All we do and say is anchored in this gospel story.
                        </p>
                      </div>
                    </div>

                    <div className="relative w-1/2 min-h-112 h-auto rounded-tr-xl rounded-tl-xl overflow-hidden">
                      <div className="absolute inset-0 w-full h-full ">
                        <Image
                          src="/accord-02.jpg"
                          alt="Accordion 02"
                          fill
                          className="absolute inset-0 w-full h-full object-cover"
                          priority
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Accordion 03 */}
              <div className="border-b-[1.5px] border-black">
                <button
                  onClick={() => toggleAccordion(3)}
                  className="flex justify-between items-center w-full cursor-pointer select-none sm:px-3 pt-8 pb-6"
                >
                  <div className="flex items-center gap-4 text-left flex-1">
                    <h2 className="text-black font-headline text-4xl lg:text-5xl mr-4 md:mr-10 -mt-1 -mb-3 opacity-40 tracking-tighter leading-normal">
                      03
                    </h2>
                    <p className="text-black font-headline-sans font-bold text-xl lg:text-2xl tracking-tighter leading-tight transition duration-200 hover:text-blue-500">
                      Worship is a Lifestyle
                    </p>
                  </div>
                  <div className="flex items-center ml-10">
                    {activeIndex === 3 ? (
                      <CircleX className="w-8 h-8 text-black" />
                    ) : (
                      <CirclePlus className="w-8 h-8 text-black" />
                    )}
                  </div>
                </button>

                <div
                  style={{
                    height: activeIndex === 3 ? "448px" : "0px",
                    overflow: "hidden",
                    transitionProperty: "height",
                    transitionDuration: "300ms",
                    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                  }}
                >
                  <div className="flex flex-col lg:flex-row items-stretch justify-start gap-6 sm:px-3">
                    <div className="flex-1 lg:w-1/2">
                      <div className="pb-6">
                        <p className="text-black leading-normal text-base tracking-tighter mt-0 mb-8 last:mb-0 ">
                          We love to worship and we love to sing. But for us,
                          worship is more than singing songs. Worship is life.
                          <br />
                          <br />
                          The world is broken. People are hurting. In so much of
                          Earth—disease, injustice, poverty, and neglect win the
                          day. That’s why God wants more than a song. God wants
                          justice for the poor and oppressed.
                          <br />
                          <br />
                          We believe worship and justice are two sides of the
                          same coin. Our best worship is the song we sing as we
                          reach out to those in need.
                          <br />
                          <br />
                          We believe there is no division between the sacred and
                          the secular. Life is not about what you do, it’s about
                          why you do it. Worship is doing everything we do to
                          the fullest potential; using our unique gifts and
                          opportunities to magnify Jesus everywhere, all the
                          time.
                          <br />
                          <br />
                          We love to work. Because we believe our work is
                          worship when it’s done as a way of bringing honor to
                          God.
                        </p>
                      </div>
                    </div>

                    <div className="relative w-1/2 min-h-112 h-auto rounded-tr-xl rounded-tl-xl overflow-hidden">
                      <div className="absolute inset-0 w-full h-full">
                        <Image
                          src="/accord-03.jpg"
                          alt="Accordion 03"
                          fill
                          className="absolute inset-0 w-full h-full object-cover"
                          priority
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pt-20 sm:pt-24 xl:pt-32">
          <div className="flex flex-col gap-8 lg:gap-16 lg:flex-row items-start lg:items-center">
            <div className="relative w-full overflow-hidden rounded-xl lg:w-9/20 aspect-square">
              <div className="absolute inset-0 w-full h-full">
                <Image
                  src="/lucena-fam.jpg"
                  alt="Lucena Family"
                  fill
                  className="absolute inset-0 w-full h-full object-cover"
                  priority
                />
              </div>
            </div>

            <div className="relative space-y-6 lg:w-11/20">
              <p className="text-current text-lg lg:text-xl tracking-tighter leading-none mb-4">
                Our Leadership
              </p>
              <p className="text-current font-bold text-5xl lg:text-6xl xl:text-7xl tracking-[-0.1rem] xl:tracking-[-0.2rem] mb-5 leading-negative ">
                Anselmo + Jinky Lucena
              </p>
              <p className="leading-normal text-base tracking-wide max-w-lg"></p>
              <p className="text-base tracking-tighter">
                Pastor Anselmo Lucena leads Bible Baptist Church with a deep
                commitment to biblical truth and spiritual growth. Together with
                his wife, Jinky, they have faithfully served the church for many
                years — teaching God’s Word, mentoring believers, and guiding
                the ministry with humility and love. Their passion is to see
                lives transformed by the Gospel and the name of Jesus lifted
                high in every generation.
              </p>

              <div className="relative inline-flex">
                <Button
                  variant="default"
                  className="inline-flex bg-sky-400 text-black hover:bg-[#e2e3da] py-3 px-6 hover:text-blue-500 font-mono leading-none uppercase text-sm rounded-3xl items-center justify-center transition whitespace-nowrap group select-none cursor-pointer "
                >
                  See Our Leadership
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="pt-20 sm:pt-24 xl:pt-32 pb-20">
          <div className="relative overflow-hidden rounded-2xl flex items-end lg:items-center w-full h-80 md:h-auto p-24">
            <div className="absolute inset-0 w-full h-full ">
              <Image
                src="/about-banner.jpg"
                alt="About Banner"
                fill
                className="absolute inset-0 w-full h-full object-cover"
                priority
              />
            </div>

            <div className="absolute inset-0 w-full h-full media-overlay"></div>

            <div className="hidden md:block relative">
              <p className="text-white font-headline text-lg lg:text-xl tracking-tighter leading-none mb-8 opacity-75">
                We are a Jesus Church
              </p>

              <h2 className=" text-white font-headline-sans font-bold text-5xl lg:text-6xl xl:text-8xl tracking-tighter mb-3 leading-none">
                US
              </h2>

              <p className="text-white leading-snug font-semibold text-lg tracking-tight hidden md:block mb-10 max-w-md">
                {" "}
                Our church is more than a place, it&apos;s a people in every
                place living for the One whose fame outshines every name. This
                is US. The core values + standards that guide our tribe in
                everything we do.
              </p>
            </div>
          </div>
        </section>
      </main>
    </section>
  );
}
