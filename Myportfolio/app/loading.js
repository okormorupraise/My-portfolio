"use client"
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
const Loading = () => {
  return (
    <div className="h-screen bg-white">
    <div className="flex justify-center items-center h-full">
      <Image className="h-16 w-16" src="https://icons8.com/preloaders/preloaders/1488/Iphone-spinner-2.gif" alt="" width={100} height={100}/>
    </div>
    </div>
  );
};

export default Loading