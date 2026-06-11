import { Model, DataTypes } from 'sequelize';
import { sequelize } from "../../database/database.js"; // Asegúrate de que la ruta sea correcta

const FundamentalsLastModel = sequelize.define('vw_fundamentals_last_update', {
    symbol: { type: DataTypes.STRING(10), allowNull: false, primaryKey: true },
    isYearly: { type: DataTypes.BOOLEAN },
    max: { type: DataTypes.DATE }
}, {
    timestamps: false,
    freezeTableName: true,
});

FundamentalsLastModel.asociate = function () {

}

export default FundamentalsLastModel;