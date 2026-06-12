import { Model, DataTypes } from 'sequelize';
import { sequelize } from "../../database/database.js"; // Asegúrate de que la ruta sea correcta

// Declaramos la clase que hereda de Model
const PricesModel = sequelize.define('prices', {
    symbol: { type: DataTypes.STRING, allowNull: false, primaryKey: true },
    date: { type: DataTypes.DATEONLY, allowNull: false, primaryKey: true },
    high: { type: DataTypes.FLOAT, allowNull: false},
    volume: { type: DataTypes.BIGINT, allowNull: false},
    open: { type: DataTypes.FLOAT, allowNull: false},
    low: { type: DataTypes.FLOAT, allowNull: false},
    close: { type: DataTypes.FLOAT, allowNull: false},
    adjClose: { type: DataTypes.FLOAT, allowNull: false}
}, {
    timestamps: true,
});

PricesModel.asociate = function () {
    const enterprises = sequelize.model('enterprises');
    this.belongsTo(enterprises, { foreignKey: 'symbol' });
}

export default PricesModel;