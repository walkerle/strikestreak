puts "☠️ Deleting old data..."
User.destroy_all

# Seed Data
puts "🌱 Seeding data..."

puts "Seeding Users..."
User.create(username: "Charlie", email: "charlie@gmail.com", password: "1234")
User.create(username: "Mac", email: "mac@gmail.com", password: "1234")
User.create(username: "Dennis", email: "dennis@gmail.com", password: "1234")
User.create(username: "Dee", email: "dee@gmail.com", password: "1234")
User.create(username: "Frank", email: "frank@gmail.com", password: "1234")

puts "✅ Done seeding!"
