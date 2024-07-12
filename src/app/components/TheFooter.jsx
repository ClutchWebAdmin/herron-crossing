import Logo from "./Logo";

export default function TheFooter() {
  return (
    <footer className="flex bg-primaryDark text-white">
      <div className="m-5 lg:m-10">
        <div className="w-auto h-[50px]">
          <Logo color={`var(--white)`} />
        </div>
      </div>
    </footer>
  );
}
