insert into scores (holeOne, holeTwo, holeThree)
VALUES (5,5,1);

insert into player (playerName, ScoreId)
VALUES ("Joshua", 2);

insert into user (email, firebaseID, firstName, lastname, city, state)
VALUES ("Jalexarroyo@gmail.com", "fdsgr3465g", "Joshua", "Arroyo", "Phoenix", "State");

insert into scores (holeOne, holeTwo, holeThree)
VALUES (4,2,3);

insert into courses (courseId, courseName, courseCity, courseState)
VALUES (3, "LoneTree", "Gilbert", "Arizona");

insert into report (UserId, CourseId, ScoreId)
VALUES (1,1,1);

insert into player (playerName, ScoreId)
VALUES ("Joshua", 1);
insert into player (playerName, ScoreId)
VALUES ("Andrew", 1)

SELECT firstName, lastName, holeOne, holeTwo, holeThree, courseName, courseCity, courseState
From user
INNER JOIN report
ON user.id = report.UserID
INNER JOIN scores
ON scores.id = report.ScoreId
INNER JOIN courses
ON courses.id = report.CourseId

SELECT playerName, holeOne, holeTwo, holeThree
FROM player
INNER JOIN scores
ON scores.id = player.ScoreId

SELECT playerName, holeOne, holeTwo holeThree, holeFour
FROM scores
INNER JOIN round
ON round.id = scores.RoundId
WHERE round.ownerId = 1 and round.id = 1

SELECT round.id
FROM round
INNER JOIN user
ON round.ownerId = user.Id;