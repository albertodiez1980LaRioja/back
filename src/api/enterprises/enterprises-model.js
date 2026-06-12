import { Model, DataTypes } from 'sequelize';
import { sequelize } from "../../database/database.js"; // Asegúrate de que la ruta sea correcta

// Declaramos la clase que hereda de Model
const EnterpriseModel = sequelize.define('enterprises', {
    symbol: { type: DataTypes.STRING, allowNull: false, primaryKey: true },
    shortName: { type: DataTypes.STRING, },
    longName: { type: DataTypes.STRING, },
    displayName: { type: DataTypes.STRING, },
    sector: { type: DataTypes.STRING, },
    industry: { type: DataTypes.STRING, },
    country: { type: DataTypes.STRING, },
    exchange: { type: DataTypes.STRING, },
    fullExchangeName: { type: DataTypes.STRING, },
    currency: { type: DataTypes.STRING, },
    quoteType: { type: DataTypes.STRING, },
    logoUrl: { type: DataTypes.STRING, },
    website: { type: DataTypes.STRING, },
    isActive: { type: DataTypes.BOOLEAN, defaultValue: true, },
}, {
    timestamps: true,
    indexes: [
        { fields: ['shortName'] },
        { fields: ['exchange'] },
        { fields: ['sector'] }
    ]
});

EnterpriseModel.asociate = function () {

}

export default EnterpriseModel;




