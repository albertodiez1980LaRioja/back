import { Model, DataTypes } from 'sequelize';
import { sequelize } from "../../database/database.js"; // Asegúrate de que la ruta sea correcta

// Declaramos la clase que hereda de Model
const FundamentalModel = sequelize.define('fundamentals', {
    symbol: { type: DataTypes.STRING(10), allowNull: false, primaryKey: true },
    date: { type: DataTypes.DATEONLY, allowNull: false, primaryKey: true },
    isYearly: { type: DataTypes.BOOLEAN, defaultValue: false, primaryKey: true },
    reportedCurrency: { type: DataTypes.STRING(10) },
    cik: { type: DataTypes.STRING(20) },
    filingDate: { type: DataTypes.DATEONLY },
    acceptedDate: { type: DataTypes.DATE },
    fiscalYear: { type: DataTypes.STRING(4) },
    period: { type: DataTypes.STRING(2) },
    revenue: { type: DataTypes.FLOAT },
    costOfRevenue: { type: DataTypes.FLOAT },
    grossProfit: { type: DataTypes.FLOAT },
    researchAndDevelopmentExpenses: { type: DataTypes.FLOAT },
    generalAndAdministrativeExpenses: { type: DataTypes.FLOAT },
    sellingAndMarketingExpenses: { type: DataTypes.FLOAT },
    sellingGeneralAndAdministrativeExpenses: { type: DataTypes.FLOAT },
    otherExpenses: { type: DataTypes.FLOAT },
    operatingExpenses: { type: DataTypes.FLOAT },
    costAndExpenses: { type: DataTypes.FLOAT },
    netInterestIncome: { type: DataTypes.FLOAT },
    interestIncome: { type: DataTypes.FLOAT },
    interestExpense: { type: DataTypes.FLOAT },
    depreciationAndAmortization: { type: DataTypes.FLOAT },
    ebitda: { type: DataTypes.FLOAT },
    ebit: { type: DataTypes.FLOAT },
    nonOperatingIncomeExcludingInterest: { type: DataTypes.FLOAT },
    operatingIncome: { type: DataTypes.FLOAT },
    totalOtherIncomeExpensesNet: { type: DataTypes.FLOAT },
    incomeBeforeTax: { type: DataTypes.FLOAT },
    incomeTaxExpense: { type: DataTypes.FLOAT },
    netIncomeFromContinuingOperations: { type: DataTypes.FLOAT },
    netIncomeFromDiscontinuedOperations: { type: DataTypes.FLOAT },
    otherAdjustmentsToNetIncome: { type: DataTypes.FLOAT },
    netIncome: { type: DataTypes.FLOAT },
    netIncomeDeductions: { type: DataTypes.FLOAT },
    bottomLineNetIncome: { type: DataTypes.FLOAT },
    eps: { type: DataTypes.FLOAT },
    epsDiluted: { type: DataTypes.FLOAT },
    weightedAverageShsOut: { type: DataTypes.FLOAT },
    weightedAverageShsOutDil: { type: DataTypes.FLOAT }
}, {
    timestamps: true,
});

FundamentalModel.asociate = function () {
    const enterprises = sequelize.model('enterprises');
    this.belongsTo(enterprises, { foreignKey: 'symbol' });
}

export default FundamentalModel;