module.exports = function (sequelize, DataTypes) {
  var Courses = sequelize.define("Courses", {
    courseId: {
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
  });
  return Courses;
};
