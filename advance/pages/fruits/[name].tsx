import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";

export const getStaticProps: GetStaticProps = async (context) => {
    /**
     * * CAN PERFORM
     * db calls, network req without being CORS binded, require files with commonjs systax or dynamic import
     */

    const { params } = context;

    // * Fetching data
    // const dbData = await db.getData(params); -> return data

    // example returned data from db call
    const data = { id: 1 };
    return {
        props: {
            data: data,
        },
        revalidate: 10, // It will at most generate only 1 page in 10 seconds
    };
};

/**
 * TODO: Fallback Values
 * false -> will return 404 if params not available on params Array.
 * true -> will execute getStaticProps and also fallback true
 * blocking -> will hold the response until getStaticProps returns data -> Good for avoiding loading flashes
 */
export const getStaticPaths: GetStaticPaths = () => {
    return {
        paths: [
            { params: { name: "apple" } },
            { params: { name: "orange" } },
            { params: { name: "mango" } },
        ],
        fallback: true,
    };
};

export default function Name(props) {
    const router = useRouter();

    if (router.isFallback) {
        //* Right now nextjs is executing getStaticProps
        // <h3>Loading</h3>
    }

    // * When fallback become false and props return data this will execute

    return <pre>ID: {props.data.id}</pre>;
}
