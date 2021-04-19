insert into user (email, firebaseID, firstName, lastname, city, state)
VALUES ("Jalexarroyo@gmail.com", "fdsgr3465g", "Joshua", "Arroyo", "Phoenix", "State");

insert into scores (holeOne, holeTwo, holeThree)
VALUES (4,2,3);

insert into courses (courseId, courseName, courseCity, courseState)
VALUES (3, "LoneTree", "Gilbert", "Arizona");

insert into report (UserId, CourseId, ScoreId)
VALUES (1,1,1);

insert into player (playerName)
VALUES ("Joshua");
insert into player (playerName)
VALUES ("Andrew")

SELECT firstName, lastName, holeOne, holeTwo, holeThree, courseName, courseCity, courseState
From user
INNER JOIN report
ON user.id = report.UserID
INNER JOIN scores
ON scores.id = report.ScoreId
INNER JOIN courses
ON courses.id = report.CourseId