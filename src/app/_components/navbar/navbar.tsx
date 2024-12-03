import { Menu } from "@/components/menu";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Navbar() {
    return (
        <>
            <div className="flex justify-between mx-4 my-4">
                {/* <button className="flex items-center p-2">
                    <FontAwesomeIcon icon={faBars} className="h-6 w-6 text-gray-500" />
                </button> */}
                <Menu/>
            </div>
        </>
    );
}