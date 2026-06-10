import { Model, DataTypes } from 'sequelize';
import { sequelize } from "../../database/database.js"; // Asegúrate de que la ruta sea correcta

// Declaramos la clase que hereda de Model
const EnterpriseModel = sequelize.define('enterprises', {
    symbol: { type: DataTypes.STRING(10), allowNull: false, primaryKey: true },
    price: { type: DataTypes.DECIMAL(15, 2) },
    marketCap: { type: DataTypes.FLOAT },
    beta: { type: DataTypes.FLOAT },
    lastDividend: { type: DataTypes.DECIMAL(10, 4) },
    range: { type: DataTypes.STRING(50) },
    change: { type: DataTypes.DECIMAL(15, 5) },
    changePercentage: { type: DataTypes.DECIMAL(15, 5), },
    volume: { type: DataTypes.FLOAT },
    averageVolume: { type: DataTypes.FLOAT },
    companyName: {  type: DataTypes.STRING(255), allowNull: false },
    currency: { type: DataTypes.STRING(10) },
    cik: { type: DataTypes.STRING(20) },
    isin: { type: DataTypes.STRING(20) },
    cusip: { type: DataTypes.STRING(20) },
    exchangeFullName: { type: DataTypes.STRING(255) },
    exchange: { type: DataTypes.STRING(50) },
    industry: { type: DataTypes.STRING(255) },
    website: { type: DataTypes.STRING(500) },
    description: { type: DataTypes.TEXT },
    ceo: { type: DataTypes.STRING(255) },
    sector: { type: DataTypes.STRING(255) },
    country: { type: DataTypes.STRING(10) },
    fullTimeEmployees: { type: DataTypes.INTEGER },
    phone: { type: DataTypes.STRING(50) },
    address: { type: DataTypes.STRING(255) },
    city: { type: DataTypes.STRING(100) },
    state: { type: DataTypes.STRING(50) },
    zip: { type: DataTypes.STRING(20) },
    image: { type: DataTypes.STRING(500) },
    ipoDate: { type: DataTypes.DATEONLY },
    defaultImage: { type: DataTypes.BOOLEAN, defaultValue: false },
    isEtf: { type: DataTypes.BOOLEAN, defaultValue: false },
    isActivelyTrading: { type: DataTypes.BOOLEAN, defaultValue: true },
    isAdr: { type: DataTypes.BOOLEAN, defaultValue: false },
    isFund: { type: DataTypes.BOOLEAN, defaultValue: false }
}, {
    timestamps: true,
    indexes: [
        { fields: ['symbol'] },
        { fields: ['companyName'] },
        { fields: ['exchange'] },
        { fields: ['sector'] }
    ]
});

EnterpriseModel.asociate = function () {

}

export default EnterpriseModel;




