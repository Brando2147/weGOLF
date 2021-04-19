module.exports = function (sequelize, DataTypes) {
  var Scores = sequelize.define("Scores", {
    playerName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    holeOne: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    holeTwo: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    holeThree: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    holeFour: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    holeFive: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    holeSix: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    holeSeven: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    holeEight: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    holeNine: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    holeTen: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    holeEleven: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    holeTwelve: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    holeThirteen: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    holeFourteen: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    holeFifteen: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    holeSixteen: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    holeSeventeen: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    holeEighteen: {
      type: DataTypes.STRING,
      allowNull: false,
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
