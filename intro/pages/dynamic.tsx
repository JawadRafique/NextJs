import { GetStaticProps } from "next";

// EXECUTE ON SERVER
export const getStaticProps: GetStaticProps = async (context) => {
    return {
        props: {
            // revalidate: 10, // refetch after 10 sec
            text: "hello",
        },
    };
};

export default function Dynamic(props) {
    return <h3>dynamic Text - {props.text}</h3>;
}
