import { UNCATEGORIZED_BUDGET_ID } from '../contexts/BudgetContext';
import { UNCATEGORIZED_BUDGET_ID, BudgetCard }  from './BudgetCard';

export default function UncategorizedBudgetCard(props){
    const { getBudgetExpenses } = useBudgets()
    const amount = getBudgetExpenses(UNCATEGORIZED_BUDGET_ID).reduce((total, expense) => total + expense.amount,0)
    return(
        <BudgetCard amount={amount} name="Uncategorized" gray {...props}/>

    )
}