import expensesBreakdowns from "../../../data/expense";
import Card from "../../Elements/Card";
import { Icon } from "../../Elements/Icon";

const CardExpenseBreakdown = () => {
    const expenseCard = expensesBreakdowns.map((expensesBreakdown) => (
        <div key={expensesBreakdown.id} className="flex pb-1 justify-between items-center">
            <div className="flex items-center">
                {/* Background ikon lebih besar untuk proporsi lebih baik */}
                <div className="bg-special-bg h-12 w-12 rounded-md flex items-center justify-center">
                    {/* Ukuran ikon disesuaikan */}
                    <div className="h-6 w-6">{expensesBreakdown.icon}</div>
                </div>
                <div className="ms-3">
                    <span className="text-gray-02 text-sm">{expensesBreakdown.category}</span>
                    <br />
                    <span className="font-bold text-base">${expensesBreakdown.amount}</span>
                    <div className="flex text-xs items-center gap-1">
                        <span className="text-gray-02">{expensesBreakdown.percentage}%*</span>
                        {expensesBreakdown.arrow}
                    </div>
                </div>
            </div>
            <div className="flex items-center me-3">
                <Icon.ArrowRight className="h-5 w-5" />
            </div>
        </div>
    ));

    return (
        <Card
            variant="md:col-span-2"
            title="Expenses Breakdown"
            desc={
                <div className="h-full grid grid-cols-1 gap-1 md:grid-cols-3 px-2 py-3"> {/* Reduced gap to gap-1 */}
                    {expenseCard}
                </div>
            }
        />
    );
};

export default CardExpenseBreakdown;
