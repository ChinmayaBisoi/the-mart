import React, { useEffect } from "react";
import Image from "next/image";
const AddNote = ({
  content,
  title,
  setTitle,
  setContent,
  addNote,
  showErr,
  setShowErr,
}: {
  content: any;
  title: string;
  setTitle: (x: string) => void;
  setContent: (x: string) => void;
  addNote: () => void;
  showErr: boolean;
  setShowErr: (x: boolean) => void;
}) => {
  useEffect(() => {
    if (showErr === true) {
      setTimeout(() => {
        setShowErr(false);
      }, 3000);
    }
  }, [showErr]);

  return (
    <>
      <div className="flex items-center text-[#E2DCC8] text-32 pb-8">
        <div className="pr-8">Add a new note</div>
        <Image src="/book-solid.svg" width={25} height={25} alt={"add-note"} />
      </div>
      <div className="container">
        <div className="flex space-y-8 flex-col">
          <div className="px-10 py-8 bg-[#F1F1F1] rounded-4">
            <input
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              required={true}
              value={title}
              type="text"
              placeholder="Add a title..."
              className="outline-none w-full bg-[#F1F1F1]"
            />
          </div>
          <div className="px-10 py-8 bg-[#F1F1F1] rounded-4">
            <textarea
              required={true}
              onChange={(e) => {
                setContent(e.target.value);
              }}
              value={content}
              placeholder="Add content..."
              name="note"
              id=""
              cols={30}
              rows={5}
              className="outline-none w-full bg-[#F1F1F1] resize-none"
            />
          </div>
          <div className="flex items-center">
            <div
              onClick={addNote}
              className="cursor-pointer hover:bg-[#579726] bg-[#5BB318] text-[#100F0F] font-700 py-8 w-100 rounded-4 text-center ripple duration-300"
            >
              Add Note
            </div>
            {showErr && (
              <div className="ml-14 rounded-8 flex px-4 py-3 items-center bg-[#FFEEEE] text-[#FF5D5D] text-14">
                <div className="min-w-16 h-16">
                  <Image
                    src="/circle-exclamation-solid.svg"
                    alt="error"
                    width={14}
                    height={14}
                  />
                </div>
                <div className="pl-5">Title or content cannot be empty!</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default AddNote;
