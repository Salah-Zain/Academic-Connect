const Greeting = ({ greeting, name }) => {
  return (
    <>
      <div className="flex flex-col justify-center items-start gap-2 whitespace-nowrap w-[30%]">
        <h1>{greeting}</h1>
        <h1>{name}</h1>
      </div>
    </>
  );
};

export default Greeting;
