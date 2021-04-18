module.exports = function (sequelize, DataTypes) {
  var Report = sequelize.define(
    "Report",
    {
      createdAt: {
        type: DataTypes.DATE(3),
        defaultValue: sequelize.literal("CURRENT_TIMESTAMP(3)"),
        field: "created_at",
      },
      updatedAt: {
        type: DataTypes.DATE(3),
        defaultValue: sequelize.literal("CURRENT_TIMESTAMP(3)"),
        field: "updated_at",
      },
    },
    {
      freezeTableName: true,
    }
  );

  Report.associate = function (models) {
    Report.belongsTo(models.User, {
      foreignKey: {
        allowNull: false,
      },
    }),
      Report.belongsTo(models.Courses, {
        foreignKey: {
          allowNull: false,
        },
      }),
      Report.belongsTo(models.Scores, {
        foreignKey: {
          allowNull: false,
        },
        onDelete: "CASCADE",
      });
  };

  return Report;
};
