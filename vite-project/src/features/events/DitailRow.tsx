import type React from "react";

type Props = {
    label: string;
    value: string | number;
    icon?: React.ReactNode;
};

const DetailsRow = ({ label, value , icon }: Props) => {
    return (
        <div className="w-full flex lg:text-xl items-center justify-between border-b border-gray-300 p-2">
            <p className="flex items-center gap-2">
                        {icon && <span className="text-xl text-blue-500">{icon}</span>}

                {label} :</p>
            <p className="">{value} </p>
        </div>
    );
};

export default DetailsRow;