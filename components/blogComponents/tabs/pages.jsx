"use client";
import React from "react";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import Link from "next/link";
import { Type } from "../Typography/type";
import Image from "next/image";
import Egg from "../../../public/blogImages/Egg.png";
import { MdOutlineArrowOutward } from "react-icons/md";

export default function App() {
  return (
    <div className="flex w-[100%] flex-col mx-auto">
      <Tabs aria-label="Options" variant="underlined">
        <Tab
          key="Advance reasoning"
          title="Advance reasoning"
          className="text-[16px] mx-0"
        >
          <Card className="flex w-full flex-row flex-wrap text-xl gap-0">
            <CardBody className="w-full md:w-1/3 flex flex-col gap-3">
              <p className="w-full text-black">
                With broad general knowledge and domain expertise, GPT-4 can
                follow complex instructions in natural language and solve
                difficult problems with accuracy.
              </p>
              <Link href="#" className="underline flex gap-2 items-center">
                Try on chatgpt <MdOutlineArrowOutward />
              </Link>
            </CardBody>
            <CardBody className="w-3/3 md:w-2/3">
              <div className=" w-full md:w-[80%]  md:ml-auto ">
                <div
                  className="min-h-[200px] flex flex-col p-4  text-[17px]"
                  style={{ border: "1px solid black" }}
                >
                  <h2 className="text-2xl">Input</h2>
                  <p>
                    Andrew is free from 11 am to 3 pm, Joanne is free from noon
                    to 2 pm and then 3:30 pm to 5 pm. Hannah is available at
                    noon for half an hour, and then 4 pm to 6 pm. What are some
                    options for start times for a 30 minute meeting for Andrew,
                    Hannah, and Joanne?
                  </p>
                </div>
                <div
                  className="min-h-[250px] flex flex-col gap-2 p-4 text-[17px]"
                  style={{ border: "1px solid black" }}
                >
                  <h2 className="text-2xl">Output</h2>
                  <Type
                    lines={
                      " Andrew: 11 am - 3 pm <br /> Joanne: 12 pm - 2 pm, 3:30 pm - 5 pm <br /> Hannah: 12 pm - 12:30 pm, 4 pm - 6 pm <br /> <br />Common availability for a 30-minute meeting: 12 pm - 12:30 pm"
                    }
                  />
                </div>
              </div>
            </CardBody>
          </Card>
        </Tab>
        <Tab
          key="Creativity"
          title="Creativity"
          className="mx-[-10px] text-[16px]"
        >
          <Card className="flex flex-row flex-wrap text-xl">
            <CardBody className="w-full md:w-1/3 flex flex-col gap-3">
              <p className="w-full text-black">
                GPT-4 is more creative and collaborative than ever before. It
                can generate, edit, and iterate with users on creative and
                technical writing tasks, such as composing songs, writing
                screenplays, or learning a user’s writing style.
              </p>
              <Link href="#" className="underline">
                Try on chatgpt
              </Link>
            </CardBody>
            <CardBody className="w-3/3 md:w-2/3">
              <div className=" w-[100%] md:w-[80%]  md:ml-auto ">
                <div
                  className="min-h-[200px] flex flex-col gap-2 p-4 text-[17px]"
                  style={{ border: "1px solid black" }}
                >
                  <h2 className="text-2xl">Input</h2>
                  <p>
                    Explain the plot of Cinderella in a sentence where each word
                    has to begin with the next letter in the alphabet from A to
                    Z, without repeating any letters.
                  </p>
                </div>
                <div
                  className="min-h-[250px] flex flex-col gap-2 p-4 text-[17px]"
                  style={{ border: "1px solid black" }}
                >
                  <h2 className="text-2xl">Output</h2>
                  <Type
                    lines={
                      " A beautiful Cinderella, dwelling eagerly, finally gains happiness; inspiring jealous kin, love magically nurtures opulent prince; quietly rescues, slipper triumphs, uniting very wondrously, xenial youth zealously."
                    }
                  />
                </div>
              </div>
            </CardBody>
          </Card>
        </Tab>
        <Tab
          key="Visual input"
          title="Visual input"
          className="mx-[-10px] text-[16px]"
        >
          <Card className="flex flex-row flex-wrap  text-xl">
            <CardBody className="w-full md:w-1/3 flex flex-col gap-3">
              <p className="w-full text-black">
                GPT-4 can accept images as inputs and generate captions,
                classifications, and analyses.
              </p>
              <Link href="#" className="underline">
                Try on chatgpt
              </Link>
            </CardBody>
            <CardBody className="w-3/3 md:w-2/3">
              <div className=" w-[100%] md:w-[80%]  md:ml-auto ">
                <div
                  className="min-h-[200px] flex flex-col gap-2 p-4 text-[17px]"
                  style={{ border: "1px solid black" }}
                >
                  <h2 className="text-2xl">Input</h2>
                  <p>What can I make with these ingredients?</p>
                  <Image src={Egg} alt="egg" />
                </div>
                <div
                  className="min-h-[400px] flex flex-col gap-2 p-4 text-[17px]"
                  style={{ border: "1px solid black" }}
                >
                  <h2 className="text-2xl">Output</h2>
                  <Type
                    lines={
                      "There are many options for what you can make with these ingredients! <br /> Some possibilities include: <br /> - Pancakes or waffles <br /> - Crepes <br /> - French toast <br /> - Omelette or frittata <br /> - Quiche- <br /> Custard or pudding <br /> - Cake or cupcakes <br /> - Muffins or bread  - Cookies or biscuits <br /> <br /> These are just a few examples, but the possibilities are endless!"
                    }
                  />
                </div>
              </div>
            </CardBody>
          </Card>
        </Tab>
        <Tab
          key="Longer context"
          title="Longer context"
          className="mx-[-10px] text-[16px]"
        >
          <Card className="flex flex-row flex-wrap text-xl">
            <CardBody className="w-full md:w-1/3 flex flex-col gap-3">
              <p className="w-full text-black">
                GPT-4 is capable of handling over 25,000 words of text, allowing
                for use cases like long form content creation, extended
                conversations, and document search and analysis.
              </p>
              <Link href="#" className="underline">
                Try on chatgpt
              </Link>
            </CardBody>
            <CardBody className="w-3/3 md:w-2/3">
              <div className=" w-[100%] md:w-[80%]  md:ml-auto ">
                <div
                  className="min-h-[200px] flex flex-col gap-2 p-4 text-[17px]"
                  style={{ border: "1px solid black" }}
                >
                  <h2 className="text-2xl">Input</h2>
                  <p>[Text from: https://en.wikipedia.org/wiki/Rihanna]</p>
                  <p>
                    Describe her Super Bowl performance and what made it
                    special.
                  </p>
                </div>
                <div
                  className="min-h-[250px] flex flex-col gap-2 p-4 text-[17px]"
                  style={{ border: "1px solid black" }}
                >
                  <h2 className="text-2xl">Output</h2>
                  <Type
                    lines={
                      "Rihanna's Super Bowl LVII halftime show performance was special for a number of reasons. For one, it marked her first live performance in over five years, and it was her first time headlining the Super Bowl halftime show. Additionally, she made history by becoming the first person to perform at the Super Bowl while pregnant. The show itself was critically acclaimed, with many praising her high-energy performance and impressive vocals. It also garnered a massive viewership, becoming the second most-watched halftime show in history."
                    }
                  />
                </div>
              </div>
            </CardBody>
          </Card>
        </Tab>
      </Tabs>
    </div>
  );
}
