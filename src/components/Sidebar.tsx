import { Input } from "antd";
import { FaAngleDoubleRight, FaBars, FaSearch, FaTasks } from "react-icons/fa";

export default function Sidebar() {
    return (
        <>
            <div className="bg-gray-50 h-screen w-80 m-4! rounded-lg p-4!">
                <div className="flex justify-between items-center">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-600">Menu</h1>
                    </div>
                    <div>
                        <FaBars className="text-lg" />
                    </div>
                </div>
                <Input
                    className="bg-transparent! mt-4! h-10"
                    placeholder="Search"
                    prefix={<FaSearch className="text-gray-500" />}
                />
                <div className="mt-10! text-gray-600">
                    <div>
                        <small className="font-semibold ">TASKS</small>
                    </div>
                    <div className="p-3! flex justify-between items-center bg-gray-200 rounded-lg">
                        <div className="flex gap-5 items-center">
                            <FaAngleDoubleRight />
                            <div className="font-bold">
                                Upcomming
                            </div>
                        </div>
                        <div className=" bg-white rounded w-10! h-6! items-center flex justify-center font-semibold">
                            6
                        </div>
                    </div>
                    <div className="p-3! flex justify-between items-center">
                        <div className="flex gap-5 items-center">
                            <FaTasks />
                            <div className="font-bold">
                                Today
                            </div>
                        </div>
                        <div className=" bg-gray-200 rounded w-10! h-6! items-center flex justify-center font-semibold">
                            12
                        </div>
                    </div>
                </div>

            </div >
        </>

    )
}