import { Fragment, lazy, Suspense, useContext, useMemo, useState } from "react";
import { Transition } from "react-transition-group";
import { ThemeContext } from "../context/ThemeProvider";
import prerender from "../utils/prerender";
import { reflow } from "../utils/transition";
import useParallax from "../hooks/useParallax";
import "./Home.css";
import { TextDecrypt } from "../utils/TextDecrypt";
import useInterval from "../hooks/useInterval";

/* eslint-disable @typescript-eslint/no-explicit-any */
const SphereAnim = lazy(() => import("../background/SphereAnim"));

const Home = (props: any) => {
  const { theme } = useContext(ThemeContext);
  const { id, sectionRef, disciplines, ...rest } = props;
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
                  {currentDisciplines.map((_item: any, index: any) => (
                    <span
                      key={_item + "_" + index}
                      className="add-plus developer-word developer-word-delay2"
                      style={
                        status === "exiting"
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
                  ))}
                </span>
              </h2>
            </header>
          </Fragment>
        )}
      </Transition>
    </section>
  );
};

export default Home;
