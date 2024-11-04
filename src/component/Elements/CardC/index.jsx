// const CardC = ({}) => {
//   return (
//     <div className="bg-white p-8 rounded-md shadow-lg transition-transform transform hover:scale-105 w-120 h-144">
//       Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, eos nisi praesentium magni in placeat dolores quo aperiam, tenetur corporis est vitae eveniet distinctio rem illum accusantium, repellendus consectetur sed!
//     </div>
//   );
// };

// export default CardC;

const CardC = (props) => {
    const { title = false, desc, variant } = props;
    return (
        <div className={`flex flex-col flex-1 mb-6 $(variant)`}>
            {title && <>{title.length == 1 ? <div className="hidden md:block md:text-lg md:text-gray-02 md:mb-4">{title}</div> : <div className="text-lg text-gray-02 mb-4">{title}</div>}</>}
            <div className="bg-white rounded-lg px-6 py-5 shadow-xl flex-1">{desc}</div>
        </div>
    );
};

export default CardC;