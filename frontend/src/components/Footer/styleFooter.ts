import styled from "styled-components";

export const FooterContainer = styled.footer`
  width: 100%;
  background-color: #f6f1e5;
  padding: 40px 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 30px;
  position: relative;
`;

export const Info = styled.div`
  max-width: 300px;

  h4 {
    margin-bottom: 10px;
    color: #7c4f1d;
    text-align: center;
  }

  p {
    margin-bottom: 8px;
    font-size: 0.95em;
    color: #333;
  }

  a {
    color: #e22727;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const Location = styled.div`
  max-width: 300px;

  h4 {
    margin-bottom: 10px;
    color: #7c4f1d;
    text-align: center;
  }

  iframe {
    border: none;
    width: 100%;
    height: 200px;
  }
`;

export const Social = styled.div`
  max-width: 300px;

  h4 {
    margin-bottom: 10px;
    color: #7c4f1d;
  }
`;

export const Icons = styled.div`
  display: flex;
  gap: 14px;
  align-items: center;
`;

export const SocialIcon = styled.img`
  width: 32px;
  height: 32px;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.1);
  }
`;

export const Divider = styled.hr`
  width: 100%;
  border: none;
  border-top: 1px solid #ccc;
  margin-top: 30px;
`;

export const Copy = styled.div`
  width: 100%;
  text-align: center;
  font-size: 0.9em;
  color: #555;
  margin-top: 10px;

  strong {
    color: #000;
  }
`;
