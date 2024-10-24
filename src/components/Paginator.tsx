import {Dispatch, SetStateAction} from "react";

interface Props {
  paginator: {
    limit: number;
    offset: number;
  };
  setPaginator: Dispatch<
    SetStateAction<{
      limit: number;
      offset: number;
    }>
  >;
}

function Paginator({paginator, setPaginator}: Props) {
  return (
    <div className="w-100 mt-5 mt-auto flex items-center justify-center space-x-6">
      <button
        className={`rounded px-4 py-1 font-semibold ${paginator.offset < 12 ? "bg-gray-800 text-gray-500" : "border border-red-500 text-red-500 transition-colors duration-200 hover:bg-red-500 hover:text-white"}`}
        disabled={paginator.offset < 12}
        type="button"
        onClick={() => setPaginator({...paginator, offset: paginator.offset - 12})}
      >
        Prev
      </button>
      <p className="italic">
        Page <span className="text-lg font-bold">{paginator.offset / 12 + 1}</span>
      </p>
      <button
        className={`rounded px-4 py-1 font-semibold ${paginator.offset >= 649 ? "bg-gray-800 text-gray-500" : "border border-red-500 text-red-500 transition-colors duration-200 hover:bg-red-500 hover:text-white"}`}
        disabled={paginator.offset >= 650}
        type="button"
        onClick={() => setPaginator({...paginator, offset: paginator.offset + 12})}
      >
        Next
      </button>
    </div>
  );
}

export default Paginator;
