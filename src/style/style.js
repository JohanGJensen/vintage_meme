export const styles = (theme) => ({
  "@global body": {
    background: theme.palette.background,
    color: theme.palette.text,
    overflow: "hidden",
  },
  editor: {
    position: "relative",
    display: "flex",
    "flex-wrap": "wrap",
    margin: "20px",
    height: window.innerHeight - 40,
  },
  sideMenu: {
    width: "40%",
    height: theme.sizing.editorBlockHeight,
  },
  video: {
    position: "relative",
    background: "#ffffff",
    display: "flex",
    "justify-content": "center",
    "align-items": "center",
    width: "60%",
    height: theme.sizing.editorBlockHeight,

    "& video": {
      "max-height": "100%",
      width: "100%",
      height: "auto",
    },
  },
  videoPlayerMenu: {
    display: "flex",
    width: "100%",
    height: "50px",
    background: theme.palette.secondary,
    position: "absolute",
    bottom: "0px",

    "& .button-set": {
      display: "flex",
      "justify-content": "center",
      "align-items": "center",
      width: "33%",
      height: "100%",
    },
  },
  timeline: {
    position: "absolute",
    bottom: "0px",
    background: theme.palette.secondary,
    width: "100%",
    height: theme.sizing.editorBlockHeight - 20,

    "& .tracks-container": {
      position: "relative",
      width: "98%",
      height: "300px",
      background: "#474646",
      margin: "0 auto",
      borderRadius: "15px",

      "& .tracks-container-header": {
        width: "100%",
        height: "30px",
        background: "#ffffff",
        borderRadius: "15px 15px 0 0",
      },
    },
  },

  trackContainer: {
    width: "100%",
    height: "40px",
    borderBottom: "solid 1px black",
  },
  track: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    backgroundColor: "#878787",
    cursor: "pointer",
  },
  trackText: {
    margin: "0",
    color: "#000000",
    userSelect: "none",
  },

  playerpin: {
    position: "absolute",
    top: "30px",
    width: "2px",
    height: "270px",
    background: "#FF0000",
    cursor: "pointer",

    "&:before": {
      position: "absolute",
      content: "''",
      top: "-5px",
      left: "-4px",
      background: "#FF0000",
      display: "inline-block",
      width: "10px",
      height: "10px",

      transform: "rotate(45deg)",
      "-webkit-transform": "rotate(45deg)",
    },
  },
});
