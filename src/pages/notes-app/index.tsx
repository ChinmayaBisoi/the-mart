import React, { useEffect, useState } from "react";
import Image from "next/image";
import AddNote from "../../components/notes-app/add-note";
import AllNotes from "../../components/notes-app/all-notes";

const akk = [
  {
    id: 3,
    title: "Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello ",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam perferendis excepturi maxime culpa quisquam quas, adipisci alias minima illum, non esse soluta dolor cumque ipsa itaque tempore enim dignissimos impedit.",
  },
  {
    id: 2,
    title: "Hello",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam perferendis excepturi maxime culpa quisquam quas, adipisci alias minima illum, non esse soluta dolor cumque ipsa itaque tempore enim dignissimos impedit.",
  },
  {
    id: 1,
    title: "Hello",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam perferendis excepturi maxime culpa quisquam quas, adipisci alias minima illum, non esse soluta dolor cumque ipsa itaque tempore enim dignissimos impedit.",
  },
];

const Index = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [allNotes, setAllNotes] = useState(akk);
  const [showErr, setShowErr] = useState(false);

  const deleteNote = (id: number) => {
    setAllNotes(allNotes.filter((x) => x.id != id));
  };

  const addNote = () => {
    let newNote = { title: "", content: "", id: 0 };
    if (title != "" && content != "") {
      newNote.title = title;
      newNote.content = content;
      if (allNotes.length === 0) {
        newNote.id = 1;
      } else {
        newNote.id = allNotes[0].id + 1;
      }

      setAllNotes([newNote, ...allNotes]);

      setTitle("");
      setContent("");
    } else {
      setShowErr(true);
    }
  };

  const editNote = (id: number, title: string, content: string) => {
    setAllNotes(allNotes.filter((x) => x.id != id));
    setTitle(title);
    setContent(content);
  };

  return (
    <div
      style={{ fontFamily: "Rubik" }}
      className="bg-[#0F3D3E] min-h-screen md:pt-50 pb-50 pt-20 grid grid-cols-9"
    >
      <div className="px-16 md:px-0 md:col-start-3 md:col-span-5 col-span-full">
        <AddNote
          content={content}
          setContent={setContent}
          title={title}
          setTitle={setTitle}
          addNote={addNote}
          showErr={showErr}
          setShowErr={setShowErr}
        />
        <AllNotes
          allNotes={allNotes}
          deleteNote={deleteNote}
          editNote={editNote}
        />
      </div>
    </div>
  );
};

export default Index;
