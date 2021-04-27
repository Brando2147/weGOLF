module.exports = function (sequelize, DataTypes) {
  var Scores = sequelize.define(
    "Scores",
    {
      playerName: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      hole1: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      hole2: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      hole3: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      hole4: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      hole5: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      hole6: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      hole7: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      hole8: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      hole9: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      hole10: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      hole11: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      hole12: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      hole13: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      hole14: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      hole15: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      hole16: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      hole17: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      hole18: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      Total: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
    },
    {
      freezeTableName: true,
    }
  );
  Scores.associate = function (models) {
    Scores.belongsTo(models.Round, {
      foreignKey: {
        allowNull: false,
      },
      onDelete: "CASCADE",
    });
  };
  return Scores;
};
