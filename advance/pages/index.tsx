import { GetStaticProps } from "next";

/**
 * Pages are build on build time instead of runtime
 * ! ON BUILD TIME -> STATIC HTML + JSON
 * * Example
 * We have 20 static routes, 35 dynamic routes (eCommerce store -> 35 products)
 * Instead of using getServerSideProps and fetching data everytime page reload
 * We can do Incremental/Lazily build pages/website
 *
 * ! Let say we have 35 million dynamic routes (products)
 * TODO: We can do
 * 35M dynamic routes (/store/[id]) -> ahead of time = 0 pages
 * visit: /store/1 -> getStaticProps (like getServerSideProps) -> store for other people
 * visit again: /store/1 -> served immediately as static page
 */

/**
 * Live: 100K req/sec -> getServerSideProps -> 100K request/sec to DB
 * Live: 100K req/sec -> getStaticProps (with 1sec revalidate) -> 1 request/sec to DB
 */

export const getStaticProps: GetStaticProps = () => {
    /**
     * * CAN PERFORM
     * db calls, network req without being CORS binded, require files with commonjs systax or dynamic import
     */
    return {
        props: {
            something: "Hello",
        },
        revalidate: 10, // It will at most generate only 1 page in 10 seconds
    };
};

export default function Home(props) {
    return <pre>{props.something}</pre>;
}
