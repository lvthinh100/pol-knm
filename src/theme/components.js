import Signature from "../assets/font/BrothersideSignature.ttf";

const components = {
  MuiCssBaseline: {
    styleOverrides: `
      @font-face {
        font-family: 'Signature';
        font-style: normal;
        font-display: swap;
        font-weight: 400;
        src: url(${Signature}) format('opentype');
      }

      /* width */
      ::-webkit-scrollbar {
        width: 8px;
        border-radius: 10px;
      }

      /* Track */
      ::-webkit-scrollbar-track {
        background: transparent;
      }

      /* Handle */
      ::-webkit-scrollbar-thumb {
        background: #aaaaaa;
        border-radius: 10px;
      }

      /* Handle on hover */
      ::-webkit-scrollbar-thumb:hover {
        background: #555;
      }

      #root {
        overflow: hidden
      }
    `,
  },
};

export default components;
