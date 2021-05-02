export const styles = (theme) => ({
  "@global body": {
    background: theme.palette.background,
    color: theme.palette.text,
  },
  App: {
    margin: "auto",
  },
  "title-primary": {
    color: theme.palette.primary,
    transition: "all 0.4s",
  },
  "title-secondary": {
    color: theme.palette.secondary,
    transition: "all 0.4s",
  },
  btn: {
    background: "none",
    border: "none",
    cursor: "pointer",
    "&:focus": {
      outline: "none",
    },
  },
  canvasStyle: {
    margin: "0 auto",
    position: "relative",
    overflow: "hidden",
    border: "0.5px solid" + theme.palette.primary,
    borderRadius: "8px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  inputBar: {
    border: "0",
    fontFamily: theme.palette.font,
    width: "100%",
    height: "30px",
    padding: "0 0 0 5px",
    borderRadius: "5px",
    "&:focus": {
      outline: "none",
      background: theme.palette.secondary,
      transition: "all 0.5s",
    },
  },
  label: {
    fontFamily: theme.palette.headline,
    color: theme.palette.primary,
    width: "100%",
  },
  "@media screen and (max-width: 800px)": {
    App: {
      margin: "auto",
      width: "95%",
    },
  },
});

// export const headerStyle = theme => ({
//   Header: {
//     width: "100%",
//     zIndex: "20",
//     background: "black",
//     "&  h1": {
//       margin: "0",
//       padding: "5px 0",
//       fontSize: "3rem",
//       textAlign: "center",
//       fontFamily: theme.palette.headline,
//       cursor: "pointer"
//     }
//   },
//   "title-primary": {
//     color: theme.palette.primary,
//     transition: "all 0.4s"
//   },
//   "title-secondary": {
//     color: theme.palette.secondary,
//     transition: "all 0.4s"
//   }
// });

// export const footerStyle = theme => ({
//   Footer: {
//     position: "fixed",
//     bottom: "0",
//     width: "100%",
//     height: "50px",
//     background: theme.palette.backgroundSecond
//   },
//   List: {
//     listStyle: "none",
//     display: "flex",
//     "& li": {
//       margin: "0 10px 0 0",
//       fontFamily: theme.palette.font,
//       "& a": {
//         fontFamily: theme.palette.headline,
//         color: theme.palette.secondary,
//         textDecoration: "none"
//       },
//       "& a:hover": {
//         color: theme.palette.text,
//         transition: "all 0.4s"
//       }
//     }
//   }
// });

// export const galleryStyle = theme => ({
//   galleryContainer: {
//     width: "100%",
//     height: "auto",
//     margin: "0 0 70px",
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center"
//   },
//   galleryImage: {
//     margin: "25px 0",
//     width: "600px",
//     height: "350px",
//     border: "1px solid " + theme.palette.secondary
//   }
// });

// export const colorPanel = theme => ({
//   colorContainer: {
//     width: "100%",
//     height: "auto",
//     margin: "20px 0",
//     display: "flex",
//     "& div": {
//       width: "40px",
//       height: "40px",
//       border: "2px solid black",
//       margin: "0 5px 0 0",
//       cursor: "pointer",
//       "&:hover": {
//         border: "2px solid white",
//         transition: "border 0.4s"
//       }
//     }
//   },
//   colorWhite: {
//     background: theme.palette.text
//   },
//   colorPrimary: {
//     background: theme.palette.primary
//   },
//   colorSecondary: {
//     background: theme.palette.secondary
//   },
//   colorBlack: {
//     background: theme.palette.tertiary
//   }
// });
