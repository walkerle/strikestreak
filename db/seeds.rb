puts "☠️ Deleting old data..."
User.destroy_all
JoinFriend.destroy_all
OverallStat.destroy_all
GameSession.destroy_all
Game.destroy_all

# Seed Data
puts "🌱 Seeding data..."

puts "Seeding Users..."
User.create(username: "Walker", email: "walker@gmail.com", password: "1234")
User.create(username: "Austin", email: "austin@gmail.com", password: "1234")
User.create(username: "Ben", email: "ben@gmail.com", password: "1234")
User.create(username: "Caleigh", email: "caleigh@gmail.com", password: "1234")
User.create(username: "Colm", email: "colm@gmail.com", password: "1234") #5
User.create(username: "Ja'Vonn", email: "javonn@gmail.com", password: "1234")
User.create(username: "Jaz", email: "jaz@gmail.com", password: "1234")
User.create(username: "Jensen", email: "Jensen@gmail.com", password: "1234")
User.create(username: "Lantz", email: "lantz@gmail.com", password: "1234")
User.create(username: "Matt", email: "matt@gmail.com", password: "1234") #10
User.create(username: "Rebecca", email: "rebecca@gmail.com", password: "1234")
User.create(username: "Ryan", email: "ryan@gmail.com", password: "1234")
User.create(username: "Sam", email: "sam@gmail.com", password: "1234")
User.create(username: "Surapat", email: "Surapat@gmail.com", password: "1234")
User.create(username: "Topher", email: "topher@gmail.com", password: "1234") #15
User.create(username: "Charlie Kelly", email: "charlie@gmail.com", password: "1234")
User.create(username: "Ronald 'Mac' McDonald", email: "mac@gmail.com", password: "1234")
User.create(username: "Dennis Reynolds", email: "dennis@gmail.com", password: "1234")
User.create(username: "Dee Reynolds", email: "dee@gmail.com", password: "1234")
User.create(username: "Frank Reynolds", email: "frank@gmail.com", password: "1234") #20
User.create(username: "Andy Dwyer", email: "andy@gmail.com", password: "1234")
User.create(username: "Ann Perkins", email: "ann@gmail.com", password: "1234")
User.create(username: "April Ludgate", email: "april@gmail.com", password: "1234")
User.create(username: "Ben Wyatt", email: "ben2@gmail.com", password: "1234")
User.create(username: "Chris Traeger", email: "chris@gmail.com", password: "1234") #25
User.create(username: "Councilman Jamm", email: "jamm@gmail.com", password: "1234")
User.create(username: "Donna Meagle", email: "donna@gmail.com", password: "1234")
User.create(username: "Ethel Beavers", email: "ethel@gmail.com", password: "1234")
User.create(username: "Jean-Ralphio Saperstein", email: "jean@gmail.com", password: "1234")
User.create(username: "Jerry Gergich", email: "jerry@gmail.com", password: "1234") #30
User.create(username: "Leslie Knope", email: "leslie@gmail.com", password: "1234")
User.create(username: "Ron Swanson", email: "ron@gmail.com", password: "1234")
User.create(username: "Tom Haverford", email: "tom@gmail.com", password: "1234")

puts "Seeding JoinFriends..."
JoinFriend.create(friender_id: 1, friendee_id: 16)
JoinFriend.create(friender_id: 1, friendee_id: 17)
JoinFriend.create(friender_id: 1, friendee_id: 21)
JoinFriend.create(friender_id: 1, friendee_id: 23)
JoinFriend.create(friender_id: 1, friendee_id: 32) # Ron Swanson
JoinFriend.create(friender_id: 1, friendee_id: 33)
JoinFriend.create(friender_id: 2, friendee_id: 1)
JoinFriend.create(friender_id: 2, friendee_id: 3)
JoinFriend.create(friender_id: 3, friendee_id: 1)
JoinFriend.create(friender_id: 3, friendee_id: 4)
JoinFriend.create(friender_id: 4, friendee_id: 1)
JoinFriend.create(friender_id: 4, friendee_id: 2)
JoinFriend.create(friender_id: 4, friendee_id: 3)
JoinFriend.create(friender_id: 4, friendee_id: 5)
JoinFriend.create(friender_id: 5, friendee_id: 1)

puts "Seeding OverallStats..."
OverallStat.create(user_id: 1, total_games: 27, total_pinfall: 4848, average: 179, high_score: 246, low_score: 62, total_strikes: 120, total_spares: 71, total_open_frames: 79)
OverallStat.create(user_id: 2, total_games: 1, total_pinfall: 170, average: 170, high_score: 170, low_score: 170, total_strikes: 2, total_spares: 6, total_open_frames: 2)
OverallStat.create(user_id: 3, total_games: 0, total_pinfall: 0, average: 0, high_score: 0, low_score: 0, total_strikes: 0, total_spares: 0, total_open_frames: 0)
OverallStat.create(user_id: 4, total_games: 0, total_pinfall: 0, average: 0, high_score: 0, low_score: 0, total_strikes: 0, total_spares: 0, total_open_frames: 0)
OverallStat.create(user_id: 5, total_games: 0, total_pinfall: 0, average: 0, high_score: 0, low_score: 0, total_strikes: 0, total_spares: 0, total_open_frames: 0)
OverallStat.create(user_id: 6, total_games: 0, total_pinfall: 0, average: 0, high_score: 0, low_score: 0, total_strikes: 0, total_spares: 0, total_open_frames: 0)
OverallStat.create(user_id: 7, total_games: 0, total_pinfall: 0, average: 0, high_score: 0, low_score: 0, total_strikes: 0, total_spares: 0, total_open_frames: 0)
OverallStat.create(user_id: 8, total_games: 0, total_pinfall: 0, average: 0, high_score: 0, low_score: 0, total_strikes: 0, total_spares: 0, total_open_frames: 0)
OverallStat.create(user_id: 9, total_games: 0, total_pinfall: 0, average: 0, high_score: 0, low_score: 0, total_strikes: 0, total_spares: 0, total_open_frames: 0)
OverallStat.create(user_id: 10, total_games: 0, total_pinfall: 0, average: 0, high_score: 0, low_score: 0, total_strikes: 0, total_spares: 0, total_open_frames: 0)
OverallStat.create(user_id: 11, total_games: 0, total_pinfall: 0, average: 0, high_score: 0, low_score: 0, total_strikes: 0, total_spares: 0, total_open_frames: 0)
OverallStat.create(user_id: 12, total_games: 0, total_pinfall: 0, average: 0, high_score: 0, low_score: 0, total_strikes: 0, total_spares: 0, total_open_frames: 0)
OverallStat.create(user_id: 13, total_games: 0, total_pinfall: 0, average: 0, high_score: 0, low_score: 0, total_strikes: 0, total_spares: 0, total_open_frames: 0)
OverallStat.create(user_id: 14, total_games: 0, total_pinfall: 0, average: 0, high_score: 0, low_score: 0, total_strikes: 0, total_spares: 0, total_open_frames: 0)
OverallStat.create(user_id: 15, total_games: 0, total_pinfall: 0, average: 0, high_score: 0, low_score: 0, total_strikes: 0, total_spares: 0, total_open_frames: 0)
OverallStat.create(user_id: 16, total_games: 0, total_pinfall: 0, average: 0, high_score: 0, low_score: 0, total_strikes: 0, total_spares: 0, total_open_frames: 0)
OverallStat.create(user_id: 17, total_games: 0, total_pinfall: 0, average: 0, high_score: 0, low_score: 0, total_strikes: 0, total_spares: 0, total_open_frames: 0)
OverallStat.create(user_id: 18, total_games: 0, total_pinfall: 0, average: 0, high_score: 0, low_score: 0, total_strikes: 0, total_spares: 0, total_open_frames: 0)
OverallStat.create(user_id: 19, total_games: 0, total_pinfall: 0, average: 0, high_score: 0, low_score: 0, total_strikes: 0, total_spares: 0, total_open_frames: 0)
OverallStat.create(user_id: 20, total_games: 0, total_pinfall: 0, average: 0, high_score: 0, low_score: 0, total_strikes: 0, total_spares: 0, total_open_frames: 0)
OverallStat.create(user_id: 21, total_games: 0, total_pinfall: 0, average: 0, high_score: 0, low_score: 0, total_strikes: 0, total_spares: 0, total_open_frames: 0)
OverallStat.create(user_id: 22, total_games: 0, total_pinfall: 0, average: 0, high_score: 0, low_score: 0, total_strikes: 0, total_spares: 0, total_open_frames: 0)
OverallStat.create(user_id: 23, total_games: 0, total_pinfall: 0, average: 0, high_score: 0, low_score: 0, total_strikes: 0, total_spares: 0, total_open_frames: 0)
OverallStat.create(user_id: 24, total_games: 0, total_pinfall: 0, average: 0, high_score: 0, low_score: 0, total_strikes: 0, total_spares: 0, total_open_frames: 0)
OverallStat.create(user_id: 25, total_games: 0, total_pinfall: 0, average: 0, high_score: 0, low_score: 0, total_strikes: 0, total_spares: 0, total_open_frames: 0)
OverallStat.create(user_id: 26, total_games: 0, total_pinfall: 0, average: 0, high_score: 0, low_score: 0, total_strikes: 0, total_spares: 0, total_open_frames: 0)
OverallStat.create(user_id: 27, total_games: 0, total_pinfall: 0, average: 0, high_score: 0, low_score: 0, total_strikes: 0, total_spares: 0, total_open_frames: 0)
OverallStat.create(user_id: 28, total_games: 0, total_pinfall: 0, average: 0, high_score: 0, low_score: 0, total_strikes: 0, total_spares: 0, total_open_frames: 0)
OverallStat.create(user_id: 29, total_games: 0, total_pinfall: 0, average: 0, high_score: 0, low_score: 0, total_strikes: 0, total_spares: 0, total_open_frames: 0)
OverallStat.create(user_id: 30, total_games: 0, total_pinfall: 0, average: 0, high_score: 0, low_score: 0, total_strikes: 0, total_spares: 0, total_open_frames: 0)
OverallStat.create(user_id: 31, total_games: 0, total_pinfall: 0, average: 0, high_score: 0, low_score: 0, total_strikes: 0, total_spares: 0, total_open_frames: 0)
OverallStat.create(user_id: 32, total_games: 33, total_pinfall: 6518, average: 197, high_score: 254, low_score: 168, total_strikes: 153, total_spares: 88, total_open_frames: 89) # Ron Swanson
OverallStat.create(user_id: 33, total_games: 0, total_pinfall: 0, average: 0, high_score: 0, low_score: 0, total_strikes: 0, total_spares: 0, total_open_frames: 0)

puts "Seeding GameSessions..."
GameSession.create(overall_stat_id: 1, date: "03/22/2023", number_of_games: 6, pinfall: 918, average: 153, high_score: 198, low_score: 62, strikes: 19, spares: 12, open_frames: 29, notes: "Decent night, lanes were dry")
GameSession.create(overall_stat_id: 1, date: "03/11/2023", number_of_games: 4, pinfall: 696, average: 174, high_score: 222, low_score: 133, strikes: 16, spares: 9, open_frames: 15, notes: "Great practice session")
GameSession.create(overall_stat_id: 1, date: "03/04/2023", number_of_games: 7, pinfall: 1268, average: 181, high_score: 198, low_score: 159, strikes: 29, spares: 24, open_frames: 17, notes: "Solid session")
GameSession.create(overall_stat_id: 1, date: "03/01/2023", number_of_games: 5, pinfall: 988, average: 198, high_score: 246, low_score: 142, strikes: 30, spares: 9, open_frames: 11, notes: "Great session")
GameSession.create(overall_stat_id: 1, date: "02/20/2023", number_of_games: 5, pinfall: 978, average: 196, high_score: 223, low_score: 176, strikes: 26, spares: 17, open_frames: 7, notes: "Solid session")

GameSession.create(overall_stat_id: 2, date: "02/18/2023", number_of_games: 6, pinfall: 1088, average: 181, high_score: 203, low_score: 135, strikes: 2, spares: 6, open_frames: 2, notes: "No comment")
GameSession.create(overall_stat_id: 3, date: "02/10/2023", number_of_games: 3, pinfall: 573, average: 191, high_score: 211, low_score: 169, strikes: 0, spares: 0, open_frames: 0, notes: "No comment")
GameSession.create(overall_stat_id: 4, date: "01/26/2023", number_of_games: 3, pinfall: 597, average: 199, high_score: 214, low_score: 182, strikes: 0, spares: 0, open_frames: 0, notes: "No comment")
GameSession.create(overall_stat_id: 5, date: "01/20/2023", number_of_games: 4, pinfall: 746, average: 187, high_score: 225, low_score: 128, strikes: 0, spares: 0, open_frames: 0, notes: "No comment")

puts "Seeding Games..."
Game.create(game_session_id: 1, f1b1: 10, f1b2: 0, f2b1: 10, f2b2: 0, f3b1: 10, f3b2: 0, f4b1: 10, f4b2: 0, f5b1: 8, f5b2: 2, f6b1: 10, f6b2: 0, f7b1: 10, f7b2: 0, f8b1: 10, f8b2: 0, f9b1: 10, f9b2: 0, f10b1: 7, f10b2: 3, f10b3: 6, score: 251, notes: "Test game")
Game.create(game_session_id: 1, f1b1: 9, f1b2: 1, f2b1: 8, f2b2: 2, f3b1: 10, f3b2: 0, f4b1: 10, f4b2: 0, f5b1: 10, f5b2: 0, f6b1: 10, f6b2: 0, f7b1: 10, f7b2: 0, f8b1: 10, f8b2: 0, f9b1: 10, f9b2: 0, f10b1: 10, f10b2: 10, f10b3: 10, score: 278, notes: "Personal best!")
Game.create(game_session_id: 1, f1b1: 10, f1b2: 0, f2b1: 10, f2b2: 0, f3b1: 10, f3b2: 0, f4b1: 10, f4b2: 0, f5b1: 10, f5b2: 0, f6b1: 10, f6b2: 0, f7b1: 10, f7b2: 0, f8b1: 10, f8b2: 0, f9b1: 10, f9b2: 0, f10b1: 10, f10b2: 10, f10b3: 10, score: 300, notes: "Perfect game!")
Game.create(game_session_id: 1, f1b1: 5, f1b2: 5, f2b1: 10, f2b2: 0, f3b1: 10, f3b2: 0, f4b1: 9, f4b2: 1, f5b1: 5, f5b2: 3, f6b1: 6, f6b2: 3, f7b1: 9, f7b2: 1, f8b1: 10, f8b2: 0, f9b1: 9, f9b2: 0, f10b1: 10, f10b2: 9, f10b3: 1, score: 148, notes: "Spare, strike")
Game.create(game_session_id: 1, f1b1: 10, f1b2: 0, f2b1: 8, f2b2: 1, f3b1: 10, f3b2: 0, f4b1: 10, f4b2: 0, f5b1: 9, f5b2: 1, f6b1: 9, f6b2: 1, f7b1: 8, f7b2: 0, f8b1: 8, f8b2: 2, f9b1: 8, f9b2: 1, f10b1: 8, f10b2: 1, f10b3: 0, score: 180, notes: "Strike, open")
Game.create(game_session_id: 1, f1b1: 10, f1b2: 0, f2b1: 7, f2b2: 3, f3b1: 7, f3b2: 9, f4b1: 0, f4b2: 7, f5b1: 8, f5b2: 0, f6b1: 6, f6b2: 1, f7b1: 7, f7b2: 0, f8b1: 1, f8b2: 0, f9b1: 3, f9b2: 1, f10b1: 1, f10b2: 6, f10b3: 0, score: 62, notes: "Strike, spare")
Game.create(game_session_id: 1, f1b1: 10, f1b2: 0, f2b1: 10, f2b2: 0, f3b1: 6, f3b2: 0, f4b1: 9, f4b2: 0, f5b1: 10, f5b2: 0, f6b1: 7, f6b2: 1, f7b1: 10, f7b2: 0, f8b1: 10, f8b2: 0, f9b1: 8, f9b2: 1, f10b1: 8, f10b2: 2, f10b3: 9, score: 133, notes: "Strike, strike, open")
Game.create(game_session_id: 1, f1b1: 10, f1b2: 0, f2b1: 10, f2b2: 0, f3b1: 10, f3b2: 0, f4b1: 9, f4b2: 0, f5b1: 10, f5b2: 0, f6b1: 7, f6b2: 1, f7b1: 10, f7b2: 0, f8b1: 10, f8b2: 0, f9b1: 8, f9b2: 1, f10b1: 8, f10b2: 2, f10b3: 9, score: 133, notes: "Strike, strike strike")
Game.create(game_session_id: 2, f1b1: 10, f1b2: 0, f2b1: 10, f2b2: 0, f3b1: 10, f3b2: 0, f4b1: 9, f4b2: 0, f5b1: 10, f5b2: 0, f6b1: 7, f6b2: 1, f7b1: 10, f7b2: 0, f8b1: 10, f8b2: 0, f9b1: 8, f9b2: 1, f10b1: 8, f10b2: 2, f10b3: 9, score: 133, notes: "Strike, strike strike")
Game.create(game_session_id: 2, f1b1: 9, f1b2: 1, f2b1: 10, f2b2: 0, f3b1: 8, f3b2: 1, f4b1: 6, f4b2: 2, f5b1: 10, f5b2: 0, f6b1: 10, f6b2: 0, f7b1: 9, f7b2: 0, f8b1: 10, f8b2: 0, f9b1: 7, f9b2: 3, f10b1: 9, f10b2: 1, f10b3: 9, score: 171, notes: "Game 1")
Game.create(game_session_id: 2, f1b1: 10, f1b2: 0, f2b1: 8, f2b2: 1, f3b1: 9, f3b2: 1, f4b1: 9, f4b2: 1, f5b1: 9, f5b2: 0, f6b1: 9, f6b2: 1, f7b1: 9, f7b2: 1, f8b1: 10, f8b2: 0, f9b1: 6, f9b2: 4, f10b1: 8, f10b2: 2, f10b3: 8, score: 170, notes: "Game 2")
Game.create(game_session_id: 2, f1b1: 8, f1b2: 1, f2b1: 9, f2b2: 0, f3b1: 10, f3b2: 0, f4b1: 10, f4b2: 0, f5b1: 10, f5b2: 0, f6b1: 10, f6b2: 0, f7b1: 7, f7b2: 3, f8b1: 10, f8b2: 0, f9b1: 10, f9b2: 0, f10b1: 10, f10b2: 8, f10b3: 1, score: 222, notes: "Game 3")
Game.create(game_session_id: 3, f1b1: 10, f1b2: 0, f2b1: 8, f2b2: 1, f3b1: 9, f3b2: 1, f4b1: 9, f4b2: 1, f5b1: 9, f5b2: 0, f6b1: 9, f6b2: 1, f7b1: 9, f7b2: 1, f8b1: 10, f8b2: 0, f9b1: 6, f9b2: 4, f10b1: 8, f10b2: 2, f10b3: 8, score: 170, notes: "Good game")
Game.create(game_session_id: 3, f1b1: 5, f1b2: 5, f2b1: 5, f2b2: 5, f3b1: 5, f3b2: 5, f4b1: 5, f4b2: 5, f5b1: 5, f5b2: 5, f6b1: 5, f6b2: 5, f7b1: 5, f7b2: 5, f8b1: 5, f8b2: 5, f9b1: 5, f9b2: 5, f10b1: 5, f10b2: 5, f10b3: 5, score: 150, notes: "Average game")
Game.create(game_session_id: 4, f1b1: 5, f1b2: 5, f2b1: 5, f2b2: 5, f3b1: 5, f3b2: 5, f4b1: 5, f4b2: 5, f5b1: 5, f5b2: 5, f6b1: 5, f6b2: 5, f7b1: 5, f7b2: 5, f8b1: 5, f8b2: 5, f9b1: 5, f9b2: 5, f10b1: 5, f10b2: 5, f10b3: 5, score: 150, notes: "Average game")
Game.create(game_session_id: 5, f1b1: 5, f1b2: 5, f2b1: 5, f2b2: 5, f3b1: 5, f3b2: 5, f4b1: 5, f4b2: 5, f5b1: 5, f5b2: 5, f6b1: 5, f6b2: 5, f7b1: 5, f7b2: 5, f8b1: 5, f8b2: 5, f9b1: 5, f9b2: 5, f10b1: 5, f10b2: 5, f10b3: 5, score: 150, notes: "Average game")
Game.create(game_session_id: 6, f1b1: 10, f1b2: 0, f2b1: 8, f2b2: 1, f3b1: 9, f3b2: 1, f4b1: 9, f4b2: 1, f5b1: 9, f5b2: 0, f6b1: 9, f6b2: 1, f7b1: 9, f7b2: 1, f8b1: 10, f8b2: 0, f9b1: 6, f9b2: 4, f10b1: 8, f10b2: 2, f10b3: 8, score: 170, notes: "Good game")
Game.create(game_session_id: 7, f1b1: 10, f1b2: 0, f2b1: 8, f2b2: 1, f3b1: 9, f3b2: 1, f4b1: 9, f4b2: 1, f5b1: 9, f5b2: 0, f6b1: 9, f6b2: 1, f7b1: 9, f7b2: 1, f8b1: 10, f8b2: 0, f9b1: 6, f9b2: 4, f10b1: 8, f10b2: 2, f10b3: 8, score: 170, notes: "Good game")
Game.create(game_session_id: 7, f1b1: 5, f1b2: 5, f2b1: 5, f2b2: 5, f3b1: 5, f3b2: 5, f4b1: 5, f4b2: 5, f5b1: 5, f5b2: 5, f6b1: 5, f6b2: 5, f7b1: 5, f7b2: 5, f8b1: 5, f8b2: 5, f9b1: 5, f9b2: 5, f10b1: 5, f10b2: 5, f10b3: 5, score: 150, notes: "Average game")
Game.create(game_session_id: 8, f1b1: 10, f1b2: 0, f2b1: 8, f2b2: 1, f3b1: 9, f3b2: 1, f4b1: 9, f4b2: 1, f5b1: 9, f5b2: 0, f6b1: 9, f6b2: 1, f7b1: 9, f7b2: 1, f8b1: 10, f8b2: 0, f9b1: 6, f9b2: 4, f10b1: 8, f10b2: 2, f10b3: 8, score: 170, notes: "Good game")
Game.create(game_session_id: 8, f1b1: 5, f1b2: 5, f2b1: 5, f2b2: 5, f3b1: 5, f3b2: 5, f4b1: 5, f4b2: 5, f5b1: 5, f5b2: 5, f6b1: 5, f6b2: 5, f7b1: 5, f7b2: 5, f8b1: 5, f8b2: 5, f9b1: 5, f9b2: 5, f10b1: 5, f10b2: 5, f10b3: 5, score: 150, notes: "Average game")
Game.create(game_session_id: 9, f1b1: 10, f1b2: 0, f2b1: 8, f2b2: 1, f3b1: 9, f3b2: 1, f4b1: 9, f4b2: 1, f5b1: 9, f5b2: 0, f6b1: 9, f6b2: 1, f7b1: 9, f7b2: 1, f8b1: 10, f8b2: 0, f9b1: 6, f9b2: 4, f10b1: 8, f10b2: 2, f10b3: 8, score: 170, notes: "Good game")

puts "✅ Done seeding!"
