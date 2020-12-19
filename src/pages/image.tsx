import { GetServerSideProps } from "next";
import { Image } from "./../interfaces/image";

type Props = {
  url: Image;
};

const ImagePage = ({ url }: Props) => {
  return <div>{url}</div>;
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  return {
    props: {
      url: query.id,
    },
  };
};

export default ImagePage;
