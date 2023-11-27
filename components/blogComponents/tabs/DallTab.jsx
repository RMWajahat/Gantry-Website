"use client";
import React from "react";
import { Tabs, Tab, Card, CardBody, Slider } from "@nextui-org/react";
import Link from "next/link";
import ImageSlider from "../Slides/slider";
import girl1 from "../../../public/blogImages/girl1.jpg";
import girl2 from "../../../public/blogImages/girl2.png";

import pool1 from "../../../public/blogImages/pool1.jpg";
import pool2 from "../../../public/blogImages/pool2.jpg";
import pool3 from "../../../public/blogImages/pool3.jpg";
import pool4 from "../../../public/blogImages/pool4.jpg";
import pool5 from "../../../public/blogImages/pool5.jpg";
import pool6 from "../../../public/blogImages/pool6.jpg";

import horse1 from "../../../public/blogImages/horse1.jpg";
import horse2 from "../../../public/blogImages/horse2.jpg";
import horse3 from "../../../public/blogImages/horse3.jpg";
import horse4 from "../../../public/blogImages/horse4.jpg";
import horse5 from "../../../public/blogImages/horse5.jpg";

import robo1 from "../../../public/blogImages/robo1.jpg";
import robo2 from "../../../public/blogImages/robo2.jpg";
import robo3 from "../../../public/blogImages/robo3.jpg";
import robo4 from "../../../public/blogImages/robo4.jpg";
import robo5 from "../../../public/blogImages/robo5.jpg";
import robo6 from "../../../public/blogImages/robo6.jpg";

import { MdOutlineArrowOutward } from "react-icons/md";

const poolImages = [pool2, pool3, pool4, pool5, pool6];
const horseImages = [horse1, horse2, horse3, horse4, horse5];
const roboImages = [robo2, robo3, robo4, robo5, robo6];

import Image from "next/image";

export default function App() {
  return (
    <div className="flex w-[98%] flex-col text-green-500">
      <Tabs
        aria-label="Options"
        variant="underlined"
        className="text-green"
        color="success"
      >
        <Tab
          color="secondary"
          key="Advance reasoning"
          title="Advance reasoning"
          className="mx-[-10px] text-[16px]"
        >
          <Card className="flex flex-row flex-wrap text-xl bg-[#28044A] text-green">
            <CardBody className="w-full md:w-1/3 flex flex-col gap-3">
              <p className="w-full text-green">
                DALL·E 2 can create original, realistic images and art from a
                text description. It can combine concepts, attributes, and
                styles.
              </p>
              <Link href="#" className="underline flex gap-2 items-center">
                Try on DALL-TAB <MdOutlineArrowOutward />
              </Link>
            </CardBody>
            <CardBody className="w-3/3 md:w-2/3">
              <div className=" w-[100%] md:w-[80%]  md:ml-auto ">
                <div
                  className="min-h-[200px] flex flex-col gap-2 p-4 text-[17px]"
                  style={{ border: "1px solid green" }}
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
                  className="min-h-[400px] flex flex-col gap-4 p-4 text-[17px]"
                  style={{ border: "1px solid green" }}
                >
                  <h2 className="text-2xl">Output</h2>
                  <ImageSlider pool={horseImages} />
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
          <Card className="flex flex-row flex-wrap text-xl bg-[#28044A] text-green">
            <CardBody className="w-full md:w-1/3 flex flex-col gap-3">
              <p className="w-full text-green">
                DALL·E 2 can expand images beyond what’s in the original canvas,
                creating expansive new compositions.
              </p>
              <Link href="#" className="underline flex gap-2 items-center">
                Try on DALL-TAB <MdOutlineArrowOutward />
              </Link>
            </CardBody>
            <CardBody className="w-3/3 md:w-2/3">
              <div className=" w-[100%] md:w-[80%]  md:ml-auto ">
                <div
                  className="min-h-[200px] flex flex-col gap-2 p-4 text-[17px]"
                  style={{ border: "1px solid green" }}
                >
                  <h2 className="text-2xl">Input</h2>
                  <Image src={girl1} height={500} width={700} alt="girl 1" />
                </div>
                <div
                  className="min-h-[400px] flex flex-col gap-2 p-4 text-[17px]"
                  style={{ border: "1px solid green" }}
                >
                  <h2 className="text-2xl">Output</h2>
                  <Image src={girl2} height={400} width={700} alt="girl 2" />
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
          <Card className="flex flex-row flex-wrap text-xl bg-[#28044A] text-green">
            <CardBody className="w-full md:w-1/3 flex flex-col gap-3">
              <p className="w-full text-green">
                DALL·E 2 can make realistic edits to existing images from a
                natural language caption. It can add and remove elements while
                taking shadows, reflections, and textures into account.
              </p>
              <Link href="#" className="underline flex gap-2 items-center">
                Try on DALL-TAB <MdOutlineArrowOutward />
              </Link>
            </CardBody>
            <CardBody className="w-3/3 md:w-2/3">
              <div className=" w-[100%] md:w-[80%]  md:ml-auto ">
                <div
                  className="min-h-[200px] flex flex-col gap-2 p-4 text-[17px]"
                  style={{ border: "1px solid green" }}
                >
                  <h2 className="text-2xl">Input</h2>
                  <p>Add a flamingo beside the pool.</p>
                  <Image
                    src={pool1}
                    height={400}
                    width={600}
                    alt="Stripe img"
                  />
                </div>
                <div
                  className="min-h-[400px] flex flex-col gap-2 p-4 text-[17px]"
                  style={{ border: "1px solid green" }}
                >
                  <h2 className="text-2xl">Output</h2>
                  <ImageSlider pool={poolImages} />
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
          <Card className="flex flex-row flex-wrap text-xl bg-[#28044A] text-green">
            <CardBody className="w-full md:w-1/3 flex flex-col gap-3bg-[#28044A] text-green">
              <p className="w-full">
                DALL·E 2 can take an image and create different variations of it
                inspired by the original.
              </p>
              <Link href="#" className="underline flex gap-2 items-center">
                Try on DALL-TAB <MdOutlineArrowOutward />
              </Link>
            </CardBody>
            <CardBody className="w-3/3 md:w-2/3">
              <div className=" w-[100%] md:w-[80%]  md:ml-auto ">
                <div
                  className="min-h-[200px] flex flex-col gap-2 p-4 text-[17px]"
                  style={{ border: "1px solid green" }}
                >
                  <h2 className="text-2xl">Input</h2>
                  <div className="relative w-full">
                    <Image
                      src={robo1}
                      height={400}
                      width={600}
                      alt="Stripe img"
                    />
                  </div>
                </div>
                <div
                  className="min-h-[400px] flex flex-col gap-2 p-4 text-[17px]"
                  style={{ border: "1px solid green" }}
                >
                  <h2 className="text-2xl">Output</h2>
                  <ImageSlider pool={roboImages} />
                </div>
              </div>
            </CardBody>
          </Card>
        </Tab>
      </Tabs>
    </div>
  );
}
