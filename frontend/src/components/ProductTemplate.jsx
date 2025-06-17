const ProductTemplate = ({ p }) => {
    return (
        <div className="w-[31%]">
            <img className="h-[40vh]" src={p.image} alt="" />
            <h1>{p.title}</h1>
        </div>
    );
};

export default ProductTemplate;
