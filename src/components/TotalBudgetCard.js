import { useBudgets } from '../contexts/BudgetContext';
import BudgetCard  from './BudgetCard';

export default function UncategorizedBudgetCard(){
    const { expenses, budgets } = useBudgets()
    const amount = expenses.reduce(
        (total,expense) => total + expense.amount, 0
    )
    const max = budgets.reduce(
        (total,expense) => total + budgets.max, 0
    )
    if(max === 0) return null
    return(
        <BudgetCard amount={amount} name="Total" gray max={max}/>

    )
}