@block
db.users.insert({"username": "K-tech19", "email": "Soapwash@bath.com", "timezone": "EST", "password": "fishfood", "avatar": "Avatar images"})
db.users.insert({"username": "BeachBum", "email": "Ricobello@gstar.com", "timezone": "EST", "password": "silverfish", "avatar": "Avatar images"})
db.users.insert({"username": "Sara3422", "email": "Dishsoap@sink.org", "timezone": "EST", "password": "snakepool", "avatar": "Avatar images"})
db.users.insert({"username": "LarryV", "email": "Bathwater@nasty.com", "timezone": "EST", "password": "jailbird", "avatar": "Avatar images"})

@block
db.tasks.insert({"title": "Do fish running", "taskNumber": 3, "taskBody": "EST", "isCompleted": false,"currentlyActive": true, "date": new Date()})
db.tasks.insert({"title": "Jog for 3 hours", "taskNumber": 4, "taskBody": "MST", "isCompleted": true,"currentlyActive": true, "date": new Date()})
db.tasks.insert({"title": "Swimming lesson", "taskNumber": 2, "taskBody": "EST", "isCompleted": false,"currentlyActive": false, "date": new Date()})
db.tasks.insert({"title": "Gaming with the boys", "taskNumber": 1, "taskBody": "PST", "isCompleted": true,"currentlyActive": true, "date": new Date()})

@block
db.comments.insert({"textBody": "Currently working on this issue now", "createdAt": new Date(), "createdBy": "Eric", "userId": 2})
db.comments.insert({"textBody": "In the process of finishing", "createdAt": new Date(), "createdBy": "Ray", "userId": 4})
db.comments.insert({"textBody": "Unavailable till tomorrow but I'll look at it then", "createdAt": new Date(), "createdBy": "Eric", "userId": 2})
db.comments.insert({"textBody": "Sent this to Adam for reference", "createdAt": new Date(), "createdBy": "Steven", "userId": 1})