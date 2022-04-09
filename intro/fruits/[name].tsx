import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";

// EXECUTE ON SERVER
// GetStaticProps runs on BUILD TIME, not at runtime
export const getStaticProps: GetStaticProps = async (context) => {
    return {
        props: {
            text: "hello",
        },
    };
};

// Must for Dynamic routing with getStaticProps
// if fallback false, it will through 404 error except paths mentioned in paths

// Build Start (if fallback false)
// localhost:3000/fruits/apple -> take the output -> store it on local
// localhost:3000/fruits/orange -> take the output -> store it on local
// localhost:3000/fruits/mango -> 404 error
// End

// Build Start (if fallback true)
// localhost:3000/fruits/apple -> take the output -> store it on local
// localhost:3000/fruits/orange -> take the output -> store it on local
// localhost:3000/fruits/mango -> call getStaticProps on SERVER -> render the page
// -> (in background) -> Next.js add this to path list and store it on filesystem for faster access

// if again visiting
// localhost:3000/fruits/mango -> send the output from filesystem

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [{ params: { name: "apple" } }, { params: { name: "orange" } }],
        fallback: true,
    };
};

export default function FruitName(props) {
    const router = useRouter();
    // console.log("Router", router);

    // If getStaticPaths fallback = true
    // Nextjs won't wait for getStaticProps to be excuted and return data
    // It will serve this html with props being empty and then wait for data

    // to handle this wait
    if (router.isFallback) {
        return <h1>Loading...</h1>;
    }

    return (
        <>
            <h3>Fruit Name: {router.query.name}</h3>
            <br></br>
            <button onClick={() => router.back()}>Back</button>
        </>
    );
}
