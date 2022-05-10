import { createGlobalStyle } from "styled-components";
const GlobalStyles = createGlobalStyle`
*{
    padding:0;
    margin:0;
    box-sizing:border-box;
}
:root{
    --teal: #2F9D99;
    --baby-powder:#FDFFF7;
}
img{
    max-width:100%;
}
html{
    font-size: 15px;
    color:#272727;
    background-color:var(--baby-powder);
}
`;
export default GlobalStyles;
