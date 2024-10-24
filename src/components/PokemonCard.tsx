"use client";

import Image from "next/image";
import {useEffect, useState} from "react";

import {getTypes} from "@/lib/utlis";

interface Props {
  src: string;
  name: string;
  url: string;
}

function PokemonCard({src, name, url}: Props) {
  const [types, setTypes] = useState<string[]>([]);

  useEffect(() => {
    const fecthType = async () => {
      setTypes(await getTypes(url));
    };

    fecthType();
  });

  return (
    <li className="cursor-pointer list-none rounded px-4 py-2 transition-transform duration-200 hover:scale-[1.1]">
      <div className="flex items-center justify-start">
        <Image
          alt={`Pokemon - ${name}`}
          className="h-[210px] w-[210px] drop-shadow-2xl"
          height={210}
          loading="lazy"
          src={src}
          width={210}
        />
      </div>
      <div className="flex flex-col justify-start">
        <h4 className="mt-2 text-xl font-bold capitalize">{name}</h4>
        <div className="flex space-x-1">
          {types !== undefined &&
            types.map((type, i) => (
              <span key={i} className={`rounded-2xl px-6 py-1 text-xs font-bold ${type}`}>
                {type}
              </span>
            ))}
        </div>
      </div>
    </li>
  );
}

export default PokemonCard;
