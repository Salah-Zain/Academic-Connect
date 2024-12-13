import React from "react";

const StudentSectionThree = () => {
  return (
    <div className="w-[100%] container flex justify-center items-center bg-zinc-700">
      <div className="container-wrap max-w-[100%] w-[1400px] bg-slate-500">
        <h1 className="text-center p-5">Grade</h1>
        <section className="wfull grid grid-cols-1 text-center m-5 gap-5 content-normal sm:grid-cols-2 lg:grid-cols-6">
          <div className="border rounded-lg p-2">
            <h1 className="p-2">1st Mid Term</h1>
            <button className="px-8 py-2 mt-2 text-sm rounded-md border">
              View →
            </button>
          </div>
          <div className="border rounded-lg p-2">
            <h1 className="p-2">1st Term</h1>
            <button className="px-8 py-2 mt-2 text-sm rounded-md border">
              View →
            </button>
          </div>
          <div className="border rounded-lg p-2">
            <h1 className="p-2">2nd Mid Term</h1>
            <button className="px-8 py-2 mt-2 text-sm rounded-md border">
              View →
            </button>
          </div>
          <div className="border rounded-lg p-2">
            <h1 className="p-2">2nd Term</h1>
            <button className="px-8 py-2 mt-2 text-sm rounded-md border">
              View →
            </button>
          </div>
          <div className="border rounded-lg p-2">
            <h1 className="p-2">3rd Mid Term</h1>
            <button className="px-8 py-2 mt-2 text-sm rounded-md border">
              View →
            </button>
          </div>
          <div className=" border rounded-lg p-2 flex-col justify-center">
            <h1 className="p-2">3rd Term</h1>

            <button className="px-8 py-2 mt-2 text-sm rounded-md border">
              View →
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default StudentSectionThree;
