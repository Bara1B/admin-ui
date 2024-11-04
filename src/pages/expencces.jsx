import CardC from "../component/Elements/CardC";
import CardD from "../component/Elements/CardD";
import MainLayout from "../component/Layouts/MainLayout";

const ExpenccesPage = () => {
  return (
    <MainLayout type="expencces">
      <h1 className="text-gray-500 text-2xl mb-4">Expenses Comparison</h1>

      <div className="mb-8 sm:flex sm:gap-6">
        <CardD />
      </div>

      <h1 className="text-gray-500 text-2xl mb-4">Expenses Breakdown</h1>

      <div className="mb-8 sm:flex sm:gap-6">
        <CardC cardTitle="Credit Card" cardType="Master Card" logoSrc="/images/mc.png" accountNumber="1234 5678 9012 8***" totalAmount="$25,000" />
        <CardC cardTitle="Checking" cardType="All Bank Ltd" logoSrc="/images/visa.png" accountNumber="693 456 69 9****" totalAmount="$25,000" />
        <CardC cardTitle="Savings" cardType="Brsc Bank Ltd" accountNumber="133 456 886 8***" totalAmount="$25,000" /> {/* logoSrc not passed */}
      </div>
      <div className="mb-8 sm:flex sm:gap-6">
        <CardC cardTitle="Credit Card" cardType="Master Card" logoSrc="/images/mc.png" accountNumber="1234 5678 9012 8***" totalAmount="$25,000" />
        <CardC cardTitle="Checking" cardType="All Bank Ltd" logoSrc="/images/visa.png" accountNumber="693 456 69 9****" totalAmount="$25,000" />
        <CardC cardTitle="Savings" cardType="Brsc Bank Ltd" accountNumber="133 456 886 8***" totalAmount="$25,000" /> {/* logoSrc not passed */}
      </div>

    </MainLayout>
  );
};

export default ExpenccesPage;
