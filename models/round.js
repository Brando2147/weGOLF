module.exports = function (sequelize, DataTypes) {
    var Round = sequelize.define("Round", {
      ownerId: {
        type: DataTypes.STRING,
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
      isComplete: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        default: false
      }
    },
    {
      freezeTableName: true
    }
    );
    return Round;
  };
  