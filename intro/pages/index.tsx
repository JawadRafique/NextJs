import { GetServerSideProps } from "next";
import Link from "next/link";

// Called always on every page request. Even on PRODUCTION
// Can not use getStaticPorps and getServerSide Props together
// Use for realtime data
// Suggested to avoid it
export const getServerSideProps: GetServerSideProps = async (context) => {
    console.log(process.env.TEST);
    return {
        props: {
            myFacNum: 4,
        },
    };
};

// server(SSR) + Client (hydration)
export default function Home() {
    // console.log("process.env.TEST", process.env.TEST);
    console.log("NEXT_PUBLIC_TEST", process.env.NEXT_PUBLIC_TEST);
    return (
        <>
            <Link href="/dynamic" passHref={true}>
                <p>Go to Dynamic</p>
            </Link>
            <h3>Hello World {process.env.NEXT_PUBLIC_TEST}</h3>
        </>
    );
}
