import React, { useState } from "react";
import Image from "next/image";

const theme = [
  //   "bg-[#100F0F] text-[#F5E8E4]",
  "bg-[#FFFBE9] text-[#100F0F]",
  "bg-[#FCE2DB] text-[#100F0F]",
  "bg-[#F5C7A9] text-[#100F0F]",
  "bg-[#B8FFF9] text-[#100F0F]",
];

const AllNotes = ({
  allNotes,
  deleteNote,
  editNote,
}: {
  allNotes: Record<string, any>[];
  deleteNote: (x: number) => void;
  editNote: (x: number, y: string, z: string) => void;
}) => {
  return (
    <div className="py-20">
      <div className="text-[#E2DCC8] text-32 pb-8 flex">
        <div className="pr-8">Previously added notes </div>

        <Image
          src={"/book-open-solid.svg"}
          width={28}
          height={28}
          alt={"all-notes"}
        />
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 md:gap-x-12 gap-y-12 ">
        {allNotes?.length === 0 && (
          <div className="text-[#E2DCC8]">No notes present to show</div>
        )}
        {allNotes?.map((note, index) => {
          return (
            <div
              key={note.id}
              className={`flex flex-col relative ${
                theme[index % 4]
              } p-8 rounded-8`}
            >
              <div className="flex space-x-8 absolute top-8 right-8 ">
                <div
                  onClick={() => {
                    editNote(note.id, note.title, note.content);
                  }}
                  className="bg-[#F7F7F7] hover:bg-[#d2d2d2] px-4 pt-4 rounded-4 cursor-pointer border border-[#A0BCC2]"
                >
                  <Image src={"/edit.svg"} width={18} height={18} alt="edit" />
                </div>
                <div
                  onClick={() => {
                    deleteNote(note.id);
                  }}
                  className="bg-[#F7F7F7] hover:bg-[#d2d2d2] px-4 pt-4 rounded-4 cursor-pointer  border border-[#A0BCC2] "
                >
                  <Image
                    src={"/delete.svg"}
                    width={18}
                    height={18}
                    alt="edit"
                  />
                </div>
              </div>
              <div
                className={`pb-8 flex justify-between pr-60 text-20 font-600`}
              >
                {note.title}
              </div>
              <div className="">{note.content}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllNotes;
