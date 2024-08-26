/* eslint-disable @typescript-eslint/no-explicit-any */
import { Transition } from "react-transition-group";
import { reflow } from "../utils/transition";
import { Fragment } from "react/jsx-runtime";
import { memo, useContext } from "react";
import { ThemeContext } from "../context/ThemeProvider";
import "./Project.css";
import dttProject from "../assets/images/dtt-project.png";

interface IProjectDetails {
  theme: string;
  index: string;
  title: string;
  description: string;
  status: string;
  titleId: string;
}

const renderDetails = ({
  theme,
  index,
  title,
  description,
  status,
}: IProjectDetails) => {
  return (
    <div className="project-detail">
      <div className="project-item-index">
        <div
          className={`divider-line ${
            theme === "light" ? "divider-line-light" : "divider-line-dark"
          } ${
            status !== "entered"
              ? "divider-line-collapsed"
              : "divider-line-uncollapsed"
          } divider-line-${theme}-before`}
        />
        <span
          className={`project-index-number ${
            status === "entered" ? "project-index-no-entered" : ""
          }`}
          style={
            theme === "light"
              ? {
                  color: "rgba(0, 0, 0, 1)",
                }
              : {
                  color: "rgba(0, 229, 255, 1)",
                }
          }
        >
          {index}
        </span>
      </div>
      <h2
        className={`project-title ${
          status === "entered" ? "project-title-entered" : ""
        }`}
        style={{
          color:
            theme === "light" ? "rgba(0, 0, 0, 1)" : "rgba(255, 255, 255, 1)",
        }}
      >
        {title}
      </h2>
      <p
        className={`project-description ${
          status === "entered" ? "project-desc-entered" : ""
        }`}
        style={
          theme === "light"
            ? {
                color: "rgba(0, 0, 0, 0.64)",
                fontWeight: 500,
              }
            : {
                color: "rgba(255, 255, 255, 0.8)",
                fontWeight: 300,
              }
        }
      >
        {description}
      </p>
    </div>
  );
};

interface IImagePreview {
  theme: string;
  status: string;
  imageType: string;
}

const renderPreview = ({ status, theme, imageType }: IImagePreview) => {
  return (
    <div className="preview-window">
      {imageType === "laptop" && (
        <div className="laptop-preview">
          <div
            className={`${status === "entered" && "project-lap-entered"}`}
            style={theme === "light" ? { zIndex: 1 } : {}}
          >
            <div className="transition-none opacity-100 laptop-div-image">
              <img
                className="img-props overflow-clip"
                src={dttProject}
                alt={""}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const Project = (props: any) => {
  const { theme } = useContext(ThemeContext);
  const {
    id,
    sectionRef,
    visible,
    index,
    title,
    description,
    alternate,
    imageType,
    ...rest
  } = props;
  const width = window.innerWidth;
  const isMobile = width <= 1024;
  const titleId = `${id}-title`;

  return (
    <section
      id={id}
      aria-labelledby={titleId}
      tabIndex={-1}
      ref={sectionRef}
      className="project-section"
      {...rest}
    >
      <div className="project-content">
        <Transition in={visible} timeout={0} onEnter={reflow}>
          {(status) => (
            <Fragment>
              {!alternate && !isMobile && (
                <Fragment>
                  {renderDetails({
                    theme,
                    index,
                    title,
                    description,
                    status,
                    titleId,
                  })}
                  {renderPreview({status, theme, imageType})}
                </Fragment>
              )}
              {(alternate || isMobile) && (
                <Fragment>
                  {renderDetails({
                    theme,
                    index,
                    title,
                    description,
                    status,
                    titleId,
                  })}
                  {/* {renderPreview({ theme, index, title, description, status })} */}
                </Fragment>
              )}
            </Fragment>
          )}
        </Transition>
      </div>
    </section>
  );
};

export default memo(Project);
