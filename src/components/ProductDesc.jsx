import { useLocation, useParams } from "react-router-dom";

const ProductDesc = () => {
    const params = useParams();
    const location = useLocation();
    console.log(location);

    return (
        <div className="mt-10 text-5xl font-thin">
            {params.name.toLocaleUpperCase()}
        </div>
    );
};

export default ProductDesc;
