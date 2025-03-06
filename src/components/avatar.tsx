import styled from "styled-components";

const Img = styled.img`
  border-radius: 50%;
  width: 48px;
  height: 48px;
  background-color: #d9d9d9;
`;

type AvatarProps = {
  src: string;
  alt?: string;
};

const Avatar = ({ src, alt }: AvatarProps) => {
  return <Img src={src} alt={alt} />;
};

export default Avatar;
