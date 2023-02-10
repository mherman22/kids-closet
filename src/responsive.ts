import { css } from 'styled-components';

const mobile: any = (props: any) => {
  return css`
    @media only screen and (max-width: 380px) {
        ${props}
    }
  `;
};

export default mobile;
