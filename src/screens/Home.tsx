/* eslint-disable @typescript-eslint/no-explicit-any */
import { Fragment, lazy, Suspense, useMemo, useState } from "react";
import { Transition, TransitionGroup } from "react-transition-group";
import prerender from "../utils/prerender";
import { reflow } from "../utils/transition";
import "./Home.css";
import { TextDecrypt } from "../utils/TextDecrypt";
import useInterval from "../hooks/useInterval";
import { media } from "../utils/style";
import { useTheme } from "@mui/material";

const SphereAnim = lazy(() =>
  import("../background/SphereAnim").then((module) => ({
    default: module.SphereAnim,
  }))
);

const Home = (props: any) => {
  const theme = useTheme();
  // console.log(theme);
  const { id, sectionRef, disciplines, scrollIndicatorHidden, ...rest } = props;
  const titleId = `${id}-title`;
  const [disciplineIndex, setDisciplineIndex] = useState(0);
  const currentDisciplines = useMemo(
    () =>
      disciplines.filter(
        (_item: any, index: number) => index === disciplineIndex
      ),
    [disciplineIndex, disciplines]
  );

  useInterval(
    () => {
      const index = (disciplineIndex + 1) % disciplines.length;
      setDisciplineIndex(index);
    },
    5000,
    theme
  );

  return (
    <section
      ref={sectionRef}
      id={id}
      aria-labelledby={titleId}
      tabIndex={-1}
      {...rest}
      className={`home-section section-padding`}
    >
      <Transition
        key={theme.palette.mode}
        appear={!prerender}
        in={!prerender}
        timeout={3000}
        onEnter={reflow}
      >
        {(status) => (
          <Fragment>
            {!prerender && (
              <Suspense>
                <SphereAnim />
              </Suspense>
            )}
            <header className="text-section">
              <h1 className="decrypt-name">
                <TextDecrypt text={"Niraj Kumar"} />
              </h1>
              <h2
                className={"dev-description"}
                style={{
                  fontWeight: `${theme.palette.mode === "light" ? 600 : 500}`,
                }}
              >
                <span
                  className="description-row"
                  style={{ opacity: `${prerender ? 0 : 1}` }}
                >
                  <span
                    className={`developer-word developer-word-delay developer-word-delay`}
                    style={{
                      color: `${
                        theme.palette.mode === "dark"
                          ? "rgba(0, 0, 0, 0)"
                          : "rgba(255, 255, 255, 1)"
                      }`,
                      animationName:
                        theme.palette.mode === "dark"
                          ? "AnimTextRevealDark"
                          : "AnimTextRevealLight",
                    }}
                  >
                    Developer
                  </span>
                  <span
                    className="line"
                    style={{
                      background: `${
                        theme.palette.mode === "light"
                          ? "rgba(0, 0, 0, 0.24)"
                          : "rgba(255,255,255, 0.3)"
                      }`,
                    }}
                  />
                </span>
                <span
                  className="description-row"
                  style={{ opacity: `${prerender ? 0 : 1}` }}
                >
                  <TransitionGroup>
                    {currentDisciplines.map((_item: any, index: any) => (
                      <Transition
                        appear
                        timeout={{ enter: 4000, exit: 2000 }}
                        key={_item + "_" + index}
                        onEnter={reflow}
                      >
                        {(wordStatus) => (
                          <span
                            key={_item + "_" + index}
                            className="add-plus developer-word developer-word-delay2"
                            style={
                              wordStatus === "exiting"
                                ? {
                                    color: `${
                                      theme.palette.mode === "light"
                                        ? "rgba(0, 0, 0, 0)"
                                        : "rgba(255, 255, 255, 0)"
                                    }`,
                                    opacity: 0,
                                    position: "absolute",
                                    top: 0,
                                    zIndex: 0,
                                    animationName:
                                      theme.palette.mode === "dark"
                                        ? "AnimTextRevealDark"
                                        : "AnimTextRevealLight",
                                  }
                                : {
                                    color: `${
                                      theme.palette.mode === "light"
                                        ? "rgba(0, 0, 0, 0)"
                                        : "rgba(255, 255, 255, 0)"
                                    }`,
                                    animationName:
                                      theme.palette.mode === "dark"
                                        ? "AnimTextRevealDark"
                                        : "AnimTextRevealLight",
                                  }
                            }
                          >
                            {_item}
                          </span>
                        )}
                      </Transition>
                    ))}
                  </TransitionGroup>
                </span>
              </h2>
            </header>
            {window.innerWidth > media.tablet && (
              <div
                className={`scroll-indicator ${
                  theme.palette.mode === "light"
                    ? "addbefore-light"
                    : "addbefore-dark"
                }`}
                style={{
                  opacity: `${
                    status === "entered" && !scrollIndicatorHidden ? 1 : 0
                  }`,
                  transform: `translate3d(0, ${
                    scrollIndicatorHidden ? "20px" : 0
                  }, 0)`,
                  border: `2px solid ${
                    theme.palette.mode === "light"
                      ? "rgba(0, 0, 0, 0.32)"
                      : "rgba(255, 255, 255, 0.4)"
                  }`,
                }}
              ></div>
            )}
            {window.innerWidth <= media.tablet && (
              <div
                className="mobile-scroll-indicator"
                style={{
                  opacity: `${
                    status === "entered" && !scrollIndicatorHidden ? 1 : 0
                  }`,
                  transform: `translate3d(0, ${
                    scrollIndicatorHidden ? "20px" : 0
                  }, 0)`,
                }}
              >
                <svg
                  style={{
                    display: "block",
                    stroke: `${
                      theme.palette.mode === "light"
                        ? "rgba(0, 0, 0, 0.4)"
                        : "rgba(255, 255, 255, 0.5)"
                    }`,
                  }}
                  stroke={"white"}
                  width="43"
                  height="15"
                  viewBox="0 0 43 15"
                >
                  <path d="M1 1l20.5 12L42 1" strokeWidth="2" fill="none" />
                </svg>
              </div>
            )}
          </Fragment>
        )}
      </Transition>
    </section>
  );
};

export default Home;
