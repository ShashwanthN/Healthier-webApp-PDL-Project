import React from "react";

function BentoBox() {
  return (
    <main className="flex">
    
      <section className="grid grid-cols-3 gap-4">
        <div className="p-6 border bg-bgAccent rounded-md flex-col flex gap-1 col-span-1 row-span-1">
          hello
        </div>
        <div className="p-6 border flex-col flex gap-1 col-span-1 row-span-1">
          hello
        </div>
        <div className="p-6 border flex-col flex gap-1 col-span-2 row-span-1">
          hello
        </div>
        <div className="p-6 border flex-col flex gap-1 col-span-1 row-span-2">
          hello
        </div>
      </section>
    </main>
  );
}

export default BentoBox;
