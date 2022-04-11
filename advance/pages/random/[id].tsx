import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";

/**
 * getStaticProps called everytime on DEV mode
 * PREVIEW MODE Enabled is same like getStaticProps but on PRODUCTION Mode
 */

export const getStaticProps: GetStaticProps = (context) => {
    return {
        revalidate: 10,
        props: { number: Math.random() },
    };
};

export const getStaticPaths: GetStaticPaths = () => {
    return {
        paths: [],
        fallback: "blocking",
    };
};

export default function RandomId(props) {
    return <pre>ID: {props.number}</pre>;
}
