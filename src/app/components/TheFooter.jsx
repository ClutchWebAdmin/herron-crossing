import Logo from "./Logo";

export default function TheFooter() {
  return (
    <footer className="bg-primaryDark text-white">
      <div className="m-5 lg:m-10">
        <div className="w-full lg:w-1/2 h-auto">
          <Logo color={`var(--white)`} />
        </div>
      </div>
    </footer>
  );
}
