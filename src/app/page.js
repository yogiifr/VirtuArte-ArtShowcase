import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-white text-black h-screen">
      <div className="flex justify-between  py-[50px] px-[150px] items-center">
        <img className="w-auto h-[75px]" src="https://img.icons8.com/?size=512&id=kdbS3oguINvB&format=png" alt="logo" />
        <div className="text-[40px]">
          VIRTU<span className="italic">ARTE</span>
        </div>
        <img className="w-auto h-[50px]" src="https://img.icons8.com/?size=512&id=8113&format=png" alt="menu" />
      </div>

      <div className="grid grid-cols-4 justify-center px-[100px] align-middle text-center h-5/6">
        <div className="bg-slate-50 flex flex-col justify-end items-start pl-10 pb-5">
          <div className="text-[100px] text-left w-2/3 leading-[100px]">Leonardo da Vinci</div>
        </div>
        <div className=" flex flex-col justify-end items-start pl-10 pb-5">
          <div className="text-[100px] text-left w-3/4 leading-[100px]">Vincent van Gogh</div>
        </div>
        <div className="bg-slate-50 flex flex-col justify-end items-start pl-10 pb-5">
          <div className="text-[100px] text-left w-2/3 leading-[100px]">Frida Kahlo</div>
        </div>
        <div className=" flex flex-col justify-end items-start pl-10 pb-5">
          <div className="text-[100px] text-left w-2/3 leading-[100px]">Pablo Picasso</div>
        </div>
      </div>
    </main>
  );
}

// Make Burger Menu
