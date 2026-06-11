import { Model, DataTypes } from 'sequelize';
import { sequelize } from "../../database/database.js"; // Asegúrate de que la ruta sea correcta

const PricesLastModel = sequelize.define('vw_prices_last_update', {
    symbol: { type: DataTypes.STRING(10), allowNull: false, primaryKey: true },
    close: { type: DataTypes.FLOAT },
    max: { type: DataTypes.DATE }
}, {
    timestamps: false,
    freezeTableName: true,
});

PricesLastModel.asociate = function () {

}

export default PricesLastModel;