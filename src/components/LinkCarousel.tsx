import { Stack } from "@mui/material";
import { useMemo } from "react";

type LinkProps = {
  link: string;
  name: string;
};

export function Link({ link, name }: NonNullable<LinkProps>) {
  return (
    <div className="items-center hidden px-4 py-2 mx-2 mt-6 rounded-lg cursor-pointer md:flex w-52 border-solid border-2 border-black md:m-4 hover:scale-110 md:w-48">
      <img alt="" src={link} className="w-12" />
      <h4 className="ml-4 text-md">{name}</h4>
    </div>
  );
}

export default function LinkCarousel({
  links,
  repeat = 2,
}: {
  links: LinkProps[];
  repeat?: number;
}) {
  const repeatedLinks = useMemo(
    () => Array.from({ length: repeat }, () => links).flat(),
    [links, repeat]
  );

  const animationDurations = useMemo(
    () => [Math.random() * 30 + 40, Math.random() * 30 + 40],
    []
  );

  return (
    <Stack
      gap={1}
      sx={{
        position: "relative",
        py: ".8rem",
        overflow: "hidden",
        width: "100%",
        marginX: -5,
        maskImage:
          "linear-gradient(to right, transparent, black 20%, black 80%, transparent)",
        "& > *": {
          "@keyframes slide": {
            "0%": {
              transform: "translateX(0)",
            },
            "100%": {
              transform: `translateX(calc(-${
                (repeat - 1) * (100 / repeat)
              }% - 8px))`,
            },
          },
        },
      }}
    >
      {[repeatedLinks, repeatedLinks.slice().reverse()].map((_links, i) => (
        <Stack
          key={i}
          direction="row"
          gap={1}
          sx={{
            width: "max-content",
            animation: `slide ${animationDurations[i]}s linear infinite`,
            "&:hover": {
              animationPlayState: "paused",
            },
          }}
        >
          {_links.map((link, index) => (
            <Link {...link} key={index} />
          ))}
        </Stack>
      ))}
    </Stack>
  );
}
