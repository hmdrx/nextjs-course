import { useRouter } from "next/router";

const Detail = () => {

  const router = useRouter();
  const {newsId}= router.query;

    return <h1>something page: {newsId}</h1>;
  };
  
  export default Detail;
