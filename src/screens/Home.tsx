import { Fragment, lazy, Suspense, useContext, useMemo, useState } from "react";
import { Transition, TransitionGroup } from "react-transition-group";
import { ThemeContext } from "../context/ThemeProvider";
import prerender from "../utils/prerender";
import { reflow } from "../utils/transition";
import useParallax from "../hooks/useParallax";
import "./Home.css";
import { TextDecrypt } from "../utils/TextDecrypt";
import useInterval from "../hooks/useInterval";
import { media } from "../utils/style";

/* eslint-disable @typescript-eslint/no-explicit-any */
const SphereAnim = lazy(() => import("../background/SphereAnim"));

const Home = (props: any) => {
  const { theme } = useContext(ThemeContext);
  const { id, sectionRef, disciplines, scrollIndicatorHidden, ...rest } = props;
  const offset = useParallax(-0.6);
  const titleId = `${id}-title`;
  const [disciplineIndex, setDisciplineIndex] = useState(0);
  const currentDisciplines = useMemo(
    () =>
      disciplines.filter(
        (item: any, index: number) => index === disciplineIndex
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
        key={theme}
        appear={!prerender}
        in={!prerender}
        timeout={3000}
        onEnter={reflow}
      >
        {(status) => (
          <Fragment>
            {!prerender && (
              <Suspense fallback={null}>
                <SphereAnim
                  style={{
                    transform: `translate3d(0, ${offset}px, 0)`,
                    position: "fixed",
                  }}
                />
              </Suspense>
            )}
            <header className="text-section">
              <h1
                className="decrypt-name"
                style={{
                  color: `${
                    theme === "light"
                      ? "rgba(rgba(0, 0, 0, 0.8)"
                      : "rgba(255, 255, 255, 1)"
                  }`,
                }}
              >
                <TextDecrypt text={"Niraj Kumar"} />
              </h1>
              <h2
                className={"dev-description"}
                style={{ fontWeight: `${theme === "light" ? 600 : 500}` }}
              >
                <span
                  className="description-row"
                  style={{ opacity: `${prerender ? 0 : 1}` }}
                >
                  <span
                    className={`developer-word developer-word-delay developer-word-delay`}
                    style={{
                      color: `${
                        theme === "light"
                          ? "rgba(0, 0, 0, 0)"
                          : "rgba(255, 255, 255, 1)"
                      }`,
                    }}
                  >
                    Developer
                  </span>
                  <span
                    className="line"
                    style={{
                      background: `${
                        theme === "light"
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
                        timeout={{ enter: 3000, exit: 2000 }}
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
                                      theme === "light"
                                        ? "rgba(0, 0, 0, 0)"
                                        : "rgba(255, 255, 255, 1)"
                                    }`,
                                    opacity: 0,
                                    position: "absolute",
                                    top: 0,
                                    zIndex: 0,
                                  }
                                : {
                                    color: `${
                                      theme === "light"
                                        ? "rgba(0, 0, 0, 0)"
                                        : "rgba(255, 255, 255, 1)"
                                    }`,
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
                  theme === "light" ? "addbefore-light" : "addbefore-dark"
                }`}
                style={{
                  opacity: `${
                    status === "entered" && !scrollIndicatorHidden ? 1 : 0
                  }`,
                  transform: `translate3d(0, ${
                    scrollIndicatorHidden ? "20px" : 0
                  }, 0)`,
                  border: `2px solid ${
                    theme === "light"
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
                      theme === "light"
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
