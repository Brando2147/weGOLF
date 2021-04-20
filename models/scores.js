module.exports = function (sequelize, DataTypes) {
  var Scores = sequelize.define("Scores", {
    playerName: {
      type: DataTypes.STRING,
      allowNull: true
    },
    holeOne: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    holeTwo: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    holeThree: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    holeFour: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    holeFive: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    holeSix: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    holeSeven: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    holeEight: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    holeNine: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    holeTen: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    holeEleven: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    holeTwelve: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    holeThirteen: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    holeFourteen: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    holeFifteen: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    holeSixteen: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    holeSeventeen: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    holeEighteen: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    freezeTableName: true
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
}
