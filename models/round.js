module.exports = function (sequelize, DataTypes) {
    var Round = sequelize.define("Round", {
      ownerId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      courseName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      courseCity: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      courseState: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      freezeTableName: true
    }
    );
    return Round;
  };
  