export const Logo = () => {
  return (
    <>
      <div className="flex items-center gap-[7.5px] lg:px-17">
        <div className="rounded-[14px] bg-purple-600 p-2">
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-6 w-6 text-white"
          >
            <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z" />
          </svg>
        </div>

        <h1 className="bg-linear-to-r from-purple-600 to-violet-600 bg-clip-text text-xl font-bold text-transparent">
          AI Academy
        </h1>
      </div>
    </>
  );
};
