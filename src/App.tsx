import ButtonComponents from "./components/compIndex";

const App = () => {
  return (
    <div className="p-6 space-y-10 md:p-12 lg:px-16 lg:py-12 xl:px-20 xl:py-12 2xl:px-24 2xl:py-12">
      <span className="text-lg sm:text-xl md:text-2xl 2xl:text-3xl text-gray-450 font-poppins">
        Buttons
      </span>
      <ButtonComponents />
      <div className="space-x-2 text-xs text-gray-450 font-poppins">
        <span>Icons:</span>
        <a
          className="text-sm text-blue-500 underline"
          href="https://heroicons.com/"
          target="_blank"
          rel="noreferrer noopener"
        >
          Heroicons
        </a>
      </div>
      <div className="flex justify-center">
        <footer className="font-poppins">
          <a
            className="text-xs text-blue-500 underline"
            href="https://github.com/Noobsiecoder"
            target="_blank"
            rel="noreferrer noopener"
          >
            NoobsieCoder@DevChallenges.io
          </a>
        </footer>
      </div>
    </div>
  );
};

export default App;
