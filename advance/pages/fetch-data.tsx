import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async (context) => {
    const data = (
        await fetch("https://google.com").then((t) => t.text())
    ).slice(0, 200);

    // if true return 404 page
    if (!data) {
        return { notFound: true };
    }
    return {
        props: {
            data: data,
        },
    };
};

export default function FetchData(props) {
    return <pre>{props.data}</pre>;
}
