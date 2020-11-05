import styled from 'styled-components';

const LinkStyle = styled.div`
    a:link {
      text-decoration: none;
    }

    a:visited {
      text-decoration: none;
    }

    a:hover {
      text-decoration: underline;
    }

    a:active {
      text-decoration: underline;
    }
`;

export { LinkStyle };