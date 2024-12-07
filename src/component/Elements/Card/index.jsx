const Card = (props) => {
  const { title = false, desc, variant } = props;

  return (
    <div className={`flex flex-col flex-1 mb-4 ${variant}`}>
      {title && (
        <>
          {typeof title === "string" && title.length === 1 ? (
            <div className="hidden md:block text-base text-gray-02 mb-2">
              {title}
            </div>
          ) : (
            <div className="text-base text-gray-02 mb-3">{title}</div>
          )}
        </>
      )}
      <div className="bg-white rounded-lg px-4 py-4 shadow-md flex-1">
        {desc}
      </div>
    </div>
  );
};

export default Card;
