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
  },
});
