import Image from "next/image";
import Falcon from "../Images/1800.jpeg";

/**
 * next/image comes with Lazy loading
 * Auto scaling
 * ! Node server must be running
 */

export default function ImageRendering(props) {
    return (
        <div>
            <h1>Hello</h1>
            <Image
                src={
                    "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/303616431/1800"
                }
                width={1240}
                height={720}
                alt="hello"
            />
        </div>
    );
}
