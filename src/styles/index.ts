import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
    -webkit-font-smoothing: antialiased;
    font-size: 16px;
  }
  
  h1 {
    font-size: 1.6rem;
  }

  body {
    background: var(--background);
    color: var(--text);
  }

  button {
    cursor: pointer;
  }

  :root {
    --text: #FFFBFE;
    --background: #1C1B1F;
    --primary: #6750A4;
    --surface: #49454F;
  }
`;

export { GlobalStyles };
