import dynamic from "next/dynamic";

const DynamicH1 = dynamic(() => import("./dynamich1"));

// const DynamicH1 = dynamic(() => import("./dynamich1")), {ssr: false}
//* SSR false will disable server side rendering, and work as Javascript behave
//* It is for complex file rendering which can not be handled on server
//* it will cause some delay on loading

// const DynamicH1 = dynamic(() => import("./dynamich1")), {ssr: false, loading: () => <h1>Loading....</h1>}
//* Fallback for loading

// * With Dynamic routes js only donwload when required
export default function Dynamic() {
    return (
        <div>
            <h3>Dynamic</h3>
            <DynamicH1 />
        </div>
    );
}
