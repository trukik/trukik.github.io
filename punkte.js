const points = [];

function fetchPoints() {
    fetch("http://94.250.204.111:81/", {mode: "no-cors"})
        .then(response => response.json())
        .then(data => {
            points[0] = data["Team Gr\u00FCn"]["MiniQuestPoints"];
            points[1] = data["Team Gr\u00FCn"]["ChallengePoints"];
            points[2] = data["Team Gr\u00FCn"]["WeeklyPoints"];
            points[3] = data["Team Rot"]["MiniQuestPoints"];
            points[4] = data["Team Rot"]["ChallengePoints"];
            points[5] = data["Team Rot"]["WeeklyPoints"];
            points[6] = data["Team Blau"]["MiniQuestPoints"];
            points[7] = data["Team Blau"]["ChallengePoints"];
            points[8] = data["Team Blau"]["WeeklyPoints"];
            points[9] = 154;
            points[10] = 205;
            points[11] = 200;
            console.log(points);
        });
}

fetchPoints();