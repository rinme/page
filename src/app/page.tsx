"use client";
import React from "react";
import { MaskContainer } from "../components/ui/svg-mask";
import { TextGenerateEffect } from "../components/ui/text-generate";

const revealFront = `Welcome to my page, in here there is
`;
var words = ["Hello!", "Hi!", "おはよう!", "Hey!", "YOU THERE!"];
function randomWord(arr: string | any[]) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export default function Home() {
  return (
    <>
      <MaskContainer
        revealText={
          <div className="max-w-4xl mx-auto grow text-slate-800 text-center text-4xl font-bold">
            {randomWord(words)}
            <TextGenerateEffect words={revealFront} />
          </div>
        }
        className=""
      >
        <span className="text-red-500">NOTHING</span> you are going to get from,
        else than my profile.
      </MaskContainer>
    </>
  );
}
