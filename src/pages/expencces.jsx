import CardC from "../component/Elements/CardC";
import MainLayout from "../component/Layouts/MainLayout";

const ExpenccesPage = () => {
  return (
    <MainLayout type="expencces">
      <h1 className="text-gray-500 text-2xl mb-4">Expencces Comparison</h1>
      <div className="grid grid-cols-1 sm:grid-cols-1 gap-6">
        <CardC desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, eos nisi praesentium magni in placeat dolores quo aperiam, tenetur corporis est vitae eveniet distinctio rem illum accusantium, repellendus consectetur sed!" />
      </div>
      <br />
      <h1 className="text-gray-500 text-2xl mb-4">Expencces Breakdown</h1>

      <div className="md:grid md:grid-cols-3 md:gap-x-6">
        <CardC />
        <CardC
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, eos nisi praesentium magni in placeat dolores quo aperiam, tenetur corporis est vitae eveniet distinctio rem illum accusantium, repellendus consectetur sed!"
        />
        <CardC />
      </div>
      <br />
      <div className="md:grid md:grid-cols-3 md:gap-x-6">
        <CardC />
        <CardC

        />
        <CardC
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, eos nisi praesentium magni in placeat dolores quo aperiam, tenetur corporis est vitae eveniet distinctio rem illum accusantium, repellendus consectetur sed!" />
      </div>
    </MainLayout>
  );
};

export default ExpenccesPage;
