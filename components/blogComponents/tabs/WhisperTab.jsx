"use client";
import React from "react";
import Link from "next/link";
import { WhisperTypography } from "../Typography/WhisperTypoGraphy";

export default function App() {
  return (
    <div className="flex w-[98%] flex-col text-green-500">
      {/* <Tabs aria-label="Options" variant="underlined"> */}
      <div>
        <div
          key="Advance reasoning"
          title="Advance reasoning"
          className="mx-[-10px] text-[16px]"
        >
          <div className="flex flex-row flex-wrap text-xl bg-[#51DA4C]">
            <div className="w-full md:w-1/3 flex flex-col gap-3">
              <p className="w-full text-black">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Dolores corrupti illo praesentium nobis fuga sapiente ipsa vitae
                rerum aut quaerat.
              </p>
              <Link href="#" className="underline text-black">
                Try on chatgpt
              </Link>
            </div>
            <div className="w-3/3 md:w-2/3">
              <div className=" w-[100%] md:w-[80%]  md:ml-auto ">
                <div
                  className="min-h-[100px] flex flex-col gap-2 p-4 text-[17px] text-black"
                  style={{ border: "1px solid black" }}
                >
                  <h2 className="text-2xl">Input</h2>
                  <audio
                    controls
                    className="outline-none focus:outline-none w-[98%] mx-auto"
                  >
                    <source
                      src="/example.mp3"
                      type="audio/mp3"
                      className="bg-[#3FA93B]"
                    />
                    Your browser does not support the audio tag.
                  </audio>
                </div>
                <div
                  className="min-h-[400px] flex flex-col gap-2 p-4 text-[17px] text-black"
                  style={{ border: "1px solid black" }}
                >
                  <h2 className="text-2xl">Output</h2>
                  <WhisperTypography
                    lines={
                      "This is the Micro Machine Man presenting the most midget miniature motorcade of Micro Machines. Each one has dramatic details, terrific trim, precision paint jobs, plus incredible Micro Machine Pocket Play Sets. There's a police station, fire station, restaurant, service station, and more. Perfect pocket portables to take any place. And there are many miniature play sets to play with, and each one comes with its own special edition Micro Machine vehicle and fun, fantastic features that miraculously move. Raise the boatlift at the airport marina. Man the gun turret at the army base. Clean your car at the car wash. Raise the toll bridge. And these play sets fit together to form a Micro Machine world. Micro Machine Pocket Play Sets, so tremendously tiny, so perfectly precise, so dazzlingly detailed, you'll want to pocket them all. Micro Machines are Micro Machine Pocket Play Sets sold separately from Galoob. The smaller they are, the better they are."
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* </Tabs> */}
    </div>
  );
}
