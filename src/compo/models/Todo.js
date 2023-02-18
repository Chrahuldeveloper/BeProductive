import React, { useEffect, useState, useCallback } from "react";
import { RxCross1 } from "react-icons/rx";
import { RiDeleteBin6Line } from "react-icons/ri";
export default function Todo({ openmodel, setopenmodel }) {
  const [Todo, setTodo] = useState([]);
  const [AddTodo, setAddTodo] = useState("");

  useEffect(() => {
    const Storedlists = JSON.parse(localStorage.getItem("Tasks"));
    setTodo(Storedlists);
  }, []);

  const handleaddtodo = useCallback(() => {
    setTodo([...Todo, AddTodo]);
    localStorage.setItem("Tasks", JSON.stringify([...Todo, AddTodo]));
    setAddTodo("");
  }, [AddTodo, Todo]);

  const Delete = (id) => {
    const Newlist = Todo.filter((item) => {
      return item !== id;
    });
    setTodo(Newlist);
    localStorage.setItem("Tasks", JSON.stringify(Newlist));
  };

  useEffect(() => {
    const keyhandler = (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        handleaddtodo();
      }
    };
    document.addEventListener("keydown", keyhandler);
    return () => {
      document.removeEventListener("keydown", keyhandler);
    };
  }, [handleaddtodo]);

  return (
    <div className="fixed inset-0 h-full flex justify-center items-center bg-opacity-25 backdrop-blur-sm bg-[#1a1a1a]">
      <div className="bg-black border-2 rounded-xl border-[#131618] w-[80vw] md:w-[30vw]">
        <div className="flex justify-end px-4 py-3">
          <RxCross1
            size={20}
            color="white"
            cursor="pointer"
            onClick={() => {
              setopenmodel(!openmodel);
            }}
          />
        </div>
        <div
          className="flex flex-col items-center text-white 
        space-y-5"
        >
          <h1 className="text-center text-3xl">Todo✍️</h1>
          <input
            type="text"
            value={AddTodo}
            onChange={(e) => setAddTodo(e.target.value)}
            placeholder="What needs to be done?"
            className=" border-2 border-[#131618] bg-transparent outline-none px-20  py-4"
          />
        </div>
        <div className="my-2 p-2">
          {Todo.map((item, index) => {
            return (
              <>
                <div
                  key={index}
                  className="text-white border-2 py-2 border-[#131618] flex justify-between items-center space-x-5 px-10"
                >
                  <div>
                    <p key={index}>{item}</p>
                  </div>
                  <RiDeleteBin6Line
                    size={20}
                    color="#888888"
                    cursor="pointer"
                    onClick={() => Delete(item)}
                  />
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}
