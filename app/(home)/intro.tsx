import clsx from "clsx";

export const Intro = () => {
  return (
    <div
      className={clsx(
        "bg-green-100",
        "w-full",
        "h-80",
        "flex",
        "justify-center",
        "items-center",
        "flex-col"
      )}
    >
      <p
        className={clsx(
          "md:text-4xl",
          "text-2xl",
          "font-extrabold",
          "text-center",
          "px-10"
        )}
      >
        HTTP response status codes
      </p>
      <p className={clsx("mt-5", "font-light", "text-xl")}>ver.한국어</p>
    </div>
  );
};
