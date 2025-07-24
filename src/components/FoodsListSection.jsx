const FoodsListSection = ({ data }) => {
  return (
    <div className="px-40 w-full">
      <div className=" flex items-center justify-between ">
        <div className="text-xl font-bold ">Whats in your mind?</div>
        <div>
          <button>👌</button>
          <button>👍</button>
        </div>
      </div>
      <div className="scroll-hide flex  overflow-x-auto   my-10">
        {data.map((food) => (
          <img
            className="h-50 w-40 p-2"
            src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/${food.imageId}`}
          ></img>
        ))}
      </div>
    </div>
  );
};

export default FoodsListSection;
